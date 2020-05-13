+++
title = "MariaDB 10.4 Migration"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

This migration upgrades your databases to MariaDB version 10.4.

It introduces minor changes. To review them, go on the release note(s) involved by your current version (noticeable in the *Databases > MySQL* section of your account).

E.g.: if you are on a 10.1 version of MariaDB you will need to be careful to changes made in the 10.2 and 10.3 upgrades as well.

- [Update to MariaDB 10.4](https://mariadb.com/kb/en/upgrading-from-mariadb-103-to-mariadb-104/),
- [Update to MariaDB 10.3](https://mariadb.com/kb/en/library/upgrading-from-mariadb-102-to-mariadb-103/),
- [Update to MariaDB 10.2](https://mariadb.com/kb/en/library/upgrading-from-mariadb-101-to-mariadb-102/).

Points to note:

* `STRICT_TRANS_TABLES` is desactivated.
