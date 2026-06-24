---
title: Odoo
eleventyNavigation:
  key: Odoo
  parent: Marketplace
  order: 2
---

In our example, we consider the following information:

- Account name: `[account]`
- Odoo directory: `/home/[account]/odoo/`
- Odoo HTTP address: `[account].alwaysdata.net`
- Live Chat port: 8300 (ports between 8300 and 8499 can be used)

> [!NOTE]
> Feel free to adjust according to your needs.

## Live Chat

After installing Odoo via our [marketplace](/en/docs/development/marketplace):

- In **Advanced > Services**, create the following [service](/en/docs/web-hosting/services):

    - *Command*: `.venv/bin/python odoo-bin --config=.odoorc --http-port=8300 --proxy-mode`
    - *Working directory*: `/home/[account]/odoo/`
    - *Environment*: `PYTHON_VERSION=3.10`
	
- In **Web > Sites**, declare a [site](/en/docs/web-hosting/sites/add-a-site), type **Reverse proxy** with:

    - *Address*: `[account].alwaysdata.net/websocket/`
    - *Remote URL*: `services-[account].alwaysdata.net:8300`
