+++
url = "/fr/api/exemples/"
title = "Exemples d'utilisation de l'API"
weight = 6
tags = ["api"]
+++

`APIKEY`, `1234` ou encore `arkhamcity` sont à remplacer par vos valeurs propres.

## Redémarrer un site

### Via cURL

```shell
$ curl -X POST --basic --user "APIKEY account=arkhamcity:" https://api.alwaysdata.com/v1/site/1234/restart/
```

### Avec PHP et Guzzle

```php
<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://api.alwaysdata.com/',
    'auth' => ['APIKEY account=arkhamcity', ''],
]);

$response = $client->request('POST', 'v1/site/1234/restart/');
?>
```

## Récupérer une liste (GET)

### Python

```python
#!/usr/bin/python

import requests

address = 'https://api.alwaysdata.com/v1/site/'
credentials = ('APIKEY account=arkhamcity', '')

# Send HTTP request
response = requests.get(
    address,
    auth=credentials,
)
```

### PHP

```php
<?php

// Open cURL connection
$ch = curl_init("https://api.alwaysdata.com/v1/site/");

// Initialize HTTP headers
$credentials = "APIKEY account=arkhamcity";
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, $credentials);

// Execute HTTP request
curl_exec($ch);

// Close the connection
curl_close($ch);

?>
```

Avec [Guzzle](https://github.com/guzzle/guzzle) :

```php
<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://api.alwaysdata.com/',
    'auth' => ['APIKEY account=arkhamcity', ''],
]);

$response = $client->request('GET', 'v1/site/');

echo $response->getBody();
?>
```

## Ajouter une ressource (POST)

### Python

```python
#!/usr/bin/python

import json
import requests

address = 'https://api.alwaysdata.com/v1/site/'
credentials = ('APIKEY account=arkhamcity', '')

data = {
    'name': 'Wayne Enterprise Forum',
    'addresses': [
        'forum.arkhamcity.com',
        'forum-dev.arkhamcity.com',
    ],
    'type': 'php',
    'path': '/www/myforum',
}

response = requests.post(
    address,
    auth=credentials,
    data=json.dumps(data),
)
```

### PHP

```php
<?php

// Open cURL connection
$ch = curl_init("https://api.alwaysdata.com/v1/site/");

// Initialize HTTP headers
$credentials = "APIKEY account=arkhamcity";
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, $credentials);

// Define data to POST
$data = array(
    'name' => 'Wayne Enterprise Forum',
    'addresses' => array(
        'forum.arkhamcity.com',
        'forum-dev.arkhamcity.com',
    ),
    'type' => 'php',
    'path' => '/www/myforum'
);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Execute HTTP request
curl_exec($ch);

// Close the connection
curl_close($ch);

?>
```

Avec [Guzzle](https://github.com/guzzle/guzzle) :

```php
<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://api.alwaysdata.com/v1/site/',
    'auth' => ['APIKEY account=arkhamcity', ''],
]);

// Define data to POST
$data = array(
    'name' => 'Wayne Enterprise Forum',
    'addresses' => array(
        'forum.arkhamcity.com',
        'forum-dev.arkhamcity.com',
    ),
    'type' => 'php',
    'path' => '/www/myforum'
);

$response = $client->request('POST', '', [
        'body'=>json_encode($data)
]);
?>
```

## Modifier une ressource (PUT/PATCH)

### Python

```python
#!/usr/bin/python

import json
import requests

address = 'https://api.alwaysdata.com/v1/site/1234/'
credentials = ('APIKEY account=arkhamcity', '')

data = {
    'addresses': [
        'forum.arkhamcity.com',
    ],
}

response = requests.patch(
    address,
    auth=credentials,
    data=json.dumps(data),
)
```

### PHP

```php
<?php

// Open cURL connection
$ch = curl_init("https://api.alwaysdata.com/v1/site/1234/");

// Initialize HTTP headers
$credentials = "APIKEY account=arkhamcity";
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, $credentials);

// Define data to POST
$data = array(
    'addresses' => array(
        'forum.arkhamcity.com',
    )
);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Execute HTTP request
curl_exec($ch);

// Close the connection
curl_close($ch);

?>
```

Avec [Guzzle](https://github.com/guzzle/guzzle) :

```php
<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://api.alwaysdata.com/v1/site/1234/',
    'auth' => ['APIKEY account=arkhamcity', ''],
]);

// Define data to POST
$data = array(
    'addresses' => array(
        'forum.arkhamcity.com',
    )
);

$response = $client->request('PATCH', '', [
        'body'=>json_encode($data)
]);
?>
```

## Supprimer une ressource (DELETE)

### Python

```python
#!/usr/bin/python

import requests

address = 'https://api.alwaysdata.com/v1/site/1234/'
credentials = ('APIKEY account=arkhamcity', '')

response = requests.delete(
    address,
    auth=credentials,
)
```

### PHP

```php
<?php

// Open cURL connection
$ch = curl_init("https://api.alwaysdata.com/v1/site/1234/");

// Initialize HTTP headers
$credentials = "APIKEY account=arkhamcity";
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, $credentials);

// Change default HTTP request method
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

// Execute HTTP request
curl_exec($ch);

// Close the connection
curl_close($ch);

?>
```

Avec [Guzzle](https://github.com/guzzle/guzzle) :

```php
<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://api.alwaysdata.com/v1/site/1234/',
    'auth' => ['APIKEY account=arkhamcity', ''],
]);

$response = $client->request('DELETE', '');
?>
```
