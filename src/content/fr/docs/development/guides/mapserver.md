---
permalink: /fr/docs/developpement/guides/mapserver/
title: MapServer CGI
eleventyNavigation:
  key: MapServer CGI
  parent: Guides
---

[MapServer](https://mapserver.org/) est une plateforme permettant de publier des données spatiales et des applications cartographiques interactives sur le web.

Dans notre exemple, nous utilisons un [accès SSH](/fr/docs/hebergement-web/acces-distant/ssh/) et considérons les informations suivantes :

- Nom de compte : `[compte]`
- Répertoire d'installation de MapServer : `/home/[compte]/mapserver`

1. Créer le lien symbolique :

```sh
[compte]@ssh:~/mapserver$ ln -s /usr/lib/cgi-bin/mapserv mapserv
```

2. Créer un fichier `.htaccess` contenant :

```
Options +ExecCGI
SetHandler cgi-script
```

- [MapServer CGI](https://mapserver.org/cgi/)
