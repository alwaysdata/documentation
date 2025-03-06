+++
url = "/fr/emails/configurer-spf-dkim-dmarc/"
title = "Comment configurer SPF/DKIM/DMARC"
layout = "howto"
hidden = true
tags = ["email", "dns"]
+++

Voici 3 méthodes pour authentifier vos emails et réduire de ce fait l'usage abusif des emails (spam, phishing...). 

## Sender Policy Framework
[SPF](https://fr.wikipedia.org/wiki/Sender_Policy_Framework) fait une requête DNS de type `TXT` sur le domaine de l'expéditeur \("_MAIL FROM_" dans les en-têtes du message) pour connaître la liste des serveurs autorisés à envoyer des emails et la comparer à l'adresse IP du serveur émetteur.

{{< fig "images/globalcyberalliance-spf.en.png" "SPF : schéma explicatif" >}}

### Paramètres

|Mécanisme                |                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------|
|ALL                      |Résultat par défaut                                                                                |
|A                        |Un enregistrement _IN A (ou AAAA)_ pouvant être résolu comme adresse d'expéditeur                  |
|IP4                      |Plage d'IPv4                                                                                       |
|IP6                      |Plage d'IPv6                                                                                       |
|MX                       |Un enregistrement _Mail eXchanger_ pointant vers l'adresse de l'expéditeur                         |
|EXISTS                   |Le domaine est résolu en n'importe quelle adresse                                                  |
|INCLUDE                  |Une règle incluse passe le test                                                                    |
|PTR                      |Le domaine de l'adresse IP correspond au domaine spécifié, et ce dernier pointe vers l'IP en retour|

|Qualifieurs              |                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------|
|+                        |Résultat favorable                                                                                 |
|?                        |Résultat neutre                                                                                    |
|~                        |Léger échec "_SOFTMAIL_" (email accepté mais marqué)                                               |
|-                        |Échec total (email normalement rejeté)                                                             |

|Modifiers                |                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------|
|exp=some.example.org     |Pour avoir le motif des résultats en échec                                                         |
|redirect=some.example.org|Pour lier à un enregistrement de règle d'un autre domaine                                          |

{{% notice warning %}}
Cette technologie peut avoir des répercussions sur les redirections emails : le serveur émetteur n'étant pas forcément le serveur de messagerie de l'expéditeur d'origine de l'email.
{{% /notice %}}

#### Chez alwaysdata

Un enregistrement SPF est créé par défaut, à retrouver dans l'onglet **Enregistrements DNS** du domaine :

{{< fig "images/spf-record.png" "Enregistrement SPF" >}}

- `include:_spf.alwaysdata.com` **autorise explicitement nos serveurs** à envoyer des emails ;
- `~all` envoie un léger échec "SOFTMAIL" pour les autres serveurs d'envois.

Si le domaine n'utilise pas les serveurs DNS d'alwaysdata, il faudra, chez le prestataire DNS, ajouter `include:_spf.alwaysdata.com` à l'enregistrement SPF.

### Liens

- [RFC 7208](https://tools.ietf.org/html/rfc7208)
- [RFC 7372 - point 3.2](https://tools.ietf.org/html/rfc7372)
- [RFC 4408](https://tools.ietf.org/html/rfc4408)

## DomainKeys Identified Mail

[DKIM](https://fr.wikipedia.org/wiki/DomainKeys_Identified_Mail) permet d'authentifier le nom de domaine en ajoutant une signature à tous les emails sortants. Concrètement cela fonctionne avec deux clés :

- une clé privée qui est connue - et gardée secrète - des serveurs mails expéditeurs du domaine ;
- une clé publique qui correspond à un enregistrement DNS de type `TXT`.

{{< fig "images/globalcyberalliance-dkim.en.png" "DKIM : schéma explicatif" >}}

### Mise en place

Pour générer une paire de clés chez alwaysdata, rendez-vous dans **Domaines > Détails de [example.org] - 🔎> Configuration**.

{{< fig "images/admin-panel_domain-configuration.fr.png" "Interface d'administration : configurer DKIM" >}}
{{< fig "images/admin-panel_dkim.fr.png" "Interface d'administration : résultat de la configuration DKIM" >}}

Cela créera automatiquement l'enregistrement `TXT`, alors disponible dans l'onglet **Enregistrement DNS** :

{{< fig "images/dkim-record.png" "Enregistrement DKIM" >}}

Si le domaine n'utilise pas les serveurs DNS d'alwaysdata, cet enregistrement doit être recopié chez le prestataire DNS.

### Liens

- [Site officiel](http://www.dkim.org)
- [RFC 6376](https://tools.ietf.org/html/rfc6376)
- [RFC 7372 - point 3.1](https://tools.ietf.org/html/rfc7372)

## Domain-based Message Authentication, Reporting and Conformance

[DMARC](https://fr.wikipedia.org/wiki/DMARC) est un protocole standardisant l'authentification en indiquant aux destinataires les actions à entreprendre dans le cas ou une des méthodes d'authentification échouerait. Il va vérifier que :

- le domaine correspond à la paire de clés DKIM (champ _d=_) ;
- le serveur d'envoi est indiqué dans l'enregistrement SPF du domaine (_MAIL FROM_) ;
- le domaine est dans le champ _FROM_ de l'email.

{{< fig "images/globalcyberalliance-dmarc.en.png" "DMARC : schéma explicatif" >}}

{{% notice info %}}
Pour utiliser DMARC, DKIM et SPF doivent donc déjà être implémentés.
{{% /notice %}}

### Paramètres

|Variables|                                                                                          |
|---------|------------------------------------------------------------------------------------------|
|v        |Version du protocole : `v=DMARC1` (obligatoire)                                           |
|pct      |Pourcentage de messages à filtrer (défaut : 100)                                          |
|adkim    |Cohérence avec DKIM                                                                       |
|         |`s` = mode strict - le domaine de la signature DKIM doit exactement correspondre au _FROM_|
|         |`r` = mode relax (défaut)                                                                 |
|aspf     |Cohérence avec SPF (`s`ou `r`)                                                            |
|p        |Procédure en cas d'échec - domaine principal (obligatoire)                                |
|         |`none` = livre l'email normalement                                                        |
|         |`quarantine` = traite l'email comme suspect (score de spam, drapeau...)                   |
|         |`reject` = rejette l'email                                                                |
|sp       |Procédure en cas d'echec - sous-domaine (`none`, `quarantine` ou `reject`)                |
|ruf      |Destinataire des rapports d'échecs détaillés                                              |
|fo       |Conditions pour l'envoi d'un rapport détaillé                                             |
|         |`1` = échec de DKIM et/ou SPF                                                             |
|         |`d` = échec de DKIM                                                                       |
|         |`s` = échec de SPF                                                                        |
|         |`0`= échec de DKIM et SPF (défaut)                                                        |
|rua      |Destinataires des rapports d'échecs agrégés                                               |

Pour le mettre en place, un enregistrement DNS de type `TXT` doit être créé. Chez alwaysdata, vous le retrouverez dans l'onglet **Enregistrements DNS** du domaine :

{{< fig "images/dmarc-record.png" "Enregistrement DMARC" >}}

### Liens

- [Site officiel](https://dmarc.org/)
- [RFC 7489](https://tools.ietf.org/html/rfc7489)

-----

Schémas explicatifs repris de [Global Cyber Alliance](https://dmarc.globalcyberalliance.org/)

