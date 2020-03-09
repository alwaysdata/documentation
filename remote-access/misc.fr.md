+++
url = "/fr/accès-distant/divers/"
title = "Diverses questions"
layout = "faq"
hidden = true
tags = ["compte", "environnement technique"]
+++

## Lister les comptes

La liste des comptes alwaysdata est visible de plusieurs manières. Leurs contenus ne sont par contre PAS accessibles.

## Répertoire `/tmp`

Le répertoire `/tmp` est un répertoire partagé par tous les utilisateurs d'un serveur. Même s'il est déconseillé de l'utiliser les fichiers créés dessus ne sont, par défaut, pas lisibles par les autres utilisateurs (grâce à `umask`). Rien n'empêche cependant à un programme de créer un fichier dans ce répertoire et de le rendre lisible à tous les utilisateurs. 
