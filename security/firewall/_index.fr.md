+++
url = "/fr/securité/pare-feu"
title = "Pare-feu"
weight = 30
layout = "man"
tags = ["sécurité"]
+++

alwaysdata utilise [Fail2ban](http://www.fail2ban.org/) sur tous ses serveurs comme pare-feu. Après une dizaine de tentatives de connexion échouées, cet outil va bloquer l'IP durant 30 minutes.

Les clients propriétaires de serveurs VPS et dédiés peuvent [paramétrer leur pare-feu]({{< relref "configure-firewall" >}}).
