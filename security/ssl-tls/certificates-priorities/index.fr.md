+++
url = "/fr/sécurité/ssl-tls/priorité-de-renvoi-des-certificats-ssl"
title = "Quel certificat SSL est renvoyé par défaut ?"
layout = "faq"
hidden = true
tags = ["https", "ssl"]
+++

Le serveur renverra dans l'ordre de priorité, s'il est renseigné dans **Avancé > Certificats SSL** et qu'il n'est pas expiré :

- Votre certificat ajouté manuellement correspondant au nom d'hôte.
- Votre certificat wildcard ajouté manuellement correspondant au nom de domaine.
- Le [certificat auto-généré Let's Encrypt]({{< ref "security/ssl-tls/lets-encrypt#automatically-generated-certificates" >}}) correspondant au nom d'hôte.
- Le certificat par défaut du serveur.

Si vous souhaitez renvoyer un certificat dont la priorité est plus basse, vous pouvez rattacher ce dernier directement au sous-domaine, **il sera alors prioritaire sur les autres**.

Pour cela, rendez-vous dans la configuration de l'adresse :

Via **Web > Sites > Modifier** le site concerné **> Configurer** en face de l'adresse :
{{< fig "images/admin-panel_site.fr.png" "Interface d'administration : via sites" >}}

Ou via **Domaines > Détails** du domaine concerné **> Sous-domaines** :
{{< fig "images/admin-panel_subdomain-list.fr.png" "Interface d'administration : via domaines" >}}

Cela vous mènera sur le menu suivant :
{{< fig "images/admin-panel_subdomain-menu.fr.png" "Interface d'administration : gérer un sous-domaine" >}}

{{% notice warning %}}
Un certificat expiré, s'il est rattaché à un sous-domaine, sera quand même renvoyé par le serveur.
{{% /notice %}}
