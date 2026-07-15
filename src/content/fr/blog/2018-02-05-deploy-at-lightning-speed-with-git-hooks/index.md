---
title: "Déployer sans peine avec Git hooks"
date: 2018-02-05
authors: ["Matthias Dugué"]
---

*alwaysdata* vous offre un grand nombre d'accès distants à vos comptes : SSH, FTP, WebDAV… Pourtant, déployer un site ou un service en production manque parfois de souplesse. Alors nous avons pensé à vous.

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExemtrNnl1anc5Y3h5Y2FjaTByc3ZnZWhtZWdocnE4Y2gxYTU4bmhmbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgFlWsUMDFzVIu4/giphy.gif)

## Oh oui *alwaysdata*, raconte-nous le déploiement !

Il y a des choses parfois plus simples que d'autres dans nos métiers de développeur·euse·s. Le déploiement ne fait malheureusement pas partie de celles-ci. Entre la livraison en FTP, à l'ancienne ; la copie de fichier en SFTP ; l'application de patch à distance… Il y en a pour tous les goûts et tous les projets.

Une solution comme [Heroku](https://www.heroku.com/) l'a bien compris : celui ou celle qui produit le code n'a pas à s'ennuyer avec les problématiques liées au déploiement, mais doit se concentrer sur son métier : produire un code de qualité. Or tout le monde n'a pas la main sur un·e DevOp qui va se charger de mettre en production la dernière version pour vous laisser travailler. Dans ce cas, vous n'avez pas le choix, il va falloir vous en occuper vous-même.

Parce qu'*alwaysdata* est un hébergement pensé par des développeurs, nous nous sommes interrogés sur la bonne manière de déployer en production. Nous avons dans nos projets un outil d'automatisation des processus de déploiement, mais la priorité va d'abord au support d'autres technos comme **HTTP/2**.

Alors en attendant, nous avons cherché à vous simplifier la vie. Et tout comme vous, nous préférerions faire nos livraisons en une ligne de commande. On s'est donc penchés sur un déploiement *via* Git.

## Git `push`. Point.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJ0b3hlOXFnNGVybnE5cjBtbWswajQ5cDVrY2N1YWVybGd4bGY2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5VKbvrjxpVJCM/giphy.gif)

Voilà donc ce que nous vous proposons, à l'image de services conteneurisés : un simple `git push` d'une branche de production et c'est réglé.

*TL;DR* : Si vous souhaitez comprendre la mécanique parce que vous êtes curieux·euse, continuez ici. Si vous souhaitez juste mettre en place le déploiement, vous pouvez directement vous rendre sur le dépôt GitHub [alwaysdata/autodeploy-git-hook](https://github.com/alwaysdata/autodeploy-git-hook) où un *README* succinct vous guidera sur la mise en place.

Voyons comment démarrer. Il vous faudra :

- un accès **SSH** pour les réglages
- votre code versionné avec **Git**
- connaître les principes des *git-hooks* (mais ça, on va vous expliquer)
- ~~des œufs, de la farine, du lait~~

### Côté serveur

Commençons par créer un dépôt git contenant votre projet sur votre serveur *alwaysdata* (bien entendu, je vous laisse le soin d'adapter les chemins à votre convenance, rien d'obligatoire) :

```shell
$ ssh mon-compte@ssh-mon-compte.alwaysdata.net
$ git init --bare ~/mon-projet.git
```

Nous initialisons le dépôt en version `bare`, c'est-à-dire qu'il ne contient que les fichiers de *config* et de *versioning*. Dans notre cas, comme nous ne cherchons à faire que du déploiement, nous n'avons pas besoin de plus.

Ensuite, nous allons créer un script de `post-receive`. C'est lui qui, comme son nom l'indique, sera appelé lors d'un `push` vers ce dépôt, avec les références vers la branche poussée. Nous allons nous en servir pour tester la branche (par exemple, une branche nommée `production`), et déployer le contenu de celle-ci vers le dossier servi par notre instance Apache. Créez donc sur votre serveur un fichier `~/mon-projet.git/hooks/post-receive` avec le contenu suivant :

```shell
#!/bin/bash
while read oldrev newrev ref
do
    if [[ $ref = refs/heads/production ]];
    then
        echo "Deploying 'production' branch to production"
        git --work-tree=$HOME/www/mon-projet --git-dir=$(dirname $PWD) checkout --force production
        exit 0
    fi
done
```

Nous testons que c'est bien la branche `production` qui vient d'être poussée, et nous réalisons dans ce cas un `checkout` vers le dossier `~/www/mon-projet` (le chemin que vous avez défini pour votre site dans l'interface d'administration) qui contient les fichiers servis par le serveur HTTP.

N'oubliez pas de rendre le script exécutable avec `chmod +x ~/mon-projet.git/hooks/post-receive`.

### En local

Revenez maintenant dans votre dépôt local sur votre machine de développement. Rendez-vous dans votre projet, et ajoutez le dépôt de déploiement situé sur votre serveur *alwaysdata* :

```shell
$ cd mon-projet
$ git remote add deploy mon-compte@ssh-mon-compte.alwaysdata.net:~/mon-projet.git
```

Et voilà ! Il vous suffit maintenant de pousser la branche `production` vers ce dépôt, et le déploiement sera automatique :

```shell
$ git push deploy production
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 291 bytes | 291.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Deploying 'production' branch to production
remote: Already on 'production'
To mon-compte@ssh-mon-compte.alwaysdata.net:~/mon-projet.git
   39949b8..86bd6c7  production -> production
```

Désormais, il vous suffit de *merge* sur votre branche de `production` la dernière version à déployer, de `git push` sur le serveur, et le tour est joué !

## Oui, mais moi, je ne fais pas que déployer des fichiers statiques

Alors effectivement, nous avons illustré un cas assez simple ici, et nous sommes conscients que vous avez probablement d'autres routines à mettre en place lors d'un déploiement.

Vous pouvez, par exemple, avoir besoin de relancer votre instance Apache pour que les changements soient pris en compte. Dans ce cas, il suffit d'ajouter au *hook* `post-receive` la ligne suivante, juste après l'instruction `git checkout` :

```shell
curl --basic --user "API_KEY account=ACCOUNT:" --data '' --request POST https://api.alwaysdata.com/v1/site/SITE_ID/restart/
```

Cette requête cURL va appeler l'API d'*alwaysdata* en utilisant votre *clé d'API*, nom de *compte*, et *identifiant de site* à redémarrer pour relancer le service de façon transparente.

Là encore, rien de plus à faire désormais que de pousser la branche de `production`.

## Encore !

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmU4NHRkdmd3Nnl6OG81eDVwaGV2MGZpdDQ1dTJ6cjB2MG9rMHNzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0Exdm9UbTHAFcJi0/giphy.gif)

Vous en voulez encore ? Avec plaisir !

Vous avez probablement besoin d'automatiser le processus sur plusieurs sites. Nous avons donc libéré le code source de ce petit hook sur le dépôt GitHub [alwaysdata/autodeploy-git-hook](https://github.com/alwaysdata/autodeploy-git-hook). Le script est configurable avec des variables bash en haut du fichier, pour que vous ayez le moins de changements à effectuer.

Nous sommes malgré tout conscients que ce script est encore rudimentaire. Vous avez probablement des migrations à jouer sur vos bases de données, ou des appels à faire pour mettre à jour vos *assets* statiques lors d'une mise à niveau. N'hésitez pas à nous faire part de vos besoins dans les **[issues](https://github.com/alwaysdata/autodeploy-git-hook/issues)** du dépôt, ou à proposer vos [pull-requests](https://github.com/alwaysdata/autodeploy-git-hook/pulls) pour que nous puissions améliorer encore cet outil ensemble.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBwOGJvZ3NvbGVsNDB0ODA2d2k4MGI4eWN1azUxdG13MTRyd2JyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0ErK5H6exTmBN7ri/giphy.gif)
