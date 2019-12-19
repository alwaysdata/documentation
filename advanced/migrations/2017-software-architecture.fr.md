+++
url = "/fr/avancé/migrations/architecture-logicielle-2017/"
title = "Architecture Logicielle 2017"
menuTitle = "Architecture Logicielle 2017"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

Cette migration regroupe de nombreuses modifications ayant pour objectifs principaux :

* la mise à jour globale des logiciels préinstallés ;
* la simplification de certains points de notre infrastructure logicielle.

Pour les plus anciens comptes mutualisés, cette migration inclut également la migration vers notre propre infrastructure matérielle.

Ce document décrit les incompatibilités principales introduites par cette migration. Nous nous efforçons d'être le plus complet possible, mais il est impossible d'être absolument exhaustif. Nous vous invitons vivement à procéder à un test de la migration pour détecter un maximum d'incompatibilités.

Ce document ne décrit pas les nouvelles fonctionnalités apportées par l'infrastructure logicielle 2017, ceci ayant été fait dans un [article de blog](https://blog.alwaysdata.com/2017/01/24/python-3-6-ruby-2-4-and-others/) dédié.


## Généralités

* Vous devez impérativement utiliser le nouveau format des noms d'hôte d'accès aux services [introduit en 2015](https://blog.alwaysdata.com/2015/03/05/change-of-hostname-for-access-to-our-services/). Vous trouverez les adresses à utiliser dans l'administration alwaysdata, dans chaque section concernée. Les anciens formats, utilisant le domaine `alwaysdata.com` (par exemple, `mysql.alwaysdata.com` ou `postgresql1.alwaysdata.com`), ou un point entre le nom du service et celui du compte (par exemple `mysql.compte.alwaysdata.net`) cesseront totalement de fonctionner. 

* Plusieurs fichiers et répertoires situés dans chaque compte sont déplacés ou supprimés. Notamment :
    * les 4 fichiers par défaut (`php5.fcgi`, `php5.ini`, `php4.fcgi`, `php4.ini`) du répertoire `$HOME/cgi-bin` sont supprimés, et le répertoire également s'il est désormais vide ;
    * les différents fichiers de configuration internes (`$HOME/.env.*`, `$HOME/admin/apache`) sont déplacés dans un répertoire `$HOME/admin/config` ;
    * les répertoires `$HOME/admin/ssl`, `$HOME/admin/session` et `$HOME/admin/log/awstats` sont supprimés ;
    * les logs sont désormais stockés dans le répertoire `$HOME/admin/logs`, avec un sous-répertoire par type (`http`, `apache`, etc.). L'ancien répertoire de logs (`$HOME/admin/log`) est déplacé dans `$HOME/admin/logs/old`.


## Langages

### PHP

* Les extensions de fichiers `.php4` et `.php5` ne sont plus supportées, seuls les fichiers `.php` sont interprétés par PHP par défaut. Vous pouvez néanmoins retrouver l'ancien comportement en créant un fichier `.htaccess` à la racine de votre compte. Par exemple, pour que les fichiers `.php5` soient interprétés par PHP, il devra contenir :

```
AddHandler fcgid-script .php5
FCGIWrapper /usr/bin/php-cgi .php5
```

* Il n'est plus possible de faire tourner PHP 4 et PHP 5 en même temps sur le même compte. PHP 4 est désormais simplement considéré comme étant une version de PHP comme une autre, sans aucune spécificité.

* Les versions 5.5.0, 5.5.1 et 5.5.6 sont remplacées par la 5.5.19.

* Le seul binaire PHP disponible est `php`. N'utilisez plus, par exemple, `php-cgi`.

* Les extensions non standard (APC, Xapian, Xdebug et Mapscript pour PHP 5.3 et 5.2 et Fileinfo en 5.2) sont supprimées. Vous pourrez toutefois les [installer vous-même]({{< ref "languages/php/extensions" >}}) dans votre propre compte.

* Symfony n'est plus préinstallé, vous devrez [manuellement l'installer]({{< ref "languages/php/packages" >}}).

* Les extensions `calendar` et `intl` ne sont désormais plus automatiquement activées, il faudra les charger explicitement dans votre `php.ini` si nécessaire.

* Certaines options mineures de compilation ont été modifiées.

