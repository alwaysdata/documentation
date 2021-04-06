+++
url = "/fr/emails/clients/gmail/"
title = "Comment configurer Gmail"
layout = "howto"
hidden = true
tags = ["email", "gmail"]
+++

[Rappel des informations de connexion]({{< ref "e-mails/use-an-e-mail-address">}})

Dans nos exemples nous considérons les informations suivantes :

- Nom du compte : `test`
- Adresse email : `test@alwaysdata.net`

Elles sont à remplacer par vos informations de connexion personnelles.

## Ordinateur

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
