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

They can be adjusted depending on your needs.

## Live Chat

After installing Odoo via our [marketplace](marketplace):

- In **Advanced > Services**, create the following [service](services):

    - *Command*: `.venv/bin/python odoo-bin --config=.odoorc --http-port=8300 --proxy-mode`
    - *Working directory*: `/home/foo/odoo/`
    - *Environment*: `PYTHON_VERSION=3.10`
	
- In **Web > Sites**, declare a [site](sites/add-a-site), type **Reverse proxy** with:

    - *Address*: `foo.alwaysdata.net/websocket/`
    - *Remote URL*: `services-foo.alwaysdata.net:8300`
