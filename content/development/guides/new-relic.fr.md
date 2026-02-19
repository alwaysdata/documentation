+++
url = "/fr/developpement/guides/new-relic/"
title = "New Relic"
tags = ["http", "monitoring", "site"]
+++

[New Relic](https://newrelic.com/products/application-monitoring) surveille les applications et aide à les optimiser. Il offre des agents dans plusieurs langages et nous présenterons ici les étapes pour installer les **agents PHP et Python**.

Dans notre exemple, nous utilisons un [accès SSH](/web-hosting/remote-access/ssh) et considérons les informations suivantes :

- Nom du compte : `foo`

{{% notice note %}}
`[foo]`, `[newrelic-last-version]`, `[version]` et `REPLACE_WITH_LICENSE_KEY` doivent être remplacées par les informations correctes.
{{% /notice %}}

## PHP

Du fait des particularités de notre infrastructure, leur script d'installation n'est pas exploitable sur nos serveurs, voici les étapes à suivre.

- Répertoire de New Relic : `$HOME/newrelic/`

### Cloud Privé

#### Étape 1 : Téléchargement de l'agent

```sh
foo@ssh:~/newrelic$ wget -O- https://download.newrelic.com/php_agent/release/[newrelic-last-version]-linux.tar.gz | tar -xz --strip-components=1
```

[Page de téléchargement](https://download.newrelic.com/php_agent/release/)

#### Étape 2 : Modification du php.ini

Ajoutez dans le `php.ini` (**Environnement > PHP**):

```ini
extension = /home/[foo]/newrelic/agent/x64/newrelic-[version].so
newrelic.license = "REPLACE_WITH_LICENSE_KEY"
newrelic.enabled = true
newrelic.loglevel = "info"
newrelic.logfile = "/home/[foo]/newrelic/php_agent.log"
```

Plus d'options sont disponibles dans le fichier `/home/[foo]/newrelic/scripts/newrelic.ini.template`.

#### Étape 3 : Lancement du démon

Créez un [service](/web-hosting/services) avec les détails suivants :

- *Commande* : `/home/[foo]/newrelic/daemon/newrelic-daemon.x64 -f --logfile /home/[foo]/newrelic/daemon/log`
- *Répertoire de travail* : `/home/[foo]/newrelic`

### Cloud Public

#### Étape 1 : Téléchargement de l'agent

```sh
foo@ssh:~/newrelic$ wget -O- https://download.newrelic.com/php_agent/release/[newrelic-last-version]-linux.tar.gz | tar -xz --strip-components=1
```

[Page de téléchargement](https://download.newrelic.com/php_agent/release/)

#### Étape 2 : Modification du php.ini

Ajoutez dans le `php.ini` (**Environnement > PHP**):

```ini
extension = /home/[foo]/newrelic/agent/x64/newrelic-[version].so
newrelic.license = "REPLACE_WITH_LICENSE_KEY"
newrelic.enabled = true
newrelic.loglevel = "info"
newrelic.logfile = "/home/[foo]/newrelic/php_agent.log"
newrelic.daemon.location="/home/[foo]/newrelic/daemon/newrelic-daemon.x64"
```

Plus d'options sont disponibles dans le fichier `/home/[foo]/newrelic/scripts/newrelic.ini.template`.

## Python

New Relic est un module Python à installer comme les autres. Si l'application utilise un `virtualenv`, New Relic sera à installer au niveau de celui-ci.

### Étape 1 : Installation de l'agent

```sh
foo@ssh:~$ python -m pip install newrelic
foo@ssh:~$ newrelic-admin generate-config REPLACE_WITH_LICENSE_KEY newrelic.ini
```

### Étape 2 : Modification de la configuration applicative

Ajoutez dans le fichier `.py` de l'application :

```txt
import newrelic.agent
newrelic.agent.initialize('/home/[foo]/newrelic.ini')
```

---

## Liens

- [Documentation](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/install-configure/configure-new-relic-agents/#apm-config)
