+++
title = "API usage examples"
weight = 6
tags = ["api"]
+++

## Listing (GET)

Python :

```python
#!/usr/bin/python

import requests

address = 'https://api.alwaysdata.com/v1/site/'
credentials = ('APIKEY account=akrhamcity', '')

# Send HTTP request
response = requests.get(
    address,
    auth=credentials,
)
```

PHP :

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

## Add a resource (POST)

Python :

```python
#!/usr/bin/python

import json
import requests

address = 'https://api.alwaysdata.com/v1/site/'
credentials = ('APIKEY account=arkhamcity', '')

data = {
    'name': 'Wayne Enterprise Forum',
    'addresses': [
        'http://forum.arkhamcity.com',
        'http://forum_dev.arkhamcity.com',
    ],
    'type': 'apache_standard',
    'path': '/www/myforum',
}

response = requests.post(
    address,
    auth=credentials,
    data=json.dumps(data),
)
```

PHP :

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
        'http://forum.arkhamcity.com',
        'http://forum_dev.arkhamcity.com',
    ),
    'type' => 'apache_standard',
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

## Update a resource (PUT/PATCH)

Python :

```python
#!/usr/bin/python

import json
import requests

address = 'https://api.alwaysdata.com/v1/site/1234/'
credentials = ('APIKEY account=arkhamcity', '')

data = {
    'addresses': [
        'http://forum.arkhamcity.com',
    ],
}

response = requests.patch(
    address,
    auth=credentials,
    data=json.dumps(data),
)
```

PHP :

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
        'http://forum.arkhamcity.com',
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

## Delete a resource (DELETE)

Python :

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

PHP :

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