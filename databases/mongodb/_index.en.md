+++
title = "MongoDB"
layout = "man"
tags = ["databases", "mongodb"]
+++

## Connection

|||
|--- |--- |
|Server|mongodb-[account].alwaysdata.net|
|Port|27017 (MongoDB port by default)|
|Connection|mongodb://utilisateur:mdp@mongodb-[account].alwaysdata.net/bdd|

The connection data depends on the relevant account. You can find the precise values in the administration interface section under **Databases > MongoDB**.

## Permissions

Creating a MongoDB user corresponds to an entry in the `system.users` collection.

---

- [MongoDB documentation](https://docs.mongodb.com/)

---

Find our guides:

- [Using MongoDB with a PHP Backend]({{< ref "databases/MongoDB/php" >}})
