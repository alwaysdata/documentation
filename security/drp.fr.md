+++
url = "/fr/sécurité/pca/"
title = "Plan de continuité d'activité"
layout = "faq"
weight = 50
tags = ["sécurité", "récupération", "sauvegarde"]
+++

Notre architecture est conçue de manière à vous apporter le maximum de garanties sur la préservation de vos données, notamment en cas d'incident majeur sur nos unités de production.

Ces garanties *ne sont pas* optionnelles : elles sont embarquées par défaut dans la plate-forme et toutes nos offres en bénéficient.

## Données & Sauvegardes

### Mes données sont-elles sauvegardées ?

Les données de votre compte utilisateur sont sauvegardées automatiquement chaque jour, sans action de votre part. Elles sont conservées pendant 30 jours glissant.

### Quelles données sont concernées ?

L'ensemble des données de votre compte utilisateur est concerné par la sauvegarde :

- fichiers
- bases de données
- emails
- configurations

### Où sont situées ces sauvegardes ?

Ces sauvegardes sont hébergées dans un datacenter situé à plus de dix kilomètres des unités de production. Il est opéré par Illiad, tandis que les datacenters de productions sont gérés par Equinix.

### Comment pouvez-vous garantir l'accès aux sauvegardes depuis le système de fichier des comptes utilisateur ?

Les sauvegardes sont accessibles depuis votre système de fichier du compte utilisateur (via [SSH]({{< ref "remote-access/ssh" >}}), [SFTP]({{< ref "remote-access/sftp" >}})…) grâce au protocole NFS, qui nous permet de monter en lecture-seule, au travers du réseau, votre accès à vos sauvegardes.

### Comment puis-je récupérer ces sauvegardes ?

Vous pouvez effectuer une copie de vos sauvegardes depuis le système de fichiers de votre compte utilisateur (via [SSH]({{< ref "remote-access/ssh" >}}), [SFTP]({{< ref "remote-access/sftp" >}})…) en copiant les répertoires situés dans `$HOME/admin/backups/`.

Le répertoire `latest` est un raccourci vers la dernière sauvegarde disponible.

### Comment puis-je restaurer ces sauvegardes ?

Pour restaurer vos sauvegardes, [consultez la documentation disponible]({{< ref "backups" >}}).

## Réseau

### Comment est garanti l'accès au réseau ?

Chaque serveur dispose de deux arrivées réseau en fallback. En cas de rupture du lien principal, le lien secondaire est activé pour maintenir la connexion active.

Nous opérons nous-même le réseau au sein des datacenters.

### Comment est garanti l'accès à Internet ?

Notre accès Internet est garanti par quatre fournisseurs d'accès indépendants.

## Infrastructure matérielle

### Comment sont réparties les baies serveurs ?

Nos serveurs de production sont répartis dans plusieurs datacenters, plusieurs baies de stockage, et plusieurs datahall.

### Que se passe-t-il en cas de coupure / panne électrique ?

Chaque serveur dispose de deux alimentations, lui permettant de rester alimenté en cas de rupture matérielle.

Nos datacenters sont également équipés de générateurs de secours capable de fournir plusieurs heures de courant aux infrastructures en cas de panne du réseau principal.

### Comment le service est-il restauré en cas de dommage matériel ?

D'autres serveurs sont disponibles en sécurité, nous permettant de basculer rapidement vos services. En cas de nécessité impérieuse, nous pouvons également basculer sur un hébergeur partenaire en redéployant une infrastructure de secours avec vos dernières données.

### Les serveurs sont-ils redondés ?

Les données sur chaque serveur sont dupliquées sur deux disques en RAID1, pour palier une défaillance matériel des stockages.

Nous disposons d'une [offre Gold]({{< ref "accounts/billing/catalyst-prices" >}}#serveurs-gold-infogérés) offrant une redondance synchronisée des serveurs dans des datacenters séparés pour garantir la continuité de service.

### L'accès aux serveurs est-il sécurisé ?

Nos datacenters sont gérés par des partenaires appliquant des normes très strictes en matière d'accès au matériel, basées sur des permissions d'accès et de l'authentification biométriques.

### Quelles sont les garanties des data centers ?

Nos unités de production sont hébergées par [Equinix](https://www.equinix.com/data-centers/colocation/), leader mondial de la colocation en infrastructures International Business Exchange™ (IBX®). Ces datacenters sont [certifiés par de nombreux standards](https://www.equinix.com/data-centers/design/standards-compliance/) en matière de qualité et de sécurité.
