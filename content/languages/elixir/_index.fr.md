+++
url = "/fr/langages/elixir/"
title = "Elixir"
archetype = "chapter"
tags = ["elixir"]
+++

Le fonctionnement d'[Elixir](https://elixir-lang.org/) chez alwaysdata est très standard. Si vous avez l'habitude d'utiliser Elixir sous un système Unix (par exemple, Linux), vous savez déjà presque tout ce qu'il faut.

* les [versions proposées](languages/elixir/configuration#versions-supportées) vont de la 1.13 à la 1.18 ;
* la [configuration d'environnement](languages/elixir/configuration#environnement) se fait simplement.

Notre marketplace propose l'installation du framework [Phoenix](https://www.phoenixframework.org/)[^1].

* [Ressource API](https://api.alwaysdata.com/v1/environment/elixir/doc/)

[^1]: Phoenix 1.6 n'est pas compatible avec notre infrastructure car il nécessite Elixir 1.12 qui dépend d'Erlang 22. Ce sera mis à jour lors de la prochaine [migration](advanced/migrations) de notre infrastructure logicielle.