* Les directives internes Apache qui configurent PHP (en FastCGI) ont été modifiées. Cela n'a d'importance que si vous y faisiez référence explicitement, par exemple si vous avez un site de type *Apache personnalisé* et que vous aviez copié-collé les directives de la configuration interne Apache. Nous vous suggérons de remplacer vos sites *Apache personnalisé* par des sites *Apache standard* et de mettre vos propres directives dans le champ *Directives supplémentaires du virtual host* (dans *Configuration avancée*) ou dans un fichier `.htaccess`.


### Python

* Le seul binaire Python disponible est `python`. N'utilisez plus, par exemple, `python2.6`. Vous devrez notamment penser à remplacer vos shebangs (première ligne d'un script, par exemple `#!/usr/bin/python`) s'ils n'utilisent pas déjà `python`.

* Les quelques bibliothèques auparavant préinstallées par défaut sont supprimées, y compris Django. Vous devez donc [manuellement installer]({{< ref "languages/python/configuration" >}}#environnement) toutes les bibliothèques dont vous aurez besoin.

* Les applications de type *WSGI* sont désormais servies par [uWSGI](http://uwsgi-docs.readthedocs.io/en/latest/) et non plus [mod_wsgi](https://modwsgi.readthedocs.io/en/develop/). Dans la grande majorité des cas cela ne changera rien pour vous. Si vous aviez compilé votre propre mod_wsgi avec un site de type *Apache personnalisé*, il continuera à fonctionner.

* La version 2.5.5 est remplacée par la 2.5.6, la 2.6.6 par la 2.6.9 et la 3.1 par la 3.3.6.


### Ruby

* Le seul binaire Ruby disponible est `ruby`. N'utilisez plus, par exemple, `ruby1.8`. Vous devrez notamment penser à remplacer vos shebangs (première ligne d'un script, par exemple `#!/usr/bin/ruby`) s'ils n'utilisent pas déjà `ruby`.

* Les quelques bibliothèques auparavant préinstallées par défaut sont supprimées, y compris Ruby on Rails. Vous devez donc [manuellement installer]({{< ref "languages/ruby/configuration" >}}#environnement) toutes les bibliothèques dont vous aurez besoin.

* Les applications de type *Ruby Rack* ou *Ruby on Rails* sont désormais servies par [uWSGI](http://uwsgi-docs.readthedocs.io/en/latest/) et non plus [Passenger](https://www.phusionpassenger.com). Dans la grande majorité des cas cela ne changera rien pour vous. Si vous aviez compilé votre propre Passenger avec un site de type *Apache personnalisé*, il continuera à fonctionner.

* Les versions 1.8.6 et 1.8.7 sont remplacées par la 1.8.7-p374 et la 1.9.2 par la 1.9.2-p320.


## Bases de données

### MySQL

Nous remplaçons MySQL par MariaDB 10.1, qui est parfaitement compatible avec MySQL. MariaDB 10.1 correspond à MySQL 5.6, voire 5.7. Pour plus de détails sur la compatibilité :
https://mariadb.com/kb/en/mariadb/mariadb-vs-mysql-compatibility/

### PostgreSQL

Nous mettons à jour PostgreSQL en version 9.6 :
https://www.postgresql.org/docs/9.6/static/release.html

Nous mettons également à jour PostGIS en 2.3 :
http://postgis.net/docs/manual-2.3/PostGIS_Special_Functions_Index.html#NewFunctions

### MongoDB

Nous mettons à jour MongoDB en version 3.2 :
https://docs.mongodb.com/manual/release-notes/

Attention : le mécanisme d'authentification change. Les utilisateurs ayant tous les droits ont le rôle `readWrite`, les utilisateurs n'ayant que les permissions de lecture seule ont le rôle `read`.

### CouchDB

Nous mettons à jour CouchDB en version 1.6 :
http://docs.couchdb.org/en/1.6.0/whatsnew/

## Divers

### Apache

* [Apache](https://httpd.apache.org) est mis à jour en version 2.2.32 :
http://www.apache.org/dist/httpd/CHANGES_2.2

* Les fichiers `index.htm`, `index.cgi`, `index.pl` et `index.xhtml` ne sont plus considérés comme des index. Seuls `index.php` et `index.html` le sont, et `index.php` devient désormais prioritaire sur `index.html`.

* Si aucun fichier d'index n'est présent, une page d'erreur *Forbidden* s'affichera plutôt que de lister les fichiers.
Ils peuvent l'être à nouveau via l'ajout dans un fichier *.htaccess* de la directive `Options +Indexes`.

* Les modules `mod_dav_svn`, `mod_wsgi` et `Passenger` sont supprimés.

* Les fichiers des autres modules sont déplacés, mais la migration s'occupera de modifier automatiquement le chemin des directives `LoadModule` dans les sites de type *Apache personnalisé* y faisant référence. Vous n'avez donc pas besoin de vous en soucier.

### Mises à jour diverses

De très nombreuses applications et bibliothèques sont également mises à jour. Elles sont trop nombreuses pour être toutes listées, mais parmi les plus notables, susceptibles de provoquer des incompatibilités :

* Erlang 19.1 (auparavant en 15.b)
* Haskell 7.10 (auparavant en 6.8)
* GDAL 1.10 (auparavant en 1.5)
* git 2.9 (auparavant en 1.8)
* ImageMagick 6.8 (auparavant en 6.5)
* Java JRE 7 et 8 (auparavant en 6)
* Lua 5.3 (auparavant en 5.1)
* MapServer 7.0 (auparavant en 5.6)
* Mercurial 3.9 (auparavant en 1.3)
* OCaml 4.01 (auparavant en 3.10)
* Perl 5.20 (auparavant en 5.10)
* PROJ 4.8 (auparavant en 4.7)
* Subversion 1.8 (auparavant en 1.6)
* Texlive 2014 (auparavant en 2007)

### Environnement VPS/dédié

Les services suivants, installés sur demande, seront également mis à jour :

* RabbitMQ est mis à jour en version 3.5
* Redis est mis à jour en version 3.2
* Elasticsearch est mis à jour en version 5.5

### Disparition des anciennes bibliothèques

Si vous aviez compilé vos propres applications, elles sont susceptibles d'être liées à des bibliothèques ou des versions ayant disparu (à cause d'un saut de l'ABI). Vos applications, ou certaines fonctionnalités, peuvent alors cesser de fonctionner. Il faudra alors recompiler les applications en question.

Parmi les bibliothèques les plus susceptibles d'être concernées :

* [OpenSSL](https://www.openssl.org). La version 0.9.8 reste toutefois installée, aux côtés de la version 1.0.2, donc vos applications continueront à fonctionner. La version 0.9.8 étant toutefois ancienne, il est fortement recommandé de recompiler vos applications malgré tout pour qu'elles utilisent une version récente d'OpenSSL.
* [libreadline](https://cnswww.cns.cwru.edu/php/chet/readline/rltop.html)


## Changement d'IP du serveur HTTP

Pour certains clients mutualisés encore hébergés dans notre ancienne infrastructure matérielle, l'adresse IP de leur serveur HTTP sera amenée à changer. Ce sera indiqué, le cas échéant, sur la page de détails de la migration, dans l'administration alwaysdata. Si vous utilisez nos serveurs DNS ou un CNAME, vous n'aurez rien besoin de faire. En revanche, si vous aviez défini manuellement un enregistrement DNS de type A ou AAAA, vous devrez les modifier après avoir effectué la migration afin d'indiquer les nouvelles adresses IP.

Les anciennes IP continueront néanmoins à fonctionner pendant encore plusieurs semaines (fonctionnement en *reverse proxy*), mais passer par elles implique une augmentation faible de la latence de vos sites et une augmentation du risque de pannes. Il est donc vivement recommandé de les changer au plus vite.

## Test de la migration

Il est très fortement recommandé d'effectuer un test de migration préalablement à la migration réelle pour vous assurer que vos applications continueront à fonctionner, et pour les corriger dans le cas contraire.

### Accès SSH

Vous pourrez vous connecter à votre compte en SSH sur un serveur temporaire. Ce serveur est équipé de l'architecture logicielle 2017, mais **il accède à vos vrais fichiers**, pas à une copie. Toute modification que vous effectueriez sera donc répercutée immédiatement sur votre compte.

L'accès SSH peut être ralenti par rapport au serveur SSH usuel. C'est une conséquence du test, mais cette lenteur disparaitra après la migration réelle.

### Accès HTTP

Vous pourrez tester vos sites de plusieurs manières :

* en y accédant via l'URL usuelle, à laquelle vous ajouterez le suffixe `.migration.alwaysdata.net`. Par exemple, si votre site est accessible normalement à l'adresse `www.example.com`, vous pourrez y accéder sur l'infrastructure de test en allant sur `www.example.com.migration.alwaysdata.net`.
Attention : le certificat SSL renvoyé sur l'adresse `*.migration.alwaysdata.net` ne sera pas valide, vous devrez explicitement l'autoriser par votre navigateur. Cela ne concerne que le test de la migration, pas la migration réelle, pour laquelle les certificats ne changeront pas.
Attention : certaines applications font une redirection vers l'URL nominale, ce qui empêche de les tester en utilisant cette méthode.

* en utilisant une extension de navigateur permettant de forcer l'en-tête `Host` (donc le site demandé). Par exemple sous Chrome, l'extension [Virtual Hosts](https://chrome.google.com/webstore/detail/virtual-hosts/aiehidpclglccialeifedhajckcpedom). Vous devrez vous connecter en indiquant l'adresse du serveur HTTP de test (par exemple, `migration-test1.paris1.alwaysdata.com`), mais en demandant l'adresse de votre site.

* en modifiant votre fichier `hosts` pour forcer à utiliser l'IP du serveur HTTP de test pour se connecter à vos sites. C'est faisable en éditant directement le fichier concerné, ou bien par l'intermédiaire d'une extension de navigateur, par exemple [HostAdmin](https://addons.mozilla.org/en-US/firefox/addon/hostadmin/) sous Firefox.

Vos applications seront alors démarrées sur un serveur temporaire tournant sous l'infrastructure logicielle 2017, comme si la migration avait eu lieu. Comme en SSH, les fichiers de votre compte auxquels ce serveur a accès sont vos vrais fichiers. Les accès peuvent également être ralentis, n'en tenez donc pas compte.

Attention : la configuration interne de votre compte alwaysdata sur ce serveur temporaire est générée au moment où vous exécutez la migration de test. Elle n'est pas modifiée ensuite. Par exemple, si vous exécutez la migration de test alors que la version PHP définie dans votre environnement est la 5.6.27, puis que vous modifiez ensuite cette version, cette modification ne sera pas répercutée sur le serveur temporaire de migration. Vous devrez alors à nouveau exécuter une migration de test pour prendre en compte la modification. Même chose pour les modifications que vous apportez dans la section Web > Sites.

### Bases de données

Lorsque vous exécutez la migration de test, l'ensemble de vos bases et utilisateurs de bases de données sont copiés sur un serveur temporaire, faisant tourner les nouvelles versions. Vous pourrez ensuite accéder à vos données copiées sur ce serveur en utilisant vos identifiants usuels pour faire vos tests. Contrairement aux fichiers utilisés par les serveur SSH et HTTP, vous travaillez donc ici sur une copie de vos données. À chaque exécution de la migration de test, vos précédentes copies sont écrasées par de nouvelles.

## Aide à la migration

### Stratégie générale

Il peut être tentant de profiter de la migration pour faire des modifications drastiques sur vos applications web, leur configuration ou leur déploiement. Nous vous recommandons plutôt de faire le minimum de changements possibles pour que la migration se déroule avec succès (après l'avoir testée), et n'effectuer les grandes modifications qu'après, lorsque votre compte sera sur la nouvelle infrastructure.

L'intérêt majeur de procéder dans ce sens est qu'une fois que votre compte sera sur la nouvelle infrastructure, vous pourrez bénéficier de nouvelles options et de méthodes de déploiement largement simplifiées, notamment avec Python et Ruby. Par exemple, si vous aviez compilé votre propre interpréteur ou vos propres modules Apache (mod_wsgi, Passenger), il est fort probable que vous pourrez vous en passer une fois que votre compte sera sur la nouvelle infrastructure.

### Vous avez des références à la configuration Apache relative à PHP

Vous avez des références à la configuration interne PHP soit dans un fichier `.htaccess`, soit dans un site de type *Apache personnalisé* (peut-être aviez-vous copié des morceaux de configuration du fichier `sites.conf`). Par exemple, vous avez des références à `application/x-httpd-fastphp5`.

Notre configuration interne de PHP ayant changé, votre configuration cessera de fonctionner. Si vous utilisez PHP et un site de type *Apache personnalisé*, nous vous invitons à le convertir en site de type *Apache standard* et à indiquer vos directives Apache spécifiques soit dans un fichier `.htaccess`, soit dans le champ *Directives supplémentaires du virtual host*.


### Erreur : "cannot open shared object file: No such file or directory"

Cette erreur indique qu'une bibliothèque système est absente. Si la grande majorité des bibliothèques système mises à jour sur la nouvelle infrastructure restent compatibles avec les anciennes versions (car l'ABI reste la même), certaines ne le sont pas (il y a un saut de version de l'ABI). Si vos applications dépendent de ces bibliothèques, elles ne les trouveront plus.

Les bibliothèques suivantes sont concernées :

* [libgmp](https://gmplib.org)
* [libreadline](https://cnswww.cns.cwru.edu/php/chet/readline/rltop.html)
* [libtiff](http://www.libtiff.org/)

En général, ces bibliothèques ne sont pas utilisées directement par les applications, mais par l'intermédiaire de dépendances (module Python, gem Ruby, extension PHP). Recompiler ces modules sur la nouvelle infrastructure leur permettra en général d'utiliser la nouvelle version de la bibliothèque, mais ils ne fonctionneront alors plus sur l'ancienne infrastructure.

Une autre solution est parfois possible : indiquer à la compilation du module de désactiver certaines fonctionnalités pour éviter qu'il n'utilise la bibliothèque en question. Par exemple, vous pouvez compiler le module [Pillow](https://python-pillow.org/) sans le support des fichiers TIFF de cette manière :

```
$ pip install Pillow --global-option="build_ext" --global-option="--disable-tiff"
```

### Migrer une application Python en FastCGI

Vous avez une application Python (par exemple, utilisant [Django](https://www.djangoproject.com/)) fonctionnant avec FastCGI, avec un fichier `.htaccess` et un script `.fcgi`. FastCGI continuera à fonctionner sur la nouvelle infrastructure comme avant, mais si vous n'utilisez pas un virtualenv, vous devrez installer manuellement les bibliothèques Python système car elles ne sont plus préinstallées sur la nouvelle infrastructure.

* en SSH, installez l'ensemble des bibliothèques dont vous avez besoin, par exemple :

```
$ mkdir $HOME/python_libs; PYTHONPATH=$HOME/python_libs easy_install --always-copy --install-dir $HOME/python_libs Django==1.6 flup==1.0.3.dev-20110405 psycopg2==2.0.11
```

* modifiez votre fichier `.fcgi` pour remplacer le shebang (la première ligne), généralement `#!/usr/bin/python`, par `#!/usr/bin/eval PYTHONPATH=/home/foo/python_libs python`, `foo` étant à remplacer par le nom de votre compte.

### Vous utilisez votre propre module mod_wsgi

Vous avez compilé votre propre interpréteur Python et le module [mod_wsgi](https://modwsgi.readthedocs.io/en/develop/), que vous utilisez avec un site de type *Apache personnalisé*. Assurez-vous bien d'avoir défini la directive Apache *WSGIPythonHome*, sans quoi vous risquez d'avoir des erreurs sur la nouvelle infrastructure, comme par exemple :

```
ImportError: No module named _sysconfigdata_nd
```

Si votre interpréteur Python est dans le répertoire `/home/foo/python`, alors vous devrez avoir utilisé la directive :

```
WSGIPythonHome /home/foo/python
```

### Vous utilisez le module mod_wsgi du système

Vous avez un site de type *Apache personnalisé* qui charge le module système `/usr/lib/apache2/modules/mod_wsgi.so-2.6`. Comme stipulé plus haut, ce module disparait sur la nouvelle infrastructure (au profit de WSGI). Pour vous simplifier la migration, vous pouvez :

* télécharger le fichier https://files.alwaysdata.com/migrations/software-2017/mod_wsgi.so-2.6 sur votre compte :

```
wget https://files.alwaysdata.com/migrations/software-2017/mod_wsgi.so-2.6
```

* remplacer le chemin `/usr/lib/apache2/modules/mod_wsgi.so-2.6` dans les directives de votre site *Apache personnalisé* par le chemin du fichier téléchargé sur votre compte, par exemple `/home/foo/mod_wsgi.so-2.6`.
