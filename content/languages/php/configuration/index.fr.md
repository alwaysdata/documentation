+++
url = "/fr/langages/php/configuration/"
title = "Configurer PHP"
hidden = true
layout = "man"
tags = ["php"]
+++

## Versions supportées

||
|-------------------------|
| 8.4 \| 8.3 \| 8.2 \| 8.1 \| 8.0 |
| 7.4 \| 7.3 \| 7.2 \| 7.1 \| 7.0 |
| 5.6 \| 5.5 \| 5.4 \| 5.3 \| 5.2 |
| 4.4 |

La version par défaut est modifiable dans l'administration alwaysdata, **Environnement > PHP**. C'est cette version qui est notamment utilisée lorsque vous démarrez `php`.

Les versions ne sont pas forcément [déjà installées](languages#versions).

## Paramètres (php.ini)

Le fichier `php.ini` par défaut active plusieurs extensions essentielles et définit quelques paramètres de base. Ce fichier est accessible en lecture à l'emplacement `$HOME/admin/config/php/php.ini`. Voici son contenu (pour un compte configuré sur une version 8.2 de PHP) :

```ini
; Core settings
max_execution_time = 120
max_input_time = 60
memory_limit = 256M

post_max_size = 256M
upload_max_filesize = 256M

output_buffering = 4096
expose_php = Off
default_socket_timeout = 10
date.timezone = "Europe/Paris"

log_errors = On
error_log = /home/test/admin/logs/php/php.log
ignore_repeated_errors = On
ignore_repeated_source = On


mysql.default_socket = /run/mysqld/mysqld.sock

session.save_path = /home/test/admin/tmp
upload_tmp_dir = /home/test/admin/tmp

; Extensions
extension_dir = "/usr/alwaysdata/php/8.2/lib/php/extensions/no-debug-non-zts-20220829"

extension = ctype.so
extension = curl.so
extension = dom.so
extension = gd.so
extension = gettext.so
extension = iconv.so
extension = json.so
extension = mbstring.so
extension = openssl.so
extension = posix.so
extension = simplexml.so
extension = tokenizer.so
extension = xml.so
extension = xmlwriter.so
extension = xsl.so
extension = zip.so
extension = zlib.so

extension = mysqli.so
extension = pgsql.so
extension = pdo.so
extension = pdo_mysql.so
extension = pdo_pgsql.so

extension = fileinfo.so
extension = phar.so

; Zend extensions
zend_extension = /usr/alwaysdata/php/8.2/lib/php/extensions/no-debug-non-zts-20220829/opcache.so
opcache.lockfile_path = /home/test/admin/tmp
```

Si vous souhaitez modifier ce `php.ini`, vous pouvez le faire dans la section **Environnement > PHP** (ou au niveau du site dans **Web > Sites**). Toutes les directives que vous définissez seront ajoutées au fichier `php.ini` initial, et peuvent donc écraser les valeurs par défaut. Il n'y a aucune limitation à ce que vous pouvez définir, toutes les options de PHP sont accessibles.

Vous pouvez également créer des fichiers `.user.ini` pour n'appliquer des paramètres qu'à certains répertoires.

## Déploiement HTTP


Pour qu'une application PHP soit accessible par le web, créez un site dans le section **Web > Sites** de l'administration alwaysdata en choisissant le type **PHP**.

{{< fig "images/php-type.png" "">}}

### Gestion des versions

Gérer les versions de PHP par site entraîne une consommation plus importante de RAM car les sites ne peuvent alors pas se partager les processus PHP. Il est donc préconisé :
- de privilégier la gestion de PHP au niveau du compte (section **Environnement**) ;
- d'utiliser peu de versions différentes par compte ;
- si on doit en utiliser plusieurs et qu'un certain nombre de sites utilisent la même version, de regrouper leurs php.ini via le php.ini global et de les passer sur la version de PHP par défaut.
