+++
url = "/fr/plate-forme/administration/permissions/"
title = "Permissions"
weight = 5
chapter = true
+++

# Permissions

Parce que l'hébergement de vos données implique très souvent différents acteurs, notre interface d'administration vous permet d'octroyer des permissions sur différents niveaux de granularité.

- [QuickStart]()
- [How-Tos]()
- [Troubleshooting and FAQs]()

## Permissions globales

- _Gestion des comptes_ : délègue l'ouverture de comptes à vos associés  ;
- _[Facturation]()_ : permet aux services comptables ou administratifs de recevoir une alerte lorsque le solde de votre compte est négatif ou lors de l'ouverture d'un ticket concernant la facturation par nos services ;
- _Technique au niveau des comptes_ : permet aux équipes techniques de gérer l'aspect purement technique de votre hébergement (sites, emails, bases de données..) sans se soucier de sa gestion et facturation ;
- _Technique au niveau des serveurs_ : disponible sur serveurs dédiés et VPS, votre administrateur réseau pourra gérer règles de firewall, queue d'envoi des emails et bien d'autres...

## Permissions techniques

<div style="text-align: left">
Que ce soit pour l'aspect purement technique de vos comptes ou de vos serveurs, votre organisation impose un découpage des responsabilités techniques en interne entre plusieurs personnes ou groupes de personnes ou entre sous-traitants externes qui ont besoin d'accès même restreints. Vous pouvez donc définir des permissions par <b>service</b> et par <b>compte</b> ou <b>serveur</b>.
</div>

### Par compte

- _Contact technique_ : soyez alerté lors de l'ouverture d'un ticket technique par nos services concernant le compte ;
- _Consommation_ : suivez la consommation d'espace disque ;
- _[Statistiques]({{< ref "platform/analytics" >}})_ : analysez les visites de vos sites ;
- _[Sites]({{< ref "platform/websites" >}})_ : configurez les sites web et l'environnement Apache ;
- _[Domaines]({{< ref "platform/domains" >}})_ ;
- _[Emails]({{< ref "platform/emails" >}})_ ;
- _[Bases de données]()_ ;
- _[FTP]({{< ref "platform/remote-access/ftp" >}})_ ;
- _[SSH]({{< ref "platform/remote-access/ssh" >}})_ ;
- _[WebDAV]({{< ref "platform/remote-access/webdav" >}})_ ;
- _[Environnement]()_ : configurez les langages de programmation ;
- _[Processus]()_ : processus HTTP en exécution pouvant être analysés ou tués ;
- _Adresses IP_ : achetez des IP dédiées pour HTTP ou SMTP ;
- _[Certificats SSL]({{< ref "security/certificates" >}})_ ;
- _[Migration]({{< ref "platform/advanced/migration" >}})_ ;
- _[Tâches planifiées]({{< ref "platform/tasks" >}})_ ;
- _[Sauvegardes]({{< ref "platform/backups" >}})_.

### Par serveur

- _Contact technique_ : soyez alerté lors de l'ouverture d'un ticket technique par nos services concernant un serveur ;
- _Utilisateurs SSH_ : installez des [clés SSH]() pour un accès simplifié aux différents comptes ;
- _[Règles firewall]()_ : créez des règles firewall et consultez le bannissement automatique d'IP ;
- _Configuration SMTP_ : gérez la queue d'envoi d'emails, du relais SMTP et score de spam ;
- _Utilisateurs base de données_ : donnez un accès global aux bases de données de l'ensemble des comptes ;
- _Configuration SSL_ : choisissez le certificat SSL à retourner sur le serveur (*.alwaysdata.net par défaut) ;
- _Configuration HTTP_ : choisissez un site web qui sera la page d'acceuil par défaut ;
- _Consommation_ : suivez la consommation d'espace disque sur l'ensemble de votre serveur ;
- _Ressources_ : modifiez les limitations de ressources par compte (ex : consommation RAM).
