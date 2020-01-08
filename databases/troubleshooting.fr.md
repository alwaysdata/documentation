+++
url = "/fr/bases-de-données/problèmes-fréquents/"
title = "Problèmes fréquents"
layout = "man"
hidden = true
tags = ["base de données", "dépannage"]
+++

## MariaDB / MySQL
### Index column size too large. The maximum column size is 767 bytes.

767 octets est la limite de préfixe déclarée pour les tables InnoDB dans les versions antérieures à la 5.7 de MySQL et dans les versions antérieures à la 10.2 de MariaDB.

Effectuez la [migration]({{< ref "advanced/migrations" >}}) vers la version supérieure de MariaDB.
