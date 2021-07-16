+++
url = "/fr/architecture/"
title = "Architecture alwaysdata"
pre = "<i class='fas fa-fw fa-atom'></i> "
weight = 75
tags = ["infrastructure"]
+++
## Architecture matérielle

alwaysdata est propriétaire de son infrastructure - serveurs, baies de stockage, équipement réseau et tout ce qui permet de soutenir notre plateforme. Nous nous appuyons sur l'expertise d'[Equinix](https://www.equinix.com/) pour les datacenters. Nos serveurs sont hébergés en France dans leurs datacenters parisiens ([Certifications Equinix](https://www.equinix.co.uk/data-centers/design/standards-compliance)).

Toutes nos machines sont dotées de SSD configurés en *RAID1* (dupliqués en temps réel) et *échangeables à chaud*. Leurs alimentations sont *redondées* via deux chaînes électriques indépendantes et du matériel de rechange est disponible sur nos sites de production pour remplacer tout élément défectueux.

Nous opérons notre propre *réseau indépendant* : [AS60362](http://as60362.net/). Tous nos équipements réseau, switches, routeurs opèrent par paire et quatre opérateurs réseaux indépendants assurent la redondance de notre connexion.

Nous supportons nativement le protocole *IPv6* pour l'ensemble de nos services.

Pour aller plus loin :
- [Réseau]({{< ref "security/network" >}})
- [Plages d'IP]({{< ref "security/ip-ranges" >}})
- [Plan de continuité d'activité]({{< ref "security/drp" >}})

## Architecture logicielle

Nous utilisons autant que possible des solutions open source et nos serveurs tournent sous [Linux Debian](https://www.debian.org/).

Chaque compte est isolé les uns des autres via une conteneuristation basée sur [Cgroups](https://fr.wikipedia.org/wiki/Cgroups). Il exécute ainsi ses propres programmes, ses propres serveurs HTTP pour offrir une sécurisation et une personnalisation poussée.

La mise à jour principale de nos systèmes d'exploitation s'effectue via un [outil d'automatisation]({{< ref "advanced/migrations" >}}) permettant de le faire de façon autonome et flexible par compte. Les logiciels sont sinon mis à jour régulièrement, et même immédiatement (< 24h) en cas de publication d’une faille de sécurité sévère.

- [Stack HTTP]({{< ref "sites/http-stack" >}})
