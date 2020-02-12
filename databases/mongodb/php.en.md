+++
title = "Using MongoDB with a PHP Backend"
hidden = true
layout = "howto"
tags = ["databases", "mongodb", "php"]
+++

## Configuration

Using Mongo in PHP requires [installing a PECL extension]({{< ref "languages/php/extensions" >}}#from-pecl-https-pecl-php-net) in your account.

```sh
$ ad_install_pecl mongodb
```

Then don’t forget to [add the extension to your `php.ini`]({{< ref "languages/php/configuration" >}}#parameters-php-ini):

```
extension=/home/[account]/path/to/mongodb.so
```

## Connection

To test your database, you can use this code (to replace the connection information):

```php
$m = new Mongo("mongodb://user:password@mongodb-[account].alwaysdata.com/database_name");
var_dump($m);
$db = $m->selectDB('database_name');
$collection = new MongoCollection($db, 'collection_name');
$person = array("name" => "Joe", "age" => 20);
$collection->insert($person);
$cursor = $collection->find();
foreach ($cursor as $doc) {
    var_dump($doc);
}
```

You should get a response that looks like this:

```json
object(Mongo)#1 (4) {
["connected"]=> bool(true)
["status"]=> NULL
["server":protected]=> NULL
["persistent":protected]=> NULL }
    array(3) {
            ["_id"]=> object(MongoId)#8 (1)
                { ["$id"]=> string(24) "50a8aa38861fec07f6000001" }
            ["name"]=> string(3) "Joe"
            ["age"]=> int(20)
    }
```
