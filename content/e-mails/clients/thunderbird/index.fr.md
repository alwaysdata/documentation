+++
url = "/fr/emails/clients/thunderbird/"
title = "Comment configurer Thunderbird"
layout = "howto"
tags = ["email", "thunderbird", "mozilla"]
hidden = true
+++

Dans nos exemples nous considérons les informations suivantes :

- Nom du compte : `test`
- Adresse email : `test@alwaysdata.net`

Elles sont à remplacer par vos informations de connexion personnelles :

|Serveur|Service|Information||
|---|---|---|---|
|Entrant|IMAP|Nom d'hôte|imap-*[compte]*.alwaysdata.net|
|||Port|993|
|||Sécurité de la connexion|Sera automatiquement choisi|
|||Méthode d'authentification|Mot de passe normal|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@exemple.com*|
|||Mot de passe|Le mot de passe de votre adresse email|
||POP3|Nom d'hôte| pop-*[compte]*.alwaysdata.net|
|||Port| 995|
|||Sécurité de la connexion|Sera automatiquement choisi|
|||Méthode d'authentification|Mot de passe normal|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@exemple.com*|
|||Mot de passe|Le mot de passe de votre adresse email|
|Sortant|SMTP|Nom d'hôte|smtp-*[compte]*.alwaysdata.net|
|||Port|587|
|||Sécurité de la connexion|Sera automatiquement choisi|
|||Méthode d'authentification|Mot de passe normal|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@exemple.com*|
|||Mot de passe|Le mot de passe de votre adresse email|

{{% notice tip %}}
 *[compte]* doit être remplacé par le nom de votre compteet *contact\@exemple.com* par votre adresse email. Ils sont définis dans le menu **Emails > Adresses** de notre interface d'administration.
{{% /notice %}}

Rendez-vous dans **Comptes > Configurer un compte : Courrier électronique**.

{{< fig "images/thunderbird_new-account.fr.png" "Thunderbird : créer un compte" >}}

Pour la modifier une fois créée, rendez-vous dans **Comptes > Voir les paramètres pour ce compte** ou dans la barre de menu **Édition > Paramètres des comptes** :

- Pour le courrier _entrant_, rendez-vous dans les **Paramètres serveur** ;
{{< fig "images/thunderbird_imap-settings.fr.png" "Thunderbird : paramètres serveur entrant" >}}
- Pour le courrier _sortant_, rendez-vous dans **Serveur sortant SMTP**.
{{< fig "images/thunderbird_smtp-settings.fr.png" "Thunderbird : paramètres serveurs sortant" >}}
