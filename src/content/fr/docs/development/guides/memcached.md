---
permalink: /fr/docs/developpement/guides/memcached/
title: Memcached
eleventyNavigation:
  key: Memcached
  parent: Guides
---

[Memcached](https://www.memcached.org/) est un moteur de cache orienté objet.

Voici un guide d'installation sur le Cloud Public.

> [!TIP] Astuce
> *Memcached* peut être [installé au niveau serveur](/fr/docs/hebergement-web/bases-de-donnees/memcached/) pour les utilisateurs du Cloud Privé.


Dans notre exemple, nous utilisons un [accès SSH](/fr/docs/hebergement-web/acces-distant/ssh/) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de Memcached : `$HOME/memcached/`
- Port : 8300 (les ports entre 8300 et 8499 peuvent être utilisés)

> [!NOTE]
> `[foo]` doit être remplacé par le nom de compte correct.


## Étape 1 : Installation

```sh
foo@ssh:~/memcached$ wget -O- http://memcached.org/latest| tar -xz --strip-components=1
foo@ssh:~/memcached$ ./configure && make
```

## Étape 2 : Lancement du service

Créez le [service](/fr/docs/hebergement-web/services/) suivant :

- *Commande* : `./memcached -p 8300`
- *Répertoire de travail* : `/home/[foo]/memcached`

Plus d'options via `$HOME/memcached/memcached -h`.

> [!WARNING] Attention
> Par défaut n'importe qui peut se connecter au Memcached ; il n'y a aucune sécurité. Une [authentification](https://github.com/memcached/memcached/wiki/SASLHowto) peut être mise en place.


Il restera ensuite la configuration de l'application qui pour se connecter au Memcached devra utiliser `services-[foo].alwaysdata.net` et le port `8300`.

- [Installer l'extension PHP](/fr/docs/hebergement-web/bases-de-donnees/memcached/php)
