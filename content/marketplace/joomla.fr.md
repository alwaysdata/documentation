+++
url = "/fr/marketplace/joomla/"
title = "Joomla"
layout = "man"
hidden = true
tags = ["cms"]
+++

## Problèmes courants

### Erreur ERR_CONTENT_DECODING_FAILED sur les fichiers statiques

L'option *Gzip Page Compression* est incompatible avec notre configuration Apache par défaut, qui se charge **déjà** de la compression à la volée. Pour corriger, il suffit de supprimer la dernière section du fichier `.htaccess` à la racine du site.
