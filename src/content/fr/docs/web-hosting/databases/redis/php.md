---
permalink: /fr/docs/hebergement-web/bases-de-donnees/redis/php/
title: Configurer une application PHP avec Redis
eleventyNavigation:
  key: Configurer une application PHP avec Redis
  parent: Bases de données
---

## Configuration

L'utilisation de Redis en PHP nécessite l'[installation d'une extension PECL](/fr/docs/hebergement-web/langages/php/installer-une-extension/#depuis-peclhttpspeclphpnet) sur votre compte via [SSH](/fr/docs/hebergement-web/acces-distant/ssh/).

```
$ ad_install_pecl redis
```

N'oubliez pas ensuite d'[ajouter l'extension dans votre `php.ini`](/fr/docs/hebergement-web/langages/php/configuration/#paramètres-phpini) :

```
extension=/home/[compte]/path/to/redis-[VERSION].so
```

> [!WARNING] Attention
> `[VERSION]` correspond à la version majeure de PHP avec laquelle l'extension a été installée. Par défaut, cela prendra la version du menu **Environnement** (utilisée en SSH). Vous pouvez l'installer avec [une autre version de PHP](/fr/docs/hebergement-web/langages/php/problemes-frequents/#utiliser-différentes-versions-en-ssh).
