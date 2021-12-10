+++
url = "/fr/avancé/migrations/effectuer-une-migration-vps-ou-dédié/déroulement-migrations-obligatoires"
title = "Serveurs VPS/Dédiés: Déroulement des migrations obligatoires"
layout = "man"
hidden = true
tags = ["migration", "serveur dédié", "serveur gold", "serveur vps"]
+++

Ces migrations sont effectuées à quatre mains avec le [support](https://admin.alwaysdata.com/support/).

## Étape 1 - Préparation des comptes
Le client prépare l'ensemble des comptes du serveur en suivant les recommandations de la page de documentation (comme sur le Cloud Public). Il est possible de revenir en arrière pour corriger des comportements problématiques.

*Des serveurs de tests sont disponibles pour les bases de données.*

{{< fig "images/migration-1.fr.png" "" >}}

## Étape 2 - Demande du serveur de transit
**Tous les comptes sont prêts.** Le client doit contacter le support pour qu'il :

- supprime de votre serveur toutes les versions des langages qui n'existent plus sous la nouvelle infrastructure logicielle, ce qui permettra au client de vérifier une dernière fois qu'il est prêt. Cette étape est réversible, si nécessaire ;
- prépare un serveur de transit.

{{< fig "images/migration-2.fr.png" "" >}}

## Étape 3 - Installation du serveur de transit
Le support prépare le serveur de transit de même configuration que le serveur client. L'installation peut durer plusieurs heures et précopie les fichiers et mails sur le serveur de transit.

*Cette étape dépend de la disponibilité de serveurs de transit correspondant à la configuration du serveur client le jour de la demande. __Il peut y avoir de l'attente.__*

{{< fig "images/migration-3.fr.png" "" >}}

## Étape 4 - Migration des comptes sur la nouvelle infrastructure
Le serveur de transit est prêt. Le client peut migrer ses comptes - un par un - sur le serveur de transit, via le menu **Migrations** de l'interface serveur ou le menu **Avancé > Migrations** de l'interface compte.

Le client est **autonome** lors de cette étape. Il peut effectuer ses migrations quand il le souhaite.

La migration des comptes entraîne une coupure par compte de quelques secondes à quelques heures ; selon la taille de chaque compte (particulièrement des bases de données). On compte en général une minute d'indisponibilité par giga de bases de données.

{{< fig "images/migration-4.fr.png" "" >}}

{{% notice tip %}}
Pour les domaines n'utilisant pas les DNS d'alwaysdata, pas besoin de faire le changement d'IP - *enregistrements A et AAAA*. Le serveur client fera la redirection de manière transparente.
{{% /notice %}}

{{% notice tip %}}
Pour un domaine n'utilisant pas les serveurs DNS d'alwaysdata mais ses serveurs emails (MX), l'enregistrement `MX 5 serveur.alwaysdata.net` est à supprimer chez le prestataire DNS. `MX 10 mx1.alwaysdata.com` et `MX 20 mx2.alwaysdata.com` doivent être gardés.
{{% /notice %}}

## Étape 5 - Vérification après migration
Le client peut faire des modifications applicatives une fois un compte migré si besoin.

Une fois l'ensemble des comptes migrés il contacte le support pour que celui procède à la réinstallation de son serveur.

{{< fig "images/migration-5.fr.png" "" >}}

## Étape 6 - Réinstallation du serveur client
**Tous les comptes sont migrés sur la nouvelle infrastructure logicielle et sont sur le serveur de transit.**

Le support réinstalle le serveur client pour qu'il tourne sur la nouvelle infrastructure. Cela peut durer plusieures heures et précopie à les fichiers et mails.

{{< fig "images/migration-6.fr.png" "" >}}

{{% notice note %}}
Durant cette opération, les adresses IP du serveur client sont reroutées vers le serveur de transit pour que les services restent accessibles normalement. Une courte période d'indisponibilité de ces IP (autour d'une minute) est toutefois à prévoir. *Dans le cas où le client utilise les serveurs DNS d'alwaysdata, le trafic aura été redirigé vers les IP du serveur de transit dès la migration des comptes - il n'y a alors aucune période d'indisponibilité à prévoir.*
{{% /notice %}}

## Étape 7 - Redéplacement des comptes sur le serveur client
**Le serveur client est réinstallé.** Le support contacte le client pour procéder au redéplacement des comptes de manière transparente. *Ce déplacement peut avoir lieu en heures et jours ouvrés.*

Ce redéplacement final des comptes entraîne une coupure par compte équivalente à l'indisponibilité lors de la première migration.

{{< fig "images/migration-7.fr.png" "" >}}

## Étape 8 - Migration officiellement finie
Tous les comptes ont été redéplacés sur le serveur client réinstallé.

{{< fig "images/migration-8.fr.png" "" >}}

{{% notice note %}}
Le serveur de transit est sera mis à disposition sans surcoût pour une période de **deux semaines maximum**. Si le client n'a pas terminé la migration de l'ensemble de ses comptes au terme de cette période, le serveur de transit sera facturé au même coût que le serveur client (au prorata, jour par jour) — en plus du serveur d'origine qui reste facturé normalement.
{{% /notice %}}

---
Icônes : The Noun Project

