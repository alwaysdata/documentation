+++
url = "/fr/sites/utiliser-des-adresses-externes/"
title = "Comment utiliser des adresses externes"
layout = "howto"
hidden = true
tags = ["dns", "http", "site"]
+++

Pour utiliser ses propres adresses sans [gérer son domaine]({{< ref "domains/add-an-external-domain" >}}) chez alwaysdata, il faut :

1. chez le prestataire DNS du domaine, créer des [enregistrements DNS](https://fr.wikipedia.org/wiki/Liste_des_enregistrements_DNS) pointant vers votre compte alwaysdata ;

	- Le serveur sur lequel est un compte peut changer. Il est donc préconisé d'utiliser des enregistrements de type *CNAME* ayant comme valeur `<compte>.alwaysdata.net` (`<compte>` étant le nom du compte) plutôt que des enregistrements de type _A_/_AAAA_.

{{% notice tip %}}
Le *CNAME* n'est pas disponible pour le sous-domaine vide, on utilisera alors les types _A_/_AAAA_ ou _ALIAS_ avec comme valeur l'adresse IP du serveur HTTP (à retrouver dans la section **Avancé > Statut des serveurs** de l'interface d'administration alwaysdata).
{{% /notice %}}

2. sur l'interface d'administration alwaysdata, [déclarer les adresses]({{< ref "sites/add-a-site" >}}) dans **Web > Sites**.
