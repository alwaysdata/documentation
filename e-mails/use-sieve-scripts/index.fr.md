+++
url = "/fr/emails/utiliser-les-scripts-sieve/"
title = "Comment utiliser les scripts Sieve"
layout = "howto"
hidden = true
tags = ["email"]
+++

[Sieve](http://sieve.info/) est un langage permettant de filtrer les emails. Il sert à ajouter des règles complexes, qu'on ne pourrait ajouter via les [règles de filtrage]({{< ref "e-mails/add-a-filter-rule">}}).

{{< fig "images/admin-panel_mailbox_sieve.fr.png" "Interface d'administration : Emails - Script Sieve" >}}

Le script final est stocké dans le fichier `$HOME/admin/mail/[domaine]/[boite]/filter_user.sieve` de votre compte. Vous pouvez le lire pour aider à déboguer votre script, mais pas l'éditer.

## Extensions supportées

|Extension                 |Description                                                                             |
|--------------------------|----------------------------------------------------------------------------------------|
|body                      |Vérifie la présence d'une ou de plusieurs chaînes de caractères dans le corps d'un email|
|comparator-i;ascii-numeric|Extrait des nombres du teste et les compare pour voir si cela correspond                |
|copy                      |Spécifie qu'une copie doit être utilisée pour effectuer l'action                        |
|date                      |Effectue des actions en fonction de la date/l'heure de l'envoi/la réception d'un email  |
|duplicate                 |Détecte si c'est un duplicata                                                           |
|editheader                |Ajoute ou supprime du texte aux en-têtes                                                |
|encoded-character         |Permet l'encodage numérique de caractères spéciaux                                      |
|enotify                   |Envoie des notifications                                                                |
|envelope                  |Évalue l'envelope ("from", "to"...)                                                     |
|environment               |Teste différentes valeurs étiquetées de l'environnement d'exécution                     |
|fileinto                  |Délivre l'email dans le dossier spécifié                                                |
|foreverypart              |Permet aux commandes d'être exécutées dans toutes les parties MIME de l'email           |
|ihave                     |Teste si une extension Sieve est disponible et, si c'est le cas, exécute son action     |
|imap4flags                |Ajoute des indicateurs IMAP et mots clés aux messages                                   |
|include                   |Permet d'inclure un script Sieve dans un autre                                          |
|index                     |Permet de faire correspondre des champs d'en-tête spécifiques par index                 |
|mailbox                   |Vérifie si un répertoire spécifique existe                                              |
|mime                      |Teste des parties MIME spécifiques du message                                           |
|extracttext               |Extrait du texte depuis des parties MIME                                                |
|regex                     |Utilise des expressions régulières                                                      |
|reject                    |Refuse la délivrance du message                                                         |
|relational                |Permet des comparaisons relationnelles                                                  |
|subaddress                |Teste des éléments délimités de la partie locage des adresses                           |
|vacation                  |Réponses automatiques                                                                   |
|variables                 |Permet d'ajouter des variables                                                          |

## Exemples

-   Ajouter un préfixe `<SPAM>` au sujet d'un mail contenant un mot clé à définir (que ce soit dans son sujet ou son corps de texte) :
    ```
    require ["editheader", "variables", "body"] ;
    if allof (
    header :contains "subject" "mot",
    header :matches "Subject" "*"
    )
    {
    deleteheader "Subject";
    addheader "Subject" "<SPAM> ${1}";
    }
    elsif allof (
    body :content "text" :contains "mot",
    header :matches "Subject" "*"
    )
    {
    deleteheader "Subject";
    addheader "Subject" "<SPAM> ${1}";
    }
    ```

---

## Liens

- [Tester la syntaxe de son script](https://www.fastmail.com/cgi-bin/sievetest.pl)
- [RFC 5228](https://tools.ietf.org/html/rfc5228)
