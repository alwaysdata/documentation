---
title: "La Crypto de Zéro"
description: "Introduction au chiffrement"
date: 2019-09-10
authors: ["Matthias Dugué"]
---

Quel que soit le produit que vous développez, qu'il soit *open source* ou propriétaire, vous en êtes rarement l'utilisateur·trice principal·e. Vous construisez des outils et des applications pour les autres. Et ces utilisateur·trice·s produisent beaucoup de données. Des données souvent sensibles. Les récents scandales impliquant les acteurs du *Big Data* nous montrent encore à quel point celles et ceux qui se servent de nos produits ne savent pas comment se protéger.

Pour préserver les données qui nous sont confiées, nous n'avons pas d'autre choix que de nous appuyer sur des politiques de chiffrement. [Whatsapp](https://www.whatsapp.com/security/), [Signal](https://www.signal.org/), [Keybase](https://keybase.io/), [Nextcloud E2E module](https://nextcloud.com/endtoend/)... tous ces outils utilisent de la cryptographie, de façon plus ou moins transparente, nativement, au cœur de leur code.

Nous donnons de plus en plus souvent des conférences sur la sécurité informatique et le chiffrement dans le cadre de notre programme de [Relations Développeur·euse·s](https://www.alwaysdata.com/fr/open-source/). Il nous a semblé important d'en parler ici aussi, pour ne pas limiter la diffusion des savoirs uniquement au cercle, parfois restreint, des publics de conférences. Voici donc une introduction à la *cryptographie de zéro*.

![](https://media.giphy.com/media/5bxBsk0qT5cjK/giphy.gif)

## Vous avez dit « chiffrement » ?

Commençons par un rappel simple : le chiffrement n'est rien d'autre que l'obfuscation d'un contenu. Cela signifie qu'un contenu chiffré devient illisible pour qui n'en possède pas la clef. Certains algorithmes ne fonctionnent que dans une direction : le contenu chiffré ne pourra pas revenir à son état d'origine. Ce sont les algorithmes de sommes de contrôle, utilisés uniquement à des fins de vérification, pour garantir que les contenus n'ont pas été altérés. D'autres algorithmes vont produire des contenus pouvant être déchiffrés, et sont utilisés pour garantir la sécurité des données lors de leur transfert, ou de leur stockage.

Tous s'appuient sur un élément commun : la clef. Sans elle, pas de déchiffrement ou de contrôle fiable du contenu, quelle que soit la technique de chiffrement. Il s'agit de la partie la plus critique dans toute action cryptographique. La clef doit être gardée secrète, et doit être suffisamment robuste pour résister à une attaque par force brute.

Les techniques de chiffrement des données numériques apportent une capacité à réaliser des opérations complexes, qui ne pourraient pas être réalisées manuellement. Elles garantissent la protection des contenus. Les algorithmes de chiffrement s'appuient sur des problèmes mathématiques complexes[^1] pour forger des clefs résistantes, et (dé)chiffrer les données.

### Bien, comment ça fonctionne ?

*Cette partie contient des explications théoriques simples sur le fonctionnement des algorithmes de chiffrement. N'hésitez pas à passer à la section suivante si seule la mise en œuvre vous intéresse :)*

L'objectif d'un chiffrement est de rendre son contenu inaccessible aux yeux indésirables. Depuis les débuts de l'histoire du chiffrement, la technique n'a pas changé : il s'agit de substituer du contenu. Vous vous y êtes probablement déjà essayé, en jouant avec une roue de chiffrement offerte dans *Pif Gadget*[^2].

![](https://media.giphy.com/media/455jgiG1HYdQ4/giphy.gif)

Sur cette roue, si nous effectuons une rotation de trois points, `A` devient `D`, `B` devient `E`, et ainsi de suite. Le texte `Hello World!` devient alors `KHOOR ZRUOG!`.

Les algorithmes de chiffrement modernes agissent de la même façon, en plus complexe toutefois. Ils appliquent une série de substitutions en cascade, en remplaçant non plus des caractères, mais des blocs de données[^3] pour rendre les contenus chiffrés plus complexes à casser par rétro-ingénierie.

Ces algorithmes nécessitent cependant d'être initialisés dans un état donné. De cette façon, les risques de répétition dans les motifs de substitution sont moins importants en cas d'attaques sur de grandes quantités de données ayant été chiffrées selon le même procédé. Ce *vecteur d'initialisation* (IV) se doit donc d'être unique. Il assure qu'une même opération de chiffrement ne donnera pas deux fois le même résultat sur un jeu de données identique. Mais pour s'assurer de ce caractère unique, il nous faut des sources aléatoires fiables.

Or nos ordinateurs ne sont pas réellement imprévisibles : leur design interne les pousse à reproduire des motifs précis au fil du temps. Pour éviter de tomber dans ce piège, les cryptographes ont créé des méthodes pour générer des nombres aléatoires suffisamment robustes au sens cryptographique du terme. Ces fonctions sont des *générateurs de nombres pseudo-aléatoires cryptographiquement purs* (CSPRNG).

Comme vous pouvez le constater, les principes sont simples depuis le début (substituer des éléments) mais leur mise en œuvre est loin d'être facile. C'est la raison pour laquelle nous n'effectuons jamais d'opération cryptographique « à la main ». Nous nous appuyons sur des bibliothèques de chiffrement, développées et vérifiées par des cryptographes.

### Tu sais garder un secret ?

Comme nous l'avons dit, la clef est l'élément le plus critique de la couche de cryptographie. Pour garantir la sécurité de vos données, vous devez protéger cette clef. Dans la famille des algorithmes de chiffrement / déchiffrement, il existe deux grandes catégories selon la façon dont les clefs sont gérées.

La première catégorie est celle des algorithmes à **clef symétrique**, comme *AES* ou *IDEA*. Ils utilisent la même clef pour réaliser à la fois les opérations de chiffrement et de déchiffrement. Ils sont rapides, et peuvent agir sur de gros volumes de données avec un coût de performance raisonnable. Mais vous devrez transmettre à la fois le contenu chiffré **et** la clef pour permettre à une tierce personne d'accéder au contenu. Si votre clef est interceptée durant le transfert, votre contenu n'est plus protégé.

L'autre catégorie est celle des algorithmes à **clef publique**, ou **asymétriques**, comme *RSA*. Ils fonctionnent avec des paires de clefs. L'une est *publique* : elle va servir à chiffrer les données que vous souhaitez transmettre à son propriétaire. La seconde est *privée*, et ne servira qu'à votre destinataire pour déchiffrer le contenu. Seul le propriétaire d'une clef privée peut donc revenir à la donnée initiale[^4]. En revanche, n'importe qui (propriétaire inclus) peut envoyer du contenu chiffré à destination de cette clef privée, en utilisant la clef publique qui lui est associée. De telles opérations ne sont possibles qu'en s'appuyant sur des énigmes mathématiques complexes, ce qui les rend particulièrement longues à réaliser : elles s'accommodent mal de gros volumes de données.

Pour faciliter les choses, et avoir le meilleur des deux mondes, nous avons souvent recours à l'encapsulation de clefs (*key wrapping*). Nous générons un CSPRNG qui va servir de clef unique pour chiffrer nos données de façon symétrique. Puis nous allons chiffrer cette clef unique avec la clef publique de notre destinataire. Cette opération est rapide, parce qu'une clef, même robuste, reste une donnée relativement petite, et son chiffrement ne nécessitera pas trop d'efforts. Nous empaquetons alors les deux éléments — la clef unique chiffrée, et le contenu chiffré — et nous envoyons ou stockons le tout.

## 3… 2… 1… Décollage !

Encore une fois, vous ne devez pas chercher à réaliser vos opérations de chiffrement à la main, ou en inventant vos propres algorithmes. Les cryptographes travaillent ensemble depuis des années pour constituer un socle commun robuste et approuvé. Les bibliothèques d'abstraction récentes permettent de les utiliser facilement, ne nous en privons pas !

### Le chiffrement pour tou·te·s : *libsodium*, la bibliothèque multi-plateforme

Tous les langages de développement ont leur(s) propre(s) bibliothèque(s) de cryptographie. Les utiliser en revanche relève parfois du défi. Elles nécessitent souvent un gros bagage de connaissances en cryptographie théorique, pour choisir les bons algorithmes et leurs bons paramètres. Et il est parfois difficile de savoir quoi utiliser, et à quel moment.

Mais ces outils provoquent un autre effet : ils nécessitent que pour chaque langage, une équipe de cryptographes les maintienne, les teste, les sécurise. C'est une situation qui est difficilement tenable sur la durée, et qui peut provoquer l'apparition de failles dans les implémentations.

Une réponse au problème serait de mutualiser les efforts de développement sur une bibliothèque dédiée et agnostique de la plateforme et du langage. C'est exactement le projet [libsodium](https://download.libsodium.org/doc/) ! Il se concentre sur l'utilisabilité au service des développeur·euse·s, en offrant une excellente abstraction. Il offre une réponse élégante à la problématique du choix en présélectionnant les bons algorithmes. Vous pouvez l'utiliser directement dans votre projet ou vous appuyer sur ses librairies tierces de pontage (*bindings*) pour l'interfacer avec votre langage favori !

#### Python

Pour générer un CSPRNG, vous devriez plutôt vous appuyer sur la lib [secrets](https://docs.python.org/3/library/secrets.html#module-secrets) qui offre une génération plus robuste que le traditionnel `os.random()`.

```python
import secrets
secretsGenerator = secrets.SystemRandom()
randomNumber = secretsGenerator.randbelow(50)
```

Pour chiffrer / déchiffrer les contenus, le paquet [PyNaCl](https://pynacl.readthedocs.io/en/stable/) est un excellent choix :

```python
import nacl.secret
import nacl.utils
key = nacl.utils.random(nacl.secret.SecretBox.KEY_SIZE)
nonce = nacl.utils.random(nacl.secret.SecretBox.NONCE_SIZE)
secret_box = nacl.secret.SecretBox(key)
encrypted = box.encrypt(data, nonce)
```

#### Ruby

Utilisez [RbNaCl](https://github.com/crypto-rb/rbnacl) pour exploiter la bibliothèque [libsodium](https://download.libsodium.org/doc/) avec Ruby :

```ruby
key = RbNaCl::Random.random_bytes(RbNaCl::SecretBox.key_bytes) 
nonce = RbNaCl::Random.random_bytes(secret_box.nonce_bytes) 
secret_box = RbNaCl::SecretBox.new(key)
encrypted = secret_box.encrypt(nonce, data)
```

#### PHP

PHP offre l'extension [libsodium-php](https://github.com/jedisct1/libsodium-php) :

```php
$key = sodium_crypto_secretbox_keygen();
$nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
$encrypted = sodium_crypto_secretbox($data, $nonce, $key);
```

> **Rappel**
>
> Vous pouvez facilement installer l'extension depuis PECL dans votre compte alwaysdata avec la commande `ad_install_pecl libsodium`. Consultez [notre documentation sur l'installation des extensions PECL](/fr/docs/hebergement-web/langages/php/installer-une-extension/#depuis-pecl) pour plus d'informations.

#### Node.js®

Node.js® expose nativement une excellente librairie de cryptographie via son module `Crypto`. Cela étant, s'appuyer sur libsodium est probablement un meilleur choix. Vous pouvez utiliser [libsodium.js](https://github.com/jedisct1/libsodium.js), compilé vers *WebAssembly* depuis le code source de la bibliothèque principale du projet :

```js
const _sodium = require('libsodium-wrappers')
(async function () {
  await _sodium.ready
  const sodium = _sodium
  let key = sodium.randombutes_buf(sodium.crypto_secretbox_KEYBYTES)
  let nonce = sodium.randombutes_buf(sodium.crypto_secretbox_NONCEBYTES)
  let encrypted = sodium.crypto_secretbox_easy(data, nonce, key)
})()
```

#### Java

Java dispose de la bibliothèque [libsodium-jna](https://github.com/muquit/libsodium-jna) :

```java
private static String libraryPath = "/usr/local/lib/libsodium.so";
SodiumLibrary.setLibraryPath(libraryPath);
byte[] key = SodiumLibrary.randomBytes(SodiumLibrary.cryptoSecretBoxKeyBytes().intValue());
int nonceBytesLength = SodiumLibrary.cryptoSecretBoxNonceBytes().intValue();
byte[] nonceBytes = SodiumLibrary.randomBytes(nonceBytesLength); 
byte[] dataBytes = data.getBytes();
byte[] encrypted = SodiumLibrary.cryptoSecretBoxEasy(dataBytes, nonceBytes, key);
```

### Le côté obscur

Le plus tôt les données sont chiffrées, meilleure sera leur protection dans votre architecture. C'est le principe du chiffrement **point à point** : les opérations cryptographiques devraient s'exécuter dans le client. Heureusement, *libsodium* est utilisable dans un client mobile grâce à [libsodium-jni](https://github.com/joshjdevl/libsodium-jni) pour Android, et [swift-sodium](https://github.com/jedisct1/swift-sodium) pour iOS[^5].

Le problème reste la cible Web. *WebCrypto* est une bonne API bas-niveau, mais… et bien… elle reste bas niveau ¯\\_(ツ)_/¯. Au quotidien, c'est inexploitable, et nous avons besoin d'un outil plus efficace. Un autre problème est lié à la nature même de *JavaScript* qui ne peut garantir, par son design, des prérequis suffisants pour protéger l'environnement autour de la couche cryptographique.

Heureusement, nous disposons là encore de [libsodium.js](https://github.com/jedisct1/libsodium.js) ! Son utilisation dans le navigateur est aussi facile que :

```
<script>
window.sodium = {
  onload (sodium) {
    let key = sodium.randombutes_buf(sodium.crypto_secretbox_KEYBYTES)
    let nonce = sodium.randombutes_buf(sodium.crypto_secretbox_NONCEBYTES)
    let encrypted = sodium.crypto_secretbox_easy(data, nonce, key)
  }
}
</script>
<script src="sodium.js" async=""></script>
```

Notez que vous préfèrerez sans doute l'utiliser comme un module[^6] et l'embarquer via votre outil de production comme *Webpack* ou *Parcel.js*.

Peut-être que vous aurez besoin d'un environnement encore plus sûr. Dans ce cas, vous pouvez vous tourner vers *Rust* pour développer le code métier de votre application, et vous appuyer sur [sodiumoxide](https://github.com/sodiumoxide/sodiumoxide) pour la partie crypto ! L'ensemble compile très bien vers *WASM*, et vous permet d'embarquer votre code logique dans le navigateur, en ne conservant *JavaScript* que pour les tâches liées à l'interface.

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXpicjJxZmM1NmdibzFwZTVnajRwYjdvbWo2bDl0YmV6dmM3eDBpZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15BuyagtKucHm/giphy.gif)

## Encore une chose…

La cryptographie est un travail à plein temps. Elle nécessite des compétences mathématiques fortes dans son approche théorique. Nous n'avons pas couvert ici ses autres champs d'application comme :

- échanger et stocker des clefs asymétriques ;
- utiliser l'algorithme de Diffie-Hellman pour forger une clef symétrique privée ;
- signer un contenu pour l'authentifier ;
- etc.

Encore une fois : quelle que soit votre tâche, appuyez-vous sur une bibliothèque cryptographique d'abstraction. Ne cherchez jamais à concevoir vos propres algorithmes à moins d'être un·e cryptographe confirmé·e.

Quoi que vous cherchiez à protéger, envisagez toujours le pire scénario possible. Aucune protection n'est assez robuste pour résister à l'épreuve du temps. Appuyez-vous toujours sur des algorithmes reconnus avec de hauts standards de résistance, comme de longues clefs *ECC* ou *RSA*[^7]. Utilisez des clefs uniques. Utilisez des *nonces*. Évitez de réutiliser ces éléments. N'hésitez jamais à mettre à jour votre couche cryptographique pour améliorer sa sécurité quand une faille est découverte. Nous avons tous droit à l'erreur, mais nous devons à nos utilisateur·trice·s de corriger chaque problème trouvé qui les mettrait en danger !

Dans le cas d'une application serveur importante, envisagez les dispositifs matériels de gestion de clefs. Les modules HSM (*Hardware Security Module*) vous permettent d'externaliser les opérations cryptographiques. Ils vous permettent de garder les clefs en dehors du système de fichiers. Elles ne sont ainsi pas compromises en cas d'attaque. Ces modules sont désormais accessibles à des prix abordables grâce à des projets *open source*[^8].

---

Gageons que cette (pas si courte) introduction à la Cryptographie vous aura quelque peu éclairé·e. Si vous voulez aller plus en détail dans le sujet, vous pouvez trouver [une version live sur YouTube](https://youtu.be/GffrOf5aIg0) de la conférence associée au sujet que je ([m4dz](https://twitter.com/m4d_z)) donne régulièrement.

Nous serons d'ailleurs présents avec ce *talk* à [Techorama, Netherlands](https://www.techorama.nl/) et à [PiterPy, Saint Petersburg](https://piterpy.com/en) avec sa toute nouvelle version !

Vous êtes convaincu·e·s de l'importance de la cryptographie dans votre projet ? Vous souhaitez l'utiliser dans votre [plan d'hébergement alwaysdata](https://www.alwaysdata.com/en/offers/) ? Demandez-nous de vous fournir un device HSM sur votre **plan dédié**, et nous nous ferons un plaisir de vous le procurer !

[^1]: comme les *nombres premiers*, ou les *courbes elliptiques*
[^2]: si vous êtes aussi vieux que moi, sinon c'était probablement *Picsou Magazine*
[^3]: par exemple des blocs d'une longueur de 4096 octets
[^4]: puisqu'il est le seul à posséder la clef, vu qu'elle est *privée*, vous suivez ?
[^5]: Apple a par ailleurs récemment donné accès à sa bibliothèque [Cryptokit](https://developer.apple.com/documentation/cryptokit), pour permettre un accès aux primitives cryptographiques directement dans le code Swift natif
[^6]: comme avec Node.js ci-dessus
[^7]: les clefs *ECC* 256 bits sont considérées aussi robustes que des clefs *RSA* 3078 bits
[^8]: comme les clefs [HSM Nitrokey](https://www.nitrokey.com/files/doc/Nitrokey_HSM_factsheet.pdf)
