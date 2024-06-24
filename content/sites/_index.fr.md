+++
url = "/fr/sites/"
title = "Sites web"
pre = "<i class='fas fa-fw fa-globe'></i> "
chapter = true
weight = 10
tags = ["http", "site"]
+++

# Sites web

Pour qu'une adresse hébergée chez alwaysdata soit accessible en HTTP/HTTPS elle **doit** être déclarée dans **Web > Sites**. Choisissez le [langage]({{< ref "languages" >}}) ou type de votre choix et paramétrez-les.

Vous pouvez avoir autant de sites que vous le souhaitez sur un seul et même compte. À noter que cela entraîne cependant un risque de sécurité, l'isolation étant au niveau des comptes.

Un extrait des logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄) et les processus en cours dans le menu **Avancé > Processus > Web**.

{{% notice note %}}
Si votre script a besoin d'autoriser certaines IP, autorisez ces [plages d'adresses IP]({{< ref "security/ip-ranges" >}}).
{{% /notice %}}

## Ressources

- [API](https://api.alwaysdata.com/v1/site/doc/)
- [Déclarer un site]({{< relref "add-a-site" >}})
- [Adresses HTTP externes]({{< relref "use-external-addresses" >}}) (les domaines n'utilisant pas nos serveurs DNS)
* [Programme utilisateur]({{< relref "user-program" >}})
* [Redirection d'adresses]({{< relref "redirect" >}})
* [Apache personnalisé]({{< relref "apache-custom" >}})
* [Fichiers statiques]({{< relref "static-files" >}})
- [Stack HTTP]({{< relref "http-stack" >}})
- [Configuration Apache]({{< relref "configure-apache" >}})
- [Fichier .htaccess]({{< relref "htaccess-file" >}})
* [Redémarrer un site]({{< relref "restart-a-site" >}})
* [Changer de prestataire]({{< relref "./transfer-in" >}})
* [Changer l'adresse d'un site web]({{< ref "sites/change-a-website-address" >}})
* [Déplacer un site]({{< relref "move-a-site" >}})
* [Désactiver un site]({{< relref "deactivate-a-site" >}})
- [Catch-all]({{< relref "./catch-all" >}})
- [Obligations légales sur Internet]({{<ref "./legal-requirements-on-internet">}})
* [Désinfecter un site]({{< relref "clean-up-a-site" >}})
* [Restaurer un site]({{< ref "backups/restore-a-site" >}})
* [Connection to upstream]({{< relref "connection-to-upstream" >}})
* [Problèmes fréquents]({{< relref "./troubleshooting" >}})
* [Diverses questions]({{< relref "./misc" >}})

## Protection des communications sur internet

- [Rediriger HTTP vers HTTPS]({{< ref "security/ssl-tls/redirect-http-to-https" >}})
- [Configuration TLS]({{< ref "security/ssl-tls/configure-tls" >}})
- [Ajouter un certificat SSL]({{< ref "security/ssl-tls/add-a-ssl-certificate" >}})
- [Certificats Let's Encrypt]({{< ref "security/ssl-tls/lets-encrypt" >}})

## Personnalisation

* [Personnaliser les pages d'erreurs]({{< relref "custom-error-pages" >}})
* [Analyser des processus]({{< relref "analyze-processes" >}})
* [Performances web]({{< relref "web-performances" >}})
* [Pic d'audience]({{< relref "anticipate-peak-audience" >}})
* [Formater les logs HTTP]({{< relref "formatting-http-logs" >}})
- [Cache HTTP]({{< ref "sites/http-cache" >}})
- [Activer le cache HTTP sur WordPress]({{< ref "sites/activate-http-cache-on-wordpress" >}})
* [WAF]({{< ref "sites/waf" >}})
- [Sondes de monitoring]({{< relref "use-probes" >}})

## Liens externes

- Disponibilité d'un site : [Where's It Up?](https://wheresitup.com/), [Screenshot Guru](https://screenshot.guru/) (avec capture d'écran)
- Connaître la résolution DNS d'une adresse : [DNSwatch](https://www.dnswatch.info/)
