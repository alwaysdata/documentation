+++
url = "/fr/sites/utiliser-des-adresses-externes/"
title = "Comment utiliser des adresses externes"
layout = "howto"
hidden = true
tags = ["dns", "http", "site"]
+++

Pour utiliser ses propres adresses sans [gérer son domaine]({{< ref "domains/add-an-external-domain" >}}) chez alwaysdata, il faut :

- chez le prestataire DNS du domaine, créer des [enregistrements DNS](https://fr.wikipedia.org/wiki/Liste_des_enregistrements_DNS) pointant vers votre compte alwaysdata ;

{{% notice tip %}}
Le serveur sur lequel est un compte peut changer. Il est donc préconisé d'utiliser des enregistrements de type *CNAME* ayant comme valeur `<compte>.alwaysdata.net` (`<compte>` étant le nom du compte) plutôt que des enregistrements de type _A_/_AAAA_. Le *CNAME* n'est pas disponible pour le sous-domaine vide, on utilisera alors les types _A_/_AAAA_ ou _ALIAS_.
{{% /notice %}}

- sur l'interface d'administration alwaysdata, [déclarer les adresses]({{< ref "sites/add-a-site" >}}) dans **Web > Sites**.

{{% notice info %}}
Les IP des serveurs sur lesquels pointent un compte sont visibles dans l'onglet **Avancé > Statut des serveurs** de l'interface d'administration.
{{% /notice %}}
