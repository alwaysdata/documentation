+++
url = "/fr/sécurité/ssl-tls/configurer-tls/"
title = 'Configurer TLS'
layout = "howto"
hidden = true
tags = ["http", "sécurité", "site"]
+++

[TLS](https://fr.wikipedia.org/wiki/Transport_Layer_Security) est un protocole cryptographique de sécurisation des échanges sur internet.

2 profils pour les connexions HTTP sont possibles :

- _Intermédiaire_ : les versions de TLS supérieures à la 1.2 sont activées ce qui permet d'être compatible avec la plupart des navigateurs ;
- _Ancien_ : toutes les versions de TLS sont activées ce qui permet d'être compatible avec les navigateurs les plus anciens.

{{% notice note %}}
Le profil _Ancien_ est activé par défaut sur les serveurs [v2017]({{< ref "accounts/version" >}}) d'alwaysdata. Sur les serveurs [v2020]({{< ref "accounts/version" >}}), c'est le profil _Intermédiaire_.
{{% /notice %}}

Pour changer de profil TLS au niveau du compte il faut

- modifier le profil dans l'onglet **Web > Configuration > SSL** :
{{< fig "images/account-tls-configuration.fr.png" "Interface d'administration : configurer TLS au niveau compte" >}}
- souscrire à une IP dédiée dans l'onglet **Avancé > Adresses IP** et y associer vos adresses HTTP en cliquant sur le bouton *Configurer* à la droite de l'adresse dans le formulaire de modification du site (dans **Web > Sites**).

## Serveurs VPS et dédiés

Les propriétaires de serveurs VPS et dédiés peuvent configurer le profil TLS HTTP au niveau du _serveur_ dans l'onglet **SSL > Configuration** :
{{< fig "images/server-tls-configuration.fr.png" "Interface d'administration : configurer TLS au niveau serveur" >}}
