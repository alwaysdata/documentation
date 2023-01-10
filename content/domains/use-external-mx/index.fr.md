+++
url = "/fr/domaines/utiliser-des-mx-externes/"
title = "Comment utiliser un serveur mail externe"
menuTitle = "Utiliser des MX externes"
layout = "howto"
weight = 20
tags = ["dns", "domaine", "email"]
+++

Pour utiliser le serveur de messagerie d'un autre prestataire, il faut changer d'[enregistrements MX](https://fr.wikipedia.org/wiki/Enregistrement_Mail_eXchanger). Ils determinent le serveur de réception d'un courrier électronique.

1. Allez dans **Domaines > Details de [exemple.org] - 🔎 > Enregistrements DNS** ;
{{< fig "images/admin-panel_dns-record-list.fr.png" "Interface d'administration : liste des enregistrements DNS" >}}
2. Choisissez **Ajouter un enregistrement DNS** ;
3. Renseignez le formulaire.
{{< fig "images/admin-panel_add-mx.fr.png" "Interface d'administration : ajouter un enregistrement MX" >}}

Cela désactivera automatiquement nos enregistrements MX.

{{% notice warning %}}
Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant _exemple.org_ dans cette case, vous créerez un enregistrement pour _exemple.org.exemple.org_.
{{% /notice %}}

{{% notice note %}}
Un enregistrement ayant `@` comme nom d'hôte pour certains prestataires correspond au sous-domaine vide. Dans notre cas, la case **Nom d'hôte** devra être vide.
{{% /notice %}}

## Serveurs MX de différents prestataires

| Prestataire       | TTL   | Priorité | Valeur                                        |
|-------------------|-------|----------|-----------------------------------------------|
| Gandi             | 10800 | 10       | spool.mail.gandi.net                          |
|                   | 10800 | 50       | fb.mail.gandi.net                             |
| GSuite            | 3600  | 1        | aspmx.l.google.com                            |
|                   | 3600  | 5        | alt1.aspmx.l.google.com                       |
|                   | 3600  | 5        | alt2.aspmx.l.google.com                       |
|                   | 3600  | 10       | alt3.aspmx.l.google.com                       |
|                   | 3600  | 10       | alt4.aspmx.l.google.com                       |
| Microsoft Outlook | 3600  | 1        | [id_mx_microsoft].mail.protection.outlook.com |
| OVH               | 3600  | 1        | mx0.mail.ovh.net                              |
|                   | 3600  | 5        | mx1.mail.ovh.net                              |
|                   | 3600  | 50       | mx2.mail.ovh.net                              |
|                   | 3600  | 100      | mx3.mail.ovh.net                              |

{{% notice note %}}
[id_mx_microsoft] est généré aléatoirement par Microsoft selon le nom du domaine
{{% /notice %}}

## Outrepasser les serveurs MX

Il peut être utile de court-circuiter les MX externes pour joindre directement les MX d'alwaysdata.

Pour envoyer un email à `foobar@exemple.org` en passant par les MX d'alwaysdata (alors que les MX de `exemple.org` sont externes) :

- créez [l'adresse email]({{< ref "e-mails/create-an-e-mail-address" >}}) sur l'interface d'administration ;
- envoyez un email à :
    - `foobar%exemple.org@mx.alwaysdata.com` si le compte est sur le Cloud Public ;
    - `foobar%exemple.org@serveur.alwaysdata.com` si le compte est sur un Cloud Privé (`serveur` à remplacer par le nom du serveur).
