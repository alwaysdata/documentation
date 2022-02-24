+++
url = "/fr/guides/memcached/"
title = "Comment installer Memcached"
layout = "howto"
hidden = true
tags = ["cache", "http", "memcached", "site"]
+++

[Memcached](https://www.memcached.org/) est un moteur de cache orienté objet.

Voici un guide d'installation sur le Cloud Public.

{{% notice info %}}
*Memcached* peut être [installé au niveau serveur]({{< ref "databases/memcached">}}) pour les utilisateurs de Clouds privés.
{{% /notice %}}

Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh" >}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de Memcached : `$HOME/memcached/`
- Port : 8300 (les ports entre 8300 et 8499 peuvent être utilisés)

{{% notice note %}}
`[foo]` doit être remplacé par le nom de compte correct.
{{% /notice %}}

## Étape 1 : Installation

```sh
foo@ssh:~/memcached$ wget -O- http://memcached.org/latest| tar -xz --strip-components=1
foo@ssh:~/memcached$ ./configure && make
```

## Étape 2 : Lancement du service

Créez le [service]({{< ref "services" >}}) suivant :

- *Commande* : `./memcached -p 8300`
- *Répertoire de travail* : `/home/[foo]/memcached`

Plus d'options via `./$HOME/memcached/memcached -h`.

{{% notice warning %}}
Par défaut n'importe qui peut se connecter au Memcached ; il n'y a aucune sécurité. Une [authentification](https://github.com/memcached/memcached/wiki/SASLHowto) peut être mise en place.
{{% /notice %}}

Il restera ensuite la configuration de l'application qui pour se connecter à son Memcached devra utiliser `services-[foo].alwaysdata.net`.

- [Installer l'extension PHP]({{< ref "databases/memcached/php" >}})
