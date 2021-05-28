+++
url = "/fr/emails/verifier-l-envoi-d-un-email/"
title = "Comment vérifier si un email a bien été envoyé"
hidden = true
layout = "howto"
tags = ["email"]
+++

Vous avez accès aux logs d'envois dans le menu **Emails > Historique**.

{{< fig "images/history.fr.png" "Liste des derniers envois" >}}

- *[Score]({{< ref "e-mails/delivery#système-de-notation" >}})* : score donné par l'antispam d'alwaysdata qui détermine si un email est envoyé ou non[^1] ;
- *Bloqué* : si l'email a été bloqué par l'antispam d'alwaysdata.

{{< fig "images/example.fr.png" "Exemple d'un envoi" >}}

- *Score interne* : score donné par l'antispam d'alwaysdata ;
- *Rapport interne* : détails du score donné par l'antispam d'alwaysdata. Il tient compte du score Rspamd ;
- *Score SPAM* : score [Rspamd](https://www.rspamd.com/) ;
- *Rapport SPAM* : détails du score Rspamd.

SI l'email a **bouncé** (non accepté par les serveurs destinataires) pour un ou plusieurs destinataires, l'expéditeur doit avoir reçu un *Mail delivery failed* reprenant les raisons du blocage.

[^1]: un email avec un score supérieur à 3 ne sera pas envoyé en serveurs mutualisés. En serveurs VPS et dédiés, la valeur par défaut est de 5 (modifiable).
