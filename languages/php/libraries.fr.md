+++
url = "/fr/langages/php/ajouter-une-bibliothèque/"
title = "Comment ajouter une bibliothèque PHP"
hidden = true
layout = "howto"
tags = ["php"]
+++

Modifier un fichier dans `/etc/ld.so.conf.d` change la configuration globale du système, non compatible avec l'infrastructure alwaysdata.

Il existe deux solutions :

- définir la variable d'environnement `LD_LIBRARY_PATH`, qui vaudrait alors `/home/compte/bibliothèque`[^1]. Il peut être complexe de s'assurer qu'elle est définie dans tous les cas.

- modifier directement dans le fichier `.so` le chemin du rpath, avec la commande :

```
chrpath -r /home/compte/bibliothèque/ ~/bibliothèque/bibliothèque.so
```

À chaque fois que ce fichier sera chargé, le répertoire `/home/compte/bibliothèque/` sera utilisé pour résoudre les dépendances.

Il restera à ajouter le chemin au `.so` dans le `php.ini` via le menu **Environnement** (ou dans **Web > Sites** dans le cas d'un php.ini personnalisé).

[^1]: compte et bibliothèque doivent être remplacés par leurs noms.
