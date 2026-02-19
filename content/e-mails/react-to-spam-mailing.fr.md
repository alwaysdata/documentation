+++
url = "/fr/emails/reagir-envoi-spam/"
title = "Réagir à un envoi de spam"
tags = ["email", "infection", "spam"]
+++

On observe 3 principales raisons à un envoi de spam :

- [une infection de site internet](/web-hosting/sites/clean-up-a-site) ;
- une attaque sur un formulaire de site internet ;
- un vol de mot de passe.

C'est ces deux dernières que nous allons présenter ici.

## Attaque sur formulaire
Lorsque l'équipe alwaysdata rencontre un envoi de spam par attaque sur formulaire elle va :

- arrêter l'envoi en désactivant les requêtes `POST` sur le site concerné ;
- supprimer tous les emails en cause étant en attente d'envoi ;
- prévenir l'utilisateur.

L'utilisateur devra mettre en place une protection plus importante sur son formulaire ; via l'utilisation d'un [CAPTCHA](https://fr.wikipedia.org/wiki/CAPTCHA) par exemple.

Le [WAF](/web-hosting/sites/waf) peut être utile pour bloquer certaines attaques.

## Vol de mot de passe
Dans ce cas, elle va :

- arrêter l'envoi en changeant le mot de passe de l'adresse email concernée ;
- supprimer tous les emails en cause étant en attente d'envoi ;
- prévenir l'utilisateur.

L'utilisateur pourra ensuite renseigner un nouveau mot de passe, **plus sécurisé**, pour accéder de nouveau à son adresse.

{{% notice info %}}
Dans le cas d'une récidive, l'équipe alwaysdata peut _suspendre_ le compte en attente du retour de l'utilisateur.
{{% /notice %}}

> Testez si votre adresse email [a été compromise](https://haveibeenpwned.com/).
