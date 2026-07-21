---
title: "Retour sur la panne http4 du 21 octobre"
description: "Postmortem d'incident"
date: 2012-11-06
authors: ["Cyril Baÿ"]
---

Le dimanche 21 octobre, le serveur http4 a été indisponible de 1h02 à 10h17 (UTC+2). Cet article revient sur cette panne anormalement longue : ce qui s'est passé en détails, ce que nous allons faire pour que cela ne se reproduise plus, et une mise au point sur la redondance.

## Ce qui s'est passé

Samedi, à 16h51, le serveur http4 a été retrouvé totalement freezé. Nous l'avons redémarré, puis surveillé la situation — les logs n'apportaient aucune indication. Un freeze peut être causé par un problème matériel ou logiciel ; impossible à ce moment d'être certain de l'origine.

À 22h01, le problème s'est manifesté à nouveau. Les logs nous ont cette fois-ci permis d'identifier à coup sûr l'origine matérielle (carte mère en fin de vie). Nous avons donc programmé avec notre fournisseur le remplacement de la carte pour le début de la nuit, à 1h00.

À 1h02, le serveur est mis hors service pour procéder au remplacement de la carte mère. En temps normal, ce genre d'opération dure moins de 30 minutes.

Après le changement de la carte mère, le serveur refusait de démarrer. L'intégralité de la RAM a été changée, ce qui a résolu ce problème. Seconde anomalie, la carte réseau (Intel 10Gb) affichait en boucle :

```
ixgbe 0000:04:00.0: eth0: Reset adapter
ixgbe 0000:04:00.0: eth0: detected SFP+: 0
```

Le reste du système fonctionnait bien, le noyau se comportait normalement. Le technicien a donc essayé d'identifier la cause du problème et a notamment :

- vérifié le câblage ;
- vérifié la configuration du switch ;
- changé la carte réseau pour un modèle identique ;
- remis l'ancienne carte réseau ;
- remis l'ancienne carte mère ;
- remis la nouvelle carte mère ;
- mis à jour le BIOS de la carte mère ;
- mis à jour le firmware de la carte réseau.

Sans succès. Le technicien a ensuite décidé de monter en urgence un serveur neuf, à la configuration identique, et d'y insérer les disques de notre serveur. Sans que cela ne résolve le problème.

Il faut ajouter une précision importante : seul notre propre noyau Linux (celui que nous compilons et maintenons, avec notre propre configuration) présentait le bug. Le noyau standard de notre fournisseur, lui, fonctionnait correctement, ce qui semble exclure un problème matériel/câblage. Néanmoins, notre noyau fonctionnait parfaitement jusqu'à présent sur ce serveur... ce qui rend la panne d'autant plus mystérieuse.

Enfin, un technicien senior a, peu avant 10h, pu récupérer un modèle de carte réseau très légèrement différent (toujours une Intel 10Gb) : cela a finalement résolu le problème.

## Diminuer les risques à l'avenir

Le problème d'origine — la carte réseau qui subitement refuse de fonctionner — reste mystérieux et non élucidé. Ce peut être dû à un bug particulièrement capricieux du driver noyau, par exemple. Il est impossible de se prémunir contre ce genre d'anomalie, heureusement exceptionnellement rare.

C'est néanmoins la première fois, en 6 ans, que nous sommes confrontés à une panne sur un serveur d'une telle ampleur. Nous pouvons en tirer plusieurs conclusions.

### Privilégier les serveurs des gammes les plus courantes

Notre fournisseur (OVH, en l'occurrence), propose des serveurs de différentes gammes. Le serveur http4, datant de début 2010, fait partie de la plus haute gamme, avec davantage encore de protections que les serveurs plus classiques (par exemple, ils disposent d'une double alimentation ou de connexions réseau 10 Gb/s).

D'expérience (nous avons des serveurs de toutes les gammes), nous constatons que :

