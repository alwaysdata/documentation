+++
url = "/fr/sécurité/certificats/rediriger-HTTP-vers-HTTPS"
title = "Comment rediriger les requêtes HTTP vers HTTPS"
menuTitle = "Rediriger HTTP vers HTTPS"
layout = "howto"
weight = 1
tags = ["https", "sécurité", "ssl"]
+++


Rendez-vous dans la section **Web > Sites** de votre interface alwaysdata. Puis dans l'onglet **SSL** du site concerné, cochez la case _Forcer le HTTPS_ :
{{< fig "images/admin-panel_add-site-ssl.fr.png" "Modifier un site : SSL" >}}

La redirection sera effectuée au niveau de notre proxy - avant le serveur HTTP. 

Selon le serveur HTTP utilisé il est aussi possible de le faire à son niveau. Pour cela réferrez-vous à sa documentation.
