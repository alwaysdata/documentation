+++
url = "/fr/avancé/docker"
title = "Docker"
layout = "man"
hidden = true
tags = [""]
+++

Vous pouvez utiliser [Docker](https://www.docker.com/)[^1] sur les [offres Cloud Privés]({{< ref "accounts/billing/private-cloud-prices">}}) d'alwaysdata.

## Installation

Après avoir [contacté le support](https://admin.alwaysdata.com/support/add) pour installer Docker sur le serveur, il faut **pour chaque compte** devant l'utiliser :

- exécuter en [SSH]({{< ref "remote-access/ssh" >}}) :
```sh
$ dockerd-rootless-setuptool.sh install
```

Cela doit renvoyer :

```
[INFO] systemd not detected, dockerd-rootless.sh needs to be started manually:

PATH=/usr/local/bin:/sbin:/usr/sbin:$PATH dockerd-rootless.sh 

[INFO] Creating CLI context "rootless"
Successfully created context "rootless"

[INFO] Make sure the following environment variables are set (or add them to ~/.bashrc):

# WARNING: systemd not found. You have to remove XDG_RUNTIME_DIR manually on every logout.
export XDG_RUNTIME_DIR=/home/excellency-cbay2/.docker/run
export PATH=/usr/local/bin:$PATH
export DOCKER_HOST=unix://$HOME/.docker/run/docker.sock
```

- créer un [service]({{< ref "services" >}}) :
    - *Commande* : `dockerd-rootless.sh`.
    
L'installation est terminée, vous pouvez désormais utiliser la commande `docker` normalement.

## Utilisation

Vous pouvez utiliser Docker pour faire tourner des [sites]({{< ref "sites" >}}), des [services]({{< ref "services" >}}), des [tâches planifiées]({{< ref "tasks" >}}) ou tout simplement en [SSH]({{< ref "remote-access/ssh" >}}).

Pour faire tourner un site avec Docker, vous devrez utiliser le type [programme utilisateur]({{< ref "sites/user-program" >}}) et indiquer votre commande `docker run`. Il faudra que votre conteneur Docker écoute en HTTP sur le port `$PORT`, par exemple :

```txt
docker run -p $PORT:80 gitlab/gitlab-ee:latest
docker run -p $PORT:8080 jenkins/jenkins:lts-jdk11
```

Vous devrez consulter la documentation de votre image Docker pour savoir quoi indiquer exactement.

{{% notice warning %}}
**Les conteneurs Docker sont intégralement sous la responsabilité de nos clients. Aucune infogérance ou assistance ne pourra être apportée par alwaysdata.** En particulier, les images Docker intègrent généralement des logiciels comme Apache, PHP, MySQL, Redis... qui ne seront donc pas administrés, configurés ou surveillés par alwaysdata, contrairement à des applications qui tourneraient sans Docker. Pour cette raison, nous invitons vivement nos clients à n'utiliser Docker qu'en cas de besoin avéré, et à **systématiquement** demander conseil à notre support avant d'utiliser une image Docker. Dans bien des cas, il sera préférable de se passer de Docker (par exemple, en utilisant notre [marketplace]({{< ref "marketplace" >}}) ou un [guide d'installation]({{< ref "guides" >}}), permettant alors de bénéficier de l'infogérance alwaysdata, de meilleures performances et d'une fiabilité accrue.
{{% /notice %}}

[^1]: Docker tourne en mode [rootless](https://docs.docker.com/engine/security/rootless/).
