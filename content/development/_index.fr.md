+++
url = "/fr/developpement/"
title = "Développement"
pre = "<i class='fas fa-fw fa-code'></i> "
weight = 60
archetype = "chapter"
+++

## Index
- [API](/development/api)
- [Guides d'installation et déploiements](/development/guides)
- [Marketplace](/development/marketplace)

Cloud Privé :
- [Docker](/development/docker)
- [VPN](/development/vpn)

## Questions diverses

### Rediriger les logs

Tout champ de type `command` (programme utilisateur, site Node.js, tâche planifiée, service...) peut être suffixé par `> foo/bar` (chemin de votre choix) pour rediriger les logs de la commande dans un fichier.
