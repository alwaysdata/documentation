+++
title = "Installation et configuration de Gitea"
layout = "howto"
hidden = true
+++

[Gitea](https://gitea.io) est un gestionnaire de dépôts git écrit en Go.

> Gitea is a painless self-hosted Git service. It is similar to GitHub, Bitbucket, and GitLab. Gitea is a fork of Gogs.

{{< fig "images/gitea.png" >}}

En hébergeant vous-même Gitea dans votre compte alwaysdata, vous pourrez accéder à des dépôts privés (et publics) de git, hébergés sur le cloud alwaysdata, et réduire votre dépendance à des solutions d'hébergement centralisées comme Github.

## Installation

### Utiliser notre marketplace

La façon la plus pratique d'installer Gitea est d'utiliser notre [marketplace]({{< ref "marketplace">}}) pour déployer la dernière version.

[Ce script d'installation](https://admin.alwaysdata.com/site/application/script/2/detail/) :

1. Télécharge la dernière version disponible et l'installe dans votre compte.
2. Crée un fichier de configuration minimal dans `$HOME/[gitea/install/path]/custom/conf/app.ini`.
3. Crée le [site]({{< ref "sites/add-a-site" >}}) associé au sous-domaine donné.

### Manuellement

Vous pouvez également installer Gitea à la main (parce que vous préférez gérer la procédure d'installation ou vous cherchez à utiliser une version antérieure à la dernière version).

Nous vous suggérons de suivre [notre script d'installation interne](https://admin.alwaysdata.com/site/application/script/2/detail/) ainsi que la [documentation officielle](https://docs.gitea.io/en-us/install-from-binary/) pour ce faire.

## Première connexion

Gitea n'a pas de processus de création de compte administrateur lors de l'installation. Il vous suffit de pointer votre navigateur vers l'URL qui héberge votre instance Gitea fraîchement installée, et de vous d'y enregistrer votre compte.

En tant que premier utilisateur enregistré, vous disposerez des droits d'administration avec votre compte et pourrez gérer l'ensemble de l'instance.

## Configuration

Le script d'installation est fourni avec un fichier de configuration minimale dans `$HOME/[gitea/install/path]/custom/conf/app.ini`.

{{% notice info %}}
Vous pouvez héberger le fichier de configuration n'importe où sur le système de fichiers de votre compte si besoin. Passez le chemin d'accès au fichier de configuration en utilisant l'option `-c` à la commande `gitea web` dans l'interface de configuration de votre site.
{{% /notice %}}

Le fichier de configuration suit la syntaxe de [fichiers `ini`](https://fr.wikipedia.org/wiki/Fichier_INI).

{{% notice info %}}
La [Gitea Config Cheatsheet](https://docs.gitea.io/en-us/config-cheat-sheet/) est disponible dans la documentation officielle.
{{% /notice %}}

### Chemin des dépôts

Par défaut, Gitea stocke vos dépôts dans le répertoire `$HOME/gitea-repositories`. Si vous voulez le modifier, configurez l'entrée `repository.ROOT`. Le chemin d'accès doit être absolu, assurez-vous de remplir correctement le nom de votre compte :

```ini
[repository]
ROOT = /home/[account]/[path/to/repositories]
```

### Désactivation de l'enregistrement

Si vous ne souhaitez pas autoriser les enregistrements de comptes sur votre instance Gitea, vous pouvez la désactiver :

```ini
[service]
DISABLE_REGISTRATION = true
```

{{% notice warn %}}
N'oubliez pas que vous devez d'abord créer votre propre compte après l'installation, et *avant* de désactiver l'enregistrement.
{{% /notice %}}

### Optimiser les performances avec la stratégie de cache

Gitea peut utiliser une instance [Memcached]({{< ref "databases/memcached">}}) comme stratégie de cache.

{{% notice info %}}
*Memcached* n'est actuellement disponible que dans les environnements *alwaysdata Catalyst*.
{{% /notice %}}

```ini
[cache]
ENABLED = true
ADAPTER = memcache
HOST    = 127.0.0.1:11211
```

Sur les instances *Public Cloud*, vous pouvez accélérer votre instance en activant la mise en cache mémoire au lieu d'utiliser *Memcached* :

```ini
[cache]
ENABLED  = true
ADAPTER  = memory
INTERVAL = 300
```

### Fournisseurs OAuth

Si vous souhaitez permettre à vos utilisateurs (y compris votre propre compte) d'utiliser un [fournisseur OAuth externe](https://fr.wikipedia.org/wiki/OAuth) pour se connecter à leur compte, vous pouvez activer des fournisseurs d'authentification externes. Cette configuration s'effectue dans l'administration du site directement à l'URI `/admin/auths`.

#### Exemple : authentification externe avec Google

Pour permettre aux utilisateurs d'utiliser leur compte Google pour se connecter à l'instance, il faut d'abord se rendre sur la [Console Développeurs Google](https://console.developers.google.com/). Dans la section `Credentials`, créez une nouvelle référence `OAuth client ID`. Indiquez dans `Authorized redirect URIs` l'URL de votre instance Gitea actuelle.

{{< fig "images/gitea_google-oauth.png" >}}

Ensuite, dans votre instance Gitea, créez une nouvelle `Authentication Source` et remplissez avec votre `Client ID` et votre jeton `Secret` que vous avez généré dans la *Console Développeurs Google*.

{{< fig "images/gitea_auth-source.png" >}}

## Accès SSH

Gitea vous permet d'utiliser à la fois HTTPS et SSH pour accéder à vos dépôts. Si vous souhaitez activer l'accès SSH via votre compte alwaysdata, vous devez renseigner les options suivantes :

```ini
[server]
SSH_DOMAIN = ssh-[account].alwaysdata.net
```

Gitea indiquera alors la bonne adresse SSH dans vos vues de dépôt. Comme Gitea fonctionne avec votre compte utilisateur alwaysdata, il pourra mettre à jour le fichier `$HOME/.ssh/authorized_keys` pour permettre à vos utilisateurs de se connecter en SSH à votre compte et effectuer des opérations git.

### Prévenir le verrouillage de compte

Lorsque vous utilisez une clé SSH déclarée dans votre interface Gitea pour vous connecter aux serveurs SSH alwaysdata, l'invite de commandes interne de Gitea est instanciée pour gérer les commandes git. Cette invite n'est *pas* interactive et ne vous permet pas d'exécuter des commandes shell normales sur votre compte alwaysdata.

Pour éviter cette situation de verrouillage qui vous empêcherait de vous connecter à votre compte SSH, vous devez suivre deux étapes :

1. Générez deux paires de clés SSH sur votre poste local :
   - une pour la connexion Gitea, que vous indiquerez dans la vue des paramètres de votre utilisateur ;
   - l'autre pour se connecter à l'invite SSH habituelle à des fins d'administration, que vous indiquerez dans le fichier `$HOME/.ssh/authorized-keys` comme pour tout [accès SSH]({{< ref "remote-access/ssh">}}).
2. **Sur votre poste local**, créez (ou mettez à jour) le fichier `$HOME/.ssh/config` et déclarez deux alias pour vous connecter au serveur alwaysdata :
   ```ssh
   Host admin.ssh-[account].alwaysdata.net
     User [account]
     HostName ssh-[account].alwaysdata.net
     IdentityFile ~/.ssh/[admin-keyfile].pub
     IdentitiesOnly Yes

   Host ssh-[account].alwaysdata.net
     User [account]
     IdentityFile ~/.ssh/[gitea-keyfile].pub
     IdentitiesOnly Yes
   ```

De cette façon, si vous vous connectez avec :

* `ssh [account]@ssh-[account].alwaysdata.net` : vous déclencherez l'invite de commandes interne de Gitea ; cette configuration suit l'URL SSH de Gitea telle qu'elle est affichée, et fonctionne pour tous les utilisateurs ;
* `ssh admin.ssh-[account].alwaysdata.net` : vous aurez accès à l'invite habituelle du shell via SSH, vous permettant d'effectuer des tâches d'administration dans votre compte en CLI.
