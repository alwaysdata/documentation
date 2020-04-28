+++
url = "/fr/sites/fichier-htaccess/"
title = "Fichier .htaccess"
layout = "man"
hidden = true
tags = ["apache", "http", "site"]
+++

Les fichiers `.htaccess` sont des fichiers de configuration d'Apache. Voici quelques exemples d'utilisation les plus courantes.

## Protéger un répertoire par un mot de passe

Protégez à l'aide d'un identifiant et d'un mot de passe l'accès à des fichiers pour certains utilisateurs.

```
AuthUserFile /chemin/au/.htpasswd
AuthName "Accès protégé"
AuthType Basic
Require valid-user
```

Le fichier `.htpasswd` contient la liste des couples d'identifiants/mot de passe autorisés. Il peut être placé n'importe où, mais ne doit pas être lisible de l'extérieur.

Pour créer ce fichier `.htpasswd` :


`htpasswd -c .htpasswd <utilisateur>`


En remplaçant `<utilisateur>` par le nom d'utilisateur souhaité. L'outil demande d'entrer à deux reprises le mot de passe correspondant.

## Limiter l'accès à un répertoire

Bloquez l'accès à un répertoire pour un domaine ou une adresse IP. Et inversement, vous pouvez n'autorisez l'accès au répertoire que pour les IPs et/ou domaines souhaités.

```
order deny,allow 
deny from all 
allow from <adresse IP / domaine>
require user <Login de l'utilisateur>
```
    
## Personnaliser les messages d'erreur (403, 404 ...)

La syntaxe suivante va définir des pages d'erreurs personnalisées :

```
ErrorDocument 403 /erreurs/403.php 
ErrorDocument 404 /erreurs/404.php
```

Cette syntaxe est valable quelque soit le [code de la réponse HTTP](http://fr.wikipedia.org/wiki/Liste_des_codes_HTTP).

## Redirection

Cette fonctionnalité est disponible directement en déclarant un site de type [Redirection]({{< ref "sites/redirect" >}}), mais vous pouvez le faire grâce au fichier `.htaccess` :

```
Redirect 301 <Fichier source> <Fichier destination>
```   
 
Vous pouvez aussi rediriger un répertoire entier de cette manière :

```
RedirectMatch 301 <Répertoire source>(.*) <Répertoire destination>/$1
```

## Réécriture d'URL

La *réécriture d'URL* (ou URL Rewriting) consiste à modifier la structure des liens. Cette pratique est souvent utilisée pour améliorer l'indexation de vos pages (et donc le référencement de votre site) en insérant des mots clés dans les adresses.

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ {Fichier source}/$1 
```

## Erreurs possibles

Toute erreur liée au `.htaccess` sera visible dans le fichier **`$HOME/admin/logs/apache/apache.log`**.

```
Invalid command '\xef\xbb\xbf', perhaps misspelled or defined by a module not included in the server configuration
```

Le fichier `.htaccess` n'a pas été enregistré dans le bon format. Veillez à faire attention à sauvegarder votre fichier sans [BOM](http://fr.wikipedia.org/wiki/Indicateur_d%27ordre_des_octets). C'est généralement une option de votre éditeur.
