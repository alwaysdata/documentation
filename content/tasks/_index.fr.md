+++
url = "/fr/tâches-planifiées/"
title = "Tâches planifiées"
pre = "<i class='fas fa-fw fa-stopwatch'></i> "
weight = 32
layout = "man"
tags = ["tâches planifiées"]
+++

Les Web apps ou ser­vices ont par­fois besoin d’exé­cu­ter des tâches pério­di­que­ment, exé­cu­ter des com­mandes ou ap­pe­ler des URLs, sans aucune inter­ac­tion uti­li­sa­teur. Pour gérer ce point, vous devez enre­gis­trer une tâche pla­ni­fiée.

Notre pla­te­forme s’ap­puie sur [Debian](https://www.debian.org/) et sa [crontab](https://fr.wikipedia.org/wiki/Cron) mais permet de les gérer directement dans notre [interface d'administration](https://admin.alwaysdata.com) - onglet **Avancé > Tâches planifiées** - et de faciliter l'utilisation.

Plusieurs types d’in­for­ma­tions sont à fournir :

- la (les) commande(s) que vous sou­hai­tez exé­cu­ter, ou les URLs que vous sou­hai­tez requê­ter ;
- l'environnement SSH ;
- la pério­di­ci­té de votre tâche : vous pou­vez spé­ci­fiez une heure fixe, ou un inter­valle.

{{% notice tip %}}
Des adresses email peuvent aussi être renseignées pour recevoir les rapports d'erreurs (séparées par un espace). Elles ne remplacent pas les logs d'exécution déjà présents dans le répertoire `$HOME/admin/logs/jobs`.
{{% /notice %}}

{{< fig "admin-panel_create-task.fr.png" "Interface d’ad­mi­nis­tra­tion : créer une tâche pla­ni­fiée" >}}

{{% notice note %}}
Si votre script a besoin d'autoriser certaines IP, autorisez ces [plages d'adresses IP]({{< ref "security/ip-ranges" >}}).
{{% /notice %}}

---
- [Utiliser les tâches planifiées]({{< ref "tasks/use-scheduled-tasks" >}})
- [Référence API](https://api.alwaysdata.com/v1/job/doc/)
