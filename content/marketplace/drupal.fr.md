+++
url = "/fr/marketplace/drupal/"
title = "Drupal"
layout = "man"
hidden = true
tags = ["cms"]
+++

## Problèmes courants

### Précompression des fichiers CSS/JS

Si vous utilisez une version de Drupal inférieure à la **8.9** avec précompression des fichiers CSS et JS, vous devrez [appliquer ce patch](https://www.drupal.org/files/issues/2019-01-02/3023545-mod_brotli.patch) pour corriger [un bug relatif à la compression Brotli](https://www.drupal.org/project/drupal/issues/2960808).

## Autres informations

Nous proposons un [profil spécifique]({{<ref "sites/waf/use-waf#profils-disponibles">}}) sur notre WAF.
