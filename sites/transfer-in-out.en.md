+++
title = "Migrating a Site to alwaysdata"
layout = "howto"
hidden = true
tags = ["site"]
+++

This article explains how to move a site from one provider to another.

{{% notice tip %}}
To ease your migration, you can also hire a service provider: the company [Déménageur de Site](https://www.demenageur-site.com), for example, is quite familiar with our platform and even offers a voucher code for migration to alwaysdata ([contact our support team](https://admin.alwaysdata.com/support/add)).
{{% /notice %}}

## Manual Transfer

1.  Retrieve the files and the database from the current provider,
    - Copy the files to your alwaysdata account using [FTP]({{< ref "remote-access/ftp" >}}) or [SSH]({{< ref "remote-access/ssh" >}}),
    - create the database in **Databases** and import the database into it using a DBMS client or the `mysql`, `psql` commands (or others) depending on the DBMS used.

2.  Setup the site in **Web > Sites** with a preproduction address - e.g. the account address.
    - Modify the configuration files so that everything does point to alwaysdata and check the database.

3.  Migrate the site addresses by modifying the DNS records for these subdomains and add the addresses in **Web > Sites**.
    - You may need to modify the configuration files again to avoid redirects to the preproduction address.
    - You can couple it using a [domain transfer]({{< ref "domains/transfer-a-domain" >}}).

{{% notice tip %}}
For the commands you can follow the [Move a site]({{< ref "sites/move-a-site" >}}) documentation instructions.
{{% /notice %}}
