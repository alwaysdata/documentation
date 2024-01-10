+++
url = "/fr/api/"
title = "API"
pre = "<i class='fas fa-fw fa-plug'></i> "
weight = 80
tags = ["api", "interface d'administration"]
+++

Une [API](https://fr.wikipedia.org/wiki/Interface_de_programmation) (pour Application
Programming Interface) est une interface de programmation permettant d'automatiser
la gestion de vos ressources.

Notre API [REST](https://fr.wikipedia.org/wiki/Representational_State_Transfer)
permet donc de piloter vos ressources alwaysdata (comptes, emails, bases de données,
etc.) depuis votre code.

{{% notice info %}}
L'API ne fonctionne pas si vous avez activé l'authentification 2 facteurs sur votre profil.
{{% /notice %}}

## Adresse

| Version | URL Racine          | Documentation                     |
|:--------|:--------------------|:----------------------------------|
| 1.0     | api.alwaysdata.com/v1 | https://api.alwaysdata.com/doc/ |

## Exemples rapides

```sh
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/mailbox/
```


### Redémarrer un site

```sh
$ curl -X POST --basic --user "APIKEY:" https://api.alwaysdata.com/v1/site/1234/restart/
```

`APIKEY` à remplacer par le token API et `1234` par l'ID du site.

## Tout savoir

- [Utilisation]({{< relref "api/usage" >}})
- [Exemples]({{< ref "examples" >}})
- [Ressources]({{< relref "api/resources" >}})
