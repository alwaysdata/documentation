+++
url = "/fr/emails/creer-des-adresses-email-via-csv/"
title = "Comment créer plusieurs adresses email via CSV"
layout = "howto"
hidden = true
tags = ["email"]
+++

Pour ajouter plusieurs adresses email en une seule action, rendez-vous dans le menu **Emails > Adresses > Ajouter plusieurs adresses email**.

{{< fig "images/menu.fr.png" "Menu" >}}

Le fichier à importer devra être au format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values), que vous pouvez créer avec un logiciel de tableur - comme Microsoft Excel ou LibreOffice Calc. Exemple :

{{< fig "images/csv-creation.fr.png" "" >}}

La première ligne du fichier doit impérativement contenir le nom du champ de chaque colonne. La [documentation API](https://api.alwaysdata.com/v1/mailbox/doc/) reprend toutes les options possibles. Les champs non renseignés prendront la valeur par défaut.
