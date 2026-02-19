+++
url = "/fr/caracteristiques-techniques/migrations/migration-cloud-prive/"
title = "Processus des migrations en Cloud Privé"
linkTitle = "Processus en Cloud Privé"
tags = ["migration"]
+++

La plupart des migrations impliquent un changement global sur le serveur. Par exemple, la migration vers une nouvelle version de notre infrastructure logicielle va demander une réinstallation complète du serveur.

Sur le Cloud Public, lors d'une migration, les comptes sont migrés vers un nouveau serveur faisant tourner la nouvelle version. Lorsque vous avez un Cloud Privé, ce n'est pas possible : vous n'avez qu'un seul serveur.

##  Migrations obligatoires

Pour vous éviter d'avoir à effectuer la migration brutale de votre serveur, et donc de l'ensemble des comptes s'y trouvant, [elles se font en plusieurs étapes](/technical-specifications/migrations/required-migrations-process).

## Migrations optionnelles

Certaines migrations ne concernant qu'un service de notre infrastructure (exemple : les serveurs de gestion de bases de données) peuvent être proposées.

Dans ce cas, aucune préparation, aucun test n'est possible, la mise à jour est directement effectuée sur le serveur. Vous pouvez cependant ouvrir un compte sur le Cloud Public si ce service y est proposé pour tester certaines de vos applications.
