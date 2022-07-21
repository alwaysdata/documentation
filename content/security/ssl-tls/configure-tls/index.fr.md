+++
url = "/fr/sécurité/ssl-tls/configurer-tls/"
title = 'Configurer TLS'
layout = "howto"
hidden = true
tags = ["http", "sécurité", "site"]
+++

[TLS](https://fr.wikipedia.org/wiki/Transport_Layer_Security) est un protocole cryptographique de sécurisation des échanges sur internet.

Trois profils pour les connexions HTTP sont possibles :

- _Moderne_ : seulement TLS 1.3. Compatible avec les navigateurs les plus récents ;
- _Intermédiaire_ : les versions de TLS supérieures à la 1.2 sont activées ce qui permet d'être compatible avec la plupart des navigateurs ;
- _Ancien_ : toutes les versions de TLS sont activées ce qui permet d'être compatible avec les navigateurs les plus anciens.

{{% notice note %}}
Le profil _Intermédiaire_ est activé par défaut sur les serveurs d'alwaysdata.
{{% /notice %}}

Pour changer de profil TLS au niveau du compte il faut modifier le profil dans l'onglet **Web > Configuration > SSL** :
{{< fig "images/account-tls-configuration.fr.png" "Interface d'administration : configurer TLS au niveau compte" >}}

## Serveurs VPS et dédiés

Les propriétaires de serveurs VPS et dédiés peuvent configurer le profil TLS HTTP au niveau du _serveur_ dans l'onglet **SSL > Configuration** :
{{< fig "images/server-tls-configuration.fr.png" "Interface d'administration : configurer TLS au niveau serveur" >}}
