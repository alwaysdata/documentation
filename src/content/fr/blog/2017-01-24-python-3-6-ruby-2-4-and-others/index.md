---
title: "Python 3.6, Ruby 2.4 et les autres"
date: 2017-01-24
authors: ["Cyril Baÿ"]
---


Depuis quelques jours, les nouveaux comptes mutualisés et serveurs dédiés tournent sur notre toute nouvelle infrastructure *logicielle*. Qu’apporte-t-elle ? Ouvrons le capot.

## Des versions (beaucoup) plus récentes

Notre nouvelle infrastructure tourne sous la dernière version de [Debian](https://www.debian.org/) (Jessie), ce qui apporte une mise à jour de l’ensemble des logiciels et bibliothèques disponibles, de [git](https://git-scm.com/) ou [Vim](http://www.vim.org/) à [Apache](https://httpd.apache.org/) ou [Java](https://java.com/). Des logiciels et langages ont également été ajoutés, comme [Go](https://golang.org/) ou [R](https://www.r-project.org/).

Mais le cœur du changement se situe du côté de Python et Ruby : nous avons fait évoluer notre gestion des paquets pour ne plus dépendre des versions proposées par Debian, ce qui nous permet d’offrir :

- pour [Python](https://www.python.org/), de la version 3.6 à 3.3 et 2.7 à 2.4 ;
- pour [Ruby](https://www.ruby-lang.org/), de la version 2.4 à 1.8.7 ;
- pour [PHP](http://php.net/), rien ne change : nous proposions déjà la dernière version (7.1), et nous gardons en prime toutes les versions depuis la 5.2, et même la 4.4 pour les (légers) retardataires.

## Une installation de paquets simplifiée

Que ce soit pour Python ou Ruby, l’installation de paquets (via [pip](https://pip.pypa.io/) ou [gem](https://rubygems.org/)) demandait quelques efforts, minimes mais parfois déroutants pour les plus débutants. Il fallait ici spécifier une option, là définir une variable d’environnement, ou encore créer un fichier (`.bash_profile`) pour que les nouvelles commandes puissent être exécutées directement.

Désormais, **pip install** et **gem install** fonctionnent directement, sans le moindre paramétrage. Encore mieux : vous n’aurez même pas besoin d’ajouter un quelconque chemin pour que vos applications trouvent les bibliothèques : c’est automatique.

Nous avons aussi pensé à PHP et ses extensions [PECL](https://pecl.php.net/) : indiquez à la commande **ad_install_pecl** (un script maison) le nom de l’extension PECL que vous souhaitez installer, elle s’occupera de la télécharger/configurer/compiler : il ne vous restera plus qu’à charger le fichier .so depuis la section *Environnement > PHP* de l’administration alwaysdata.

## Un environnement vierge

Encore une fois, cela s’applique principalement à Python et Ruby : jusqu’à présent, certaines bibliothèques étaient installées globalement sur nos systèmes, notamment Django et Ruby on Rails. Cela posait un certain nombre de problèmes à l’usage, aussi nous avons décidé de les retirer. Vous démarrerez donc avec un environnement vierge, mais on a vu à la section précédente qu’installer des bibliothèques était désormais trivial.

## Les sites Python et Ruby propulsés par uWSGI

Les sites de type *WSGI (Python)* ou *Ruby Rack* et *Ruby on Rails* étaient gérés par Apache (via [mod_wsgi](https://modwsgi.readthedocs.io/) ou [Passenger](https://www.phusionpassenger.com/). Ils sont désormais gérés par [uWSGI](https://github.com/unbit/uwsgi), un serveur d’applications présentant plusieurs avantages. Ce changement est largement transparent pour nos clients, mais de nouvelles options (toutes facultatives) font leur apparition dans le formulaire de configuration d’un site :

- forcer une version de Python ou Ruby particulière ;
- les variables d’environnement à définir ;
- le répertoire de travail ;
- pour Python, le *virtualenv* à utiliser ;
- pour Ruby, utiliser le *Gemfile* de l’application.

## Bientôt, de nouveaux langages

Cette nouvelle infrastructure ouvre la voie au support de nouveaux langages, en particulier pour faire tourner des applications web. [Node.js](https://nodejs.org/) sera certainement le premier, mais d’autres devraient suivre assez vite.

## Comment en bénéficier ?

Dès maintenant, en ouvrant un nouveau compte mutualisé ou serveur dédié. Pour les anciens clients, il va falloir patienter encore un peu : nous préparons la phase de migration qui démarrera dans les prochaines semaines, en même temps d’ailleurs que la migration vers [notre propre infrastructure matérielle](/fr/blog/2014-02-17/alwaysdata-becomes-independent) (pour les mutualisés les plus anciens). Chaque client sera prévenu par email au préalable et aura à sa disposition :

- une page de documentation listant les changements majeurs susceptibles de provoquer des incompatibilités ;
- des outils permettant de simuler partiellement son compte sous la nouvelle infrastructure.

Les plus téméraires peuvent toutefois demander par ticket une migration dès maintenant, mais à leurs risques et périls, et sans possibilité de revenir en arrière. Inutile de dire que si vous avez quoi que ce soit en production, passez votre chemin et attendez la migration officielle. Si vous cherchez des sensations fortes, sautez plutôt en parachute.
Et après ?

Nous avons conçu cette nouvelle infrastructure pour qu’elle soit beaucoup plus souple que la précédente, et ne plus nous retrouver dans une situation avec des logiciels vieillissants. Bien que nous ne puissions pas toujours proposer les toutes dernières versions dès leur sortie, pour de nombreuses raisons (manque de recul sur la stabilité, bugs bloquants, dépendances indisponibles), cette nouvelle flexibilité nous permettra par exemple de réduire l’attente pour Python 3.7 et Ruby 2.5 à quelques jours seulement !
