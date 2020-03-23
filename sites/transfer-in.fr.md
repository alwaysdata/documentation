+++
url = "/fr/sites/migrer-un-site-chez-alwaysdata/"
title = "Migrer un site chez alwaysdata"
layout = "howto"
hidden = true
tags = ["site"]
+++

Cet article explique comment procéder à la migration d'un site chez alwaysdata.

{{% notice tip %}}
Pour faciliter votre migration, vous pouvez aussi faire appel à un prestataire spécialisé : la société [Déménageur de Site](https://www.demenageur-site.com) par exemple connaît bien notre plateforme et propose même un code promo pour une migration vers alwaysdata ([contactez notre support](https://admin.alwaysdata.com/support/add)).
{{% /notice %}}


## Transfert manuel

1. Récupérez les fichiers et la base de données chez le prestataire actuel ;
    - copiez les fichiers dans votre compte alwaysdata en utilisant [FTP]({{< ref "remote-access/ftp" >}}) ou [SSH]({{< ref "remote-access/ssh" >}}) ;
    - créez la base de données dans **Bases de données** et importez-y la base de données en passant par un client SGBD ou en utilisant les commandes `mysql`, `psql` (ou encore d'autres...) selon le SGBD utilisé.

2. Mettez en place le site dans **Web > Sites** avec une adresse de préproduction - par exemple l'adresse du compte ;
    - modifiez les fichiers de configuration pour que tout pointe bien chez alwaysdata et vérifiez la base de données.

3. Migrez les adresses du site en modifiant les enregistrements DNS de ces sous-domaines et en ajoutant les adresses dans **Web > Sites**.
    - il faudra peut-être remodifier des fichiers de configuration pour éviter des redirections vers l'adresse de préproduction ;
    - vous pouvez le coupler par un [transfert de domaine]({{< ref "domains/transfer-a-domain" >}}).
    
{{% notice tip %}}
Pour les commandes vous pouvez suivre la documentation [Déplacer un site]({{< ref "sites/move-a-site" >}}).
{{% /notice %}}
