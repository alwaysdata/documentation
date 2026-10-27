---
title: Analyse postmortem de la gestion de la faille PHP2Shell chez alwaysdata
description: Retour sur la journée du 21 octobre lors de la publication de cette faille
date: 2026-10-26
authors: ["François Lesueur", "Cyril Baÿ"]
---

PHP2Shell est la combinaison de deux failles PHP [annoncées publiquement le 20 octobre 2026 à 20h15 UTC](https://www.php.net/archive/2026.php#2026-10-20-1). Le correctif, initialement annoncé le 21 octobre à 14h00 UTC, a finalement été publié une trentaine de minutes avant. Le déroulé général peut être lu sur la [page Wikipedia](https://fr.wikipedia.org/wiki/PHP2Shell).

Dans cet article, nous ne détaillons pas les détails des vulnérabilités ou des correctifs. Nous retraçons notre journée du 21 octobre en tant qu'hébergeur infogérant, de l'annonce publique au déploiement des correctifs.

Toutes les heures sont UTC, l'heure locale française valant UTC+2.

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGw2b3JqbWFic2MyczkxcGJxYjU1cGFwMW1xdGZqeTlnZ3ZwODNuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ot3leal6z3nFJrJ3iD/giphy.gif)


## Prise de conscience

Nous recevons de nombreux signaux de l'arrivée de ces failles et de leur importance, notamment par des listes de diffusion ou notre veille. Très vite, l'équipe sait qu'elle va se mobiliser sur ce sujet qui va prendre la priorité maximale.

À ce moment, très peu d'informations sont disponibles. La première source est l'annonce sur le site officiel de PHP, qui annonce la sévérité mais ne contient aucun détail. Quelques bribes d'information ayant fuité, quelques analyses indépendantes sont publiées, en particulier deux qui vont nous aider.

