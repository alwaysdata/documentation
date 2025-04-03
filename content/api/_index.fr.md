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

## Adresse

| Version | URL Racine          | Documentation                     |
|:--------|:--------------------|:----------------------------------|
| 1.0     | api.alwaysdata.com/v1 | https://api.alwaysdata.com/doc/ |

## Exemples rapides

```sh
$ curl --basic --user "APIKEY account=foo:" https://api.alwaysdata.com/v1/mailbox/
```


### Redémarrer un site

```sh
$ curl -X POST --basic --user "APIKEY account=foo:" https://api.alwaysdata.com/v1/site/1234/restart/
```

`APIKEY` à remplacer par le token API, `foo` par le nom du compte concerné et `1234` par l'ID du site.

## Tout savoir

- [Utilisation](api/usage)
- [Exemples](examples)
- [Ressources](api/resources)
