+++
title = "MongoDB"
layout = "man"
hidden = true
tags = ["databases", "mongodb"]
+++

## Connection

|||
|--- |--- |
|Server|mongodb-[account].alwaysdata.net|
|Port|27017 (MongoDB port by default)|
|Connection|mongodb://user:password@mongodb-[account].alwaysdata.net/bdd|

The connection data depends on the relevant account. You can find the precise values in the administration interface section under **Databases > MongoDB**.

### Example with `mongo`

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- Database name: `foo_base`
- We will use the default SSH users and databases, i.e. the ones created when the accounts are opened (e.g. `foo` for the *foo* account).

```sh
foo@ssh:~$ mongo "mongodb://foo:password@mongodb-foo.alwaysdata.net/foo_base"
```

## Permissions

Creating a MongoDB user corresponds to an entry in the `system.users` collection.

---

- [MongoDB documentation](https://docs.mongodb.com/)

---

Find our guides:

- [Using MongoDB with a PHP Backend]({{< ref "databases/MongoDB/php" >}})
