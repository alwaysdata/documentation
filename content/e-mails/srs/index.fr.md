+++
url = "/fr/emails/srs/"
title = "Sender Rewriting Scheme"
tags = ["email", "redirection"]
+++

[Sender Rewriting Scheme](https://en.wikipedia.org/wiki/Sender_Rewriting_Scheme) (ou SRS) permet de réécrire l'adresse de l'expéditeur sur l'enveloppe des emails pour contourner les blocages [SPF](https://fr.wikipedia.org/wiki/Sender_Policy_Framework)[^1] et donc d'améliorer la délivrabilité des emails **avec redirection**.

{{< fig "images/srs.fr.png" "" >}}

## Activation chez alwaysdata

Pour l'activer, rendez-vous dans le menu **Emails > Adresses > Modifier l'[adresse email] - ⚙️ > Redirection > Utiliser SRS**

{{< fig "images/redirect.fr.png" "" >}}

## Remarques

En activant SRS, l'`ENVELOPE FROM` et le `HEADER FROM`/`FROM` ne correspondent plus. Si cela permet de valider SPF, celui-ci ne validera toujours pas DMARC. La validation DMARC dépendra uniquement de la présence d'un DKIM valide.

> Icônes : The Noun Project

[^1]: [mettre en place SPF chez alwaysdata](/e-mails/set-up-spf-dkim-dmarc#sender-policy-framework)
