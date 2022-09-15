+++
url = "/fr/avancé/adresses-ip-dédiées"
title = "Adresses IP dédiées"
layout = "man"
hidden = true
tags = ["email", "http", "site"]
+++

Quel que soit l'environnement pris[^1], des adresses IPv4 sont offertes à la location via le menu **Avancé > Adresses IP**. Ces IP - non partagées - sont facturées 5 € TTC par mois ou 60 € TTC par an[^2].

## HTTP

Une fois l'IP prise :

- Si le domaine utilise nos serveurs DNS, rendez-vous au niveau du sous-domaine pour lui allouer l'IP. Cela se passe via **Web > Sites > Modifier le [site] - ⚙️ > Configurer (en face des adresses)** ou via **Domaines > Détails de [exemple.org] - 🔎 > Sous-domaines**.
- Si le domaine utilise d'autres serveurs DNS, créez un **enregistrement DNS de type A** pointant sur l'IP privée chez votre prestataire DNS.

{{% notice note %}}
Cette IP servira pour les requêtes entrantes mais les requêtes sortantes passeront toujours par l'IP du serveur HTTP sur lequel est le compte. Cette IP est donnée dans le menu **Avancé > Statut des serveurs**.
{{% /notice %}}

## SMTP

Cette IP va servir à l'envoi des mails.

Une fois l'IP prise vous pourrez lui indiquer quels emails doivent passer par cette IP selon le [score qu'ils auront reçus par l'antispam]({{< ref "e-mails/delivery#système-de-notation" >}}) :

{{< fig "images/dedicated-ip-smtp.fr.png" "" >}}

{{% notice note %}}
Plus la note est basse mieux l'email sera noté.
{{% /notice %}}

[^1]: Disponibles sur toutes nos offres, ces IP ne sont pas à confondre avec nos [offres Cloud Privé]({{< ref "accounts/billing/choose-its-paas" >}}).
[^2]: Pour un engagement annuel, contactez le [support](https://admin.alwaysdata.com/support/add).
