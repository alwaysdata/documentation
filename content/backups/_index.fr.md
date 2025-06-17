+++
url = "/fr/sauvegardes"
title = "Sauvegardes"
pre = "<i class='fas fa-fw fa-history'></i> "
weight = 34
archetype = "chapter"
tags = ["récupération", "sauvegarde"]
+++

Une sauvegarde de vos fichiers, bases de données et emails est effectuée **quotidiennement** et disponible dans le répertoire `$HOME/admin/backup` de votre compte. Ces sauvegardes sont conservées durant un nombre de jours *glissants*, selon l'offre choisie :

| Cloud Public ||||| Cloud Privé ||
|---|---|---|---|---|---|---|
| Free | Small | Medium | Large | X-Large | Serveurs dédiés | Serveurs Gold |
| 3 jours | 7 jours | 20 jours | 20 jours | 30 jours | 30 jours | 30 jours |

Quelque soit l'offre prise, les sauvegardes sont stockées dans un *datacenter dédié*, distant de plusieurs kilomètres du centre de production et utilisant un autre prestataire.

Vous pouvez restaurer [un site web](restore-a-site) ou des [emails](restore-e-mails) dans l'onglet **Avancé > Restauration de sauvegardes** de votre interface d'administration.

{{% notice info %}}
Les sauvegardes ne rentrent pas en compte dans le quota d'espace disque d'un compte.
{{% /notice %}}

{{% notice tip %}}
Les contenus archivés (e.g. les dumps de BDD) dans votre espace de *backup* sont au format [Zstandard](https://github.com/facebook/zstd), vous pouvez utiliser les [outils `zstd*` officiels](https://github.com/facebook/zstd/releases/latest) ou le [plugin adapté pour 7zip](https://www.tc4shell.com/en/7zip/modern7z/) pour les manipuler.
{{% /notice %}}

- [Plan de continuité d'activité d'alwaysdata](security/drp)
