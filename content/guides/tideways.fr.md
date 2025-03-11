+++
url = "/fr/guides/tideways/"
title = "Comment installer Tideways"
layout = "howto"
hidden = true
tags = ["http", "monitoring", "profiling"]
+++

[Tideways](https://tideways.com/) surveille les applications PHP et aide à les optimiser. Du fait des particularités de notre infrastructure, leur script d'installation n'est pas exploitable sur nos serveurs, voici les étapes à suivre.

Dans notre exemple, nous utilisons un [accès SSH](remote-access/ssh) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de Tideways : `$HOME/tideways/`

{{% notice note %}}
`[foo]`, `[version]` et `[php_version]` doivent être remplacées par les informations correctes.
{{% /notice %}}

## Étape 1 : Téléchargement de l'agent et du démon

```sh
foo@ssh:~/tideways$ wget -O- https://s3-eu-west-1.amazonaws.com/tideways/extension/[version]/tideways-php-[version]-x86_64.tar.gz | tar -xz --strip-components=1
foo@ssh:~/tideways$ wget -O- https://s3-eu-west-1.amazonaws.com/tideways/daemon/[version]/tideways-daemon_linux_amd64-[version].tar.gz | tar -xz --strip-components=0
```

[Page de téléchargement](https://tideways.io/profiler/downloads)

## Étape 2 : Modification du php.ini

Ajoutez dans le `php.ini` (**Environnement > PHP** ou **Web > Sites > Modifier le [site] - ⚙️ > Configuration**) :

```ini
extension = /home/[foo]/tideways/tideways-[version]/tideways-php-[php-version].so
```

[Documentation de configuration](https://support.tideways.com/documentation/setup/configuration)

## Étape 3 : Lancement du démon

```sh
foo@ssh:~/tideways$ chmod +x tideways-daemon_[version]/tideways-daemon
```

Créez un [service](services) avec les détails suivants :

- *Commande* : `/home/[foo]/tideways/tideways-daemon_[version]/tideways-daemon -address /home/[foo]/tideways/tidewaysd.sock`
- *Répertoire de travail* : `/home/[foo]/tideways/tideways-daemon_[version]/`
