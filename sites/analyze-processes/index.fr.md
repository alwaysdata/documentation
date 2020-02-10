+++
url = "/fr/sites/analyser-des-processus/"
title = "Comment analyser des processus HTTP"
layout = "howto"
hidden = true
tags = ["http", "dépannage", "site"]
+++

Cette fonctionnalité permet aux développeurs expérimentés d'observer le comportement de leurs applications et améliorer leurs performances.

L'analyse des processus produit un fichier, disponible à la racine de votre compte (nommé `analysis_[date]-[heure].log` et consultable en [SSH]({{< ref "remote-access/ssh" >}}) ou [FTP]({{< ref "remote-access/ftp" >}})) décrivant les opérations exécutées par le processus pendant une durée déterminée.

## 1. Démarrer l'analyse

La fonctionnalité d'analyse de processus est disponible via **Avancé > Processus > Analyser les processus**.
{{< fig "images/admin-panel_processes-list.fr.png" "Menu Processus : liste" >}}
{{< fig "images/admin-panel_processes-analysis.fr.png" "Analyser des processus" >}}

- _PIDs_ : liste des PID des processus à auditer, séparés par un espace.  Si ce champ reste vide, tous les processus répondant à des requêtes HTTP seront analysés.
- _Durée d'analyse_ : une fois l'analyse lancée, celle-ci durera pendant le temps indiqué (en secondes). Généralement, 30 à 60 secondes suffisent. L'analyse ne fonctionne que si des pages de votre site sont affichées, il faut donc laisser du temps pour afficher quelques pages, mais éviter d'enregistrer trop de données qui risquent de compliquer la lecture du résultat.
- _Interpréter_ : par défaut, le résultat de l'analyse correspond au résultat d'un appel à `strace` [^1], qui peut être difficile à lire. Si cette option est activée, le résultat sera interprété et filtré.
- _Opérations lentes_ : en activant cette option, seules les opérations considérées comme lentes (durant au moins 1ms) ou importantes seront affichées.

Une fois l'analyse démarrée, il suffit de consulter les pages que l'on souhaite surveiller depuis son navigateur, pendant la durée de l'analyse.

{{% notice note %}}
Le PID d'un processus est affiché dans le tableau des processus affiché dans le menu **Avancé > Processus**.  Parfois, aucun processus n'est visible dans ce tableau. Ils apparaîtront si vous visitez quelques pages de votre site internet.
{{% /notice %}}

{{% notice warning %}}
Le fichier produit par l'analyse peut contenir des données sensibles, comme des mots de passe. Il est conseillé de le supprimer.
{{% /notice %}}

## 2. Comprendre les résultats

Le contenu du fichier contenant les résultats de l'analyse contient une opération par ligne, comme celles-ci (raccourcies et tronquées, par souci de lisibilité) :

```
5857 16:16:57.265015 0.029 ms Send data (MySQL) ("SELECT * FROM posts
                              WHERE posts.post_type = 'page' ORDER BY
                              posts.post_date DESC"...)
5857 16:16:57.265105 53 ms    Wait until being able to receive data (MySQL)
```

Ces lignes contiennent le PID du processus qui a effectué l'opération, l'heure à laquelle elle a été exécutée, sa durée et l'opération.

Ici, on peut voir qu'une requête SQL a été envoyée a un serveur MySQL. L'envoi de la requête n'a pris que 0.029ms, ce qui est très rapide, mais la ligne suivante montre qu'il a fallu attendre 53ms avant que le serveur MySQL soit prêt à envoyer la réponse, ce qui l'est beaucoup moins.

{{% notice note %}}
Tous les résultats ne sont pas si évidents : bien souvent, même si aucune opération n'est vraiment lente, c'est leur grand nombre qui rend le site lent. Dans ce cas, il convient de relancer l'analyse en désactivant le filtre **Opérations lentes**.
{{% /notice %}}

## Opérations imprécises

Il peut arriver que l'analyse d'un processus débute alors que ce dernier était déjà en train de répondre à une requête HTTP. L'outil d'analyse ne sera pas capable d'interpréter avec précision les opérations effectuées pour la requête en cours. Il vaut mieux, dans ce cas, chercher le début d'une requête suivante. On les repère généralement grâce à une ligne comme celle-ci :

```
73510 16:53:04.551317 1.08 s   Wait for incoming connection from socket...
```
    


[^1]: Plus d'informations sur [l'outil strace](https://fr.wikipedia.org/wiki/Strace).
