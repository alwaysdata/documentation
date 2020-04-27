+++
url = "/fr/api/utilisation/"
title = "Utilisation de l'API"
weight = 5
tags = ["api"]
+++

## Identification

```
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/account/
```
{{% notice warning %}}
Pour l'utilisation de votre clé API, n'oubliez pas les deux points (:) après celle-ci, ce qui permet de préciser que le mot de passe n'est pas nécessaire.
{{% /notice %}}

{{% notice info %}}
Une limite du mnombre de requêtes à l'API s'applique. Plus d'informations [ici](#rate-limit).
{{% /notice %}}

### Ressources liées

Si vous accédez à des ressources liées à un utilisateur ou un compte spécifique, vous devez le spécifier lors de votre authentification en spécifiant un ou plusieurs
paramètre(s) :

  * **account** : il s'agit du compte auquel vous désirez accéder. Si par exemple
vous avez plusieurs comptes mais souhaitez accéder à une ressource d'un compte précis.
  * **customer** : si vous disposez de certaines permissions sur un autre utilisateur,
  alors vous devez spécifier son adresse email.

Par exemple, accédez aux utilisateurs FTP de votre compte *mycompany* de cette manière :

```
$ curl --basic --user "APIKEY account=mycompany:" https://api.alwaysdata.com/v1/ftp/
```

## Format

Les formats gérés sont les suivants :

  * [JSON](https://www.json.org/) (par défaut)
  * [XML](https://fr.wikipedia.org/wiki/Extensible_Markup_Language)
  * [HTML](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language) (pour la réponse uniquement)

Il peut être spécifié dans l'URI :

```
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/account/?_format=xml
```

Ou via le header HTTP :

```
$ curl --basic --user APIKEY: --header 'Accept: application/xml' https://api.alwaysdata.com/v1/account/
```

## En-têtes HTTP

| En-tête HTTP           | Description                              | Valeur par défaut |
|------------------------|------------------------------------------|-------------------|
| alwaysdata-synchronous | Exécution des requêtes en mode synchrone | no                |

## Rate-limit

Une limite d'actions par minutes est mise en place sur ces interfaces :

- 10 requêtes par minutes
- 50 requêtes par minutes pour les connexions permanentes
- 250 requêtes par minutes pour les méthodes *safe* comme `GET`
