+++
url = "/fr/acces-distant/divers/"
title = "Diverses questions"
layout = "faq"
hidden = true
tags = ["compte", "environnement technique"]
+++

## Lister les comptes

La liste des comptes alwaysdata est visible de plusieurs manières. Leurs contenus ne sont par contre PAS accessibles.

## Répertoire `/tmp`

Le répertoire `/tmp` est un répertoire partagé par tous les utilisateurs d'un serveur. Il est déconseillé de l'utiliser et, par défaut, les fichiers sont lisibles par les autres utilisateurs. `$HOME/admin/tmp` est à préférer, bénéficiant de la même isolation que le reste des répertoires d'un compte.

## Quota d'espace disque

Les sauvegardes (`$HOME/admin/backup`) comme la plupart des logs (`$HOME/admin/logs`) ne rentrent pas en compte dans le quota d'espace disque.

Seuls les logs *apache*, *php* et *uwsgi* du mois en cours rentrent en compte dans le quota d'espace disque d'un compte.
