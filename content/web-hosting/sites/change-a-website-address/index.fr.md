+++
url = "/fr/hebergement-web/sites/changer-ladresse-dun-site-web/"
title = "Changer l'adresse d'un site web"
tags = ["http", "site"]
+++

Votre site pointe sur une adresse et vous souhaitez utiliser une autre adresse/un autre domaine. Voici les étapes à suivre :

Dans cet exemple, l'adresse de base sera `foobar.alwaysdata.net` et la nouvelle adresse `foobar.com`. 

{{% notice note %}}
Les adresses `.alwaysdata.net` ne seront pas un choix possible.
{{% /notice %}}

{{< fig "images/step1.fr.png" "Etat initial" >}}

1. Faire pointer les adresses de votre domaine sur nos serveurs :

    - si le domaine n'existe pas, il faut [l'acheter](/domains/buy-a-domain) ;
    - si le domaine existe, vous pouvez :
        - n'ajouter que les [adresses nécessaires](/web-hosting/sites/use-external-addresses) au site web ;
        - passer toute la [gestion technique](/domains/add-an-external-domain) sur nos serveurs DNS ;
        - [transférer](/domains/transfer-a-domain) le domaine ;
        
2. Ajouter les nouvelles adresses au site dans **Web > Sites** - l'ancienne est toujours présente ;

{{< fig "images/step2.fr.png" "" >}}

3. Modifier l'adresse au niveau de l'application (dans son interface d'administration par exemple) ;

4. Supprimer l'ancienne adresse dans **Web > Sites**. Ce dernier point n'est *pas indispensable*, si vous ne le faites pas le site restera juste accessible sur l'ancienne adresse - tant qu'elle pointe sur nos serveurs.

{{< fig "images/step3.fr.png" "Etat final" >}}
