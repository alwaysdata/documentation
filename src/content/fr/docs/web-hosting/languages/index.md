---
permalink: /fr/docs/hebergement-web/langages/
title: Langages
eleventyNavigation:
  key: Langages
  parent: Hébergement web
  order: 2
---

Retrouvez toutes les informations sur les technologies propulsées par nos serveurs :

* [.NET](/fr/docs/hebergement-web/langages/dotnet/)
* [Deno](/fr/docs/hebergement-web/langages/deno/)
* [Elixir](/fr/docs/hebergement-web/langages/elixir/)
* [Go](/fr/docs/hebergement-web/langages/go/)
* [Java](/fr/docs/hebergement-web/langages/java/)
* [Lua](/fr/docs/hebergement-web/langages/lua/)
* [Node.js](/fr/docs/hebergement-web/langages/nodejs/)
* [PHP](/fr/docs/hebergement-web/langages/php/)
* [Python](/fr/docs/hebergement-web/langages/python/)
* [Ruby](/fr/docs/hebergement-web/langages/ruby/)
* [Rust](/fr/docs/hebergement-web/langages/rust/)

D'autres interpréteurs et langages peuvent aussi être exécutés grâce au [programme utilisateur](/fr/docs/hebergement-web/sites/serveurs-http/programme-utilisateur/).

## Versions

Il est possible de choisir une version majeure d'un langage ou une version mineure précise.

Lorsqu'on choisit les versions majeures, le système gère automatiquement la mise à jour lors de la mise à disposition d'une nouvelle version mineure. Cela permet de bénéficier automatiquement des correctifs de sécurité et de bugs, tout en conservant une compatibilité complète.

Les versions utilisées par défaut sont celles renseignées dans le menu **Environnement** de l'interface d'administration. Il est possible de choisir une autre version en utilisant les *Variables d'environnement* (ou pour les sites en choisissant la version dans **Web > Sites**).


### Cloud privé

Les versions de langages sont, pour limiter la consommation d'espace disque, **automatiquement installées à la demande**.[^1]

Pour exécuter le binaire d'un langage (par exemple, `python`), il faut tout simplement exécuter `python`. Cela va en interne appeler `/usr/bin/python`, qui est un *wrapper* vers la "bonne" version de python (celle définie dans son environnement).

Les binaires sont stockés dans `/usr/alwaysdata/[langage]/[version]`. Le répertoire de chaque version n'existe pas forcément avant d'avoir appelé le binaire de la version en question : il ne faut donc pas se baser sur `/usr/alwaysdata` pour savoir si une version est disponible mais vous pouvez utiliser :

```
$ alwrapper get_versions [langage]
```

[^1]: `[langage]` et `[version]` doivent être remplacés par le nom du langage / la version.
