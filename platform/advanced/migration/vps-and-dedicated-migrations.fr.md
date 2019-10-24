+++
url = "/fr/plate-forme/avancé/migration/effectuer-une-migration-vps-ou-dédié/"
title = "Comment effectuer une migration en serveur VPS/dédié"
menuTitle = "Migrations VPS/dédié"
layout = "howto"
weight = 10
draft = false
hidden = true
tags = ["dedicated server", "migration", "vps server"]
+++

La plupart des migrations impliquent un changement global sur le serveur. Par exemple, la migration vers une nouvelle version de notre infrastructure logicielle va demander une réinstallation complète du serveur.

En environnement mutualisé, lors d'une migration, les comptes sont migrés vers un nouveau serveur faisant tourner la nouvelle version. Lorsque vous avez un serveur dédié ou VPS, ce n'est pas possible : vous n'avez qu'un seul serveur. 

##  Migrations obligatoires

Pour vous éviter d'avoir à effectuer la migration brutale de votre serveur, et donc de l'ensemble des comptes s'y trouvant, elles se font en plusieurs étapes :

- vous testez les migrations de l'ensemble de vos comptes (comme en mutualisé) ;
- lorsque vous êtes prêt à démarrer la migration réelle de vos comptes, nous vous mettrons à disposition un serveur de transit de même configuration que votre serveur dédié ou VPS ;
- vous pourrez alors effectuer la migration de chacun de vos comptes, un par un. Ils seront déplacés sur ce serveur de transit ;
- lorsque l'intégralité de vos comptes auront été migrés sur ce serveur de transit , votre serveur initial sera réinstallé pour tourner sous la nouvelle version de notre infrastructure logicielle ;
- tous vos comptes, alors situés sur le serveur de transit, seront enfin déplacés de manière transparente vers le serveur initial.

Durant la réinstallation de votre serveur, ses adresses IP seront reroutées vers le serveur de transit pour que vos services restent accessibles normalement. Une courte période d'indisponibilité de ces IP (autour d'une minute) sera toutefois à prévoir. Si vous utilisez nos serveurs DNS, le trafic aura de toute façon été redirigé préalablement vers les IP du serveur de transit, vous ne subirez donc aucune période d'indisponibilité.

> Le serveur de transit vous sera mis à disposition sans surcoût pour une période d'une semaine maximum. Si vous n'avez pas terminé la migration de l'ensemble de vos comptes au terme de cette semaine, le serveur de transit sera facturé au même coût que votre serveur dédié/VPS (au prorata, jour par jour) — en plus du serveur d'origine qui reste facturé normalement.


La mise à disposition du serveur de transit dépendra de la disponibilité au moment de votre demande. Il se peut donc que vous deviez attendre qu'un serveur soit libéré.


## Migrations optionnelles

Certaines migrations ne concernant qu'un service de notre infrastructure (exemple : les serveurs de gestion de bases de données) peuvent être proposées.

Dans ce cas, aucun test n'est possible, la mise à jour est directement effectuée sur le serveur. Vous pouvez cependant ouvrir un compte en serveurs mutualisés si ce service y est proposé pour tester certaines de vos applications.
