+++
url = "/fr/tâches-planifiées/utiliser-les-tâches-planifiées/"
title = "Comment utiliser des tâches planifiées"
menuTitle = "Utiliser des tâches planifiées"
layout = "howto"
weight = 10
hidden = true
tags = ["tâches planifiées"]
+++

Via le menu **Avancé > Tâches planifiées** de votre interface d'administration, entrez les commandes que vous souhaitez exécuter, les URL auxquelles vous souhaitez accéder à intervalle régulier et définissez la période de répétition de ses tâches. 

Attention :

- Si la tâche est programmée à une certaine fréquence, mais que l'exécution de la tâche précédente n'est pas terminée, l'actuelle sera ignorée ;
- Les tâches sont démarrées dans la minute indiquée. Autrement dit, une tâche devant débuter tous les jours à 6h30, démarrera entre 6:30:00 et 6:30:59 ;
- Un log est automatiquement créé et disponible dans le répertoire `$HOME/admin/logs/jobs/`. Il vous donne le démarrage et l'arrêt de la tâche.
- Pour les comptes étant sur les serveurs mutualisés, la consommation doit rester raisonnable. Si la tâche planifiée est un traitement lourd, il convient de diminuer la fréquence.

{{% notice note %}}
Même si c'est contre-indiqué, les clients en serveurs dédiés et VPS peuvent aussi utiliser la commande `crontab -e`. Les deux systèmes sont distincts.
{{% /notice %}}

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


## Liens

* En savoir plus sur la [syntaxe du crontab](https://fr.wikipedia.org/wiki/Crontab)

{{% notice note %}}
Les raccourcis en **@** - exemples _@hourly_ ou _@reboot_ - ne sont pas acceptés (syntaxe non-normalisée).
{{% /notice %}}
