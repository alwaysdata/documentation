+++
url = "/fr/securite/ssl-tls/rediriger-HTTP-vers-HTTPS"
title = "Comment rediriger les requêtes HTTP vers HTTPS"
linkTitle = "Rediriger HTTP vers HTTPS"
layout = "howto"
weight = 1
tags = ["https", "sécurité", "ssl"]
+++


Rendez-vous dans la section **Web > Sites > Modifier le [site] - ⚙️ > SSL** de votre interface alwaysdata. Cochez la case _Forcer le HTTPS_ :
{{< fig "images/admin-panel_add-site-ssl.fr.png" "Modifier un site : SSL" >}}

La redirection sera effectuée au niveau de notre proxy - avant le serveur HTTP. 

Selon le serveur HTTP utilisé il est aussi possible de le faire à son niveau. Pour cela réferrez-vous à sa documentation.