Nous savons que les correctifs réels ne seront publiés qu'en milieu d'après-midi, mais nous cherchons les contre-mesures qui nous feront gagner un peu de temps. Cloudflare [rapporte](https://x.com/dok2001/status/2112811965735202970) à ce moment que de premières attaques ont déjà eu lieu. Dès que les correctifs seront publiés, de nombreux attaquants vont les étudier pour les exploiter au plus vite, avant que les systèmes ne soient patchés. À l'heure des analyses par IA et étant donné le nombre de cibles potentielles (tous les sites en PHP), il n'est pas déraisonnable de penser qu'il ne faudra que quelques dizaines de minutes avant de voir des attaques beaucoup plus larges. Une contre-mesure temporaire, même impactante, se révèle donc vitale à ce moment. [AWS](https://aws.amazon.com/fr/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/) a depuis confirmé cela en signalant avoir détecté de premières activités dès le 17 octobre (uniquement sur des [pots de miel](https://fr.wikipedia.org/wiki/Honeypot)), une première accélération dès le matin du 21 (avec les premiers indices) puis une utilisation large dans les heures qui ont suivi la publication des correctifs.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3dqdnB1bno4dHd0anc4OXgwdWFsYmlqemx3aTlzaXY3bXFxb2VhOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3nmrZ76aKP1Je/giphy.gif)


## Premières précautions

La première analyse qui nous parvient est celle de [J4ck3LSyN](https://jackalsyn.com/posts/php-up-2026.html). La première précaution à prendre est de passer `session.upload_progress.enabled` à `Off`. L'impact est extrêmement limité (uniquement les barres de progression d'upload) et nous le déployons rapidement (8h02 UTC). Il est également fait mention de bloquer le `multipart`, ce que ne nous ne faisons pas encore à ce moment.

Une seconde analyse est celle de [Vincent Schmalbach](https://www.vincentschmalbach.com/cve-2026-109618-and-cve-2026-109619-what-you-should-do-now/). Avec cette analyse, cumulée avec notre veille qui revient beaucoup sur le `multipart` et le fait que le cœur des vulnérabilités soit dans la gestion du `multipart` dans le moteur PHP, il devient plus clair que bloquer le `multipart` est probablement nécessaire pour se protéger dans l'intervalle de temps.

Ce choix de bloquer (ou pas) le `multipart` est beaucoup plus difficile. Cela bloque les uploads pour les sites en PHP, mais également les simples formulaires. Cependant, les alternatives sont soit de courir le risque d'une compromission (qui nous paraît élevé, trop élevé), soit de couper les sites (ce qui est clairement pire). Nous avons vu que les entités à travers le monde ont choisi parmi ces trois possibilités, et un certain nombre de sites ont en effet été purement et simplement coupés par précaution. Pour notre part, nous décidons de bloquer le `multipart`, par un fichier `.htaccess` :
```
<If "req('Content-Type') =~ /multipart/i">
    Require all denied
</If>
```

La seconde question est de bloquer dès le matin ou d'attendre l'heure de la publication des correctifs. En effet, le risque sera maximal entre la publication des correctifs et le déploiement des versions mises à jour de notre côté. Nous avons décidé de bloquer dès le matin (8h33 UTC), cela a deux avantages. Tout d'abord, même si le risque ne sera maximal qu'après la publication des correctifs, il était probable que des attaquants cherchent déjà à partir des premiers indices et de premières exploitations pourraient arriver bien avant (ce qui a été confirmé depuis). Ensuite, la mesure étant impactante et ayant de nombreux clients européens, cela permet de gérer les problèmes côté support dans les heures ouvrables de ces clients.

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDM1MXQ4NmZlNTh6NnkyejFjYXk2cWwxOHVseHNuOXlkY2lwcmwwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z356CGNb47ECzIYAYO/giphy.gif)


## Le support

La matinée avançant, le support est de plus en plus sollicité. Tout d'abord par des clients inquiets de la publication de ces failles et qui demandent ce qu'ils doivent faire, ce que nous avons mis et allons mettre en place. Ensuite, par les clients impactés par le blocage du `multipart` et qui constatent donc des problèmes sur leurs sites ou sur notre webmail (qui est en PHP). L'interface d'administration générale n'est pas en PHP et fonctionne donc normalement durant toute la durée des opérations.

Une première étape est de publier un [suivi de l'opération](https://status.alwaysdata.com/operation/494/detail/) auquel nous pouvons référer les clients. L'équipe support est aussi renforcée, ce qui permet de répondre rapidement à chaque demande (un peu plus de 5 fois le volume habituel de messages sur la journée). Chaque ticket client reçoit une réponse personnalisée, globalement dans un délai inférieur à 10 minutes. Ces tickets sont ensuite suivis avec de nouvelles réponses si besoin.

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdrOW84bDY4MTZmbzB3ejhyZzB0ZWJ0MW5oejhsOGF4c2E5YjRrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UE9JPTe7LySli/giphy.gif)

Les clients n'ont rien eu à faire de leur côté pour se protéger, le blocage du `multipart` étant certes impactant mais a priori robuste. Notre priorité était d'éviter les piratages. Cependant, pour chaque client impacté négativement par ce blocage, nous avons proposé de les débloquer, en insistant bien sur les risques associés. Très peu ont demandé ce déblocage, et nous pouvions limiter les adresses IP débloquées.


## La résolution

Une trentaine de minutes avant l'heure annoncée (13h34 UTC), les versions corrigées ont été publiées par PHP. Les mises à jour de langages sont des opérations routinières pour nous mais, dans le cas présent, nous souhaitions corriger toutes les versions que nous proposons (et que les clients peuvent donc encore utiliser). Cela inclut les versions depuis PHP 4.4, alors que PHP ne corrigeait que depuis la version 8.2 (des corrections semi-officielles ont finalement été publiées pour la version 7.4).

Le travail de rétro-portage a alors démarré. En partant de la version 7.4, nous avons itérativement corrigé, appliqué et rejoué les tests, version par version. Nous avons finalement réussi à appliquer le correctif pour toutes les versions jusqu'à la 4.4, donc sur toutes nos versions. Il ne restait alors plus qu'à déployer toutes ces nouvelles versions.

Une fois les versions mises à jour et les derniers tests réalisés, nous avons pu lever le blocage sur les `multipart` et réactiver `session.upload_progress.enabled` pour tous en fin de journée (16h02 UTC). Les opérations sont revenues à la normale.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWlqejEwNjJiODF2cmtoMzduMzBzeHZsbDU4OXh6eGFnbWZjcnBpYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0EoBVexxvaP88SSQ/giphy.gif)


## Chronologie

* Annonce sur le site de PHP : 20/10 20h15 UTC
* Configuration de `session.upload_progress.enabled` : 21/10 8h02 UTC
* Blocage des requêtes `multipart` : 21/10 8h33 UTC
* Publication des patches par PHP : 21/10 13h34 UTC
* Toutes les versions patchées sont déployées, les restrictions sont levées : 21/10 16h02 UTC