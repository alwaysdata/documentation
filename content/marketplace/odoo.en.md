+++
title = "Odoo"
layout = "man"
hidden = true
tags = ["productivity"]
+++

In our example, we consider the following information:

- Account name: `foo`
- Odoo directory: `$HOME/odoo/`
- Odoo HTTP address: `foo.alwaysdata.net`
- Live Chat port: 8300 (ports between 8300 and 8499 can be used)

They should be adjusted according to your needs.

## Live Chat

After installing Odoo via our [marketplace]({{< ref "marketplace" >}}):

- In **Advanced > Services**, create the following [service]({{< ref "services" >}}):

    - *Command*: `.venv/bin/python odoo-bin --config=.odoorc --http-port=8300 --proxy-mode`
    - *Working directory*: `/home/foo/odoo/`
    - *Environment*: `PYTHON_VERSION=3.10`
	
- In **Web > Sites**, declare a [site]({{< ref "sites/add-a-site" >}}), type **[Redirect]({{< ref "sites/redirect" >}})** with:

    - *Address*: `foo.alwaysdata.net/websocket/`
    - *Destination URL*: `services-foo.alwaysdata.net:8300`
    - *Forwading type*: `transparent (reverse proxy)`
