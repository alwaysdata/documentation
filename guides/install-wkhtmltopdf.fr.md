+++
url = "/fr/guides/installer-wkhtmltopdf/"
title = "Comment installer wkhtmltopdf"
menuTitle = "Installer wkhtmltopdf"
layout = "howto"
weight = 50
hidden = true
+++

[wkhtmltopdf](https://wkhtmltopdf.org/) fournit deux outils de ligne de commande permettant de rendre du HTML aux formats PDF et image.

Dans notre exemple, nous utilisons l'[accès SSH]({{< ref "platform/remote-access/ssh">}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de wkhtmltopdf : `$HOME/wkhtmltopdf/`

```
foo@ssh:~/wkhtmltopdf$ wget https://downloads.wkhtmltopdf.org/0.12/0.12.5/wkhtmltox_0.12.5-1.jessie_amd64.deb
foo@ssh:~/wkhtmltopdf$ dpkg -x wkhtmltox_0.12.5-1.jessie_amd64.deb .
```

Les binaires seront disponibles dans le répertoire `$HOME/wkhtmltopdf/usr/local/bin/`.

Prenez la [dernière version stable disponible](https://wkhtmltopdf.org/downloads.html).
