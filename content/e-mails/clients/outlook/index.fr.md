+++
url = "/fr/emails/clients/outlook/"
title = "Comment configurer Outlook"
layout = "howto"
tags = ["email", "outlook", "microsoft"]
hidden = true
+++

Dans nos exemples nous considérons les informations suivantes :

- Nom du compte : `test`
- Adresse email : `test@alwaysdata.net`

Elles sont à remplacer par vos informations de connexion personnelles :

|Serveur|Service|Information||
|---|---|---|---|
|Entrant|IMAP|Serveur|imap-*[compte]*.alwaysdata.net|
|||Port|993|
|||Méthode de chiffrement|Sera automatiquement choisi|
|||Méthode d'authentification|Exiger l'authentification par mot de passe sécurisé (SPA) lors de la connexion|
|||Adresse de courrier|Votre adresse email - par exemple *contact\@exemple.com*|
|||Mot de passe|Le mot de passe de votre adresse email|
||POP3|Serveur| pop-*[account]*.alwaysdata.net|
|||Port| 995|
|||Méthode de chiffrement|Sera automatiquement choisi|
|||Méthode d'authentification|Exiger l'authentification par mot de passe sécurisé (SPA) lors de la connexion|
|||Adresse de courrier|Votre adresse email - par exemple *contact\@exemple.com*|
|||Mot de passe|Le mot de passe de votre adresse email|
|Sortant|SMTP|Serveur|smtp-*[account]*.alwaysdata.net|
|||Port|587|
|||Méthode de chiffrement|Sera automatiquement choisi|
|||Méthode d'authentification|Exiger l'authentification par mot de passe sécurisé (SPA) lors de la connexion|
|||Adresse de courrier|Votre adresse email - par exemple *contact\@exemple.com*|
|||Mot de passe|Le mot de passe de votre adresse email|

{{% notice tip %}}
 *[compte]* doit être remplacé par le nom de votre compteet *contact\@exemple.com* par votre adresse email. Ils sont définis dans le menu **Emails > Adresses** de notre interface d'administration.
{{% /notice %}}

## Ordinateur

Rendez-vous dans **Fichiers > Informations > Ajouter un compte**.

{{< fig "images/outlook_desktop_interface2_fr.png" "Outlook : interface messagerie" >}}
{{< fig "images/outlook_desktop_interface1_fr.png" "Outlook : menu Fichiers" >}}

{{< fig "images/outlook_desktop_fr.png" "Outlook : ajouter un compte" >}}

- Configurez manuellement le compte ;
- Choisissez entre POP et IMAP ;
- Cochez les cases **Exiger l'authentification par mot de passe sécurisé (SPA) lors de la connexion**.

## Mobile

Rendez-vous sur **C'est parti > Ignorer** si on propose des types de comptes **> Avancé IMAP** ou **POP3**.

{{< fig "images/outlook_mobile_fr.png" "Outlook sur mobile" >}}

Cliquez sur **Paramètres avancés** pour indiquer les _noms d'hôtes_.
