+++
title = "How To install wkhtmltopdf"
menuTitle = "Install wkhtmltopdf"
date = 2019-09-12T12:32:06+02:00
layout = "howto"
weight = 10
draft = false
+++

[wkhtmltopdf](https://wkhtmltopdf.org/) gives two command line tools to render HTML into PDF and image formats.

In our example, we will use the [SSH access]() and consider following information:

- Account name: foo
- wkhtmltopdf directory: ~/wkhtmltopdf/

```
foo@ssh:~/wkhtmltopdf$ wget https://downloads.wkhtmltopdf.org/0.12/0.12.5/wkhtmltox_0.12.5-1.jessie_amd64.deb
foo@ssh:~/wkhtmltopdf$ dpkg -x wkhtmltox_0.12.5-1.jessie_amd64.deb .
```

Binaries will then be in the _~/wkhtmltopdf/usr/local/bin/_ directory.

Take the [last stable version available](https://wkhtmltopdf.org/downloads.html).
