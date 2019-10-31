+++
url = "/fr/emails/créer-une-adresse-email/"
title = "Comment créer une adresse email"
menuTitle = "Créer une adresse email"
layout = "howto"
weight = 5
draft = false
tags = ["email"]
+++

À partir de la section **Emails > Adresses** de l'administration, vous pouvez créer des boîtes emails (à condition d'avoir [ajouté un nom de domaine]()).

![Interface d'administration : Liste des boîtes emails](/en/platform/emails/admin-panel_mailbox-list_fr.png)

Vous aurez alors un ensemble de champs à renseigner. En voici les précisions.

## Informations obligatoires

![Interface d'administration : Emails - informations obligatoires](/en/platform/emails/admin-panel_create-mailbox_required-infos_fr.png)

- _Domaine_ : nom de domaine de l'adresse à créer ;
- _Partie locale_ : partie à gauche du @ de l'adresse email (par exemple, si vous voulez créer contact@exemple.fr, la partie locale sera contact). Vous pouvez aussi créer [une adresse collectrice (catch-all)]().
- _Mot de passe_ : mot de passe nécessaire pour la connexion à cette adresse email.

## Antispam

L'antispam utilisé pour filtrer le courrier électronique publicitaire non souhaité (spam) est le logiciel libre [SpamAssassin](http://spamassassin.apache.org/).
![Interface d'administration : Emails - Antispam](/en/platform/emails/admin-panel_mailbox-antispam_fr.png)

- _Score_ : l'anti-spam attribue à chaque message un score suivant la probabilité qu'il s'agisse d'un spam. Les messages dépassant ce score seront stockés dans un dossier. Plus le score est bas, plus un email a la possibilité d'être marqué comme spam, il est donc préférable de laisser la valeur par défaut.
- _Dossier_ : dossier dans lequel les spams seront déplacés. Pour indiquer la corbeille, mettez « Trash ».
- _Score des spams à supprimer_ : les messages dépassant ce score seront directement supprimés, sans même être stockés dans le dossier des spams. À moins de savoir ce que vous faites, laissez la valeur par défaut.

## Antivirus

L'antivirus utilisé pour filtrer le courrier électronique potentiellement infecté est le logiciel libre [ClamAV](http://www.clamav.net/).
![Interface d'administration : Emails - Antivirus](/en/platform/emails/admin-panel_mailbox_antivirus_fr.png)

- _Dossier_ : si l'antivirus a jugé le message comme infecté, alors celui-ci est déplacé dans ce dossier. Pour indiquer la corbeille, mettez « Trash ». 

## Purge des dossiers

![Interface d'administration : Emails - Purge des dossiers](/en/platform/emails/admin-panel_mailbox_purge_fr.png)

- _Durée de conservation_ : après cette durée, les messages seront définitivement effacés ;
- _Dossiers_ : liste de dossiers à purger (séparés par un espace).

> Cette fonctionnalité est pertinente lors de l'utilisation de l'antispam et/ou l'antivirus : il est de votre initiative de vider leurs dossiers régulièrement.

## Redirection

![Interface d'administration : Emails - Redirection](/en/platform/emails/admin-panel_mailbox_redirection_fr.png)
- _Adresses_ : adresses vers lesquelles les emails seront redirigés (séparées par un espace) ;
- _Copie locale_ : en cochant cette case, tous les emails redirigés seront également copiés dans cette boîte email. Sinon les emails ne seront pas stockés, uniquement redirigés.

> Si vous utilisez l'antivirus et/ou l'antispam, les emails considérés comme frauduleux ne sont jamais redirigés, afin d'éviter de relayer ces mauvais messages vers des fournisseurs externes.

## Répondeur

![Interface d'administration : Emails - Répondeur automatique](/en/platform/emails/admin-panel_mailbox_responder_fr.png)

- _Fréquence de répétition_ : un seul message automatique par adresse sera envoyé pour la durée de cette période (en jours) ;
- _Sujet_ : sujet du message automatique ;
- _Message_ : corps du message automatique.

## Quota

![Interface d'administration : Emails - Quota](/en/platform/emails/admin-panel_mailbox_quota_fr.png)

- _Taille_ : taille maximale de la boîte email, en Mo (si ce quota est atteint, les nouveaux messages seront refusés).

> Sans précision de la taille maximum d'une boîte email, c'est l'espace disponible du pack qui fera office de plafond.

## Script Sieve

![Interface d'administration : Emails - Script Sieve](/en/platform/emails/admin-panel_mailbox_sieve_fr.png)
Cette technologie permet d'effectuer des opérations plus précises à la réception de vos messages. Si vous activez le script Sieve, alors son exécution aura lieu après toutes les opérations configurées sur le formulaire de création de votre boîte email.

- _Script_ : script au format [Sieve](http://fr.wikipedia.org/wiki/Sieve).

> N'utilisez pas la directive require, elle est déjà inclue par défaut. Le script final (avec nos propres directives) est stocké dans le fichier _~/admin/mail/[domaine]/[boite]/filter.sieve_ de votre compte. Vous pouvez le lire pour aider à déboguer votre script, mais pas l'éditer.
