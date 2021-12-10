+++
url = "/fr/sites/changer-ladresse-dun-site-web"
title = "Changer l'adresse d'un site web"
hidden = true
layout = "howto"
tags = ["http", "site"]
+++

Votre site pointe sur une adresse - par exemple `foo.alwaysdata.net` - et vous souhaitez utiliser une autre adresse/un autre domaine. Voici les étapes à suivre :

1. Faire pointer les adresses de votre domaine sur nos serveurs :

    - si le domaine n'existe pas, il faut [l'acheter]({{< ref "domains/buy-a-domain" >}}) ;
    - si le domaine existe, vous pouvez :
        - n'ajouter que les [adresses nécessaires]({{< ref "sites/use-external-addresses" >}}) au site web ;
        - passer toute la [gestion technique]({{< ref "domains/add-an-external-domain" >}}) sur nos serveurs DNS ;
        - [transférer]({{< ref "domains/transfer-a-domain" >}}) le domaine ;
        
2. Ajouter les nouvelles adresses au site dans **Web > Sites** - l'ancienne est toujours présente ;

3. Modifier l'adresse au niveau de l'application (dans son interface d'administration par exemple) ;

4. Supprimer l'ancienne adresse dans **Web > Sites**. Ce dernier point n'est *pas indispensable*, si vous ne le faites pas le site restera juste accessible sur l'ancienne adresse - tant qu'elle pointe sur nos serveurs.
