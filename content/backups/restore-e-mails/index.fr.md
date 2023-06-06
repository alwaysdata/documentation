+++
url = "/fr/sauvegardes/restaurer-des-emails/"
title = "Comment restaurer des emails"
menuTitle = "Restaurer des emails"
layout = "howto"
weight = 10
tags = ["email", "récupération", "sauvegarde"]
+++

Les sauvegardes de vos emails se trouvent dans le répertoire `$HOME/admin/backup` de votre compte. Vous pouvez les restaurer via le menu **Avancé > Restauration de sauvegardes**.

{{% notice info %}}
Les emails à la date de la sauvegarde seront remis en place. Aucun email reçu ou envoyé depuis ne sera supprimé.
{{% /notice %}}

1.  Choisissez la date voulue ;
    {{< fig "images/admin-panel_restoration.fr.png" "Interface d'administration : restauration de sauvegarde - étape 1" >}}

2.   Puis cochez la/les boîte(s) email(s).
    {{< fig "images/admin-panel_restoration-emails.fr.png" "Interface d'administration : restauration de sauvegarde - étape 2" >}}

{{% notice note %}}
Le temps de restauration dépend de la taille des fichiers à restaurer.
{{% /notice %}}

## En SSH

Si vous souhaitez restaurer une sauvegarde manuellement.

- Connectez-vous à votre compte [en SSH]({{< ref "remote-access/ssh" >}}) ;

- Restaurer des emails :

    ```sh
    $ rsync -av $HOME/admin/backup/[date]/mails/[domaine]/[boîte_email]/ $HOME/admin/mail/[domaine]/[boîte_email]/
    ```
