+++
url = "/fr/sites/désinfecter-un-site/"
title = "Comment désinfecter un site web"
menuTitle = "Désinfecter un site"
layout = "howto"
weight = 90
tags = ["infection", "malware", "site"]
+++

L'infection d'un site peut se traduire de différentes manières :

- envoi de spam ;
- malware attaquant d'autres serveurs ;
- phishing ;
- redirection vers un site tiers.

Lorsque le support alwaysdata détecte une infection il va bloquer le malware et contacter le client pour qu'il fasse le nécessaire.

La très grande majorité des attaques est effectuée par des scripts automatiques. Il n'est donc pas recommandé de réinstaller le site et ses extensions dans le même état sous peine de subir une nouvelle infection dans les heures qui suivent. Voici les actions à entreprendre alors :

## 1. Supprimer les fichiers infectés

Les commandes ci-après, présentées pour un site utilisant PHP, sont exécutées via [SSH]({{< ref "remote-access/ssh" >}}) dans le répertoire de votre site.

- Vérifiez que des redirections ou autres directives n'aient pas été rajoutées à votre insu en contrôlant le contenu de vos fichiers `.htaccess`. Il ne devrait y en avoir à priori qu'un, situé à la racine de votre site :

`find . -type f -name .htaccess`

- Parcourez vos fichiers à la recherche de [malwares](http://fr.wikipedia.org/wiki/Logiciel_malveillant) :

`find . -type f -name "*.php" | xargs grep base64_decode`

`find . -name "*.php" | xargs grep eval`

L'infection se présente comme une suite alphanumérique exécutée avec la fonction PHP [eval](http://www.php.net/manual/fr/function.eval.php) :

```
<?php
    eval(gzinflate(base64_decode("FZy3sqMKFkX/ZaL3igDvaiI8QngPyRTee8/Xj24n3UFfCcE5e6+li1ScSf9P9TZj2Sd78U+abAWB/S8vsikv/vmPGL9ie7zfvQtBPE2Nzt4HaPd3Q0M1RB6eMYgHwFxCOF+T7/ppow3C7Tl5m9bcQWIs4uYlcw4Envy7f1QeBO4UpzkUACLAO8UvWkhraTtMMWF5rcCGA10u37A0klvx9GzqtUvc2arSuDhOsuvsRdbfTEW1C2IEAhBYr5uEHE/e4voIvKAhvBQJVQg0FD6i6KITcQ97cKjF7dSikH5jVZkgtqk/WoMZgF7NJmjon4izeYBw1d9Ll3Avr5O3g3LzoM192DV8f0tn/FJGIyGRo92...")));
?>
```

Cette suite, encodée en base64, est tout simplement un script PHP qui sera exécuté à l'appel de la page.
Vous pouvez donc décoder cette suite pour comprendre ce que le hackeur tente de faire :

```
<?php
    echo gzinflate(base64_decode("FZy3sqMKFkX/ZaL3igDvaiI8QngPyRTee8/Xj24n3UFfCcE5e6..."));
?>
```

Ou alors :

`find . -name "*.php" -print0 | xargs -0 egrep eval`

```
<?php
     $sF="PCT4BA6ODSE_";$s21=strtolower($sF[4].$sF[5].$sF[9].$sF[10].$sF[6]...
?>

<?php
     $qV="stop_";$s20=strtoupper($qV[4].$qV[3]...
?>
```

Tous ces fichiers doivent être **supprimés**.

- Inspectez vos sources à la recherche de dossiers cachés contenant une copie des malwares précédemment supprimés :

`find . -type d -name ".*"`

- Listez les fichiers modifiés ces dernières 24 heures (1 étant le nombre de jour) :

`find . -type f -mtime -1 -print`

- Vérifiez l'intégrité de votre base de données en parcourant les derniers enregistrements.

## 2. Recherche de la faille

En fonction de la date de création des fichiers, de leur nom et de leur appel, il est possible de retrouver l'URL permissive appelée.
Pour se faire, épluchez les requêtes POST de vos logs Apache situés dans le répertoire `$HOME/admin/logs/http` :

`grep POST $HOME/admin/logs/http/[année]/http-[date].log[.gz]`

Exemple d'appels suspects :

```
domain.tld 37.139.47.91 - - [23/Nov/2013:09:13:37 +0100] "POST /wp-content/themes/twentythirteen/404.php?pwd HTTP/1.0" 200 4598 "-" "Mozilla/5.0 
domain.tld 81.27.32.147 - - [23/Nov/2013:03:19:16 +0100] "POST //wp-content/themes/lightspeed/framework/_scripts/valums_uploader/php.php HTTP/1.1" 200 100 "-" "-"
domain.tld 31.184.244.18 - - [31/May/2013:02:12:37 +0200] "POST /templates/beez/7c31.php HTTP/1.1" 200 - "-" "-"
```

Le nom des fichiers, des appels en POST sur des URLs ne contenant pas de traitements, sont des indices vous permettant de remonter jusqu'à la première requête HTTP, origine de l'infection.

{{% notice tip %}}
Si l'infection est **récente** et la recherche de l'infection compliquée, il est possible de repartir d'une [sauvegarde]({{< ref "backups" >}}).
{{% /notice %}}

## 3. Supprimer les vecteurs d'infection

- **Mettez régulièrement à jour** l'application, ses plugins et thèmes ;
- Supprimez tous les plugins et thèmes inactifs ;
- Informez-vous sur les rapports de bugs et failles de sécurité des applications/plugins avant de les installer ;
- Mettez en place le [pare-feu applicatif web]({{< ref "sites/waf" >}}) ;
- Modifiez le préfixe du nom des tables de votre base de données (par exemple pour WordPress _wp\__) ;
- Supprimez le fichier readme.txt à la racine de votre application ;
- Supprimez les utilisateurs créés par défaut ;
- Protégez-vous du [hotlinking](http://fr.wikipedia.org/wiki/Hotlinking) en ajoutant au fichier .htaccess :

```
# Activation du mode Rewrite
RewriteEngine on
RewriteCond %{HTTP_REFERER} !^$

# Les requêtes en provenance de votre domaine sont autorisées
RewriteCond %{HTTP_REFERER} !^http(s)?://(www\.)?votredomaine.com [NC]

# Autorisation d'utilisation du contenu par les moteurs de recherche
RewriteCond %{HTTP_REFERER}  !search\?q=cache               [NC]
RewriteCond %{HTTP_REFERER}  !google\.                      [NC]

# Renvoi d'une image alternative en cas d'emploi abusif des vôtres
RewriteRule \.(gif|jpg|png)$ http://domain.tld/hotlink.jpg  [R,NC,L]
```

- autres règles de filtrage contre le XSS, les redirections HTTP et modifications de variables PHP :

```
RewriteEngine On
RewriteCond %{REQUEST_METHOD} (GET|POST) [NC]
RewriteCond %{QUERY_STRING} ^(.*)(%3C|<)/?script(.*)$ [NC,OR]
RewriteCond %{QUERY_STRING} ^(.*)(%3D|=)?javascript(%3A|:)(.*)$ [NC,OR]
RewriteCond %{QUERY_STRING} ^(.*)document\.location\.href(.*)$ [OR]
RewriteCond %{QUERY_STRING} ^(.*)base64_encode(.*)$ [OR]
RewriteCond %{QUERY_STRING} ^(.*)GLOBALS(=|[|%[0-9A-Z]{0,2})(.*)$ [OR]
RewriteCond %{QUERY_STRING} ^(.*)_REQUEST(=|[|%[0-9A-Z]{0,2})(.*)$ [OR]
RewriteRule (.*) - [F]
```

## Liens

- [Sucuri](http://sucuri.net/) : scanne et identifie les failles potentielles de votre site ;
- [Patchman](https://www.patchman.co/): neutralise les malwares et supprime les failles ;
- [Google Webmaster Tools](https://www.google.com/webmasters/tools/home) : fournit des rapports détaillés sur la visibilité de votre site.

