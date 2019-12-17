+++
url = "/fr/bases-de-données/mongodb/php/"
title = "Comment configurer une application PHP avec MongoDB"
hidden = true
layout = "howto"
tags = ["base de données", "mongodb", "php"]
+++

## Configuration

L'utilisation de Mongo en PHP nécessite l'[installation d'une extension PECL]({{< ref "languages/php/extensions" >}}#depuis-pecl-https-pecl-php-net) sur votre compte.

```
$ ad_install_pecl mongodb
```

N'oubliez pas ensuite d'[ajouter l'extension dans votre php.ini]({{< ref "languages/php/configuration" >}}#paramètres-php-ini) :

```
extension=/home/[compte]/path/to/mongodb.so
```

## Connexion

Pour tester votre base, vous pouvez utiliser ce code (en remplaçant les informations de connexion) :

```
$m = new Mongo("mongodb://user:password@mongodb-[compte].alwaysdata.com/database_name");
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

Vous devriez obtenir une réponse de ce type :

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
