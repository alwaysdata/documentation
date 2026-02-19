+++
url = "/fr/developpement/guides/blackfire/"
title = "Blackfire"
tags = ["http", "optimisation applicative", "profiling", "site"]
+++

[Blackfire](https://blackfire.io) permet de tester, débugger, optimiser les applications. Il offre des agents dans plusieurs langages et nous présenterons ici les étapes pour installer les _agents PHP et Python_.

Dans notre exemple, nous utilisons un [accès SSH](/web-hosting/remote-access/ssh) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de Blackfire : `$HOME/blackfire/`

{{% notice note %}}
`[foo]`, `<version>`, `[version]`, `<YOUR_SERVER_ID>` et `<YOUR_SERVER_TOKEN>` doivent être remplacées par les informations correctes.
{{% /notice %}}

## Étape 1 : Téléchargement de l'agent

```sh
foo@ssh:~/blackfire$ wget https://packages.blackfire.io/debian/pool/any/main/b/blackfire-php/blackfire-agent_<version>_amd64.deb
foo@ssh:~/blackfire$ dpkg -x blackfire-agent_<version>_amd64.deb .
```
[Page de téléchargement](https://blackfire.io/docs/up-and-running/installation?action=install&mode=full&location=local&os=manual&language=php) : prendre le paquet DEB 64 bits.

## Étape 2 : Configuration de l'agent

```sh
foo@ssh:~/blackfire$ cat << EOF > etc/blackfire/agent-prod
[blackfire]
; setting: server-id
; You can find your personal server-id at https://blackfire.io/my/settings/credentials
server-id=<YOUR_SERVER_ID>

; setting: server-token
; You can find your personal server-token at https://blackfire.io/my/settings/credentials
server-token=<YOUR_SERVER_TOKEN>

; setting: log-file
log-file=/home/[foo]/blackfire/agent.log

; setting: log-level
; desc   : log verbosity level (4: debug, 3: info, 2: warning, 1: error)
; default: 1
log-level=1

; setting: memory-limit
; desc   : Sets the maximum allowed RAM usage (megabytes) when ingesting traces. Use 0 to disable
; default: 500
memory-limit=500

EOF
```

Plus d'options sont disponibles sur [leur documentation](https://blackfire.io/docs/up-and-running/configuration/agent).

## Étape 3 : Lancement du démon

Créez un [service](/web-hosting/services) avec les détails suivants :

- *Commande* : `/home/[foo]/blackfire/usr/bin/blackfire --config=/home/[foo]/blackfire/etc/blackfire/agent-prod`
- *Répertoire de travail* : `/home/[foo]/blackfire`

## Étape 4 : Installation des sondes

### PHP

Voir [Blackfire for PHP](https://blackfire.io/docs/php)

**Téléchargement**

```sh
foo@ssh:~/blackfire$ wget https://packages.blackfire.io/debian/pool/any/main/b/blackfire-php/blackfire-php_<version>_amd64.deb
foo@ssh:~/blackfire$ dpkg -x blackfire-php_<version>_amd64.deb .
```
[Page de téléchargement](https://blackfire.io/docs/up-and-running/installation?action=install&mode=full&location=local&os=manual&language=php) - point D : prendre le paquet DEB 64 bits.

**Ajout de l'extension dans le php.ini (Environnement > PHP)**

```ini
extension = /home/[foo]/blackfire/usr/lib/blackfire-php/amd64/blackfire-[version].so
```

Plus d'options sont données sur leur [documentation](https://blackfire.io/docs/php/configuration). Notamment pour mettre en place un log :

```ini
blackfire.log_level = 1
# Log verbosity level (4: debug, 3: info, 2: warning, 1: error)
blackfire.log_file = /home/[foo]/blackfire/blackfire-php.log
```

### Python

Voir [Blackfire for Python](https://blackfire.io/docs/python)

```sh
foo@ssh:~$ python -m pip install blackfire
```

---

## Liens

- [Documentation](https://blackfire.io/docs)
