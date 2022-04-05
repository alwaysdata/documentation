+++
title = "Installing GitLab"
layout = "howto"
hidden = true
tags = ["development"]
+++

[GitLab](https://about.gitlab.com/) is a software development platform with wiki, issue tracking, code review, continuous integration and deployment...

It is possible to install it in **[Private Cloud - dedicated and Gold servers](https://www.alwaysdata.com/fr/private-cloud)**, here are the steps to follow.

**[PostgreSQL]({{< ref "databases/postgresql" >}}) and [Redis]({{< ref "databases/redis" >}}) must be installed on the server.** If it's not the case, [contact the support](https://admin.alwaysdata.com/support/add).

The installation must be done on an **empty account**. We consider the following information for our example:

- Account name: `foobar`
- Ruby version: `2.7`
- Node.js version: `14.17`

GitLab needs these versions which must be defined in the **Environment** menu.

## Installation

1. Create the PostgreSQL database in the menu **Databases > PostgreSQL** and enable `pg_trgm` and `btree_gist` extensions.

2. If you are using a [RAM limit]({{< ref "advanced/system-resources-alerts-and-limitations" >}}) of less than 10 GB, increase it in the **Advanced > Resources** menu.

3. Launch the following commands in [SSH]({{< ref "remote-access/ssh" >}}) at the root of the account:

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
**File modification - `config/gitlab.yml`**

```sh
nano config/gitlab.yml
```

In the *production > gitlab* section change:
- the `host: localhost` string to fill in the desired address of the GitLab site. This can be for example the account address: `foobar.alwaysdata.net`.
- the `email` paragraph with the desired email information. For example:

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
**File modification - `config/database.yml`**

```sh
nano config/database.yml
```
Replace the `database`, `username` , `host` and `password` keys and the first section (production) with those of your account. Example:

```yml
database: foobar_gitlab
username: foobar
password: "its password"
host: postgresql-foobar.alwaysdata.net
```

The database is the one created earlier in this guide.

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

It is this last command that requires a significant amount of RAM. The amount needed depends on the number of cores and it may be necessary to increase it if you encounter errors at this stage.

## Service creation

Create a [service]({{< ref "services" >}}) with the following details:

  * *Name*: GitLab
  * *Command*: `~/init restart -f`

## Website creation

Create a [website]({{< ref "sites/add-a-site" >}}) with the following details:

  * *Name*: GitLab
  * *Type*: User program
  * *Addresses*: the address specified in the config.yml file - In our example `foobar.alwaysdata.net`
  * *Command*: `true`
  
This site must listen on port `8100`, check in the explanatory text of the *Command* field. This is normally the case, since it is the only site.

{{% notice note %}}
The default account’s username is *root*. You will choose its password at the first website connection and will be able to change the username afterwards.
{{% /notice %}}
