+++
title = "Databases Troubleshooting"
layout = "faq"
hidden = true
tags = ["databases", "troubleshooting"]
+++

## MariaDB / MySQL

### Index column size too large. The maximum column size is 767 bytes.

767 is the prefix limit declared for InnoDB tables in versions prior to MySQL 5.7 and in versions prior to MariaDB 10.2.

Perform the [migration]({{< ref "advanced/migrations" >}}) to a higher version of MariaDB.
