+++
url = "/fr/domaines/changer-de-serveurs-dns/"
title = "Comment changer de serveurs DNS"
linkTitle = "Changer de serveurs DNS"
layout = "howto"
weight = 21
tags = ["dns", "domaine"]
+++

Les [serveurs DNS](https://fr.wikipedia.org/wiki/Domain_Name_System) définissent quels serveurs contacter pour chaque service. Ils sont donc définis chez le registrar - le prestataire de la gestion administrative du domaine.

1. Demandez à votre nouveau prestataire ses serveurs DNS ;
2. Dans votre interface d'administration, allez dans **Domaines > Détails** du domaine concerné **> Modifier** ses serveurs DNS ;
   {{< fig "images/admin-panel_domain-details.fr.png" "Interface d'administration : Détails d'un domaine" >}}
3. Indiquez les adresses de vos nouveaux serveurs DNS.
   {{< fig "images/admin-panel_change-dns.fr.png" "Interface d'administration : Changer de serveurs DNS" >}}

{{% notice note %}}
Lorsque les champs des serveurs DNS sont vides, le domaine utilise les serveurs DNS d'alwaysdata.
{{% /notice %}}
