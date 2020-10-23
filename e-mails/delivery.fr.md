+++
url = "/fr/emails/délivrabilité-bonnes-pratiques/"
title = "Comment améliorer la délivrabilité d'emails"
menuTitle = "Délivrabilité : bonnes pratiques"
layout = "howto"
weight = 20
tags = ["email"]
+++

Que vos boîtes email soient hébergées dans un environnement mutualisé ou dédié, la délivrabilité de vos messages est très importante, et peut être optimisée par un travail conjoint de l'hébergeur et de ses utilisateurs.

## L'expéditeur

- Vérifiez le nom de l'expéditeur ainsi que l'adresse email d'envoi ;
- Utilisez les [protocoles d'identification]({{< ref "e-mails/set-up-spf-dkim-dmarc">}}) ;
- Le _SENDER FROM_ doit correspondre au _FROM_ dans vos en-têtes.

## Les destinataires

- Supprimez les adresses inexistantes ou inactives ;
- Vérifiez les fautes d'orthographe dans les adresses ;
- Évitez l'envoi de masse ;
- Renseignez les adresses emails dans le champ `Cc` (ou `Cci`) plutôt que les unes à la suite des autres dans le champ `To` (Pour) lors d'un envoi groupé.

## Le contenu

- Évitez :
    - le HTML ;
    - d'utiliser trop de ponctuation à la suite ;
    - d'écrire en rouge ;
    - d'écrire en majuscule ;
    - d'utiliser des [spam words](https://www.pme-web.com/wp-content/uploads/2014/08/Emailing-Guide-Ultime-des-Mots-Interdits-PME-Web.pdf).
- Soignez le sujet de l'email.

## Emailing

- Vérifiez que les bonnes pratiques sont suivies en répondant "oui" aux trois questions suivantes :
    - Le destinataire a-t-il explicitement consenti à recevoir ces emails ?
    - A-t-il été averti qu'il allait les recevoir ?
    - Le contenu proposé a-t-il été annoncé ?
- Facilitez la désinscription.


## Système de notation

Afin d'éviter les abus et optimiser la délivrabilité des emails envoyés par ses serveurs, alwaysdata a mis en place un système de notation qui se base sur différents critères comme l'analyse du contenu et la fréquence des envois.

Plus la note est basse mieux l'email sera noté et l'envoi accepté. En serveurs mutualisés, tout email ayant une note supérieure à _3_ sera bloqué. En serveurs VPS et dédiés, la valeur par défaut est de _5_ et vous pouvez la modifier dans l'onglet **SMTP > Paramètres** de votre serveur.

Suivant cette notation, le message sera expédié via une adresse IP ayant une réputation plus ou moins bonne. Ainsi, en optimisant la qualité de vos emails et leurs envois, vous aurez moins de chance pour que votre message soit considéré comme indésirable.

Ce système utilise [Rspamd](https://rspamd.com/) et un ensemble de règles propres à alwaysdata.

Pour ne pas être dépendant des abus d'autres utilisateurs étant sur le même serveur d'envoi de mails vous pouvez louer une IP dédiée dans l'onglet **Avancé > Adresses IP** du compte. Vous pourrez indiquer les emails envoyés par cette IP selon la note qu'ils auront reçus par l'antispam.

## Remarques

- La taille limite des emails envoyés est fixée à **50 Mo**.

---
- [Mail tester](https://www.mail-tester.com/?lang=fr)
