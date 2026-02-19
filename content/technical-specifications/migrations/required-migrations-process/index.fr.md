+++
url = "/fr/caracteristiques-techniques/migrations/deroulement-migrations-obligatoires/"
title = "Cloud Privé : Déroulement des migrations obligatoires"
tags = ["migration"]
+++

Ces migrations sont effectuées à quatre mains avec le [support](https://admin.alwaysdata.com/support/).

## Recommandé

### Étape 1 - Faire les changements nécessaires
L'utilisateur prépare l'ensemble des comptes du serveur en suivant les recommandations de la page de documentation (comme sur le Cloud Public). Il est possible de revenir en arrière pour corriger des comportements problématiques.

Cette étape sert à tester le déplacement des bases de données, vérifier les paramètres de connexion de ses logiciels...

> Des serveurs de tests sont disponibles pour les bases de données.

Une fois la migration d'un compte vers le serveur de transit effectuée il sera aussi possible de faire un retour en arrière et de le repasser sur l'ancienne infrastructure *temporairement* en cas de souci.

{{< fig "images/migration-1.fr.png" "" >}}

## Obligatoire

### Étape 2 - Demande du serveur de transit
**Tous les comptes sont prêts.** L'utilisateur doit contacter le support pour qu'il prépare un serveur de transit.

{{< fig "images/migration-2.fr.png" "" >}}

### Étape 3 - Installation du serveur de transit
Le support prépare le serveur de transit d'une configuration équivalente au serveur client. L'installation peut durer plusieurs heures et précopie les fichiers et mails sur le serveur de transit.

> Cette étape dépend de la disponibilité de serveurs de transit correspondant à la configuration du serveur client le jour de la demande. __Il peut y avoir de l'attente.__

{{< fig "images/migration-3.fr.png" "" >}}

### Étape 4 - Migration des comptes sur la nouvelle infrastructure
Le serveur de transit est prêt. L'utilisateur peut migrer ses comptes - un par un - sur le serveur de transit, via le menu **Migrations** de l'interface serveur ou le menu **Avancé > Migrations** de l'interface compte.

> L'utilisateur est **autonome** lors de cette étape. Il peut effectuer ses migrations quand il le souhaite.

La migration des comptes entraîne une coupure par compte de quelques secondes à quelques heures ; selon la taille de chaque compte (particulièrement des bases de données). On compte en général une minute d'indisponibilité par giga de bases de données.

{{< fig "images/migration-4.fr.png" "" >}}

{{% notice tip %}}
Pour les domaines n'utilisant pas les DNS d'alwaysdata, pas besoin de faire le changement d'IP - *enregistrements A et AAAA*. Le serveur client fera la redirection de manière transparente.
{{% /notice %}}

### Étape 5 - Vérification après migration
L'utilisateur peut faire des modifications applicatives une fois un compte migré si besoin.

> Il lui est aussi possible de faire un retour en arrière et repasser *temporairement* sur l'ancienne infrastructure en cas de souci.

Une fois l'ensemble des comptes migrés il contacte le support pour que celui procède à la réinstallation de son serveur.

{{< fig "images/migration-5.fr.png" "" >}}

### Étape 6 - Réinstallation du serveur client
**Tous les comptes sont migrés sur la nouvelle infrastructure logicielle et sont sur le serveur de transit.**

Le support réinstalle le serveur client pour qu'il tourne sur la nouvelle infrastructure. Cela peut durer plusieures heures et précopie à les fichiers et mails.

> Le retour en arrière temporaire n'est alors plus possible.

{{< fig "images/migration-6.fr.png" "" >}}

{{% notice note %}}
Durant cette opération, les adresses IP du serveur client sont reroutées vers le serveur de transit pour que les services restent accessibles normalement. Une courte période d'indisponibilité de ces IP (autour d'une minute) est toutefois à prévoir. *Dans le cas où l'utilisateur utilise les serveurs DNS d'alwaysdata, le trafic aura été redirigé vers les IP du serveur de transit dès la migration des comptes - il n'y a alors aucune période d'indisponibilité à prévoir.*
{{% /notice %}}

### Étape 7 - Finalisation : redéplacement des comptes sur le serveur client
**Le serveur client est réinstallé.** Le support contacte l'utilisateur pour procéder au redéplacement des comptes. *Cette étape de finalisation peut être effectuée par le support en heure et jours ouvrés ou par l'utilisateur.*

Ce redéplacement final des comptes entraîne une coupure par compte équivalente à l'indisponibilité lors de la première migration.

{{< fig "images/migration-7.fr.png" "" >}}

### Étape 8 - Migration officiellement finie
Tous les comptes ont été redéplacés sur le serveur client réinstallé.

{{< fig "images/migration-8.fr.png" "" >}}


## Notes
- Le serveur de transit est mis à disposition pour la migration sans surcoût pour une période de **deux semaines maximum**. Si l'utilisateur n'a pas terminé la migration de l'ensemble de ses comptes au terme de cette période, le serveur de transit sera facturé au même coût que le serveur client (au prorata, jour par jour) — en plus du serveur d'origine qui reste facturé normalement.

- Si l'utilisateur souhaite tester la migration sur certains comptes avant de lancer la migration réelle ou s'il souhaite avoir accès à un serveur de transit plus longtemps (*sans payer*), il peut profiter de notre serveur de transit partagé à tous les clients dédiés et VPS. Néanmoins :
    - ce serveur peut ne pas correspondre à la configuration du serveur client ;
    - aucune précopie des fichiers et mails n'est effectuée : le temps de migration peut donc être allongé ;
    - les utilisateurs n'ont pas accès aux personnalisations serveurs et au parefeu qu'ils ont paramétré ;
    - la mise à disposition de ce serveur de transit partagé est validée au cas par cas par le support en fonction des caractéristiques du serveur client et de ses comptes.

- Si l'utilisateur est en charge de l'étape de finalisation, il a **une semaine** pour faire le déplacement de tous les comptes sans surcoût.

> Icônes : The Noun Project
