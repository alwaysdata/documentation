+++
url = "/fr/hebergement-web/sites/ajouter-un-site/"
title = "Ajouter un site"
tags = ["http", "site"]
+++

Rendez-vous dans le menu **Web > Sites > Ajouter un site**.
{{< fig "images/admin-panel_sites-list.fr.png" "Interface d'administration : liste des sites" >}}

{{% notice tip %}}
Si vous partez de zéro vous pouvez profiter de notre [marketplace](/development/marketplace) en allant dans **Web > Sites > Installer une application**.
{{% /notice %}}

## Adresses
L'ajout de toutes les adresses dans ce menu est un **impératif** pour qu'elles soient accessibles comme sites :
- par exemple, pour accéder à un site sur *www\.example.org* et *example.org* les deux adresses doivent être ajoutées ;
- renseigner son domaine dans le menu **Domaines** n'est pas non plus suffisant. Même pour un domaine utilisant nos [serveurs DNS](/domains#gestion-dns).

Par ailleurs, si le domaine n'utilise pas nos serveurs DNS, il faudra [créer des enregistrements DNS](/web-hosting/sites/use-external-addresses) chez le prestataire DNS.

{{< fig "images/admin-panel_add-site-general.fr.png" "Général" >}}

{{% notice note %}}
L'ajout du site ne va pas créer le *répertoire racine*, il doit être créé par [accès distant](/web-hosting/remote-access).
{{% /notice %}}

Pour créer un catch-all indiquez `*.example.org`.

## Configuration
Spécifique à chaque type de site :
- [PHP](/web-hosting/languages/php) ;
- [Python WSGI](/web-hosting/languages/python) ;
- [Ruby Rack](/web-hosting/languages/ruby) ;
- Ruby on Rails <= 2.x ;
- [Node.js](/web-hosting/languages/nodejs) ;
- [Elixir](/web-hosting/languages/elixir) ;
- [Deno](/web-hosting/languages/deno) ;
- [.NET](/web-hosting/languages/dotnet) ;
- [Java](/web-hosting/languages/java) ;
- [Redirection](/web-hosting/sites/redirect) ;
- Reverse proxy : met en place un reverse proxy vers une URL ;
- [Fichiers statiques](/web-hosting/sites/static-files) : pour gérer des sites ou fichiers statiques ;
- [Apache personnalisé](/web-hosting/sites/apache-custom) : pour totalement configurer son serveur Apache ;
- [Programme utilisateur](/web-hosting/sites/user-program) : pour faire tourner n'importe quel serveur web.

Les sites de type PHP, Fichiers statiques et Apache personnalisé sont servis par [Apache](https://httpd.apache.org/). Python WSGI, Ruby Rack et Ruby on Rails <= 2.x utilisent [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/).

## SSL

{{< fig "images/admin-panel_add-site-ssl.fr.png" "Rediriger les requêtes HTTP vers HTTPS" >}}
Voir [SSL](/web-hosting/sites/ssl-tls/redirect-http-to-https).

## WAF

{{< fig "images/admin-panel_add-site-waf.fr.png" "Configurer le pare-feu applicatif web" >}}
Voir [WAF](/web-hosting/sites/waf).

## Cache
{{< fig "images/admin-panel_add-site-cache.fr.png" "Mettre en place le cache HTTP" >}}
Voir [Cache](/web-hosting/sites/http-cache).

## Logs

{{< fig "images/admin-panel_add-site-logs.fr.png" "Personnaliser les logs HTTP" >}}
Voir [Logs](/web-hosting/sites/formatting-http-logs).

## Avancé

{{< fig "images/admin-panel_add-site-advanced.fr.png" "" >}}

> [Temps d'inactivité](/web-hosting/sites/misc#temps-dinactivité)

---

Les logs HTTP sont disponibles dans le répertoire `$HOME/admin/logs/http/`. Les logs _sites_ reprenant les lancements, arrêts et dysfonctionnements des serveurs web "upstream" sont disponibles dans `$HOME/admin/logs/sites/`. Un extrait de ces logs (ainsi que les logs Apache et uWSGI) est présenté dans l'interface d'administration alwaysdata  (**Logs** - 📄).
