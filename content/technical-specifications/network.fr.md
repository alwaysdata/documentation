+++
url = "/fr/caracteristiques-techniques/reseau/"
title = "Réseau"
tags = ["infrastructure", "sécurité"]
+++

## Firewall (pare-feu)

Les utilisateurs propriétaires de [Cloud Privés](/admin-billing/billing/private-cloud-prices) peuvent [paramétrer leur firewall](/technical-specifications/configure-firewall) directement dans leur interface d'administration, via le menu **Firewall** du serveur.

### Firewall entrant

Les utilisateurs ne peuvent pas écouter sur n'importe quel port, seuls ceux nécessaires sont ouverts.

### Firewall sortant

Tous les ports sont ouverts sans filtrage ; vous pouvez donc définir vos propres usages sans notre concours. Toute connexion est loguée et sera temporairement bloquée en cas d'abus.

## Prévention des intrusions

alwaysdata utilise [Fail2ban](http://www.fail2ban.org/) comme système de prévention d'intrusion sur tous ses serveurs. Celui-ci analyse les logs de connexion aux différents services et bloquera les IP pour une période de 10 minutes, après une cinquantaine de tentatives de connexion échouées dans un délai de 10 minutes.

Vous pouvez aussi mettre en place un [pare-feu applicatif](/web-hosting/sites/waf) directement dans votre compte pour protéger vos sites d'attaques malveillantes.

## DDoS

Une attaque [DDoS](https://fr.wikipedia.org/wiki/Attaque_par_d%C3%A9ni_de_service) vise à rendre indisponible un serveur, un service ou une infrastructure. Elle peut prendre différentes formes : saturation de la bande passante, épuisement des ressources système de la machine...

Tous les serveurs d'alwaysdata sont configurés avec une protection anti-DDoS de niveau 3/4 selon le [modèle OSI](https://fr.wikipedia.org/wiki/Mod%C3%A8le_OSI). À vous de gérer l'applicatif.

Les utilisateurs de Cloud Privé peuvent contacter le [support](https://admin.alwaysdata.com/support/add/) pour avoir de l'aide dans son installation ou qu'il intervienne.






