+++
url = "/fr/plateforme/avancé/sites/formater-les-logs-http/"
title = "Formater les logs HTTP"
menuTitle = "Formater les logs HTTP"
layout = "man"
weight = 10
tags = ["http", "site"]
+++

Afin de personnaliser le format des logs d'accès HTTP, vous devez au préalable choisir un nom pour votre fichier de log personnalisé. Pour cela, renseignez un nom de votre choix dans le champ **Nom de fichier** dans l'onglet **Logs** de votre site.
Ce fichier sera stocké dans le répertoire _~/admin/logs/http/_.

La personnalisation du format des lignes de log s'effectue dans le champ **Format**. Ce champ accepte les chaînes de caractères ainsi qu'un certain nombre de variables listées ci-après.
La syntaxe à respecter est `{nom_de_variable}` pour voir apparaître sa valeur dans les lignes de logs d'accès.

Le format par défaut est le suivant :

```
{request_hostname} {client_ip} - - [{completion_date:{%d/%b/%Y:%H:%M:%S %z}}] {request} {status} {response_size} {referer} {user_agent}
```

Les lignes de logs sont affichées de cette manière :
```
blog.alwaysdata.com 198.51.100.42 - - [17/Jul/2018:15:05:30 +0200] "GET / HTTP/1.1" 200 10975 "https://www.alwaysdata.com/fr/" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
```

## Variables disponibles

Variables | Description
----|----
{client_ip} | Adresse IP du client ayant émis la requête
{completion_date} | Date à laquelle la requête a été servie¹
{duration} | Temps pris pour servir la requête en secondes
{peer_ip} | Adresse IP du pair ayant envoyé la requête (proxy ou client original le cas échéant)
{protocol} | Mécanisme du protocole de la requête (http, https, ws)
{referer} | Valeur de l'en-tête [Referer](https://fr.wikipedia.org/wiki/R%C3%A9f%C3%A9rent_(informatique)) transmis par la requête 
{request} | Première ligne de la requête
{request_header} | En-têtes de la requête
{request_hostname} | Nom d'hôte demandé dans la requête
{request_method} | Méthode utilisée dans la requête (GET, POST, ...)
{request_path} | Chemin demandé dans la requête, incluant la chaîne d'interrogations
{request_protocol} | Protocole utilisé dans la requête (HTTP/1.1, HTTP/2, ...)
{request_time} | Date à laquelle la requête a été reçue¹
{response_header} | En-têtes de la réponse 
{response_size} | Taille de la réponse en bytes, en-têtes HTTP exclus
{status} | Code de status de la réponse (200, 301, 404, 500, ...)
{user_agent} | Valeur de l'en-tête [User-Agent](https://fr.wikipedia.org/wiki/User_agent) transmis par la requête

----
¹ Peut être formatée en suivant la syntaxe [strftime](https://docs.python.org/fr/3.6/library/datetime.html?highlight=strftime#strftime-strptime-behavior).
*Exemples : `{completion_date:{%d/%b/%Y}}` --> 16/Jul/2018, `{completion_date:{%H:%M:%S}}` --> 12:04:07*
