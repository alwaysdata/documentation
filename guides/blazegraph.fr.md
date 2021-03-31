+++
url = "/fr/guides/blazegraph/"
title = "Comment installer Blazegraph"
layout = "howto"
hidden = true
+++

[Blazegraph](https://blazegraph.com/) est un SGBD orientée graphe.


Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh" >}}) et considérons les informations suivantes :

- Nom de compte : `foo`
- Répertoire de Blazegraph : `$HOME/blazegraph/`


## Étape 1 : Téléchargement

```sh
foo@ssh:~/blazegraph$ wget https://github.com/blazegraph/database/releases/download/<blazegraph-last-version>/blazegraph.jar
```

Prenez la [dernière version disponible](https://github.com/blazegraph/database/releases).

## Étape 2 : Création du site

Dans **Web > Sites**, créez un site de type [Programme utilisateur]({{< ref "sites/user-program" >}}) avec pour **Commande** :

```
java -server -Xmx4g -Djetty.host=0.0.0.0 -Djetty.port=$PORT -jar $HOME/blazegraph/blazegraph.jar
```
