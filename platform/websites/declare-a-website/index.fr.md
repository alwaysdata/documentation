+++
url = "/fr/plateforme/sites/déclarer-un-site/"
title = "Comment déclarer un site web"
menuTitle = "Déclarer un site"
layout = "howto"
weight = 5
tags = ["http", "site"]
+++

Rendez-vous dans le menu **Web > Sites > Ajouter un site**.
{{< fig "images/admin-panel_sites-list.fr.png" "Interface d'administration : liste des sites" >}}

{{% notice tip %}}
Si vous partez de zéro vous pouvez profiter de notre [applithèque]({{< ref "marketplace" >}}) en allant dans **Web > Sites > Installer une application**.
{{% /notice %}}

- Nom : utilisé pour l'affichage dans l'interface d'administration alwaysdata, purement informatif ;
- Adresses : les adresses pour joindre votre site (*.exemple.fr pour les catch-all) ;

{{< fig "images/admin-panel_add-site-general.fr.png" "Ajouter un site : général" >}}

- Configuration : spécifique à chaque type de site :
    - [PHP]({{< ref "platform/languages/php" >}}) ;
    - [Python WSGI]({{< ref "platform/languages/python" >}}) ;
    - [Ruby Rack]({{< ref "platform/languages/ruby" >}}) ;
    - [Ruby on Rails <= 2.x]({{< ref "platform/languages/ruby" >}}) ;
    - [Node.js]({{< ref "platform/languages/nodejs" >}}) ;
    - Elixir ;
    - [Redirection]({{< ref "platform/websites/redirect" >}}) ;
    - [Fichiers statiques]({{< ref "platform/websites/static-files" >}}) : pour gérer des sites ou fichiers statiques ;
    - [Apache personnalisé]({{< ref "platform/websites/apache-custom" >}}) : pour totalement configurer son serveur Apache ;
    - [Programme utilisateur]({{< ref "platform/websites/user-program" >}}) : pour faire tourner n'importe quel serveur web.

Les sites de type PHP, Fichiers statiques et Apache personnalisé sont servis par [Apache](https://httpd.apache.org/). Python WSGI, Ruby Rack et Ruby on Rails <= 2.x utilisent [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/).

- [SSL]({{< ref "security/certificates/redirect-http-to-https" >}}) : rediriger le HTTP vers HTTPS ;
{{< fig "images/admin-panel_add-site-ssl.fr.png" "Ajouter un site : SSL" >}}

- [WAF]({{< ref "platform/websites/waf" >}}) : configurer le parefeu web applicatif ;
{{< fig "images/admin-panel_add-site-waf.fr.png" "Ajouter un site : WAF" >}}

- [Cache]({{< ref "platform/websites/http-cache" >}}) : mettre en place le cache HTTP ;
{{< fig "images/admin-panel_add-site-cache.fr.png" "Ajouter un site : cache HTTP" >}}

- [Logs]({{< ref "platform/websites/formatting-http-logs" >}}) : personnaliser ses logs HTTP ;
{{< fig "images/admin-panel_add-site-logs.fr.png" "Ajouter un site : logs HTTP" >}}

- Avancé.
{{< fig "images/admin-panel_add-site-advanced.fr.png" "Ajouter un site : avancé" >}}

Les logs HTTP sont disponibles dans le répertoire `$HOME/admin/logs/http/`. Les logs _sites_ reprenant les lancements, arrêts et dysfonctionnements des serveurs web "upstream" sont disponibles dans `$HOME/admin/logs/sites/`.