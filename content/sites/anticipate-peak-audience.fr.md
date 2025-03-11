+++
url = "/fr/sites/anticiper-un-pic-daudience/"
title = "Comment anticiper un pic d'audience"
layout = "howto"
hidden = true
tags = ["http", "site"]
+++

Vous prévoyez un passage télévision/radio qui risque d'entraîner un nombre plus important de visites et n'êtes pas sûr que votre site supporte la charge ? Voici des actions pouvant être entreprises en amont :

- **isoler le site** par compte - pour ne pas gêner d'autres sites, les ressources étant partagées au niveau du compte ;
- activer le **[cache HTTP](sites/http-cache)** sur votre interface d'administration et/ou au niveau applicatif en utilisant Memcached, Redis [^1] ou tout autre cache logiciel ;
- passer sur les versions de langages les plus récentes possibles  - pour améliorer les performances ;
- faire une redirection vers une **[page statique](sites/static-files)** - utilisant bien moins de ressources, elles sont plus rapides à renvoyer.

Pour observer le comportement de votre application vous pouvez aussi effectuer un **test de charge** (avec `ab` par exemple).

## Exemple avec `ab`

Nous voulons savoir si notre site commercial peut gérer 300 000 visites par jour.

*Le test suivant fait 100 requêtes sur la page d'accueil à raison de 10 à la fois (en parallèle).*

```sh
$ ab -c 10 -n 100 https://www.alwaysdata.com/fr/
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

Document Path:          /fr/
Document Length:        77003 bytes

Concurrency Level:      10
Time taken for tests:   7.538 seconds
Complete requests:      100
Failed requests:        52
   (Connect: 0, Receive: 0, Length: 52, Exceptions: 0)
Non-2xx responses:      52
Total transferred:      3938476 bytes
HTML transferred:       3893588 bytes
Requests per second:    13.27 [#/sec] (mean)
Time per request:       753.754 [ms] (mean)
Time per request:       75.375 [ms] (mean, across all concurrent requests)
Transfer rate:          510.27 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       83  112 100.2    101    1099
Processing:    36  576 942.6    227    5045
Waiting:       36  503 933.3     99    5044
Total:        121  688 952.5    329    5179

Percentage of the requests served within a certain time (ms)
  50%    329
  66%    464
  75%    822
  80%    870
  90%   2131
  95%   2648
  98%   4845
  99%   5179
 100%   5179 (longest request)
```

L'information importante est : `Requests per second:    13.27 [#/sec] (mean)`.

300 000 visites en 10 heures (petite journée) correspond à 8,3 requêtes par secondes. La configuration actuelle est donc compatible.

- [Documentation de `ab`](https://httpd.apache.org/docs/2.4/programs/ab.html)

## Liens
* 2 services externes de tests de charge :
    - [Loader.io](https://loader.io/)
    - [K6](https://k6.io/)

[^1]: Ces deux logiciels sont disponibles sur les environnements [Cloud Privé](accounts/billing/private-cloud-prices).
