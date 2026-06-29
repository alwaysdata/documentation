---
layout: layouts/indexed.njk
permalink: /fr/docs/emails/listes-de-diffusion/
title: Listes de diffusion
eleventyNavigation:
  key: Listes de diffusion
  parent: Emails
  order: 6
---

Les listes de diffusions (*mailing lists*) vous permettent de définir un *pool* d'adresses mails vers lesquelles renvoyer un message. On les distingue dans leur usage par leur capacités de diffusion :

- seuls les adresses "administratrices" sont capables d'expédier du contenu vers les adresses de réception inscrites (par exemple, une newsletter) ;
- tous les participant·e·s peuvent envoyer des messages sur la liste pour permettre une conversation (par exemple, les membres d'un groupe de travail).

**alwaysdata** vous permet de définir des listes de diffusion à votre convenance, rattachées au(x) domaine(s) de votre choix. Elles utilisent le logiciel open-source [Mailman](https://docs.mailman3.org/projects/mailman/en/latest/) et leur configuration s'appuie sur l'interface [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/). Vous pouvez vous référer à ces documentations pour leur usage quotidien.

## Connexion

La création / modification / suppression des listes de diffusion se fait depuis l'interface d'administration : [https://admin.alwaysdata.com/mailinglist/](https://admin.alwaysdata.com/mailinglist/).

La gestion interne des listes de diffusions (membres, permissions, etc), se fait depuis l'interface d'administration Postorius : [https://mailman.alwaysdata.com/](https://mailman.alwaysdata.com/).
