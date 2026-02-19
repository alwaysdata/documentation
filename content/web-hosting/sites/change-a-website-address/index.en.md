+++
title = "Changing a Website Address"
tags = ["http", "site"]
+++

Your site points to an address and you want to use another address/domain. Here are the steps to follow:

In this example, the starting address will be `foobar.alwaysdata.net` and the new address `foobar.com`. 

{{% notice note %}}
`.alwaysdata.net` addresses won't be a possible choice.
{{% /notice %}}

{{< fig "images/step1.en.png" "Initial state" >}}

1. Point your domain addresses on our servers:

    - if the domain does not exist, you need to [buy it](/domains/buy-a-domain),
    - if the domain exists, you can:
        - add only the [addresses needed](/web-hosting/sites/use-external-addresses) for the website,
        - pass all the [technical management](/domains/add-an-external-domain) to our DNS servers,
        - [transfer](/domains/transfer-a-domain) the domain,
        
2. Add the new addresses to the site in **Web > Sites** - the old one is still there,

{{< fig "images/step2.en.png" "" >}}

3. Change the address at the application level (in its admin panel for example),

4. Remove the old address in **Web > Sites**. This last point is *not mandatory*, if you don't do it the site will just remain accessible on the old address - as long as it points on our servers.

{{< fig "images/step3.en.png" "Final state" >}}
