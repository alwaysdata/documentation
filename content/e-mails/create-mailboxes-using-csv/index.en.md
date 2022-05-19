+++
title = "How to Create Several Mailboxes using CSV"
layout = "howto"
hidden = true
tags = ["e-mail"]
+++

To add several mailboxes in a single action, go to the menu **Emails > Addresses > Add several mailboxes**.

{{< fig "images/menu.en.png" "Menu" >}}

The file for importation should be in [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) format, which you can create with spreadsheet software - like Microsoft Excel or LibreOffice Calc. Example:

{{< fig "images/csv-creation.en.png" "" >}}

The first line of the file should always contain the name of the field for each column. The [API documentation](https://api.alwaysdata.com/v1/mailbox/doc/) shows all possible options. The blank fields are assigned default values.
