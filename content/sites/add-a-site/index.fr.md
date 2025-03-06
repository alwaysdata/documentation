+++
url = "/fr/sites/ajouter-un-site/"
title = "Comment ajouter un site"
menuTitle = "Déclarer un site"
layout = "howto"
weight = 1
tags = ["http", "site"]
+++

Rendez-vous dans le menu **Web > Sites > Ajouter un site**.
{{< fig "images/admin-panel_sites-list.fr.png" "Interface d'administration : liste des sites" >}}

{{% notice tip %}}
Si vous partez de zéro vous pouvez profiter de notre [marketplace]({{< ref "marketplace" >}}) en allant dans **Web > Sites > Installer une application**.
{{% /notice %}}

## Adresses
L'ajout de toutes les adresses dans ce menu est un **impératif** pour qu'elles soient accessibles comme sites :
- par exemple, pour accéder à un site sur *www\.example.org* et *example.org* les deux adresses doivent être ajoutées ;
- renseigner son domaine dans le menu **Domaines** n'est pas non plus suffisant. Même pour un domaine utilisant nos [serveurs DNS]({{< ref "domains#gestion-dns" >}}).

Par ailleurs, si le domaine n'utilise pas nos serveurs DNS, il faudra [créer des enregistrements DNS]({{< ref "sites/use-external-addresses" >}}) chez le prestataire DNS.

{{< fig "images/admin-panel_add-site-general.fr.png" "Général" >}}

{{% notice note %}}
L'ajout du site ne va pas créer le *répertoire racine*, il doit être créé par [accès distant]({{< ref "remote-access" >}}).
{{% /notice %}}

Pour créer un catch-all indiquez `*.example.org`.

## Configuration
Spécifique à chaque type de site :
- [PHP]({{< ref "languages/php" >}}) ;
- [Python WSGI]({{< ref "languages/python" >}}) ;
- [Ruby Rack]({{< ref "languages/ruby" >}}) ;
- Ruby on Rails <= 2.x ;
- [Node.js]({{< ref "languages/nodejs" >}}) ;
- [Elixir]({{< ref "languages/elixir" >}}) ;
- [Deno]({{< ref "languages/deno" >}}),
- [.NET]({{< ref "languages/dotnet" >}}),
- [Redirection]({{< ref "sites/redirect" >}}) ;
- Reverse proxy : met en place un reverse proxy vers une URL ;
- [Fichiers statiques]({{< ref "sites/static-files" >}}) : pour gérer des sites ou fichiers statiques ;
- [Apache personnalisé]({{< ref "sites/apache-custom" >}}) : pour totalement configurer son serveur Apache ;
- [Programme utilisateur]({{< ref "sites/user-program" >}}) : pour faire tourner n'importe quel serveur web.

Les sites de type PHP, Fichiers statiques et Apache personnalisé sont servis par [Apache](https://httpd.apache.org/). Python WSGI, Ruby Rack et Ruby on Rails <= 2.x utilisent [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/).

## [SSL]({{< ref "security/ssl-tls/redirect-http-to-https" >}})

{{< fig "images/admin-panel_add-site-ssl.fr.png" "Rediriger les requêtes HTTP vers HTTPS" >}}

## [WAF]({{< ref "sites/waf" >}})

{{< fig "images/admin-panel_add-site-waf.fr.png" "Configurer le pare-feu applicatif web" >}}

## [Cache]({{< ref "sites/http-cache" >}})
{{< fig "images/admin-panel_add-site-cache.fr.png" "Mettre en place le cache HTTP" >}}

## [Logs]({{< ref "sites/formatting-http-logs" >}})

{{< fig "images/admin-panel_add-site-logs.fr.png" "Personnaliser les logs HTTP" >}}

## Avancé

{{< fig "images/admin-panel_add-site-advanced.fr.png" "" >}}

> [Temps d'inactivité]({{< ref "sites/misc#temps-dinactivité" >}})

---

Les logs HTTP sont disponibles dans le répertoire `$HOME/admin/logs/http/`. Les logs _sites_ reprenant les lancements, arrêts et dysfonctionnements des serveurs web "upstream" sont disponibles dans `$HOME/admin/logs/sites/`. Un extrait de ces logs (ainsi que les logs Apache et uWSGI) est présenté dans l'interface d'administration alwaysdata  (**Logs** - 📄).
