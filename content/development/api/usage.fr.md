+++
url = "/fr/developpement/api/utilisation/"
title = "Utilisation de l'API"
tags = ["api"]
+++

## Identification

```sh
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/account/
```
Vos tokens sont disponibles dans le menu **[Profil](/admin-billing/profile/tokens)**.

{{% notice warning %}}
Pour l'utilisation de vos tokens, n'oubliez pas les deux points (:) après la clé, ce qui permet de préciser que le mot de passe n'est pas nécessaire.
{{% /notice %}}

{{% notice info %}}
Une limite du nombre de requêtes à l'API s'applique. Plus d'informations [ici](#rate-limit).
{{% /notice %}}

### Ressources liées

Si vous accédez à des ressources liées à un utilisateur ou un compte spécifique, vous devez le spécifier lors de votre authentification en utilisant un des paramètres suivants:

  * **account** : il s'agit du compte auquel vous désirez accéder. Si par exemple
vous avez plusieurs comptes mais souhaitez accéder à une ressource d'un compte précis.
  * **customer** : si vous disposez de certaines permissions sur un autre utilisateur,
  alors vous devez spécifier son adresse email.

Par exemple, accédez aux utilisateurs FTP de votre compte *mycompany* de cette manière :

```sh
$ curl --basic --user "APIKEY account=mycompany:" https://api.alwaysdata.com/v1/ftp/
```

## Format

Les formats gérés sont les suivants :

  * [JSON](https://www.json.org/) (par défaut)
  * [XML](https://fr.wikipedia.org/wiki/Extensible_Markup_Language)
  * [HTML](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language) (pour la réponse uniquement)

Il peut être spécifié dans l'URI :

```sh
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/account/?_format=xml
```

Ou via le header HTTP :

```sh
$ curl --basic --user APIKEY: --header 'Accept: application/xml' https://api.alwaysdata.com/v1/account/
```

## En-têtes HTTP

| En-tête HTTP           | Description                              | Valeur par défaut |
|------------------------|------------------------------------------|-------------------|
| alwaysdata-synchronous | Exécution des requêtes en mode synchrone | no                |

## Rate-limit

Une limite d'actions par minute est mise en place :

- 10 requêtes par minute
- 50 requêtes pour les connexions permanentes
- 250 requêtes pour les méthodes *safe* comme `GET`
