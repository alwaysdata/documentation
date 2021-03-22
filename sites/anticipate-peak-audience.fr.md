+++
url = "/fr/sites/anticiper-un-pic-daudience/"
title = "Comment anticiper un pic d'audience"
layout = "howto"
hidden = true
tags = ["http", "site"]
+++

Vous prévoyez un passage télévision/radio qui risque d'entraîner un nombre plus important de visites et n'êtes pas sûr que votre site supporte la charge ? Voici des actions pouvant être entreprises en amont :

- **isoler le site** par compte - pour ne pas gêner d'autres sites, les ressources étant partagées au niveau du compte ;
- activer le **[cache HTTP]({{< ref "sites/http-cache" >}})** sur votre interface d'administration et/ou au niveau applicatif en utilisant Memcached, Redis [^1] ou tout autre cache logiciel ;
- passer sur les versions de langages les plus récentes possibles  - pour améliorer les performances ;
- faire une redirection vers une **[page statique]({{< ref "sites/static-files" >}})** - utilisant bien moins de ressources, elles sont plus rapides à renvoyer.

Pour observer le comportement de votre application vous pouvez aussi effectuer un **test de charge** (avec `ab` par exemple).

## Exemple avec `ab`

Nous voulons savoir si notre site commercial peut gérer 300 000 visites par jour.

*Le test suivant fait 100 requêtes sur la page d'accueil à raison de 10 à la fois (en parallèle).*

```sh
$  ab -c 10 -n 100 https://www.alwaysdata.com/
This is ApacheBench, Version 2.3 <$Revision: 1843412 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking www.alwaysdata.com (be patient).....done


Server Software:        nginx
Server Hostname:        www.alwaysdata.com
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128
Server Temp Key:        X25519 253 bits
TLS Server Name:        www.alwaysdata.com

Document Path:          /
Document Length:        0 bytes

Concurrency Level:      10
Time taken for tests:   5.046 seconds
Complete requests:      100
Failed requests:        0
Non-2xx responses:      100
Total transferred:      32600 bytes
HTML transferred:       0 bytes
Requests per second:    19.82 [#/sec] (mean)
Time per request:       504.609 [ms] (mean)
Time per request:       50.461 [ms] (mean, across all concurrent requests)
Transfer rate:          6.31 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        2    4   3.3      3      15
Processing:     6  284 924.3      8    4515
Waiting:        6  284 924.3      8    4515
Total:          8  288 926.8     11    4530

Percentage of the requests served within a certain time (ms)
  50%     11
  66%     12
  75%     14
  80%     15
  90%    530
  95%   3037
  98%   4515
  99%   4530
 100%   4530 (longest request)
```

L'information importante est : `Requests per second:    19.82 [#/sec] (mean)`.

300 000 visites en 10 heures (petite journée) correspond à 8,3 requêtes par secondes. La configuration actuelle est donc compatible.

- [Documentation de `ab`](https://httpd.apache.org/docs/2.4/programs/ab.html)

## Liens
* 2 services externes de tests de charge :
    - [Loader.io](https://loader.io/)
    - [K6](https://k6.io/)

[^1]: Ces deux logiciels sont disponibles sur les environnements VPS et dédiés.
