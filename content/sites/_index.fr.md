+++
url = "/fr/sites/"
title = "Sites web"
pre = "<i class='fas fa-fw fa-globe'></i> "
archetype = "chapter"
weight = 10
tags = ["http", "site"]
+++

Pour qu'une adresse hébergée chez alwaysdata soit accessible en HTTP/HTTPS elle **doit** être déclarée dans **Web > Sites**. Choisissez le [langage](languages) ou type de votre choix et paramétrez-les.

Vous pouvez avoir autant de sites que vous le souhaitez sur un seul et même compte. À noter que cela entraîne cependant un risque de sécurité, l'isolation étant au niveau des comptes.

Un extrait des logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄) et les processus en cours dans le menu **Avancé > Processus > Web**.

{{% notice note %}}
Si votre script a besoin d'autoriser certaines IP, autorisez ces [plages d'adresses IP](security/ip-ranges).
{{% /notice %}}

## Ressources

- [API](https://api.alwaysdata.com/v1/site/doc/)
- [Déclarer un site](add-a-site)
- [Adresses HTTP externes](use-external-addresses) (les domaines n'utilisant pas nos serveurs DNS)
* [Programme utilisateur](user-program)
* [Redirection d'adresses](redirect)
* [Apache personnalisé](apache-custom)
* [Fichiers statiques](static-files)
- [Stack HTTP](http-stack)
- [Configuration Apache](configure-apache)
- [Fichier .htaccess](htaccess-file)
* [Redémarrer un site](restart-a-site)
* [Changer de prestataire](./transfer-in)
* [Changer l'adresse d'un site web](sites/change-a-website-address)
* [Déplacer un site](move-a-site)
* [Désactiver un site](deactivate-a-site)
- [Catch-all](./catch-all)
- [Obligations légales sur Internet](legal-requirements-on-internet)
* [Désinfecter un site](clean-up-a-site)
* [Restaurer un site](backups/restore-a-site)
* [Connection to upstream](connection-to-upstream)
* [Problèmes fréquents](./troubleshooting)
* [Diverses questions](./misc)

## Protection des communications sur internet

- [Rediriger HTTP vers HTTPS](security/ssl-tls/redirect-http-to-https)
- [Configuration TLS](security/ssl-tls/configure-tls)
- [Ajouter un certificat SSL](security/ssl-tls/add-a-ssl-certificate)
- [Certificats Let's Encrypt](security/ssl-tls/lets-encrypt)

## Personnalisation

* [Personnaliser les pages d'erreurs](custom-error-pages)
* [Analyser des processus](analyze-processes)
* [Performances web](web-performances)
* [Pic d'audience](anticipate-peak-audience)
* [Formater les logs HTTP](formatting-http-logs)
- [Cache HTTP](sites/http-cache)
- [Activer le cache HTTP sur WordPress](sites/activate-http-cache-on-wordpress)
* [WAF](sites/waf)
- [Sondes de monitoring](use-probes)

## Liens externes

- Disponibilité d'un site : [Where's It Up?](https://wheresitup.com/), [Screenshot Guru](https://screenshot.guru/) (avec capture d'écran)
- Connaître la résolution DNS d'une adresse : [DNSwatch](https://www.dnswatch.info/)
