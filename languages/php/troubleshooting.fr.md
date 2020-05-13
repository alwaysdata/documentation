+++
url = "/fr/langages/php/problèmes-fréquents/"
title = "PHP - Problèmes fréquents"
layout = "man"
hidden = true
tags = ["dépannage", "php"]
+++

## mod_fcgid: can't apply process slot
Ce message d'erreur renvoyé par le log Apache (`$HOME/admin/logs/apache/`) indique que la limite du nombre de processus PHP (*20*) à un instant T a été atteinte et que les nouvelles connexions sont en attente qu'un processus PHP soit disponible.

Pour faire repartir rapidement le site vous pouvez le redémarrer dans **Web > Sites**. Cela ne réglera cependant "qu'artificiellement" et temporairement le problème. Vous pouvez [analyser les processus]({{< ref "sites/analyze-processes" >}}) ou utiliser des services de profiling PHP tels [New Relic](https://newrelic.com/products/application-monitoring), [Tideways](https://tideways.com/) ou [Blackfire](https://blackfire.io/) pour en trouver la source.

### Sessions bloquées

Chaque fois qu'une session PHP est démarrée, un fichier est créé (`session.save_path`) reprenant toutes ses informations et lui allouera un ID. Lorsqu'un utilisateur revient il fournira cet ID qui permettra a `session_start()` de récupérer ses données de session. Chaque fois que `session_start()` est démarré le fichier de session est verrouillé à l'aide de `flock`.

Cela peut entraîner des problèmes lorsque deux processus PHP tentent d'accéder simultanément à la même session PHP : le deuxième devra attendre que le premier se termine pour s'exécuter pour éviter des incidents de concurrence. Cela entraîne de ce fait des lenteurs voire des indisponibilités.

L'analyse de vos processus HTTP renvoient :

```
$ strace -f -p1821543 -p1822026 
Process 1821543 attached
Process 1822026 attached
[pid 1821543] flock(8, LOCK_EX <unfinished ...>
[pid 1822026] flock(8, LOCK_EX
```

Vous retrouverez sur cette [documentation](https://ma.ttias.be/php-session-locking-prevent-sessions-blocking-in-requests/) plus d'informations et solutions pour corriger ces sessions problématiques. La bonne pratique, permettant de limiter la période durant laquelle la session est bloquée, est d'appeler `session_start()` le plus tard possible et `session_close()` le plus tôt possible.

## Messages d'erreurs

### Fatal error: Allowed memory size of 268435456 bytes exhausted
Vous atteignez la limite de 256 Mo, valeur par défaut de `memory_limit` en PHP. Vous pouvez augmenter cette valeur dans **Environnement > PHP** ou au niveau du site lui-même dans **Web > Sites > Détails** du site concerné.

### 403 Forbidden

Par défaut pour les [sites de type PHP]({{< ref "sites/add-a-site" >}}) Apache va rechercher pour la page d'accueil un fichier nommé `index.html` ou `index.php`. Renommez votre fichier ou utilisez la directive [DirectoryIndex](https://httpd.apache.org/docs/2.4/fr/mod/mod_dir.html#directoryindex) dans un `.htaccess`.
