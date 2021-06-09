+++
title = "Utiliser le plugin Bob de TiddlyWiki"
layout = "howto"
hidden = true
tags = ["tiddlywiki", "plugin"]
+++

[TiddlyWiki]({{<ref "./">}}) est un "carnet Web personnel non linéaire", ce qui signifie qu'il est plus probablement destiné à être utilisé par un seul utilisateur, pour un usage personnel. Il est possible que vous souhaitiez servir plusieurs TiddlyWikis, chacun étant dédié à des fins différentes. Vous pouvez y parvenir en définissant plusieurs *Sites* dans votre panneau d'administration. Ou vous pouvez utiliser le plugin [Bob](https://github.com/OokTech/TW5-Bob), qui permet l'édition *multi-seats* en temps réel.

Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh">}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de TiddlyWiki : `$HOME/wiki/`
- Port : 8100 (donné dans les détails de la Commande dans **Web > Sites**)

{{% notice note %}}
`[foo]` et `[version]` doivent être remplacées par les informations correctes.
{{% /notice %}}

## Installation

1. Installez TiddlyWiki via [l'applithèque]({{< ref "marketplace" >}}) ou par vous-même.
2. À la racine du TiddlyWiki, téléchargez la dernière version du [binaire du plugin Bob](https://github.com/OokTech/TW5-BobEXE) et mettez-le en place :

```sh
foo@ssh:~/wiki$ wget https://github.com/OokTech/TW5-BobEXE/releases/download/[version]/BobLinux
foo@ssh:~/wiki$ chmod u+x BobLinux
```
3. Exécutez le binaire une fois pour qu'il créé les fichiers et dossiers nécessaires :

```sh
foo@ssh:~/wiki$ ./BobLinux
```
4. Éditez le ficher `IndexWiki/settings/settings.json` pour remplacer la valeur `ws-server` et mettre :

```json
"ws-server": {
    "port": 8100,
    "host": "::",
    "autoIncrementPort": "false"
 },
```

5. Créez la configuration dans **Web > Sites** :
- le champ **Commande** du site doit être : `./BobLinux IndexWiki` ;
- si vous étiez passé par l'applithèque, l'authentification mise en place à l'installation de TiddlyWiki ne sera plus en place.

{{% notice note %}}
Nous ne recommandons pas de faire fonctionner TiddlyWiki avec le plugin Bob sous une URL avec un sous-chemin. Malgré le support des [Proxies](https://github.com/OokTech/TW5-Bob/blob/master/Documentation/Using%20Proxies.tid) par le plugin, cela peut conduire à des incohérences comme des WebSocket inutilisables. Hébergez-le plutôt dans un sous-domaine.
{{% /notice %}}
