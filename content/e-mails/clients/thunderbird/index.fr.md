+++
url = "/fr/emails/clients/thunderbird/"
title = "Configurer Thunderbird"
tags = ["email", "thunderbird", "mozilla"]
+++

## Général

{{% notice tip %}}
Pour les domaines utilisant nos serveurs DNS, l'*autoconfiguration* Thunderbird est utilisable. Vous n'avez qu'à indiquer votre nom d'utilisateur (adresse email) et votre mot de passe. Les autres paramètres sont automatiquement générés.
{{% /notice %}}

|Serveur|Service|Information||
|---|---|---|---|
|Entrant|IMAP|Nom d'hôte|imap-*[compte]*.alwaysdata.net|
|||Port|993|
|||Sécurité de la connexion|Sera automatiquement choisi|
|||Méthode d'authentification|Mot de passe normal|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@example.org*|
|||Mot de passe|Le mot de passe de votre adresse email|
||POP3|Nom d'hôte| pop-*[compte]*.alwaysdata.net|
|||Port| 995|
|||Sécurité de la connexion|Sera automatiquement choisi|
|||Méthode d'authentification|Mot de passe normal|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@example.org*|
|||Mot de passe|Le mot de passe de votre adresse email|
|Sortant|SMTP|Nom d'hôte|smtp-*[compte]*.alwaysdata.net|
|||Port|465|
|||Sécurité de la connexion|Sera automatiquement choisi|
|||Méthode d'authentification|Mot de passe normal|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@example.org*|
|||Mot de passe|Le mot de passe de votre adresse email|


*`[compte]`* doit être remplacé par le nom de votre compte et *`contact@example.org`* par votre adresse email. Ils sont définis dans le menu **Emails > Adresses** de notre interface d'administration.

## Captures d'écran

Dans notre exemple nous considérons les informations suivantes (à remplacer par vos informations de connexion personnelles) :

- Nom du compte : `test`
- Adresse email : `test@alwaysdata.net`

Rendez-vous dans **Comptes > Configurer un compte : Courrier électronique**.

{{< fig "images/thunderbird_new-account.fr.png" "Thunderbird : créer un compte" >}}

Pour la modifier une fois créée, rendez-vous dans **Comptes > Voir les paramètres pour ce compte** ou dans la barre de menu **Édition > Paramètres des comptes** :

- Pour le courrier _entrant_, rendez-vous dans les **Paramètres serveur** ;
{{< fig "images/thunderbird_imap-settings.fr.png" "Thunderbird : paramètres serveur entrant" >}}
- Pour le courrier _sortant_, rendez-vous dans **Serveur sortant SMTP**.
{{< fig "images/thunderbird_smtp-settings.fr.png" "Thunderbird : paramètres serveurs sortant" >}}
