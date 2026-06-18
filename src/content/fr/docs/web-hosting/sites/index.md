---
layout: layouts/indexed.njk
permalink: /fr/docs/hebergement-web/sites/
title: Sites web
eleventyNavigation:
  key: Sites web
  parent: Hébergement web
  order: 1
---

Pour qu'une adresse hébergée chez alwaysdata soit accessible en HTTP/HTTPS elle **doit** être déclarée dans **Web > Sites**. Choisissez le [langage](/fr/docs/hebergement-web/langages/) ou type de votre choix et paramétrez-les.

Vous pouvez avoir autant de sites que vous le souhaitez sur un seul et même compte. À noter que cela entraîne cependant un risque de sécurité, l'isolation étant au niveau des comptes.

Un extrait des logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄) et les processus en cours dans le menu **Avancé > Processus > Web**.

> [!NOTE]
> Si votre script a besoin d'autoriser certaines IP, autorisez ces [plages d'adresses IP](/fr/docs/caracteristiques-techniques/plages-dip/).

- [Ressource API](https://api.alwaysdata.com/v1/site/doc/)
- [Restaurer un site](/fr/docs/hebergement-web/sauvegardes/restaurer-un-site/)
