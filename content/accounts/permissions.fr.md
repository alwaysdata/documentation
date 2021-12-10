+++
url = "/fr/comptes/permissions/"
title = "Permissions"
weight = 12
layout = "man"
tags=["facturation", "environnement technique", "interface d'administration"]
+++

Parce que l'hébergement de vos données implique très souvent différents acteurs, notre interface d'administration vous permet d'octroyer des permissions sur différents niveaux de granularité.

## Permissions globales

- _Gestion des comptes_ : délègue l'ouverture de comptes à vos associés  ;
- _[Facturation]({{< ref "accounts/billing" >}})_ : permet aux services comptables ou administratifs de recevoir une alerte lorsque le solde de votre compte est négatif ou lors de l'ouverture d'un ticket concernant la facturation par nos services ;
- _Technique au niveau des comptes_ : permet aux équipes techniques de gérer l'aspect purement technique de votre hébergement (sites, emails, bases de données..) sans se soucier de sa gestion et facturation ;
- _Technique au niveau des serveurs_ : disponible sur serveurs dédiés et VPS, votre administrateur réseau pourra gérer règles de firewall, queue d'envoi des emails et bien d'autres...

## Permissions techniques

Que ce soit pour l'aspect purement technique de vos comptes ou de vos serveurs, votre organisation impose un découpage des responsabilités techniques en interne entre plusieurs personnes ou groupes de personnes ou entre sous-traitants externes qui ont besoin d'accès même restreints. Vous pouvez donc définir des permissions par **service** et par **compte** ou **serveur**.

### Par compte

- _Contact technique_ : soyez alerté lors de l'ouverture d'un ticket technique par nos services concernant le compte ;
- _Consommation_ : suivez la consommation d'espace disque ;
- _[Statistiques]({{< ref "analytics" >}})_ : analysez les visites de vos sites ;
- _[Sites]({{< ref "sites" >}})_ : configurez les sites web et l'environnement Apache ;
- _[Domaines]({{< ref "domains" >}})_ ;
- _[Emails]({{< ref "e-mails" >}})_ ;
- _[Bases de données]({{< ref "databases" >}})_ ;
- _[FTP]({{< ref "remote-access/ftp" >}})_ ;
- _[SSH]({{< ref "remote-access/ssh" >}})_ ;
- _[WebDAV]({{< ref "remote-access/webdav" >}})_ ;
- _[Environnement]({{< ref "/languages" >}})_ : configurez les langages de programmation ;
- _Processus_ : processus HTTP en exécution pouvant être analysés ou tués ;
- _[Adresses IP]({{< ref "advanced/dedicated-ip-addresses" >}})_ : louer des IP dédiées pour HTTP ou SMTP ;
- _[Certificats SSL]({{< ref "security/ssl-tls" >}})_ ;
- _[Migration]({{< ref "advanced/migrations" >}})_ ;
- _[Tâches planifiées]({{< ref "tasks" >}})_ ;
- _[Sauvegardes]({{< ref "backups" >}})_ ;
- _[Services]({{< ref "services" >}})_.

### Par serveur

- _Contact technique_ : soyez alerté lors de l'ouverture d'un ticket technique par nos services concernant un serveur ;
- _[Utilisateurs SSH]({{< ref "remote-access/ssh/install-globally-ssh-keys" >}})_ : installez des clés SSH pour un accès simplifié aux différents comptes ;
- _[Règles firewall]({{< ref "security/network/configure-firewall" >}})_ : créez des règles firewall et consultez le bannissement automatique d'IP ;
- _Configuration SMTP_ : gérez la queue d'envoi d'emails, le relais SMTP et le score de spam ;
- _Utilisateurs base de données_ : donnez un accès global aux bases de données de l'ensemble des comptes ;
- _Configuration SSL_ : choisissez le certificat SSL à retourner sur le serveur (`*.alwaysdata.net` par défaut) et la [configuration TLS]({{< ref "security/ssl-tls/configure-tls" >}}) du serveur ;
- _Configuration HTTP_ : choisissez un site web qui sera la [page d'accueil par défaut]({{< ref "sites/misc#site-http-par-defaut" >}}) et la [période de rétention des logs]({{< ref "remote-access/admin-directory#logs" >}}) ;
- _Consommation_ : suivez la consommation d'espace disque sur l'ensemble de votre serveur ;
- _[Ressources]({{< ref "advanced/system-resources-alerts-and-limitations" >}})_ : modifiez les limitations de ressources par compte (ex : consommation RAM).

{{% notice note %}}
Il est possible de supprimer les permissions que nous avons sur d'autres profils. La suppression ne s'effectue pas finement, elles seront toutes supprimées.
{{% /notice %}}

{{% notice note %}}
En créant des permissions à une adresse email n'ayant pas de profil alwaysdata, cette personne recevra un email pour initialiser son profil.
{{% /notice %}}
