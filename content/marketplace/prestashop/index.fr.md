+++
url = "/fr/marketplace/prestashop/"
title = "PrestaShop"
layout = "man"
hidden = true
tags = ["e-commerce"]
+++

## Migration depuis un autre prestataire d'hébergement

Vous aurez besoin de modifier :

- les paramètres `ps_shop_domain`, `ps_shop_domain_ssl` présents dans les tables `ps_shop_url` et `ps_configuration` de la base de données ;
- la valeur **localhost** du paramètre `physical_URI` de la table `ps_shop_url` par **/** ;
- le fichier `$HOME/chemin/vers/l'application/app/config/parameters.php`.

## Envoi de mails

L'utilisation de `/usr/sbin/sendmail` est non-fonctionnelle. Choisissez d'utiliser vos "propres paramètres SMTP" et indiquez juste le nom d'hôte SMTP de votre compte (donné dans le menu **Emails > Adresses** de votre interface d'administration alwaysdata).

{{< fig "images/prestashop-emails.fr.png" "" >}}

## Activer le cache PrestaShop

Si vous observez des problèmes de performances, une première étape peut être d'activer le système de cache **CacheApc**. Pour cela :

- installez [l'extension PECL](languages/php/extensions#depuis-peclhttpspeclphpnet) `apcu` sur votre compte via [SSH](remote-access/ssh).

```
ad_install_pecl apcu
```

- ajoutez ensuite [l'extension dans votre `php.ini`](languages/php/configuration#paramètres-phpini).

```
extension=/home/[compte]/path/to/apcu-[VERSION].so
```

- puis activez le système **CacheApc** dans l'interface d'administration du PrestaShop.

{{% notice warning %}}
`[VERSION]` correspond à la version majeure de PHP avec laquelle l'extension a été installée. Par défaut, cela prendra la version du menu **Environnement** (utilisée en SSH). Vous pouvez l'installer avec [une autre version de PHP](languages/php/troubleshooting#utiliser-différentes-versions-en-ssh) si votre site web en utilise une autre.
{{% /notice %}}