- la fiabilité matérielle théoriquement supérieure des serveurs haut de gamme n'est pas significativement différente de celles des autres gammes ;
- le parc de serveurs haut de gamme de notre fournisseur est bien plus limité que celui des autres serveurs. En conséquence, et d'après notre expérience subjective et limitée :
    - ces serveurs semblent davantage susceptibles d'être victimes de certains types de bugs « rares » (matériel, routage) : plus il y a d'utilisateurs d'un équipement X, plus vite les éventuels bugs seront détectés et corrigés ;
    - les techniciens (de niveau 1) étant moins fréquemment confrontés à ces serveurs, ils ont globalement moins d'expérience dessus. Expérience précieuse en cas de problème urgent ;
    - les chances d'avoir un serveur de remplacement déjà prêt à l'emploi sont plus faibles.

En faisant le bilan, nous constatons que la fiabilité des serveurs haut de gamme aura plutôt tendance à être inférieure à celle des autres gammes, paradoxalement. Nous allons donc cesser progressivement d'utiliser ces serveurs (en mutualisé, http4 et http6 sont concernés).

*Si http4 avait été sur un serveur de gamme standard, il est possible que le bug mystique de la carte réseau aurait déjà été découvert et résolu avant qu'il ne nous impacte. Par ailleurs, des serveurs de secours auraient probablement été disponibles plus rapidement.*

### S'assurer que nos serveurs peuvent démarrer avec le noyau de notre fournisseur

Notre fournisseur permet d'utiliser leur propre noyau Linux précompilé. Nous ne les utilisons pas pour de nombreuses raisons, notamment l'impossibilité d'en choisir la version, d'appliquer des patches ou de modifier la configuration.

S'il n'est donc pas question de nous mettre à utiliser les noyaux standards de notre fournisseur (à cause des limitations indiquées), il serait souhaitable qu'en cas d'urgence, il soit au moins possible de booter nos serveurs avec. Ne serait-ce que pour aider au débogage.

Concrètement, les modifications à apporter à la configuration de nos serveurs est minime.

*Si nous avions pu démarrer http4 sur le noyau de notre fournisseur, le serveur aurait été à nouveau accessible bien plus rapidement. Quitte à ce que certaines fonctionnalités non essentielles soient désactivées.*

### Permettre d'accéder rapidement aux données en mode rescue
En cas de problème, il est possible de démarrer les serveurs dans un mode rescue (boot via TFTP/NFS). Les disques durs ne sont alors pas du tout utilisés par le système, ce qui garantit théoriquement que ce mode rescue est accessible même en cas de problème de configuration.

Nous allons désormais disposer de notre propre serveur de secours (*spare*). En cas de problème matériel ou logiciel grave qui ne peut être résolu rapidement, nous aurons alors la possibilité de démarrer le serveur en question en rescue, puis d'exporter sa partition de données vers le serveur de secours. Ce dernier prendra alors le relai du serveur en panne, lequel pourra être débogué calmement ensuite. Nous avons simulé cette bascule ces derniers jours, avec succès.

### Des techniciens de niveau 2, 24h/24

À l'heure actuelle, des techniciens de niveau 2 ne sont pas systématiquement présents chaque nuit. En l'occurrence, la panne est arrivée un dimanche, les techniciens de niveau 2 n'arrivaient pas avant 10h. Notre fournisseur nous a indiqué travailler sur ce point et procéder actuellement à de nombreux recrutements pour atteindre l'objectif d'avoir des techniciens de niveau 2, 24h/24.

## Et la redondance ?

Nos serveurs étaient jusqu'à peu redondés en Irlande, utilisant la technologie [DRBD](http://www.drbd.org/). Cette redondance en temps réel, mise en place dès le début d'alwaysdata, avait pour but de pallier les pannes graves (matérielles, réseau) qui pourraient s'éterniser en basculant vers le datacenter de secours. Pourquoi ce basculement n'a pas été fait ?

Après plusieurs années équipés de cette redondance, nous avons progressivement commencé à la désactiver sur certains serveurs. Les raisons sont les suivantes :

