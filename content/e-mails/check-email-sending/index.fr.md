+++
url = "/fr/emails/verifier-l-envoi-d-un-email/"
title = "Comment vérifier si un email a bien été envoyé"
hidden = true
layout = "howto"
tags = ["email"]
+++

Vous avez accès aux logs d'envois dans le menu **Emails > Historique**.

{{< fig "images/history.fr.png" "Liste des derniers envois" >}}

- *[Score](e-mails/delivery#système-de-notation)* : score donné par l'antispam d'alwaysdata qui détermine si un email est envoyé ou non[^1] ;
- *Bloqué* : si l'email a été bloqué par l'antispam d'alwaysdata. À ne pas confondre avec un *bounce*[^2] qui englobe d'autres raisons.

{{< fig "images/example.fr.png" "Exemple d'un envoi" >}}

- *Score interne* : score donné par l'antispam d'alwaysdata ;
- *Rapport interne* : détails du score donné par l'antispam d'alwaysdata. Il tient compte du score Rspamd ;
- *Score SPAM* : score [Rspamd](https://www.rspamd.com/) ;
- *Rapport SPAM* : détails du score Rspamd.

Seuls les emails envoyés durant les *12 derniers mois* sont gardés et, par défaut, seuls les emails envoyés durant les *7 derniers jours* sont affichés.

[^1]: un email avec un score supérieur à 3 ne sera pas envoyé en serveurs mutualisés. En Cloud Privé, la valeur par défaut est de 5 (modifiable).
[^2]: cela peut être un blocage de notre antispam, un refus par les serveurs destinataires ou encore une non-réponse de leur part pendant plusieurs jours par exemple. L'expéditeur doit alors recevoir un *Mail delivery failed* reprenant les raisons du bounce.
