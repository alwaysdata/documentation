---
title: "Quatre ans plus tard, retour sur notre indépendance"
date: 2018-02-20
authors: ["Matthias Dugué"]
---

En 2013, nous avons décidé de [quitter les opérateurs chez qui nous sous-traitions](/fr/blog/2014-02-17-alwaysdata-becomes-independent/) la partie physique de notre hébergement pour prendre notre liberté. Plusieurs années après, armés du recul nécessaire, nous avons envie de partager notre expérience avec vous.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjA3OGxnYzk1d3R3M2ZmdmN6MzZ2ZW80bnIxMW5oOTI1dGE5cWRsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PlnQNcQ4RYOhG/giphy.gif)

## Au départ, une offre haute qualité, clefs en main

Si vous êtes client *alwaysdata*, vous connaissez déjà bien notre outil de gestion. Si ce n'est pas le cas, notre [offre mutualisée](https://www.alwaysdata.com/fr/offers/) vous permettra de découvrir nos services et notre interface.

Cet outil, que vous utilisez peut-être au quotidien, est une interface de gestion unique. Conçue par nos soins, elle vous permet en un seul endroit d'administrer domaines, sites et bases de données, boîtes email, accès distants, configurations, etc. Elle vous permet également de rester en relation avec nous via son système de tickets de support. Et ce parmi d'autres fonctionnalités.

![interface d'administration alwaysdata - page de status - capture d'écran [fr]](images/interface-dadministration-alwaysdata-page-de-status-capture-decran-fr.png)

Si nous avons fait le choix d'un développement sur-mesure pour nos outils, c'est parce que dès les débuts d'*alwaysdata* en 2006, nous ne parvenions pas à trouver une offre qui répondait à nos besoins en terme d'hébergement. Dix ans plus tard, nous ne regrettons pas ce choix, qui nous permet de vous proposer une solution fiable et pleinement adaptée à la souplesse et à la simplicité d'usage que nous vous promettons. Car c'est là notre force et ce qui nous différencie : nous ne sommes pas uniquement hébergeur, nous sommes également et principalement infogéreur. Lorsque vous disposez d'un compte chez *alwaysdata*, vous avez accès à une [large gamme de services disponibles](/fr/docs/admin-facturation/facturation/choisir-son-plan/) sur votre espace : interpréteurs, bases de données, *brokers*, emails, sauvegardes, etc., le tout dans un environnement supervisé, protégé, et mis à jour en permanence. Sans que vous ayez besoin de vous en soucier.

Cependant, même avec la meilleure volonté du monde, développer à la fois une structure logicielle qui serait notre cœur de métier, et une infrastructure matérielle à la hauteur de nos ambitions était un challenge trop important. Il a fallu faire certains choix, et trancher. En nous concentrant sur l'outil, nous allions devoir céder — du moins, pour un temps — la gestion matérielle à d'autres opérateurs.

Les premières années, nous nous sommes appuyés sur l'architecture d'*OVH*, avec quelques machines supplémentaires chez *Amazon EC2*, *Hertzner* et *Online*. Cette architecture, même si elle reposait sur des acteurs externes, nous a laissé le temps nécessaire à mûrir notre projet : interface de gestion, supervision, support, *alproxy*, gestionnaires de comptes, ordonnanceurs…

Il y a quatre ans, conscients que le chemin parcouru était conséquent, et lassés de devoir s'appuyer sur la qualité de service de nos prestataires — qui n'était pas toujours au rendez-vous et avait un impact direct sur nos clients — nous avons conclu qu'il était temps de devenir notre propre opérateur matériel et réseau.

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmprZnFjMzNybG9mYWRtc2FwZGducXpzZzY5ZDdheGgydWlvNzcwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xQQP4ahKiyuxHy/giphy.gif)

## Toujours sans compromis

C'est parce que nous étions victimes des défaillances de nos prestataires, et que vous en faisiez directement les frais que nous avons choisi d'opérer nous-mêmes la partie matérielle. Nous y avons mis toute l'exigence qui nous caractérise.

### Les premiers serveurs

Au départ, c'est quelques machines qu'il a fallu choisir, configurer, installer… c'est une tâche qui n'a pas été sans difficultés. Il nous a fallu descendre encore un peu plus bas dans la cale et prendre en charge le métier de l'hébergement, ses contraintes, ses fonctionnements. Malgré tout[^1], nous n'avons jamais connu de panne globale.

Nos choix sont ceux qui ont toujours primé à nos engagements :

