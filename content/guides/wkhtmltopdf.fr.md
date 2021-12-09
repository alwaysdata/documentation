+++
url = "/fr/guides/wkhtmltopdf/"
title = "Comment installer wkhtmltopdf"
layout = "howto"
hidden = true
+++

[wkhtmltopdf](https://wkhtmltopdf.org/) fournit deux outils en ligne de commande permettant de rendre du HTML aux formats PDF et image.

Dans notre exemple, nous utilisons l'[accès SSH]({{< ref "remote-access/ssh" >}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de wkhtmltopdf : `$HOME/wkhtmltopdf/`

    ```sh
    foo@ssh:~/wkhtmltopdf$ wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.buster_amd64.deb
    foo@ssh:~/wkhtmltopdf$ dpkg -x wkhtmltox_0.12.6-1.buster_amd64.deb .
    ```

Les binaires seront disponibles dans le répertoire `$HOME/wkhtmltopdf/usr/local/bin/`.

Prenez la [dernière version stable disponible](https://wkhtmltopdf.org/downloads.html).
