+++
url = "/fr/guides/memcached/"
title = "Comment installer Memcached"
layout = "howto"
hidden = true
tags = ["cache", "http", "memcached", "site"]
+++

[Memcached](https://www.memcached.org/) est un moteur de [cache HTTP]({{< ref "sites/http-cache" >}}) orienté objet.

Voici un guide d'installation sur le Cloud public. Il peut être [installé au niveau serveur]({{< ref "databases/memcached">}}) pour les serveurs Catalyst.

Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh" >}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de Memcached : `$HOME/memcached/`

{{% notice note %}}
[foo] et [port] doivent être remplacés par les correctes informations.
{{% /notice %}}

## Étape 1 : Téléchargement de l'agent

```sh
foo@ssh:~/memcached$ wget -O- http://memcached.org/latest| tar -xz --strip-components=1
foo@ssh:~/memcached$ ./configure && make && make test && make install .
```

## Étape 2 : Lancement du serveur

Créez le [service]({{< ref "services" >}}) suivant :

- *Commande* : `./memcached -p=[port] -l="::"`
- *Répertoire de travail* : `/home/[foo]/memcached`

Plus d'options via `./$HOME/memcached/memcached -h`.

## Étape 3 : Installation du client

### PHP

Installez l'[extension PECL Memcache](https://pecl.php.net/package/memcache) avec :

```sh
foo@ssh:~/memcached$ ad_install_pecl memcache
```  

Puis ajoutez-la au `php.ini` dans le menu **Environment** de votre [interface d'administration](https://admin.alwaysdata.com) alwaysdata.

```ini
extension = /home/[foo]/memcached/memcache.so
```

[Comment ajouter des extensions PHP]({{< ref "languages/php/extensions" >}})

### Python

Nous utiliserons [Pymemcache](https://github.com/pinterest/pymemcache) mais il existe d'autres clients.

```sh
foo@ssh:~$ pip install pymemcache
```

### Ruby

Cela installe [Dalli](https://github.com/petergoldstein/dalli) mais il y a d'autres clients.

```sh
foo@ssh:~$ gem install dalli
```

### Node.js

Nous installons ici [MemJS](https://github.com/memcachier/memjs) mais il y en a d'autres.

```sh
foo@ssh:~$ npm install memjs
```
