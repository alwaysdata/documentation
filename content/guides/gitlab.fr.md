+++
url = "/fr/guides/gitlab/"
title = "Comment installer GitLab"
layout = "howto"
hidden = true
tags = ["developpement"]
+++

[GitLab](https://about.gitlab.com/) est une plateforme de développement logiciel avec wiki, suivi de bugs, revue de code, intégration et déploiement continus...

Il est possible de l'installer en **[Cloud Privé](https://www.alwaysdata.com/fr/hebergement-infogere)**, voici les étapes à suivre.

**Les SGBD [PostgreSQL]({{< ref "databases/postgresql" >}}) et [Redis]({{< ref "databases/redis" >}}) devront être installés sur le serveur.** Si ce n'est pas le cas, [contactez le support](https://admin.alwaysdata.com/support/add).

L'installation doit être effectuée sur un **compte vide**. Nous considérons les informations suivantes pour notre exemple :

- Nom du compte : `foobar`
- Version de Ruby : `2.7`
- Version de Node.js : `14.17`

GitLab a impérativement besoin de ces versions qui sont à définir dans le menu **Environnement**.

## Installation

1. Créez la base de données PostgreSQL dans le menu **Bases de données > PostgreSQL** en activant les extensions `pg_trgm` et `btree_gist`.

2. Si vous utilisez une [limite de RAM]({{< ref "advanced/system-resources-alerts-and-limitations" >}}) inférieure à 10 Go, augmentez-la dans le menu **Avancé > Ressources**.

3. Lancez les commandes suivantes en [SSH]({{< ref "remote-access/ssh" >}}) à la racine du compte :

```sh
npm install --global yarn

git clone https://gitlab.com/gitlab-org/gitaly.git -b 14-4-stable gitaly
cd gitaly/
mkdir ~/local
make git GIT_PREFIX=~/local/
export PATH=~/local/bin/:$PATH
cd
rm -fr ~/gitaly

git clone https://gitlab.com/gitlab-org/gitlab-foss.git -b 14-4-stable gitlab
cd gitlab/

cp config/gitlab.yml.example config/gitlab.yml
sed -i "s,/home/git/,/home/$(whoami)/,g" config/gitlab.yml
sed -i "s,# user: git,user: $(whoami)," config/gitlab.yml
sed -i "s,bin_path: /usr/bin/git,bin_path: /home/$(whoami)/local/bin/git," config/gitlab.yml
```

---
**Modification du fichier `config/gitlab.yml`**

```sh
nano config/gitlab.yml
```

Dans la section *production > gitlab* modifiez :
- la ligne `host: localhost` pour renseigner l'adresse voulue du site Gitlab. Cela peut par exemple être l'adresse du compte : `foobar.alwaysdata.net`.
- le paragraphe `email` par les informations emails voulues. Par exemple :

```yml
email_from: foobar@alwaysdata.net
email_reply_to: foobar@alwaysdata.net
```
---

```sh
cp config/secrets.yml.example config/secrets.yml
chmod 0600 config/secrets.yml
mkdir -p public/uploads
chmod 0700 public/uploads

cp config/puma.rb.example config/puma.rb
sed -i "s,/home/git/,/home/$(whoami)/,g" config/puma.rb

git config --global gc.auto 0
git config --global repack.writeBitmaps true
git config --global receive.advertisePushOptions true
git config --global core.fsyncObjectFiles true

cp config/resque.yml.example config/resque.yml

cp config/database.yml.postgresql config/database.yml
```

---
**Modification du fichier `config/database.yml`**

```sh
nano config/database.yml
```

Remplacez les clés `database`, `username` , `host` et `password` et la première section (production) par celles de votre compte. Exemple :

```yml
database: foobar_gitlab
username: foobar
password: "son mot de passe"
host: postgresql-foobar.alwaysdata.net
```

La base de données est celle créée en début de ce guide.

---

```sh
bundle config set --local deployment 'true'
bundle config set --local without 'development test mysql aws kerberos'
bundle install

bundle exec rake gitlab:shell:install RAILS_ENV=production

bundle exec rake "gitlab:workhorse:install[/home/$(whoami)/gitlab-workhorse]" RAILS_ENV=production

cd
git clone https://gitlab.com/gitlab-org/gitlab-pages.git
cd gitlab-pages
git checkout v$(<~/gitlab/GITLAB_PAGES_VERSION)
make

cd ~/gitlab
bundle exec rake "gitlab:gitaly:install[/home/$(whoami)/gitaly,/home/$(whoami)/repositories]" RAILS_ENV=production
~/gitlab/bin/daemon_with_pidfile ~/gitlab/tmp/pids/gitaly.pid ~/gitaly/_build/bin/gitaly ~/gitaly/config.toml >> ~/gitlab/log/gitaly.log 2>&1 &

bundle exec rake gitlab:db:configure RAILS_ENV=production

cp lib/support/init.d/gitlab ~/init
cp lib/support/init.d/gitlab.default.example ~/default
sed -i "s,/etc/default/gitlab,~/default,g" ~/init
sed -i 's,^exit$,[ "$2" = "-f" ] \&\& sleep infinity,g' ~/init
sed -i "s,app_user=\"git\",app_user=\"$(whoami)\"," ~/default
sed -i 's,-listenNetwork unix -listenAddr $socket_path/gitlab-workhorse.socket,-listenNetwork tcp -listenAddr [::]:8100,' ~/default

bundle exec rake gettext:compile RAILS_ENV=production
yarn install --production --pure-lockfile

bundle exec rake gitlab:assets:compile RAILS_ENV=production NODE_ENV=production
```

C'est cette dernière commande qui nécessite une quantité de RAM importante. La quantité nécessaire varie en fonction du nombre de cores et il peut être nécessaire de l'augmenter si vous rencontrez des erreurs à cette étape.

## Création du service

Créez un [service]({{< ref "services" >}}) avec les détails suivants :

  * *Nom* : GitLab
  * *Commande* : `~/init restart -f`

## Création du site

Créez un [site]({{< ref "sites/add-a-site" >}}) avec les détails suivants :

  * *Nom* : GitLab
  * *Type* : Programme utilisateur
  * *Adresses* : l'adresse renseignée dans le fichier config.yml - Dans notre exemple `foobar.alwaysdata.net`
  * *Commande* : `true`

Ce site doit impérativement écouter sur le port `8100`, à vérifier dans le texte explicatif du champ *Commande*. C'est normalement le cas, puisque c'est le seul site.

{{% notice note %}}
Le nom d'utilisateur du compte par défaut est *root*. Vous choisirez son mot de passe lors de la première connexion au site et pourrez changer son nom d'utilisateur par la suite.
{{% /notice %}}
