+++
title = "Change a Website Address"
hidden = true
layout = "howto"
tags = ["http", "site"]
+++

Your site points to an address - for example `foo.alwaysdata.net` - and you want to use another address/domain. Here are the steps to follow:

1. Point your domain addresses on our servers:

    - if the domain does not exist, you need to [buy it]({{< ref "domains/buy-a-domain" >}}),
    - if the domain exists, you can:
        - [add only the addresses needed for the website]({{< ref "sites/use-external-addresses" >}}),
        - [pass all the technical management to our DNS servers]({{< ref "domains/add-an-external-domain" >}}),
        - [transfer the domain]({{< ref "domains/transfer-a-domain" >}}),
        
2. Add the new addresses to the site in **Web > Sites** - the old one is still there,

3. Change the address at the application level (in its admin panel for example),

4. Remove the old address in **Web > Sites**. This last point is *not mandatory*, if you don't do it the site will just remain accessible on the old address - as long as it points on our servers.
