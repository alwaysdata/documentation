+++
url = "/fr/emails/clients/gmail/"
title = "Comment configurer Gmail"
layout = "howto"
hidden = true
tags = ["email", "gmail"]
+++

Dans nos exemples nous considérons les informations suivantes :

- Nom du compte : `test`
- Adresse email : `test@alwaysdata.net`

Elles sont à remplacer par vos informations de connexion personnelles :

|Serveur|Service|Information||
|---|---|---|---|
|Entrant|IMAP|Serveur IMAP|imap-*[compte]*.alwaysdata.net|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@example.org*|
|||Mot de passe|Le mot de passe de votre adresse email|
|||Port|993|
|Sortant|SMTP|Serveur SMTP|smtp-*[compte]*.alwaysdata.net|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@example.org*|
|||Mot de passe|Le mot de passe de votre adresse email|
|||Port|465|

{{% notice tip %}}
 *[compte]* doit être remplacé par le nom de votre compte et *contact\@example.org* par votre adresse email. Ils sont définis dans le menu **Emails > Adresses** de notre interface d'administration.
{{% /notice %}}

## Mobile

Rendez-vous dans **Paramètres > Ajouter un compte > Autre**.

{{< fig "images/gmail_mobile_fr.png" "Gmail sur mobile" >}}

- Pour le courrier _sortant_, cochez la case **Exigez une connexion**.

## Navigateur web

### Courrier entrant

Les [connexions POP](https://support.google.com/mail/answer/16604719) n'étant plus supportées par Gmail, son webmail ne peut donc servir que pour l'envoi des mails. Il faut sinon passer par leur Google Workspace ou une [redirection](/e-mails/create-an-e-mail-address#redirection) vers votre adresse Gmail.

### Courrier sortant (SMTP)

Rendez-vous dans **Paramètres > Comptes et importation**.

{{< fig "images/gmail_interface_fr.png" "Gmail : interface" >}}
{{< fig "images/gmail_interface2_fr.png" "Gmail : paramètres des comptes" >}}

Rendez-vous dans **Ajouter une autre adresse e-mail**.

-  Décochez la case **Traiter comme un alias**.

{{< fig "images/gmail_add-smtp_fr.png" "Gmail : créer un compte SMTP" >}}
{{< fig "images/gmail_add-smtp-final_fr.png" "Gmail : créer un compte SMTP - résultat" >}}
