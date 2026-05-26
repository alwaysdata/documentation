---
permalink: /fr/docs/hebergement-web/sites/
title: Sites web
eleventyNavigation:
  key: Sites web
  parent: Hébergement web
---

Pour qu'une adresse hébergée chez alwaysdata soit accessible en HTTP/HTTPS elle **doit** être déclarée dans **Web > Sites**. Choisissez le [langage](/fr/docs/hebergement-web/languages/) ou type de votre choix et paramétrez-les.

Vous pouvez avoir autant de sites que vous le souhaitez sur un seul et même compte. À noter que cela entraîne cependant un risque de sécurité, l'isolation étant au niveau des comptes.

Un extrait des logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄) et les processus en cours dans le menu **Avancé > Processus > Web**.

> [!NOTE]
> Si votre script a besoin d'autoriser certaines IP, autorisez ces [plages d'adresses IP](/fr/docs/caracteristiques-techniques/plages-dip/).


## Ressources

- [API](https://api.alwaysdata.com/v1/site/doc/)
- [Déclarer un site](/fr/docs/hebergement-web/sites/ajouter-un-site/)
- [Adresses HTTP externes](/fr/docs/hebergement-web/sites/utiliser-des-adresses-externes/) (les domaines n'utilisant pas nos serveurs DNS)
* [Programme utilisateur](/fr/docs/hebergement-web/sites/programme-utilisateur/)
* [Redirection d'adresses](/fr/docs/hebergement-web/sites/redirection/)
* [Apache personnalisé](/fr/docs/hebergement-web/sites/apache-personnalise/)
* [Fichiers statiques](/fr/docs/hebergement-web/sites/fichiers-statiques/)
- [Stack HTTP](/fr/docs/hebergement-web/sites/stack-http)
- [Configuration Apache](/fr/docs/hebergement-web/sites/configurer-apache/)
- [Fichier .htaccess](/fr/docs/hebergement-web/sites/fichier-htaccess/)
* [Redémarrer un site](/fr/docs/hebergement-web/sites/redemarrer-un-site/)
* [Changer de prestataire](/fr/docs/hebergement-web/sites/migrer-un-site-chez-alwaysdata/)
* [Changer l'adresse d'un site web](/fr/docs/hebergement-web/sites/changer-ladresse-dun-site-web/)
* [Déplacer un site](/fr/docs/hebergement-web/sites/deplacer-un-site/)
* [Désactiver un site](/fr/docs/hebergement-web/sites/desactiver-un-site/)
- [Catch-all](/fr/docs/hebergement-web/sites/adresses-collectrice/)
- [Obligations légales sur Internet](/fr/docs/hebergement-web/sites/obligations-legales-sur-internet/)
* [Désinfecter un site](/fr/docs/hebergement-web/sites/desinfecter-un-site/)
* [Restaurer un site](/fr/docs/hebergement-web/sauvegardes/restaurer-un-site/)
* [Connection to upstream](/fr/docs/hebergement-web/sites/erreurs-connection-to-upstream/)
* [Problèmes fréquents](/fr/docs/hebergement-web/sites/problemes-frequents/)
* [Diverses questions](/fr/docs/hebergement-web/sites/divers/)

## Protection des communications sur internet

- [Rediriger HTTP vers HTTPS](/fr/docs/hebergement-web/sites/ssl-tls/rediriger-HTTP-vers-HTTPS/)
- [Configuration TLS](/fr/docs/hebergement-web/sites/ssl-tls/configurer-tls/)
- [Ajouter un certificat SSL](/fr/docs/hebergement-web/sites/ssl-tls/ajouter-certificat-ssl/)
- [Certificats Let's Encrypt](/fr/docs/hebergement-web/sites/ssl-tls/certificats-lets-encrypt/)

## Personnalisation

* [Personnaliser les pages d'erreurs](/fr/docs/hebergement-web/sites/personnaliser-les-pages-derreurs/)
* [Analyser des processus](/fr/docs/hebergement-web/sites/analyser-des-processus/)
* [Performances web](/fr/docs/hebergement-web/sites/performances-web/)
* [Pic d'audience](/fr/docs/hebergement-web/sites/anticiper-un-pic-daudience/)
* [Formater les logs HTTP](/fr/docs/hebergement-web/sites/formater-les-logs-http/)
- [Cache HTTP](/fr/docs/hebergement-web/sites/cache-http/)
- [Activer le cache HTTP sur WordPress](/fr/docs/hebergement-web/sites/activer-le-cache-http-sur-wordpress/)
* [WAF](/fr/docs/hebergement-web/sites/waf/)
- [Sondes de monitoring](/fr/docs/hebergement-web/sites/utiliser-les-sondes-de-monitoring/)

## Liens externes

- Disponibilité d'un site : [Where's It Up?](https://wheresitup.com/), [Screenshot Guru](https://screenshot.guru/) (avec capture d'écran)
- Connaître la résolution DNS d'une adresse : [DNSwatch](https://www.dnswatch.info/)
