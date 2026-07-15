---
title: "Crypto For The Newcomers"
date: 2019-09-10
authors: ["Matthias Dugué"]
---

Whether you develop a closed or an open source product, you rarely do it for yourself. You build tools and solutions for people. And those users generate a lot of data. Data leads to privacy. Recent *Big Data* scandals prove that users often don't know how to protect themselves.

To bring data protection to our users, we must add encryption to our products. [Whatsapp](https://www.whatsapp.com/security/), [Signal](https://www.signal.org/), [Keybase](https://keybase.io/), [Nextcloud E2E module](https://nextcloud.com/endtoend/)... all those apps rely on cryptography in a transparent way for users.

We give a lot of talks about security and cryptography as a part of our [Tech Evangelism](https://www.alwaysdata.com/en/open-source/) action. It's a good time to share this knowledge here, and not only at conferences. Please welcome an introduction to *Cryptography For The Newcomers*.

![](https://media.giphy.com/media/5bxBsk0qT5cjK/giphy.gif)

## You said: "encryption"?

First, a quick reminder: encryption is all about content obfuscation. It means that any encrypted data becomes unreadable without a key. Some encryption is single-way: the obfuscated content can't return to its original form. These are the checksum algorithms and they're only used for control tasks. Other ciphers are reversible. The content will be deciphered to its primal form at some point. Those are the ones involved in secured data transmission and storage.

All rely on a common element: the key. Without it, no one can decipher nor control the encrypted content, regardless of its form. It's the most critical part of any cryptographic system. The secret needs to be hard to brute force.

Digital encryption performs huge and complex tasks that could never be done by hand. It ensures that the content is efficiently protected. Ciphers rely on complex math problems[^1] to compute the keys and (de)cipher the data.

### So, what's in the hat?

*This section explains in a simple way how ciphers work with contents. If you prefer to skip this theoretical part, feel free :)*

Encryption's goal is to make the content unreadable to others. It's still the same process since the beginning: it's a block substitution. You may have tried it yourself when you were young, playing with a cipher wheel from a magazine.

![](https://media.giphy.com/media/455jgiG1HYdQ4/giphy.gif)

With this tool, if we perform a 3 shift substitution, then `A` becomes `D`, `B` becomes `E`, and so on. So the text `Hello World!` becomes `KHOOR ZRUOG!`.

Modern digital algorithms do the same but in a much more complex way. They apply cascading effects on blocks of data[^2] to make it more complex to reverse-engineer.

We must initialize those algorithms with parameters. It avoids repetitions, which present a risk of analysis attack on a large amount of data. This *Initialization Vector* (IV) is randomly unique. It ensures you won't encrypt two different contents in the same environment. But we need pure random elements to make them unique.

Our computers aren't unpredictable: they tend to reproduce some patterns over time. So cryptographers have created pure random functions to generate a *Cryptographically Secure Pseudo Random Number Generator* (CSPRNG) content. As you can see, the basic principle is simple, but its implementation is far from accessible to anyone. That's why we never perform encryption by hand. We rely on dedicated crypto libraries, developed and tested by cryptographers.

### Keep it secret

As said above, the key is the most critical part of the crypto layer. You must keep it safe to ensure your content stays protected. In the encryption/decryption family, there are two main types of ciphers. The difference is how they deal with their keys.

The first category is the **Symmetric Ciphers**, like *AES* or *IDEA*. They use the same key to perform both encryption and decryption. They're particularly fast and they can handle a large amount of data. But you have to transfer the content **and** the key if you want your recipient to be able to decrypt the content. If your key leaks, your content isn't safe anymore.

The second ones are **Asymmetric Ciphers**, like *RSA*. They use a pair of keys: the first one is *publicly available* to encrypt the data. To decipher it, you need the associated *private key*. Only the owner of the key pair holds this one[^3]. So anyone can send encrypted content to me with my *public key* (even myself), but I'm the only one able to decipher it. The problem is: those algorithms rely on math problems and are very slow. It doesn't fit very well with large contents.

In day to day development, we often rely on the *key wrapping* process. We generate a CSPRNG that serves as a unique symmetric key for the content for fast and robust encryption. Then we encrypt this symmetric key with the recipient's public key. This operation is fast enough because the symmetric key is small compared to the content. We pack them — the encrypted content and the encrypted symmetric key — and we send/store it securely. Best of both worlds!

## Ready? Use it!

Once again, you should not build your own cryptographic algorithm on your side. Cryptographers work together for years to create strong and well-tested ciphers. Recent abstraction libraries allow every developer to use them easily. So use them all!

### The game-changer: *libsodium*, a multi-platform library

All languages come with their own implementation of cryptographic primitives. But using them is sometimes hard. It requires you to know *a lot* about what crypto is and how it works, to pick the right algorithm and its parameters. It's sometimes complex to figure out which algorithm is available for your use case. Most of all, it means we need to have a lot of teams working on crypto libs, for each language. It can't be sustainable and may lead to potential failure in the implementations.

An elegant solution is to concentrate our efforts on a single agnostic crypto lib. This is exactly what the [libsodium](https://download.libsodium.org/doc/) project stands for. It's a low-level, language-agnostic, portable library, dedicated to cryptography. It focuses on developer usability, so it's also a very good abstraction. It gives everyone an elegant way to pick the right choice without going mad over it. You can use the lib directly in your codebase. Or you can rely on the bindings that allow you to interact with it in your favorite language!

#### Python

To generate CSPRNG, you should rely on the embedded [secrets](https://docs.python.org/3/library/secrets.html#module-secrets) lib, which is way more secure than the `os.random()` function.

```python
import secrets
secretsGenerator = secrets.SystemRandom()
randomNumber = secretsGenerator.randbelow(50)
```

To encrypt and decrypt content, the [PyNaCl](https://pynacl.readthedocs.io/en/stable/) package is a pretty good choice:

```python
import nacl.secret
import nacl.utils
key = nacl.utils.random(nacl.secret.SecretBox.KEY_SIZE)
nonce = nacl.utils.random(nacl.secret.SecretBox.NONCE_SIZE)
secret_box = nacl.secret.SecretBox(key)
encrypted = box.encrypt(data, nonce)
```

#### Ruby

Use [RbNaCl](https://github.com/crypto-rb/rbnacl) to rely on the [libsodium](https://download.libsodium.org/doc/) library in Ruby:

```ruby
key = RbNaCl::Random.random_bytes(RbNaCl::SecretBox.key_bytes) 
nonce = RbNaCl::Random.random_bytes(secret_box.nonce_bytes) 
secret_box = RbNaCl::SecretBox.new(key)
encrypted = secret_box.encrypt(nonce, data)
```

#### PHP

Libsodium can be used from PHP with the [libsodium-php](https://github.com/jedisct1/libsodium-php) extension:

```php
$key = sodium_crypto_secretbox_keygen();
$nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
$encrypted = sodium_crypto_secretbox($data, $nonce, $key);
```

> **Reminder**
>
> You can easily install the PECL extension on our server with the `ad_install_pecl libsodium` command. See [our documentation about how to manage PECL extensions](/en/docs/web-hosting/languages/php/extensions/#from-pecl) for more details.

#### Node.js®

Node.js® exposes a very good cryptography API in the `Crypto` module. But relying on libsodium is probably a better choice. You can do it with [libsodium.js](https://github.com/jedisct1/libsodium.js), compiled from the libsodium source code using WebAssembly:

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

Java can rely on libsodium by using the [libsodium-jna](https://github.com/muquit/libsodium-jna) library:

```java
private static String libraryPath = "/usr/local/lib/libsodium.so";
SodiumLibrary.setLibraryPath(libraryPath);
byte[] key = SodiumLibrary.randomBytes(SodiumLibrary.cryptoSecretBoxKeyBytes().intValue());
int nonceBytesLength = SodiumLibrary.cryptoSecretBoxNonceBytes().intValue();
byte[] nonceBytes = SodiumLibrary.randomBytes(nonceBytesLength); 
byte[] dataBytes = data.getBytes();
byte[] encrypted = SodiumLibrary.cryptoSecretBoxEasy(dataBytes, nonceBytes, key);
```

### The Dark Side

The earlier you encrypt the content, the more robust your architecture will be. It means that encryption should occur in the *client* itself. Libsodium is usable on mobile clients with [libsodium-jni](https://github.com/joshjdevl/libsodium-jni) for Android and [swift-sodium](https://github.com/jedisct1/swift-sodium) for iOS[^4].

The dark side is when you have to work in the Web browser. *WebCrypto* is a pretty good low-level API, but it is... well... low-level ¯\\_(ツ)_/¯. Using it in day to day work is painful, and we need a more reliable way. Another issue is that JavaScript is too weak to ensure a good level of protection. Its prototyped nature may cause data leaks, because of the unsafe environment.

Fortunately, libsodium has the [libsodium.js](https://github.com/jedisct1/libsodium.js) package! Using it in the browser is as easy as:

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

Note that you would prefer to use it as a module[^5] and pack it with your codebase using a bundler like *Webpack* or *Parcel.js*.

Maybe you need a more robust way to deal with your content. Well, you can develop most of your web app core using Rust, and rely on [sodiumoxide](https://github.com/sodiumoxide/sodiumoxide) for the crypto parts! It compiles well to WASM and you can run your whole domain codebase in the browser, and keep JS for the UI only. With complete libsodium support in your WASM modules!

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXpicjJxZmM1NmdibzFwZTVnajRwYjdvbWo2bDl0YmV6dmM3eDBpZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15BuyagtKucHm/giphy.gif)

## Far from nowhere

Using cryptography may be a really hard job. We didn't cover in the examples above many things like:

- how to deal with asymmetric keys
- how to exchange them
- how to use a Diffie-Hellman algorithm
- how to sign content to make it trustable
- etc.

It's worth repeating that you should use high-level libraries. Never try to develop your own algorithm if you're not a confirmed cryptographer.

Whatever you need to protect, always consider the worst possible scenario. No protection can be strong enough to resist time. Always rely on strong, high-grade tooling, like long *ECC* and *RSA* keys[^6]. Use unique keys. Use *nonces*. Avoid repetitions. Never hesitate to update your codebase to increase security when an audit reveals a flaw. Nobody's perfect, but we must fix security issues each time we spot them!

Consider using dedicated hardware encryption when working on the server with private keys. Hardware Security Module (HSM) devices allow you to externalize key computation. They make your keys inaccessible from the filesystem. So they cannot be compromised if the server is corrupted. Running codebases can protect their keys at an affordable cost, thanks to open-source hardware[^7].

---

Guessing this (not so short) introduction to cryptography sounds good to you. If you're interested in the topic, you can find a [live french version on YouTube](https://youtu.be/GffrOf5aIg0) by myself ([m4dz](https://twitter.com/m4d_z)).

We'll give the talk in the next months both at [Techorama, Netherlands](https://www.techorama.nl/) and [PiterPy, Saint Petersburg](https://piterpy.com/en). Please join us at these awesome events to meet and discuss the topic!

Are you convinced about how critical cryptography is in your project? Want to use it on your [alwaysdata hosting plans](https://www.alwaysdata.com/en/offers/)? Then ask us for an HSM key attached to your dedicated environment, and we'll be pleased to provide you with it!


[^1]: like *prime numbers* or *elliptic curves*
[^2]: e.g. 4096 bytes-length blocks
[^3]: because it's *private*, see?
[^4]: Apple has also recently released its [Cryptokit](https://developer.apple.com/documentation/cryptokit) library, giving developers access to crypto patterns in a native Swift codebase
[^5]: like with Node.js above
[^6]: *ECC* 256 bit key is as secure as *RSA* 3078 bit length key
[^7]: like [Nitrokey's HSM](https://www.nitrokey.com/files/doc/Nitrokey_HSM_factsheet.pdf) dongle
