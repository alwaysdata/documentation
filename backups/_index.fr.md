+++
url = "/fr/sauvegardes"
title = "Sauvegardes"
pre = "<i class='fas fa-fw fa-history'></i> "
weight = 33
chapter = true
tags = ["sauvegarde"]
+++

# Sauvegardes

Une sauvegarde de vos fichiers, bases de données et emails est effectuée **quotidiennement**, conservée durant **30 jours**  glissant et disponible dans le répertoire `$HOME/admin/backup` de votre compte.

Les sauvegardes sont stockées dans un data center dédié, distant de quelques dizaines de kilomètres du centre de production et utilisant un autre prestataire.

Vous pouvez restaurer [un site web]({{< relref "restore-a-site" >}}) ou des [emails]({{< relref "restore-e-mails" >}}) dans l'onglet **Avancé > Restauration de sauvegardes** de votre interface d'administration.

{{% notice info %}}
Les sauvegardes ne rentrent pas en compte dans le quota d'espace disque d'un compte.
{{% /notice %}}

