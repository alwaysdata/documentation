+++
title = "Installing wkhtmltopdf"
layout = "howto"
hidden = true
+++

[wkhtmltopdf](https://wkhtmltopdf.org/) provides two tools from the command line for returning HTML in PDF and image formats.

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- wkhtmltopdf directory: `$HOME/wkhtmltopdf/`

    ```sh
    foo@ssh:~/wkhtmltopdf$ wget https://downloads.wkhtmltopdf.org/0.12/0.12.5/wkhtmltox_0.12.5-1.jessie_amd64.deb
    foo@ssh:~/wkhtmltopdf$ dpkg -x wkhtmltox_0.12.5-1.jessie_amd64.deb .
    ```

Binary files will be available in the `$HOME/wkhtmltopdf/usr/local/bin/` directory.

Take the [last stable version available](https://wkhtmltopdf.org/downloads.html).
