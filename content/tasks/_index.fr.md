+++
url = "/fr/tâches-planifiées/"
title = "Tâches planifiées"
pre = "<i class='fas fa-fw fa-stopwatch'></i> "
weight = 32
layout = "man"
tags = ["tâches planifiées"]
+++

Les Web apps ou ser­vices ont par­fois besoin d’exé­cu­ter des tâches pério­di­que­ment, exé­cu­ter des com­mandes ou ap­pe­ler des URLs, sans aucune inter­ac­tion uti­li­sa­teur. Pour ce faire, vous devez créer une tâche pla­ni­fiée.

Notre pla­te­forme s’ap­puie sur [Debian](https://www.debian.org/) et sa [crontab](https://fr.wikipedia.org/wiki/Cron) mais permet de les gérer directement dans notre [interface d'administration](https://admin.alwaysdata.com) - onglet **Avancé > Tâches planifiées** - et de faciliter l'utilisation.

Plusieurs types d’in­for­ma­tions sont à fournir :

- la (les) commande(s) que vous sou­hai­tez exé­cu­ter, ou les URLs que vous sou­hai­tez requê­ter. Des adresses email peuvent aussi être renseignées pour recevoir les rapports d'erreurs (séparées par un espace)

{{< fig "admin-panel_create-task_type.fr.png" "" >}}

- l'environnement SSH

{{< fig "admin-panel_create-task_environment.fr.png" "" >}}

- la pério­di­ci­té de votre tâche : vous pou­vez spé­ci­fiez une heure fixe, ou un inter­valle

{{< fig "admin-panel_create-task_frequency.fr.png" "" >}}

- [Référence API](https://api.alwaysdata.com/v1/job/doc/)

## Utiliser les tâches planifiées

- Si la tâche est programmée à une certaine fréquence, mais que l'exécution de la tâche précédente n'est pas terminée, l'actuelle sera ignorée ;
- Les tâches sont démarrées dans la minute indiquée. Autrement dit, une tâche devant débuter tous les jours à 6h30, démarrera entre 6:30:00 et 6:30:59 ;
- Un log est automatiquement créé et disponible dans le répertoire `$HOME/admin/logs/jobs/`. Il vous donne le démarrage et l'arrêt de la tâche.
	- Un extrait de ces logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄) ;
	- les adresses email renseignées pour recevoir les rapports d'erreurs ne remplacent pas ces logs.
	
{{% notice note %}}
Si votre script a besoin d'autoriser certaines IP, autorisez ces [plages d'adresses IP]({{< ref "security/ip-ranges" >}}).
{{% /notice %}}
	
### Utilisateurs [Cloud Public]({{< ref "accounts/billing/public-cloud-prices" >}})

- La consommation doit rester raisonnable. Si la tâche planifiée est un traitement lourd, il convient de diminuer la fréquence.


### Utilisateurs [Cloud Privé]({{< ref "accounts/billing/private-cloud-prices" >}})

- Même si c'est contre-indiqué, l'accès à la commande `crontab -e` est aussi disponible. Les deux systèmes sont distincts.

## Problèmes fréquents

- `source venv/bin/activate && python` est spécifique à [Bash](https://fr.wikipedia.org/wiki/Bourne-Again_shell) et ne peut fonctionner. À remplacer par `venv/bin/python` ;
- les raccourcis en **@** - exemples _@hourly_ ou _@reboot_ - ne sont pas acceptés (syntaxe non-normalisée).

## Exemples

### WordPress

Lancement, toutes les dix minutes, de l'outil [WordPress](https://developer.wordpress.org/cli/commands/cron/event/run/) pour exécuter leurs tâches planifiées :

Interface d'administration alwaysdata :

- _valeur_ : `php $HOME/wordpress/htdocs/wp cron event run --due-now`
- _fréquence_ : deuxième choix - Toutes les 10 minutes

Syntaxe crontab équivalente :

```
*/10 * * * * php $HOME/wordpress/htdocs/wp cron event run --due-now
```

### tt-rss

[Rafraîchissement d'un backend RSS](https://git.tt-rss.org/fox/tt-rss/wiki/UpdatingFeeds#periodical-updating-from-crontab-using-update-script-updatephp---feeds) avec TT-rss, tous les jours à 10:30 :

Interface d'administration alwaysdata :

- _valeur_ : `php $HOME/tt-rss/update.php --feeds --quiet`
- _fréquence_ : premier choix - Tous les jours à 10:30

Syntaxe crontab équivalente :

```
30 10 * * * php $HOME/tt-rss/update.php --feeds --quiet
```