- une **garantie de neutralité** : depuis les data centers où nous opérons — gérés par un opérateur neutre, [Equinix](http://www.equinix.com/) — aux opérateurs réseau — [IELO-LIAZO](http://www.ielo-liazo.com/), [Nerim](https://www.nerim.fr/), [Cogent](http://www.cogentco.com/), et [Interoute](http://www.interoute.com/) — nous vous garantissons l'indépendance dans nos opérations et le trafic de vos données. Dans le même esprit, nous sommes toujours adhérents au [RIPE](http://www.ripe.net/), ce qui nous assure notamment l'indépendance en tant qu'opérateur sur nos blocs IP.
- une **garantie de qualité** : nous utilisons des gammes de serveurs sur lesquels nous veillons à la qualité des configurations ; nos machines utilisent des SSD en production, de gamme *data center* ; toutes sont doublement alimentées par des circuits électriques distincts, et doublement connectées par des interfaces réseaux liées à des *switchs* de marques différentes. Nous avons trop souffert des pannes lors de nos années de sous-traitance[^2] pour ne pas prendre toutes les précautions. De fait, plus aucune panne majeure n'a été à déplorer depuis toutes ces années.

### La redondance, oui, mais à quel prix ?

On nous interroge régulièrement sur la redondance des données chez *alwaysdata*. Durant les premiers temps, nous avions fait le choix de dupliquer les données sur deux infrastructures distinctes. Il s'est rapidement avéré que cette solution était assez coûteuse en maintenance, et que l'indisponibilité massive des données liée à une défaillance du premier point était trop faible pour justifier ce coût. Nous en [parlions déjà en 2012](/fr/blog/2012-11-06-report-on-the-http4-outage-of-october-21st/#et-la-redondance).

Concrètement, notre objectif n'est pas d'avoir un RTO (Recovery Time Objective) égal à zéro, parce que les stratégies de redondance en temps réel que nous avons pu expérimenter jusqu'à présent faisaient (paradoxalement) baisser notre qualité de service à cause des bugs et instabilités d'architecture qu'elles introduisaient. Notre taux de disponibilité — avec des pannes rares, qui n'excèdent jamais quelques minutes — ne justifie pas la mise en œuvre de procédés techniques aussi complexes et faillibles.

Nous préférons nous concentrer sur le RPO (Recovery Point Objective) en nous assurant de la qualité de nos sauvegardes récupérables rapidement, et du *mirroring* local (RAID1) des données sur toutes les machines. En cas de nécessité, nous avons la possibilité de basculer les données du serveur hors-ligne sur une machine de *spare* dans la même baie pour garantir une reprise d'activité en moins de trente minutes, et nous permettre de remettre en route la machine originale sereinement.

Pas de redondance en temps réel donc, mais plutôt l'assurance de pouvoir vous fournir une qualité de continuité de service[^3] quel que soit le type d'incident auquel nous serions confrontés.

### Sauvegardes

Autre point important, celui de la pérennité de vos données. Nous garantissons des sauvegardes glissantes sur 30 jours, dans un second data center — chez un autre opérateur, [Online](https://www.online.net/fr/datacenter) — opérées sur nos propres machines également. Là encore, la garantie de qualité est essentielle pour nous. Cette bascule vers nos propres infrastructures nous a permis de passer de trois à quatre changements de disques par mois parce qu'ils rendaient l'âme, chez notre ancien prestataire, à deux depuis quatre ans[^4].

### Être autonomes, pour le meilleur

Cette autonomie nous permet de vous offrir un choix plus vaste dans les configurations que nous vous proposons, puisque nous ne sommes plus restreints par le choix de nos intermédiaires. Nous choisissons nos matériels et nos fournisseurs. Nous gérons les flux de commande ce qui nous permet d'éviter les retards. Nous avons du matériel prêt à déployer pour vous garantir une mise en service en quelques heures sur des configurations standard.

Notre autonomie vient également du fait d'être reconnus comme des opérateurs indépendants à part entière. En étant propriétaires de nos propres blocs d'IP, nous ne subissons plus les *blacklistings* qui pouvaient toucher nos prestataires. Il nous est aussi beaucoup plus simple de filtrer finement les accès et les ressources liés aux adresses.

Elle nous offre aussi un meilleur contrôle : le [déploiement systématique d'IPv6](/fr/blog/2018-02-01-ipv6-to-rule-them-all/) par exemple n'aurait pas été possible si nous n'avions pas eu la main sur notre infrastructure. Allégés de ce poids, nous sommes à nouveau en capacité de nous concentrer sur notre offre d'infogérance pour vous proposer, toujours à travers une solution unique, une offre à la fois d'hébergement et de gestion qui soit à la mesure de vos attentes.

## 2018, une offre entièrement interne

Lancée avec trois machines en 2013, c'est presque cinquante fois ce nombre de serveurs qui tournent aujourd'hui pour servir vos applications et sites web depuis les infrastructures *alwaysdata*. Cette migration aura pris du temps, et nous aura beaucoup appris, tant sur les compétences que sur vos propres besoins. Les derniers serveurs sont sortis de chez notre ancien prestataire désormais, nous sommes plus que jamais libres.

Libres de vous proposer, encore une fois, un hébergement infogéré qui réponde à vos problèmes. Nous avons coutume de dire que notre service est *conçu par des devs, pour des devs*. C'est plus que jamais cette volonté qui nous anime. Nous continuons de développer et de produire notre solution qui vous ressemble. Nous vous proposons toujours de nouvelles possibilités, tant sur le plan matériel que logiciel. Nous sommes à votre écoute. Sans vous, cette aventure n'existerait pas. Merci donc à vous aussi pour votre confiance dans notre capacité à changer la façon dont l'hébergement doit être pensé.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajVpMDE0ZWNuMXAwbjJodWRvbW44NjZkZWg4bGV0M2NpdjVsYWZhaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8KKRIP5ZHUo2k/giphy.gif)

Et comme nous ne sommes jamais à court d'idées, nous avons quelques projets sur le feu pour vous permettre d'aller encore plus loin. Plutôt que de vous les révéler, je vous propose un petit jeu en commentaires : quelles sont les technos, peut-être même improbables ou loufoques, matérielles ou logicielles, que vous imagineriez voir arriver prochainement chez *alwaysdata* ?

[^1]: à part un faux-départ au début, un dimanche, à une heure du matin, qui n'a même pas duré cinq minutes
[^2]: pour des motifs parfois aussi triviaux qu'un coup de chaleur
[^3]: sous peu, une nouvelle offre **gold** fera son arrivée chez *alwaysdata*, qui vous permettra notamment d'accéder à d'autres options de haute-disponibilité dont vous pourriez avoir besoin, incluant par exemple une redondance physique dans un second data center, et un taux de disponibilité de 99.95%
[^4]: et encore, sur ces derniers mois uniquement, avec des disques neufs qui devaient provenir d'un mauvais lot
