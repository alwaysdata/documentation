+++
url = "/fr/sécurité/réseau/configurer-son-pare-feu"
title = "Serveurs VPS et dédiés : configurer le pare-feu"
layout = "faq"
hidden = true
tags = ["sécurité", "serveur dédié", "serveur gold", "serveur vps"]
+++

Le pare-feu se gère dans le menu **Firewall** du serveur.

## Règles
Menu pour retrouver, créer et ajuster ses règles de pare-feu.
{{< fig "images/admin-panel_list-rules.fr.png" "Interface d'administration : liste des règles de pare-feu actives" >}}

Si vous avez plusieurs règles, la règle placée la plus en haut aura autorité sur les autres.

- [Ressource API](https://api.alwaysdata.com/v1/firewall/doc/)


### Ajouter une règle
Pour ajouter une règle, choisissez :

- le protocole : [UDP](https://fr.wikipedia.org/wiki/User_Datagram_Protocol) ou [TCP](https://fr.wikipedia.org/wiki/Transmission_Control_Protocol) ;
- le type de règle : ACCEPT, DROP (rejeter sans avertir l'émetteur) ou REJECT ;
- la direction : entrée ou sortie ;
- les IP/hôtes concernés ;
- les ports ;
- la version des IP.

Ne rien mettre dans *Hôtes* et *Ports* va activer la règle pour tous sauf si une règle supérieure indique le contraire.

{{< fig "images/admin-panel_add-rule.fr.png" "Interface d'administration : ajouter une règle" >}}

Il est possible de donner un label à ses règles en utilisant ```# <label>```.

{{% notice note %}}
Pour indiquer tous les ports vous pouvez laisser vide ou indiquer la plage `0:65535`.
{{% /notice %}}

### Exemples

#### Autoriser sa propre IP à n'être bloquée sur aucun port entrant

| Intitulé   | Valeur                                           |
|------------|--------------------------------------------------|
| Protocole  | UDP/TCP                                          |
| Type       | ACCEPT                                           |
| Direction  | Entrée                                           |
| Hôtes      | \<votre IP>                                      |
| Ports      | \<ne rien indiquer>                              |
| Version IP | IPv4, IPv6 ou IPv4/IPv6 (selon les IP indiquées) |

{{< fig "images/rule-example-accept.fr.png" "" >}}

#### Bloquer le port MySQL sur l'extérieur

| Intitulé   | Valeur                                           |
|------------|--------------------------------------------------|
| Protocole  | UDP/TCP                                          |
| Type       | REJECT                                           |
| Direction  | Entrée                                           |
| Hôtes      | \<ne rien indiquer>                              |
| Ports      | 3306                                             |
| Version IP | IPv4/IPv6                                        |

{{< fig "images/rule-example-reject.fr.png" "" >}}


## Banissements
Vous y retrouverez les IP actuellement bannies et les services sur lesquels elles le sont.
{{< fig "images/admin-panel_list-bans.fr.png" "Interface d'administration : liste des bannissements en cours" >}}

Si vous vous retrouvez bloqués sur un service, vérifiez ce menu et supprimez votre IP si elle est bannie et ajoutez la règle nécessaire. 

{{% notice tip %}}
Le banissement dure 30 minutes par défaut et a lieu après une dizaine d'échecs de connexion.
{{% /notice %}}
