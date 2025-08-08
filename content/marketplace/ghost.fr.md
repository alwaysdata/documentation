+++
url = "/fr/marketplace/ghost/"
title = "Ghost"
layout = "man"
hidden = true
tags = ["cms"]
+++

## Cloud public et erreur d'espace disque

`ghost doctor`, qui est notamment lancé lors des installations ou des mises à jour, fait une vérification non fonctionnelle sur notre Cloud Public.

En effet, leur [calcul](https://github.com/TryGhost/Ghost-CLI/blob/1c936d2a1a9816635e8202a136c8b9eac4a86dc6/lib/commands/doctor/checks/free-space.js#L9) de `system information` est incorrect et non compatible avec notre infrastructure. Comme il n'est pas possible de désactiver cette vérification, il faut ajouter les options `--categories --categories` aux commandes `ghost install` ou `ghost update` pour outrepasser le template donné à `ghost doctor`.
