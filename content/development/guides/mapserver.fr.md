+++
url = "/fr/developpement/guides/mapserver/"
title = "MapServer CGI"
tags = ["http", "site"]
+++

[MapServer](https://mapserver.org/) est une plateforme permettant de publier des données spatiales et des applications cartographiques interactives sur le web.

Dans notre exemple, nous utilisons un [accès SSH](/web-hosting/remote-access/ssh) et considérons les informations suivantes :

- Nom de compte : `foo`
- Répertoire d'installation de MapServer : `$HOME/mapserver`

1. Créer le lien symbolique :

```sh
foo@ssh:~/mapserver$ ln -s /usr/lib/cgi-bin/mapserv mapserv
```

2. Créer un fichier `.htaccess` contenant :

```
Options +ExecCGI
SetHandler cgi-script
```

- [MapServer CGI](https://mapserver.org/cgi/)
