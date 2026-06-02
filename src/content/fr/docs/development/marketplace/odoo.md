---
permalink: /fr/docs/developpement/marketplace/odoo/
title: Odoo
eleventyNavigation:
  key: Odoo
  parent: Marketplace
---
Dans notre exemple, nous considérons les informations suivantes :

- Nom du compte : `[compte]`
- Répertoire de Odoo : `/home/[compte]/odoo/`
- Adresse HTTP de Odoo : `[compte].alwaysdata.net`
- Port pour le Live Chat : 8300 (les ports entre 8300 et 8499 peuvent être utilisés)

Elles seront à modifier selon vos besoins.

## Live Chat

Après avoir installé Odoo via notre [marketplace](/fr/docs/developpement/marketplace) :

- Dans **Avancé > Services**, créez le [service](/fr/docs/hebergement-web/services/) suivant :

    - *Commande* : `.venv/bin/python odoo-bin --config=.odoorc --http-port=8300 --proxy-mode`
    - *Répertoire de travail* : `/home/[compte]/odoo/`
    - *Environnement* : `PYTHON_VERSION=3.10`

- Dans **Web > Sites**, déclarez un [site](/fr/docs/hebergement-web/sites/ajouter-un-site/) de type **Reverse proxy** avec :

    - *Adresse* : `[compte].alwaysdata.net/websocket/`
    - *URL distante* : `services-[compte].alwaysdata.net:8300`
