+++
url = "/fr/marketplace/drupal/"
title = "Drupal"
layout = "man"
hidden = true
tags = ["cms"]
+++

[Drupall](https://www.drupal.org/) est un [CMS](http://fr.wikipedia.org/wiki/Syst%C3%A8me_de_gestion_de_contenu) PHP reconnu ultra personnalisable permettant une publication multicanal.

- [Documentation](https://www.drupal.org/documentation)

## Installation
La dernière version de *Drupal* est auto-installable via l'interface d'administration : **Web > Sites > Installer une application**.

- [Script d'installation](https://admin.alwaysdata.com/site/application/script/12/detail/)

## Problèmes courants

### Précompression des fichiers CSS/JS

Si vous utilisez une version de Drupal inférieure à la **8.9** avec précompression des fichiers CSS et JS, vous devrez [appliquer ce patch](https://www.drupal.org/files/issues/2019-01-02/3023545-mod_brotli.patch) pour corriger [un bug relatif à la compression Brotli](https://www.drupal.org/project/drupal/issues/2960808).

## Autres informations

Nous proposons un [profil spécifique]({{<ref "sites/waf/use-waf#profils-disponibles">}}) sur notre WAF.