- la stabilité n'est pas suffisante. DRBD a trop souvent été la source de blocages/plantages sur le serveur primaire, et ce malgré les mises à jour fréquentes. Il suffit de regarder le [changelog](http://git.drbd.org/?p=drbd-8.4.git;a=blob;f=ChangeLog;hb=HEAD) pour constater que chaque nouvelle version corrige des bugs assez graves. Nous utilisons DRBD dans un mode WAN qui n'est pas le plus fréquent, ce qui pourrait expliquer la relative instabilité ;
- nous n'avions jamais eu, en 6 ans, de panne exceptionnelle justifiant de basculer vers le datacenter de secours (la panne de http4 est la toute première). C'est une bonne nouvelle : cela signifie que la stabilité de notre fournisseur principal est très bonne ;
- la redondance a un coût :
    - (assez faible) sur les performances IO des serveurs,
    - (non négligeable) sur la complexité de notre architecture,
    - (faible) financier ;
- moins on a l'occasion d'effectuer en situations réelles la bascule vers le datacenter secondaire, plus on court de risques que tout ne se passe pas parfaitement le jour où on doit le faire - malgré les simulations.

Le bilan est donc sans appel : la redondance ne nous a jamais servi, mais a causé à plusieurs reprises des pannes. C'est indiscutablement un paradoxe : la redondance a diminué la disponibilité moyenne.

On peut toutefois se demander pourquoi ne pas avoir activé la redondance lors de pannes de plus petite ampleur (>= 30 minutes) :

- les pannes de petite ampleur d'origine matérielle ou réseau (les seules susceptibles d'être éliminées par un basculement) sont tout d'abord très rares. Sur les 64 pannes référencées depuis que nous avons notre [page d'état des services](https://status.alwaysdata.com), seules 3 ont duré plus de 30 minutes et auraient pu être éligibles à un basculement vers le serveur secondaire ;
- le basculement n'est pas instantané : le serveur secondaire doit prendre le relai, et surtout les DNS doivent être mis à jour. En pratique, sur du HTTP, il faut environ 30 minutes pour que la grande majorité des nouvelles connexions soient effectuées sur la nouvelle IP ;
- conséquence du point précédent : le basculement peut être contre-productif. Si on décide le basculement après 30 minutes de panne, mais que cette dernière est résolue 5 minutes après, on va devoir rebasculer vers le serveur primaire. Au final, il aurait mieux fallu ne rien faire. Or la plupart des pannes qui durent plus de 30 minutes durent moins de 60 minutes ;
- le basculement présente des risques de split-brain si on ne peut pas s'assurer que la machine primaire est hors service. Cela rend la bascule assez risquée lors d'une panne de réseau, notamment.

Au final, même si la panne de http4 aurait justifié de basculer (panne longue, serveur hors service), nous ne remettons pas en cause notre décision d'arrêter la redondance.

Une erreur toutefois : nous aurions dû annoncer publiquement l'arrêt de cette redondance, fut-elle partielle (certains serveurs ont encore la redondance d'activée à l'heure actuelle). C'est désormais chose faite.

### D'autres formes de redondance à l'avenir ?

Si nous arrêtons aujourd'hui la redondance via DRBD, il est possible que nous nous dirigions à l'avenir vers d'autres formes de redondance — par exemple une réplication des bases de données ou une synchronisation systématique des systèmes de fichiers. Le but ne serait toutefois pas uniquement d'améliorer la disponibilité mais d'offrir d'autres avantages, par exemple en termes de performances.

Précisons que la suppression de la redondance en temps réel n'a strictement aucun lien avec les sauvegardes, toujours effectuées quotidiennement et conservées pendant 30 jours.

## En conclusion

Nous présentons toutes nos excuses à nos clients pour cette panne exceptionnelle. Ceux qui ont été impactés peuvent ouvrir un ticket en demandant le remboursement intégral du mois d'octobre, comme nos [conditions générales de vente](https://www.alwaysdata.com/fr/mentions-legales/) le stipulent.

Rappelons notre attachement à fournir le meilleur taux de disponibilité possible, même sur un environnement mutualisé. C'est un challenge quotidien, compte tenu de la grande souplesse que nous offrons (e.g. ouvrir un compte sans payer, pouvoir faire tourner n'importe quel processus sur son compte).

Promettre qu'il n'y aura plus jamais de grosse panne serait illusoire : personne ne peut garantir cela. Ce que nous promettons, c'est une transparence totale, [durant l'incident](https://status.alwaysdata.com/operation/64/detail/) et après, avec des mesures concrètes pour éviter que cela ne se reproduise. Et des réponses à vos questions, si vous en avez.
