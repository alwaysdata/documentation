+++
url = "/fr/guides/installer-new-relic/"
title = "Comment installer New Relic"
menuTitle = "Installer New Relic"
layout = "howto"
hidden = true
tags = ["surveillance"]
+++

[New Relic](https://newrelic.com/products/application-monitoring) surveille les applications et aide à les optimiser. Il offre des agents dans plusieurs langages et nous présenterons ici les étapes pour installer l'_agent PHP_.

Du fait des particularités de notre infrastructure, leur script d'installation n'est pas exploitable sur nos serveurs, voici les étapes à suivre.

Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh">}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de New Relic : `$HOME/newrelic/`
- PHP 7.3.9

### Étape 1 : Téléchargement de l'agent

```
foo@ssh:~/newrelic$ wget -O- https://download.newrelic.com/php_agent/release/<newrelic-last-version>-linux.tar.gz | tar -xz --strip-components=1
```

[Page de téléchargement](https://download.newrelic.com/php_agent/release/)


### Étape 2 : Modification du php.ini

Ajoutez dans le `php.ini` (**Environnement > PHP**):

```
extension = /home/[foo]/newrelic/agent/x64/newrelic-20180731.so
newrelic.license = "REPLACE_WITH_REAL_KEY"
newrelic.enabled = true
newrelic.loglevel = "info"
newrelic.logfile = "/home/[foo]/newrelic/php_agent.log"
```

Plus d'options sont disponibles dans le fichier `/home/[foo]/newrelic/scripts/newrelic.ini.template`.

### Étape 3 : Lancement du démon

Lancez le via SSH :

```
foo@ssh:~/newrelic$ /home/[foo]/newrelic/daemon/newrelic-daemon.x64 --logfile /home/[foo]/newrelic/daemon/log
```

## Liens

- [Documentation](https://docs.newrelic.com/docs/agents/manage-apm-agents)
