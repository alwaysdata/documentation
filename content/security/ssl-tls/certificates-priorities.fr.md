+++
url = "/fr/sécurité/ssl-tls/priorité-de-renvoi-des-certificats-ssl"
title = "Quel certificat SSL est renvoyé par défaut ?"
layout = "faq"
hidden = true
tags = ["https", "ssl"]
+++

Grâce au [SNI](https://datatracker.ietf.org/doc/html/rfc6066#section-3), le serveur renverra dans l'ordre de priorité, s'il est renseigné dans **Avancé > Certificats SSL** et qu'il n'est pas expiré :

- Votre certificat ajouté manuellement correspondant au nom d'hôte.
- Votre certificat wildcard ajouté manuellement correspondant au nom de domaine.
- Le [certificat auto-généré Let's Encrypt](security/ssl-tls/lets-encrypt#automatically-generated-certificates) correspondant au nom d'hôte.
- Le certificat par défaut du serveur.

Si vous souhaitez renvoyer un certificat dont la priorité est plus basse, vous pouvez rattacher ce dernier directement au sous-domaine, **il sera alors prioritaire sur les autres**.

La configuration de la priorité d'un certificat n'est possible *que* pour les certificats que vous avez ajouté. Ce n'est pas une option disponible pour les certificats autogénérés Let's Encrypt.

Pour forcer un certificat rendez-vous au niveau de la configuration du certificat SSL - menu **Avancé > Certificats SSL** ou au niveau de la configuration du sous-domaine - menu **Domaines > Détails du [domaine] - ⚙️ > Sous-domaines**.

{{% notice warning %}}
Un certificat expiré, s'il est rattaché à un sous-domaine, sera quand même renvoyé par le serveur.
{{% /notice %}}
