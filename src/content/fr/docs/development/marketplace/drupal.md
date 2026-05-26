---
permalink: /fr/docs/developpement/marketplace/drupal/
title: Drupal
eleventyNavigation:
  key: Drupal
  parent: Marketplace
---

## Problèmes courants

### Précompression des fichiers CSS/JS

Si vous utilisez une version de Drupal inférieure à la **8.9** avec précompression des fichiers CSS et JS, vous devrez [appliquer ce patch](https://www.drupal.org/files/issues/2019-01-02/3023545-mod_brotli.patch) pour corriger [un bug relatif à la compression Brotli](https://www.drupal.org/project/drupal/issues/2960808).

## Autres informations

Nous proposons un [profil spécifique](/fr/docs/hebergement-web/sites/waf/#profils-disponibles) sur notre WAF.
