+++
url = "/fr/hebergement-web/sites/formater-les-logs-http/"
title = "Formater les logs HTTP"
tags = ["http", "site"]
+++

Rendez-vous dans l'onglet **Logs** de votre site (menu **Web > Sites**) pour personnaliser les logs d'accès HTTP ; stockés ensuite dans le répertoire `$HOME/admin/logs/http/`.

{{< fig "images/admin-panel_add-site-logs_standard.fr.png" "" >}}

## Types de formats

- le format *Standard*[^1] :
```txt
{request_hostname} {client_ip} - - [{completion_date:%d/%b/%Y:%H:%M:%S %z}] "{request}" {status} {response_size} "{referer}" "{user_agent}"
```

> Exemple :
```sh
blog.alwaysdata.com 198.51.100.42 - - [17/Feb/2022:14:19:01 +0100] "GET /2022/02/01/2022-au-rapport/ HTTP/2.0" 200 16634 "https://blog.alwaysdata.com/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:96.0) Gecko/20100101 Firefox/96.0"
```

- le format *Avancé* (format par défaut) :
```txt
{request_hostname} {client_ip} - - [{completion_date:%d/%b/%Y:%H:%M:%S %z}] "{request}" {status} {response_size} "{referer}" "{user_agent}" {protocol} {duration}
```

> Exemple :
```sh
blog.alwaysdata.com 198.51.100.42 - - [17/Feb/2022:14:19:01 +0100] "GET /2022/02/01/2022-au-rapport/ HTTP/2.0" 200 16634 "https://blog.alwaysdata.com/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:96.0) Gecko/20100101 Firefox/96.0" https 0.128109
```

{{% notice tip %}}
Pour extraire les requêtes longues, utilisez la commande suivante : `awk '{print $NF,$0}' $HOME/admin/logs/http/[date]/[fichier].log | sort -n | cut -f2- -d' '`
{{% /notice %}}

- le format *Personnalisé*. La personnalisation du format des lignes de log s'effectue dans le champ **Format**. Ce champ accepte les chaînes de caractères ainsi qu'un certain nombre de variables listées ci-après.

{{< fig "images/admin-panel_add-site-logs_custom.fr.png" "" >}}

La syntaxe à respecter est `{nom_de_variable}` pour voir apparaître sa valeur dans les lignes de logs d'accès.

### Variables disponibles

| Variables          | Description                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| {client_ip}        | Adresse IP de l'utilisateur ayant émis la requête                                                                      |
| {completion_date}  | Date à laquelle la requête a été servie [^2]                                                                           |
| {duration}         | Temps pris pour servir la requête en secondes                                                                          |
| {peer_ip}          | Adresse IP du pair ayant envoyé la requête (proxy ou utilisateur original le cas échéant)                              |
| {protocol}         | Mécanisme du protocole de la requête (http, https, ws)                                                                 |
| {referer}          | Valeur de l'en-tête [Referer](https://fr.wikipedia.org/wiki/R%C3%A9f%C3%A9rent_(informatique)) transmis par la requête |
| {request}          | Première ligne de la requête                                                                                           |
| {request_header}   | En-têtes de la requête [^3]                                                                                            |
| {request_hostname} | Nom d'hôte demandé dans la requête                                                                                     |
| {request_method}   | Méthode utilisée dans la requête (GET, POST, ...)                                                                      |
| {request_path}     | Chemin demandé dans la requête, incluant la chaîne d'interrogations                                                    |
| {request_protocol} | Protocole utilisé dans la requête (HTTP/1.1, HTTP/2, ...)                                                              |
| {request_time}     | Date à laquelle la requête a été reçue [^2]                                                                            |
| {response_header}  | En-têtes de la réponse [^3]                                                                                            |
| {response_size}    | Taille de la réponse en bytes, en-têtes HTTP exclus                                                                    |
| {ssl_version}      | Version du protocole utilisé pour la connexion SSL                                                                     |
| {status}           | Code de status de la réponse (200, 301, 404, 500, ...)                                                                 |
| {user_agent}       | Valeur de l'en-tête [User-Agent](https://fr.wikipedia.org/wiki/User_agent) transmis par la requête                     |

## Cas spécifiques

Pour afficher l'IP d'un utilisateur derrière [Cloudflare](https://support.cloudflare.com/hc/en-us/articles/200170986-How-does-Cloudflare-handle-HTTP-Request-headers-) utilisez `{request_header:cf-connecting-ip}`.

[^1]: [Combined Log Format avec vhosts](https://httpd.apache.org/docs/2.4/logs.html)
[^2]: Peut être formatée en suivant la syntaxe [strftime](https://docs.python.org/fr/3.6/library/datetime.html?highlight=strftime#strftime-strptime-behavior).
*Exemples : `{completion_date:%d/%b/%Y}` → 16/Jul/2018, `{completion_date:%H:%M:%S}` → 12:04:07*
[^3]: Un seul header peut être spécifié. Exemples : `{request_header:authorization}`, `{response_header:age}` (à utiliser avec le [cache HTTP](/web-hosting/sites/http-cache))
