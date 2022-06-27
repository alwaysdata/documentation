+++
url = "/fr/marketplace/joomla/"
title = "Joomla"
layout = "man"
hidden = true
tags = ["cms"]
+++

## Problèmes courants

### Option "Gzip Page Compression"

Cette option est [incompatible](https://github.com/joomla/joomla-cms/pull/33097) avec notre configuration Apache par défaut, qui se charge *déjà* de la compression à la volée. Pour corriger, il suffit de supprimer la dernière section du fichier `.htaccess` créé à la racine du site.
