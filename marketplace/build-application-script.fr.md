+++
url = "/fr/applithèque/créer-son-script-d-application/"
title = "Créer son propre script d'application"
menuTitle = "Créer son propre script"
layout = "man"
weight = 5
hidden = true
draft = false
+++

Tout utilisateur peut proposer un script dans le *langage de son choix* qui permettra aux utilisateurs d’installer son application. Ce script sera exécuté avec les *droits du compte sur lequel l’installation a lieu* et doit débuter par un commentaire au format YAML.


![Interface d'administration : ajouter un nouveau script](/en/marketplace/administration-interface_create-script_FR.png)


Les scripts se composent de deux parties :

* le **dataset** au format YAML, permettant de configurer le site et demander à l'utilisateur les informations nécessaires au script (les variables FORM_*). On peut le diviser en trois :
    * **site** : voir la [documentation API]({{< ref "platform/api/references" >}}) qui reprend toutes les options possibles.
    * **database** : mysql, postgresql, mongodb, couchdb, rabbitmq.
    * **form** : toutes les variables demandées à l'utilisateur créant le site. Exemple : titre du site, identifiant administrateur, adresse email, nom/prénom de l’administrateur...

* le **script** en lui-même


## Variables d’environnement

Variables | Description | Exemple
----|----|----
USER | Nom du compte | foo
HOME | Racine du compte pour le script | /home/foo/example/
APPLICATION\_NAME | Nom de l’application |
INSTALL\_URL | Adresse du site | foo.example.net/test
INSTALL\_URL\_PATH | Racine du site (base URL) | /test
INSTALL\_URL\_HOSTNAME | Nom d’hôte du site | foo.example.net
INSTALL\_PATH\_RELATIVE |  Chemin relatif depuis la racine du compte | /example/
INSTALL\_PATH | Chemin absolu | /home/foo/example/
DATABASE\_USERNAME | Utilisateur de connexion à la base de données (automatiquement généré) | foo\_\*
DATABASE\_PASSWORD | Mot de passe de l’utilisateur de connexion à la base de données (automatiquement généré) |
DATABASE\_NAME | Base de données du site (automatiquement générée) | foo\_\*
DATABASE\_HOST | Nom d’hôte de connexion au serveur de base de données | mysql-foo.alwaysdata.net (base MySQL)
SMTP\_HOST | Nom d’hôte de connexion au serveur d’envoi de mails | smtp-foo.alwaysdata.net
RESELLER\_DOMAIN | Domaine-racine utilisé par l'hébergeur | alwaysdata.net
FORM\_\* | Autres variables explicitement demandées à l'utilisateur dans la section "form" du dataset YAML |
PORT | Port spécifique pour les sites de type Programme utilisateur, Node.js ou Elixir |
0.0.0.0 ou IP | IP spécifique pour les sites de type Programme utilisateur, Node.js ou Elixir (préférer 0.0.0.0 à IP) |

Si d’autres variables sont nécessaires, ouvrez un [ticket de support](https://admin.alwaysdata.com/support/add/).


### Notes et astuces

* Le script doit commencer par `set -e` pour le stopper lorsqu’il échoue ;
* Indiquer la **version du langage utilisée** (PHP, Python, Ruby, Node.js et Elixir) est préconisé pour éviter de dépendre de la configuration par défaut du compte ;
* Le répertoire racine indiqué par l'utilisateur (INSTALL_PATH) sert de racine pour le script (un <font color=red>export HOME=</font> est exécuté par défaut) ;
* Il est préférable de demander un nombre minimal d’informations pour éviter de rendre le script exhaustif. _Les utilisateurs pourront modifier la configuration de leur application ultérieurement._
* pour ajouter un champ de formulaire **optionnel**, il faut mettre l'option <font color=red>required</font> à <font color=red>false</font>. Si l'utilisateur n'indique rien le champ restera vide.

>Pour rendre son script accessible aux utilisateurs de la plateforme d’alwaysdata, il est nécessaire de cocher la case pour le rendre _public_. **Tout script marqué comme public sera à minima vérifié par l’équipe d’alwaysdata.**
>
>Une _URL d’un dépôt_ peut être indiquée pour faciliter la maintenance. Dans ce cas, une fois les modifications poussées sur le dépôt il ne reste qu’à mettre à jour l’application via le bouton prévu à cet effet.


## Exemple - script d’installation WordPress

```
#!/bin/bash

# site:
#     type: php
#     path: '{INSTALL_PATH_RELATIVE}'
#     php_version: '7.2'
# database:
#     type: mysql
# form:
#     language:
#         type: choices
#         label: Language
#         initial: en_US
#         choices:
#             de_DE: German
#             en_US: English
#             es_ES: Spanish
#             fr_FR: French
#             it_IT: Italian
#     title:
#         label: Blog title
#         max_length: 255
#     email:
#         type: email
#         label: Email
#     admin_username:
#         label: Administrator username
#         regex: ^[ a-zA-Z0-9.@_-]+$
#         max_length: 255
#     admin_password:
#         type: password
#         label: Administrator password
#         max_length: 255

set -e

# https://wp-cli.org

# Récupération de l’outil
wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

# Création du WordPress
php wp-cli.phar core download --locale="$FORM_LANGUAGE" --path="$INSTALL_PATH"
php wp-cli.phar config create --dbname="$DATABASE_NAME" --dbuser="$DATABASE_USERNAME"
--dbpass="$DATABASE_PASSWORD" --dbhost="$DATABASE_HOST" --path="$INSTALL_PATH"
php wp-cli.phar core install --url="$INSTALL_URL" --title="$FORM_TITLE" --admin_user=
"$FORM_ADMIN_USERNAME" --admin_password="$FORM_ADMIN_PASSWORD" --admin_email="$FORM_EMAIL"
--path="$INSTALL_PATH"

# Nettoyage de l’environnement
rm -rf .wp-cli wp-cli.phar
```
