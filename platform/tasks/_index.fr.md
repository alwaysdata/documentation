+++
url = "/fr/plate-forme/tâches-planifiées/"
title = "Tâches planifiées"
weight = 55
chapter = true
layout = "readme"
tags = ["scheduled tasks"]
+++

# Tâches planifiées

Les Web apps ou ser­vices ont par­fois besoin d’exé­cu­ter des tâches pério­di­que­ment, exé­cu­ter des com­mandes ou ap­pe­ler des URLs, sans aucune inter­ac­tion uti­li­sa­teur. Pour gérer ce point, vous devez enre­gis­trer une tâche pla­ni­fiée.

Notre pla­te­forme s’ap­puie sur [Debian](https://www.debian.org/) et sa [crontab](https://fr.wikipedia.org/wiki/Cron) mais permet de les gérer directement dans notre [interface d'administration](https://admin.alwaysdata.com) et de faciliter l'utilisation. 


Deux types d’in­for­ma­tions sont à fournir à four­nir :

- La (les) commande(s) que vous sou­hai­tez exé­cu­ter, ou les URLs que vous sou­hai­tez requê­ter ;
- La pério­di­ci­té de votre tâche : vous pou­vez spé­ci­fiez une heure fixe, ou un inter­valle.

![Alt text](/en/platform/tasks/administration-panel_create-task_FR.png "Interface d’ad­mi­nis­tra­tion : créer une tâche pla­ni­fiée")


- [Utiliser les tâches planifiées]({{< ref "platform/tasks/use-scheduled-tasks" >}})
- [Référence API]({{< ref "platform/api/references/job" >}})
- [Troubleshooting and FAQs]()
