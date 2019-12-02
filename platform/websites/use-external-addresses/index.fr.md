+++
url = "/fr/plateforme/sites/utiliser-des-adresses-externes/"
title = "Comment utiliser des adresses externes"
menuTitle = "Adresses HTTP externes"
layout = "howto"
weight = 50
hidden = true
tags = ["dns", "http", "site"]
+++

Pour utiliser ses propres adresses sans gérer son domaine chez alwaysdata, il faut :

- chez le prestataire DNS du domaine, créer des [enregistrements DNS](https://fr.wikipedia.org/wiki/Liste_des_enregistrements_DNS) pointant vers votre compte alwaysdata ;

{{% notice tip %}}
Le serveur sur lequel est votre compte pouvant changer, il est préconisé de créer un enregistrement de type *CNAME* ayant comme valeur \<compte\>.alwaysdata.net (\<compte\> étant le nom de votre compte) plutôt que des enregistrements de type _A_/_AAAA_. Le *CNAME* n'étant disponible pour le sous-domaine vide, on pourra utiliser les types _A_/_AAAA_ ou _ALIAS_.
{{% /notice %}}

- sur l'interface d'administration alwaysdata, [déclarer les adresses]({{< ref "platform/websites/declare-a-website" >}}) dans **Web > Sites**.



{{% notice info %}}
Les IP des serveurs sur lesquels pointent un compte sont visibles dans l'onglet **Avancé > Statut des services** de l'interface d'administration.
{{% /notice %}}
