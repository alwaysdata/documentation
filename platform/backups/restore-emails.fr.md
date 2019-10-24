+++
url = "/fr/plate-forme/sauvegardes/restaurer-des-emails/"
title = "Comment restaurer des emails"
menuTitle = "Restaurer des emails"
layout = "howto"
weight = 10
draft = false
+++

Les sauvegardes de vos emails se trouvent dans le répertoire _~/admin/backup_ de votre compte. Vous pouvez les restaurer via le menu **Avancé > Restauration de sauvegardes**.

Choisissez la date voulue puis cochez la/les boîte(s) email(s).

> Le temps de restauration dépend de la taille des fichiers à restaurer.


## En SSH

Si vous souhaitez restaurer une sauvegarde manuellement.

- Connectez-vous à votre compte [en SSH]() ;
- Restaurer des emails :

```
$ rsync -av ~/admin/backup/<date>/mails/<domaine>/<boîte_email>/ ~/admin/mail/<domaine>/<boîte_email>/
```

Ici les emails à la date de la sauvegarde seront remis en place. Aucun email reçu ou envoyé depuis ne sera supprimé.
