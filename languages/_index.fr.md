+++
url = "/fr/langages/"
title = "Langages"
pre = "<i class='fas fa-fw fa-code'></i> "
weight = 11
chapter = true
+++

# Langages

Retrouvez toutes les informations sur les technologies propulsées par nos serveurs :

* [Deno]({{< ref "languages/deno" >}})
* [Elixir]({{< ref "languages/elixir" >}})
* [Go]({{< ref "languages/go" >}})
* [Java]({{< ref "languages/java" >}})
* [Lua]({{< ref "languages/lua" >}})
* [Node.js]({{< ref "languages/nodejs" >}})
* [PHP]({{< ref "languages/php" >}})
* [Python]({{< ref "languages/python" >}})
* [Ruby]({{< ref "languages/ruby" >}})


## Installation de versions
En [serveurs Catalyst]({{< ref "accounts/billing/catalyst-prices" >}}), les versions de langages sont, pour limiter la consommation d'espace disque, **automatiquement installées à la demande**.[^1]
* Lister `/usr/alwaysdata/[langage]/` n'affiche que les versions déjà installées, non l'ensemble des versions « disponibles ».
* Pour avoir la liste des versions disponibles, `alwrapper get_versions [langage]` peut être utilisée.
* Pour installer une version, il suffit de l'exécuter.

[^1]: `[langage]` doit être remplacé par le nom du langage.
