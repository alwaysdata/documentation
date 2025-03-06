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
|Entrant|POP3|Serveur POP|pop-*[compte]*.alwaysdata.net|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@example.org*|
|||Mot de passe|Le mot de passe de votre adresse email|
|||Port|995|
|Sortant|SMTP|Serveur SMTP|smtp-*[compte]*.alwaysdata.net|
|||Nom d'utilisateur|Votre adresse email - par exemple *contact\@example.org*|
|||Mot de passe|Le mot de passe de votre adresse email|
|||| Ne pas traiter comme un alias|
|||Port|465|
||||Connexion sécurisée|

{{% notice tip %}}
 *[compte]* doit être remplacé par le nom de votre compte et *contact\@example.org* par votre adresse email. Ils sont définis dans le menu **Emails > Adresses** de notre interface d'administration.
{{% /notice %}}

## Navigateur web

Rendez-vous dans **Paramètres > Comptes et importation**.

{{< fig "images/gmail_interface_fr.png" "Gmail : interface" >}}
{{< fig "images/gmail_interface2_fr.png" "Gmail : paramètres des comptes" >}}

### Courrier entrant (IMAP/POP)

Rendez-vous dans **Ajouter un compte de messagerie > Importer les e-mails de mon autre compte (POP3)** ;

{{% notice warning %}}
Attention c'est une connexion POP3 qui va récupérer sur ses serveurs les emails.
{{% /notice %}}

{{< fig "images/gmail_add-pop_fr.png" "Gmail : créer un compte POP" >}}
{{< fig "images/gmail_add-pop-final_fr.png" "Gmail : créer un compte POP - résultat" >}}
    
### Courrier sortant (SMTP)

Rendez-vous dans **Ajouter une autre adresse e-mail**.

-  Décochez la case **Traiter comme un alias**.

{{< fig "images/gmail_add-smtp_fr.png" "Gmail : créer un compte SMTP" >}}
{{< fig "images/gmail_add-smtp-final_fr.png" "Gmail : créer un compte SMTP - résultat" >}}

## Mobile

Rendez-vous dans **Paramètres > Ajouter un compte > Autre**.

{{< fig "images/gmail_mobile_fr.png" "Gmail sur mobile" >}}

- Pour le courrier _sortant_, cochez la case **Exigez une connexion**.
