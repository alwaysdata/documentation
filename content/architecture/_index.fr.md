+++
url = "/fr/architecture/"
title = "Architecture alwaysdata"
pre = "<i class='fas fa-fw fa-atom'></i> "
weight = 40
archetype = "chapter"
tags = ["environnement technique", "infrastructure"]
+++

## Architecture matérielle

alwaysdata est propriétaire de son infrastructure - serveurs, baies de stockage, équipement réseau et tout ce qui permet de soutenir notre plateforme. Nous nous appuyons sur l'expertise d'[Equinix](https://www.equinix.com/) pour nos datacenters principaux. Ils nous certifient un niveau de disponibilité de plus de 99.99999% ([Certifications Equinix](https://www.equinix.co.uk/data-centers/design/standards-compliance)). Nos serveurs sont hébergés en France dans leurs datacenters parisiens.

Nous opérons notre propre *réseau indépendant* : [AS60362](http://as60362.net/).

Tous nos équipements réseau, switches, routeurs opèrent par paire (deux fabriquants différents) et quatre opérateurs réseaux indépendants assurent la redondance et la neutralité de notre réseau.

Toutes nos machines sont dotées de SSD configurés en *RAID1* (dupliqués en temps réel) et *échangeables à chaud*. Leurs alimentations sont *redondées* via deux chaînes électriques indépendantes et du matériel de rechange est disponible sur nos sites de production pour remplacer tout élément défectueux.

Nous supportons nativement le protocole *IPv6* pour l'ensemble de nos services.

Pour aller plus loin :
- [Réseau](security/network)
- [Plages d'IP](security/ip-ranges)
- [Plan de continuité d'activité](security/drp)

## Architecture logicielle

Nous utilisons autant que possible des solutions open source et nos serveurs tournent sous [Linux Debian x64](https://www.debian.org/). Tous nos services sont accessibles à distance et une [API REST](api) est disponible pour les opérations de configuration sur notre interface d'administration.

Chaque compte est isolé des autres via une conteneurisation basée sur [Cgroups](https://fr.wikipedia.org/wiki/Cgroups). Il exécute ainsi ses propres programmes, ses propres serveurs HTTP pour offrir une sécurisation et une personnalisation poussée.

Notre système distribue automatiquement les ressources disponibles, équitablement entre tous les comptes d’un serveur. Lorsque un compte rencontre un pic de consommation, la plateforme redistribue ses ressources, en prélevant les comptes peu ou pas actifs, pour les réaffecter temporairement.

- [Stack HTTP](sites/http-stack)
- [Mises à jour de sécurité](security/security-upgrades)

---
- [Bug Bounty](security/bug-bounty)
