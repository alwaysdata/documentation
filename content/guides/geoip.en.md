+++
title = "Block visits using GeoIP"
layout = "howto"
hidden = true
tags = ["security", "site"]
+++

[MaxMind DB](https://www.maxmind.com/en/geoip2-services-and-databases)[^1] is an [Apache](sites/configure-apache) module of GeoIP that aims to locate a user based on their IP address.

## Installation

Run the following commands in [SSH](remote-access/ssh) at the root of the account:

{{% notice note %}}
Take the [last available version of `mod_maxminddb`](https://github.com/maxmind/mod_maxminddb)
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

Then add in the **Web > Configuration** menu of your alwaysdata administration interface:

```
LoadModule maxminddb_module $HOME/mod_maxminddb.so
```

Finally create an account on their interface to retrieveone of their databases: [free](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data?lang=en) or [paid](https://www.maxmind.com/en/geoip2-databases) depending on your needs.

## Uses

### Block some countries

In this example, we are using the free database which we place at the root of the account and we block China and the United States.

Add the following at the top of a `.htaccess` file at the root of the website:

```
MaxMindDBEnable On
MaxMindDBFile COUNTRY_DB $HOME/GeoLite2-Country.mmdb
MaxMindDBEnv COUNTRY_CODE COUNTRY_DB/country/iso_code

SetEnvIf COUNTRY_CODE CN BlockCountry
SetEnvIf COUNTRY_CODE US BlockCountry

Deny from env=BlockCountry
```

### Only allow certain countries

In this example, we are using the free database which we place at the root of the account and we only allow France.

Add the following at the top of a `.htaccess` file at the root of the website:

```
MaxMindDBEnable On
MaxMindDBFile COUNTRY_DB $HOME/GeoLite2-Country.mmdb
MaxMindDBEnv COUNTRY_CODE COUNTRY_DB/country/iso_code

SetEnvIf COUNTRY_CODE FR AllowCountry

Deny from all
Allow from env=AllowCountry
```

[^1]: MaxMind DB can also be used for geotargeting in marketing and offers city-level databases.
