+++
url = "/fr/guides/geoip/"
title = "Comment bloquer des visites via GeoIP"
layout = "howto"
hidden = true
tags = ["sécurité", "site"]
+++

[MaxMind DB](https://www.maxmind.com/en/geoip2-services-and-databases)[^1] est un module [Apache](sites/configure-apache) de GeoIP qui vise à localiser un utilisateur en se basant sur son adresse IP.

## Installation

Lancez les commandes suivantes en [SSH](remote-access/ssh) à la racine du compte :

{{% notice note %}}
Prendre la [dernière version disponible de `mod_maxminddb`](https://github.com/maxmind/mod_maxminddb)
{{% /notice %}}

```sh
mkdir mod_maxminddb
cd mod_maxminddb/
wget https://github.com/maxmind/mod_maxminddb/releases/download/1.2.0/mod_maxminddb-1.2.0.tar.gz
tar xf mod_maxminddb-1.2.0.tar.gz 
cd mod_maxminddb-1.2.0/
./configure --with-apxs=/usr/alwaysdata/apache/latest/bin/apxs && make
cp ./src/.libs/mod_maxminddb.so ~/
cd
rm -fr mod_maxminddb
```

Puis ajoutez dans le menu **Web > Configuration** de votre interface d'administration alwaysdata :

```
LoadModule maxminddb_module $HOME/mod_maxminddb.so
```

Enfin créez un compte sur leur interface pour récupérer une de leur base de données : [gratuite](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data?lang=en) ou [payante](https://www.maxmind.com/en/geoip2-databases) selon votre besoin.

## Utilisations 

### Bloquer certains pays

Dans cet exemple nous utilisons la base gratuite que nous mettons à la racine du compte et nous bloquons la Chine et les États-Unis.

Ajoutez en haut d'un `.htaccess` à la racine du site :


```
MaxMindDBEnable On
MaxMindDBFile COUNTRY_DB $HOME/GeoLite2-Country.mmdb
MaxMindDBEnv COUNTRY_CODE COUNTRY_DB/country/iso_code

SetEnvIf COUNTRY_CODE CN BlockCountry
SetEnvIf COUNTRY_CODE US BlockCountry

Deny from env=BlockCountry
```

### N'autoriser que certains pays

Dans cet exemple nous utilisons la base gratuite que nous mettons à la racine du compte et nous n'autorisons que la France.

Ajoutez en haut d'un `.htaccess` à la racine du site :

```
MaxMindDBEnable On
MaxMindDBFile COUNTRY_DB $HOME/GeoLite2-Country.mmdb
MaxMindDBEnv COUNTRY_CODE COUNTRY_DB/country/iso_code

SetEnvIf COUNTRY_CODE FR AllowCountry

Deny from all
Allow from env=AllowCountry
```

[^1]: MaxMind DB peut aussi être utilisé pour marketing géographique et propose des bases villes.
