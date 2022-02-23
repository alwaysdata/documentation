+++
url = "/fr/sécurité/réseau"
title = "Réseau"
weight = 30
layout = "man"
tags = ["infrastructure", "sécurité"]
+++

## Pare-feu

Les utilisateurs propriétaires de serveurs VPS et dédiés peuvent [paramétrer leur pare-feu]({{< relref "configure-firewall" >}}) directement dans leur interface d'administration, via le menu **Firewall** du serveur.

### Pare-feu entrant

Les utilisateurs ne peuvent pas écouter sur n'importe quel port, seuls ceux nécessaires sont ouverts.

### Pare-feu sortant

Tous les ports sont ouverts sans filtrage ; vous pouvez donc définir vos propres usages sans notre concours. Toute connexion est loguée et sera temporairement bloquée en cas d'abus.

## Prévention des intrusions

alwaysdata utilise [Fail2ban](http://www.fail2ban.org/) comme système de prévention d'intrusion sur tous ses serveurs. Celui-ci analyse les logs de connexion aux différents services et va bloquer les IP durant 30 minutes après qu'elles aient fait une dizaine de tentatives de connexion échouées.

Vous pouvez aussi mettre en place un [pare-feu applicatif]({{< ref "sites/waf" >}}) directement dans votre compte pour protéger vos sites d'attaques malveillantes.

## DDoS

Une attaque [DDoS](https://fr.wikipedia.org/wiki/Attaque_par_d%C3%A9ni_de_service) vise à rendre indisponible un serveur, un service ou une infrastructure. Elle peut prendre différentes formes : saturation de la bande passante, épuisement des ressources système de la machine...

Tous les serveurs d'alwaysdata sont configurés avec une protection anti-DDoS de niveau 3/4 selon le [modèle OSI](https://fr.wikipedia.org/wiki/Mod%C3%A8le_OSI). À vous de gérer l'applicatif.

Les utilisateurs VPS et dédiés peuvent contacter le [support](https://admin.alwaysdata.com/support/add/) pour avoir de l'aide dans son installation ou qu'il intervienne.






