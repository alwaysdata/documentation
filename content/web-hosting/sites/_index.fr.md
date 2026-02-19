+++
url = "/fr/hebergement-web/sites/"
title = "Sites web"
weight = 10
tags = ["http", "site"]
+++

Pour qu'une adresse hébergée chez alwaysdata soit accessible en HTTP/HTTPS elle **doit** être déclarée dans **Web > Sites**. Choisissez le [langage](/web-hosting/languages) ou type de votre choix et paramétrez-les.

Vous pouvez avoir autant de sites que vous le souhaitez sur un seul et même compte. À noter que cela entraîne cependant un risque de sécurité, l'isolation étant au niveau des comptes.

Un extrait des logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄) et les processus en cours dans le menu **Avancé > Processus > Web**.

{{% notice note %}}
Si votre script a besoin d'autoriser certaines IP, autorisez ces [plages d'adresses IP](/technical-specifications/ip-ranges).
{{% /notice %}}

## Ressources

- [API](https://api.alwaysdata.com/v1/site/doc/)
- [Déclarer un site](/web-hosting/sites/add-a-site)
- [Adresses HTTP externes](/web-hosting/sites/use-external-addresses) (les domaines n'utilisant pas nos serveurs DNS)
* [Programme utilisateur](/web-hosting/sites/user-program)
* [Redirection d'adresses](/web-hosting/sites/redirect)
* [Apache personnalisé](/web-hosting/sites/apache-custom)
* [Fichiers statiques](/web-hosting/sites/static-files)
- [Stack HTTP](/web-hosting/sites/http-stack)
- [Configuration Apache](/web-hosting/sites/configure-apache)
- [Fichier .htaccess](/web-hosting/sites/htaccess-file)
* [Redémarrer un site](/web-hosting/sites/restart-a-site)
* [Changer de prestataire](/web-hosting/sites//transfer-in)
* [Changer l'adresse d'un site web](/web-hosting/sites/change-a-website-address)
* [Déplacer un site](/web-hosting/sites/move-a-site)
* [Désactiver un site](/web-hosting/sites/deactivate-a-site)
- [Catch-all](/web-hosting/sites/catch-all)
- [Obligations légales sur Internet](/web-hosting/sites/legal-requirements-on-internet)
* [Désinfecter un site](/web-hosting/sites/clean-up-a-site)
* [Restaurer un site](/web-hosting/backups/restore-a-site)
* [Connection to upstream](/web-hosting/sites/connection-to-upstream)
* [Problèmes fréquents](/web-hosting/sites/troubleshooting)
* [Diverses questions](/web-hosting/sites/misc)

## Protection des communications sur internet

- [Rediriger HTTP vers HTTPS](/web-hosting/sites/ssl-tls/redirect-http-to-https)
- [Configuration TLS](/web-hosting/sites/ssl-tls/configure-tls)
- [Ajouter un certificat SSL](/web-hosting/sites/ssl-tls/add-a-ssl-certificate)
- [Certificats Let's Encrypt](/web-hosting/sites/ssl-tls/lets-encrypt)

## Personnalisation

* [Personnaliser les pages d'erreurs](/web-hosting/sites/custom-error-pages)
* [Analyser des processus](/web-hosting/sites/analyze-processes)
* [Performances web](/web-hosting/sites/web-performances)
* [Pic d'audience](/web-hosting/sites/anticipate-peak-audience)
* [Formater les logs HTTP](/web-hosting/sites/formatting-http-logs)
- [Cache HTTP](/web-hosting/sites/http-cache)
- [Activer le cache HTTP sur WordPress](/web-hosting/sites/activate-http-cache-on-wordpress)
* [WAF](/web-hosting/sites/waf)
- [Sondes de monitoring](/web-hosting/sites/use-probes)

## Liens externes

- Disponibilité d'un site : [Where's It Up?](https://wheresitup.com/), [Screenshot Guru](https://screenshot.guru/) (avec capture d'écran)
- Connaître la résolution DNS d'une adresse : [DNSwatch](https://www.dnswatch.info/)
