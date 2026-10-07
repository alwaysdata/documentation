---
permalink: /fr/docs/caracteristiques-techniques/pca/
title: Plan de continuité d'activité
eleventyNavigation:
  key: Plan de continuité d'activité
  parent: Caractéristiques techniques
  order: 4
---

Notre architecture est conçue de manière à vous apporter le maximum de garanties sur la préservation de vos données, notamment en cas d'incident majeur sur nos unités de production.

Ces garanties *ne sont pas* optionnelles : elles sont embarquées par défaut dans la plate-forme et toutes nos offres en bénéficient.

## Données & Sauvegardes

**<p style="text-align:center;">Mes données sont-elles sauvegardées ?</p>**

Les données de votre compte utilisateur sont sauvegardées automatiquement chaque jour, sans action de votre part. [Selon l'offre choisie](/fr/docs/hebergement-web/sauvegardes/), elles sont conservées jusqu'à 30 jours glissants.

**<p style="text-align:center;">Quelles données sont concernées ?</p>**

L'ensemble des données de votre compte utilisateur est concerné par la sauvegarde :

- fichiers
- bases de données
- emails

**<p style="text-align:center;">Où sont situées ces sauvegardes ?</p>**

Ces sauvegardes sont hébergées dans un datacenter situé à plusieurs kilomètres des unités de production. Cette notion est [contractuelle](https://www.alwaysdata.com/fr/mentions-legales/) (point 4.6 des conditions particulières d'hébergement).

Ce datacenter est opéré par [Interxion](https://www.digitalrealty.fr/data-centers), tandis que les datacenters de productions sont gérés par [Equinix](https://www.equinix.com/).

**<p style="text-align:center;">Comment pouvez-vous garantir l'accès aux sauvegardes depuis le système de fichier des comptes utilisateur ?</p>**

Les sauvegardes sont accessibles depuis votre système de fichier du compte utilisateur (via [SSH](/fr/docs/hebergement-web/acces-distant/ssh/), [SFTP](/fr/docs/hebergement-web/acces-distant/sftp/)…) grâce au protocole NFS, qui nous permet de monter en lecture-seule, au travers du réseau, votre accès à vos sauvegardes.

**<p style="text-align:center;">Comment puis-je récupérer ces sauvegardes ?</p>**

Vous pouvez effectuer une copie de vos sauvegardes depuis le système de fichiers de votre compte utilisateur (via [SSH](/fr/docs/hebergement-web/acces-distant/ssh/), [SFTP](/fr/docs/hebergement-web/acces-distant/sftp/)…) en copiant les répertoires situés dans `/home/[compte]/admin/backup/`.

Le répertoire `latest` est un raccourci vers la dernière sauvegarde disponible.

**<p style="text-align:center;">Comment puis-je restaurer ces sauvegardes ?</p>**

Pour restaurer vos sauvegardes, [consultez la documentation disponible](/fr/docs/hebergement-web/sauvegardes/).

## Réseau

**<p style="text-align:center;">Comment est garanti l'accès au réseau ?</p>**

Chaque serveur dispose de deux arrivées réseau. En cas de rupture du lien principal, le lien secondaire est automatiquement activé pour maintenir la connexion active.

Nous opérons nous-même notre réseau au sein des datacenters.

**<p style="text-align:center;">Comment est garanti l'accès à Internet ?</p>**

Notre accès Internet est garanti par quatre fournisseurs d'accès indépendants.

Nous sommes également membre du RIPE, disposons de [notre propre numéro d'AS (AS60362)](https://bgp.tools/as/60362), et de nos propres plages d'IP.

## Infrastructure matérielle

**<p style="text-align:center;">Comment sont réparties les baies serveurs ?</p>**

Nos serveurs de production sont répartis dans plusieurs datacenters, plusieurs baies, et plusieurs salles.

**<p style="text-align:center;">Que se passe-t-il en cas de coupure / panne électrique ?</p>**

Chaque serveur dispose de deux alimentations chacune sur des circuits entièrement autonomes (2N), lui permettant de rester alimenté en cas de rupture matérielle.

Nos datacenters sont également équipés de générateurs de secours capables de fournir plusieurs jours de courant aux infrastructures en cas de panne du réseau principal.

**<p style="text-align:center;">Comment le service est-il restauré en cas de dommage matériel ?</p>**

D'autres serveurs sont disponibles en sécurité, nous permettant de basculer rapidement vos services. En cas de nécessité impérieuse, nous pouvons également basculer sur un hébergeur partenaire en redéployant une infrastructure de secours avec vos dernières données.

**<p style="text-align:center;">Les serveurs sont-ils redondés ?</p>**

Les données sur chaque serveur sont dupliquées sur deux disques en RAID1, pour palier une défaillance matérielle des stockages.

Nous disposons d'une [offre Gold](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) offrant une redondance synchronisée des serveurs dans des datacenters séparés pour garantir la continuité de service.

**<p style="text-align:center;">L'accès aux serveurs est-il sécurisé ?</p>**

Nos datacenters sont gérés par des partenaires appliquant des normes très strictes en matière d'accès au matériel, basées sur des permissions d'accès et de l'authentification biométrique.

**<p style="text-align:center;">Quelles sont les garanties des data centers ?</p>**

Nos unités de production sont hébergées par [Equinix](https://www.equinix.com/data-centers/colocation/), leader mondial de la colocation en infrastructures International Business Exchange™ (IBX®). Ces datacenters sont [certifiés par de nombreux standards](https://www.equinix.com/fr/fr/data-centers/design/standards-compliance) en matière de qualité et de sécurité.
