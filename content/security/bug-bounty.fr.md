+++
url = "/fr/sécurité/bug-bounty"
title = "Bug Bounty"
layout = "man"
hidden = true
tags = [""]
+++

## Règles

Nous croyons qu'aucune technologie n'est parfaite et que travailler avec des chercheurs en sécurité compétents est crucial pour identifier les faiblesses de notre technologie. Si vous pensez avoir trouvé un bug de sécurité dans notre service, nous sommes heureux de travailler avec vous pour résoudre le problème rapidement et vous assurer que votre découverte est justement récompensée.

Informez-nous dès que possible après la découverte d'un problème de sécurité potentiel, et nous ferons tout notre possible pour résoudre rapidement le problème. Accordez-nous un délai raisonnable pour résoudre le problème avant toute divulgation au public ou à un tiers.

Testez les failles uniquement sur des comptes que vous possédez ou des comptes pour lesquels vous avez l'autorisation du titulaire du compte pour effectuer des tests.

N'utilisez jamais une découverte pour compromettre/exfiltrer des données ou pivoter vers d'autres systèmes. Utilisez une preuve de concept uniquement pour démontrer un problème.

Si des informations sensibles — telles que des informations personnelles, des identifiants, etc. — sont accessibles dans le cadre d'une faille, elles ne doivent pas être sauvegardées, stockées, transférées ou autrement consultées après la découverte initiale. Toutes les informations sensibles doivent être retournées à *alwaysdata* et aucune copie de ces informations ne doit être conservée.

**Tout type d'attaque par déni de service (DDoS) est strictement interdit, ainsi que toute interférence avec l'équipement réseau et l'infrastructure d'*alwaysdata*.**

Ne tentez pas d'exploiter outre mesure le bug et d'accéder à des données internes pour d'autres failles. Nous déterminerons la gravité et la récompense en conséquence.

Si vous trouvez plusieurs fois la même faille, veuillez créer un seul rapport et éventuellement utiliser des commentaires. Vous serez récompensé en fonction de vos découvertes.

**La violation de l'une de ces règles peut entraîner l'inéligibilité à une prime et/ou le retrait du programme.**

### Considérations juridiques

Nous n'entamerons pas d'action civile ni ne porterons plainte auprès des forces de l'ordre pour des violations accidentelles et de bonne foi de cette politique. Nous considérons les activités menées conformémentplainte contre vous pour avoir contourné les mesures technologiques que nous avons utilisées pour protéger les applications dans le cadre de ce programme.

Si une action en justice est engagée par un tiers contre vous et que vous avez respecté cette politique de sécurité, nous prendrons des mesures pour faire savoir que vos actions ont été menées conformément à cette politique.

Il est également important de noter que nous n'intenterons pas d'action en justice contre vous simplement pour nous avoir fourni une preuve de concept de la faille de sécurité. Veuillez suivre les directives énumérées dans la section [Preuves de concept](#preuves-de-concept) ci-dessous pour vous assurer que votre preuve de concept est suffisamment détaillée pour démontrer le problème et qu'elle respecte toujours les directives énumérées ci-dessus.

## Périmètre et tests

Le périmètre de recherche inclus seulement les adresses suivantes :

```txt
- https://www.alwaysdata.com
- https://admin.alwaysdata.com
- https://webmail.alwaysdata.com
- https://api.alwaysdata.com
- ssh://ssh-[accountid].alwaysdata.net
- https://webdav-[accountid].alwaysdata.net
- ftp://ftp-[accountid].alwaysdata.net
```

Les failles signalées sur d'autres services ou applications ne seront pas prises en compte.

Fournissez votre adresse IP dans le rapport de bug. Nous garderons ces données privées et les utiliserons uniquement pour examiner les journaux liés à votre activité de test.

Incluez un en-tête HTTP personnalisé dans tout votre trafic. Burp et d'autres proxys permettent l'ajout automatique facile d'en-têtes à toutes les demandes sortantes. Signalez-nous quel en-tête vous avez défini pour que nous puissions l'identifier facilement. Par exemple :

* Un en-tête qui inclut votre nom d'utilisateur : `X-Bug-Bounty:Hacker-[accountid]`
* Un en-tête qui inclut un drapeau unique ou identifiable `X-Bug-Bounty:ID-[sha256-flag]`

Lors du test d'un bug, veuillez également garder à l'esprit :

* Utilisez des comptes de test pour ne pas compromettre involontairement la confidentialité de nos utilisateurs ;
* Lorsque vous tentez de démontrer des permissions root avec les primitives suivantes dans un processus vulnérable, veuillez utiliser les commandes suivantes :
	- Lire : `cat /proc/1/maps`
	- Écrire : `touch /root/<accountid>`
	- Exécuter : `id, hostname, pwd`

**Minimisez le chaos.** Respectez les règles du programme en tout temps. N'utilisez pas de scanners/outils automatisés — ces outils incluent des charges utiles qui pourraient déclencher des changements d'état ou endommager les systèmes de production et/ou les données.

**Avant de causer des dommages ou des dommages potentiels : arrêtez-vous, signalez ce que vous avez trouvé et demandez une autorisation de test supplémentaire.**

Les rapports sur les failles sont examinés par nos analystes de sécurité. Si vous devez chiffrer la charge utile, nous vous recommandons fortement d'utiliser la [clé publique GPG 0xDFDD2138A363986B](https://www.alwaysdata.com/static/0xDFDD2138A363986B.pub.asc). Les rapports doivent être soumis en utilisant notre **[interface de suivi de bugs](https://security.alwaysdata.com/)**.

*Tout rapport envoyé par email ou par notre interface de support sera rejeté.*

Notre analyse est toujours basée sur l'exploitation du pire des cas de la faille, tout comme la récompense que nous payons.

- Temps de première réponse : 2 jours ouvrables ou moins ;
- Temps de triage : 3 jours ouvrables ou moins.

Nous travaillons continuellement à faire évoluer notre programme de bug bounty. Nous visons à répondre aux soumissions entrantes aussi rapidement que possible et faisons tout notre possible pour que les bugs soient corrigés dans les 10 jours suivant leur triage. Les récompenses seront payées lorsque le correctif sera appliqué.

## Récompenses

Nous offrons des récompenses en espèces. Notre récompense minimale est de **50 €**.

Ce qui suit est simplement un indicateur de récompenses, mais ne reflète pas ce que pourrait être la décision finale. *Nous valorisons les rapports de qualité et les preuves de concept.*

Qualification|Exemples de failles (liste non exhaustive)|Score CVSS|Prime
---|---|---|---
Aucune||N/A|Pas de prime
Faible|Accéder à des parties restreintes d'éléments tiers ou de leurs plugins (blog, forum, etc.)|0.1 - 3.9|Jusqu'à 50 €
Moyenne|Accéder aux permissions/configurations sur les comptes des utilisateurs sans accéder à leur contenu|4.0 - 6.9|Jusqu'à 200 €
Élevée|Accéder aux données/informations des clients|7.0 - 8.9|Jusqu'à 350 €
Critique|Accéder en mode lecture ou lecture-écriture à l'architecture de la plateforme centrale|9.0 - 10.0|Jusqu'à 500 €

### Éligibilité

Nous sommes heureux de remercier tous ceux qui soumettent des rapports valides qui nous aident à améliorer la sécurité de *alwaysdata*. Cependant, seuls ceux qui répondent aux exigences d'éligibilité suivantes peuvent recevoir une récompense monétaire :

- Vous devez être le premier à signaler une faille ;
- La faille doit être qualifiée ;
- Toute faille trouvée doit être signalée au plus tard 24 heures après sa découverte et exclusivement via notre interface de support ;
- Vous devez envoyer une description textuelle claire du rapport ainsi que les étapes pour reproduire le problème en utilisant des outils Linux standard. Nous pouvons vous demander d'envoyer une preuve de concept qui reproduit la faille (par exemple, un script shell) ;
- Vous devez éviter les tests qui pourraient causer la dégradation ou l'interruption de notre service (s'abstenir d'utiliser des outils automatisés et limiter les demandes par seconde) ;
- Vous ne devez pas divulguer, manipuler ou détruire les données des utilisateurs ;
- Vous ne devez pas être un ancien employé (depuis 1 an) ou un employé actuel de *alwaysdata*, ou l'un de ses sous-traitants.

Aucune divulgation de faille, y compris partielle, n'est autorisée avant que le correctif soit appliqué et que nous acceptions la publication.

## Preuves de concept

- XSS : Pour XSS, un simple `alert(document.domain)` devrait suffire ;
- RCE : Veuillez exécuter uniquement du code inoffensif. Veuillez vous référer à la section [Test](#périmètre-et-tests) ;
- SQLi : Signalez-le dès que vous avez une erreur SQL qui indique une injection SQL ou que vous êtes en mesure de divulguer le numéro de version du serveur SQL ;
- Redirection non valide : Définissez le point de terminaison de redirection sur `http://example.com` *si possible* ;
- CSRF : Joignez un fichier pour démontrer le problème ou collez le code dans un bloc de code dans votre rapport ;
- SSRF : Ne vous amusez pas sur les réseaux internes. Signalez dès que vous pensez avoir un problème potentiel de SSRF et nous l'examinerons pour vous ;
- LFI : Il en va de même ici — veuillez ne pas aller à l'encontre des directives énumérées dans la section [Règles du Programme](#règles). Nous enquêterons sur les rapports LFI dans un environnement de développement pour nous assurer de leur validité.

## Failles qualifiées

- Injection SQL ;
- Trouver un identifiant utilisateur numérique indésirable (même le vôtre) dans les vues, qui vous permet de forger des demandes ;
- Exposition d'informations sensibles des membres[^1] ;
- Exposition d'outils internes ;
- Exposition de fichiers de configuration ou de secrets ; 
- Problèmes de parcours de répertoire ;
- Accès et manipulation de fichiers locaux (LFI, RFI, XXE, SSRF, XSPA) ;
- Divulgation de fichiers locaux (LFD) ;
- Injections de code (HTML, JS, SQL, PHP, ...) ;
- Cross-Site Scripting (XSS) ;
- Falsification de requête inter-site (CSRF) avec un véritable impact sur la sécurité ;
- Falsification de requête côté serveur (SSRF) ;
- Redirection ouverte ;
- Exécution de code à distance (RCE) ;
- Authentification & gestion de session défectueuses ;
- Références d'objet direct non sécurisées ;
- CORS avec un véritable impact sur la sécurité ;
- Absence de drapeaux « sécurisés » sur les cookies d'authentification ;
- Problèmes de contrôle d'accès ;
- Élévation de privilèges horizontale et verticale.

## Rapports invalides

La liste suivante comprend les rapports de vulnérabilité non acceptés par nos services :

- Toute faille hypothétique ou meilleures pratiques sans POC exploitable ;
- CSRF de connexion, déconnexion, non authentifié ou de faible valeur ;
- Absence de en-têtes HTTP liés à la sécurité qui ne mènent pas directement à une faille ;
- Présence/absence de enregistrements SPF/DMARC ;
- Rapports sur des chiffrements SSL/TLS non sécurisés (à moins que vous ayez un POC fonctionnel) ;
- Attaques par force brute/réutilisation de mot de passe ;
- Attaques d'énumération d'utilisateurs ;
- Attaques de numéros de téléphone premium ;
- Divulgation de fichiers ou répertoires publics connus (par exemple, robots.txt) ;
- Actions automatisées massives sur la plateforme via des robots/crawling (sauf si cela recueille des informations sensibles sur les membres) ;
- « Self » XSS ;
- Absence de drapeaux de cookies ;
- Meilleures pratiques SSL/TLS ;
- Avertissements de contenu mixte ;
- Attaques par déni de service ;
- XSS sur "HTTP Host Header" ;
- Détournement de clic/UI ;
- Divulgation de version de logiciel ;
- Traces de pile ou divulgation de chemin ; 
- Tentatives d'ingénierie physique ou sociale ;
- Failles divulguées récemment (même jour) ;
- Présence de l'attribut autocomplete sur les formulaires web ;
- Failles affectant les navigateurs ou plateformes obsolètes ;
- Problèmes nécessitant un accès physique à l'ordinateur/dispositif/interface de la victime (par exemple si la victime l'a laissé ouvert ou si l'attaquant est la victime) ;
- Déconnexion et autres instances de CSRF de faible gravité ;
- Rapports provenant de scanners automatiques de vulnérabilités web (Acunetix, Vega, etc.) qui n'ont pas été validés ;
- Rapports concernant des applications tierces que nous fournissons à nos clients mais qui ne font pas directement partie de notre système (phpMyAdmin, Roundcube Webmail, etc.), si la faille n'expose pas directement les données et/ou métadonnées des clients ;
- Rapports sur des applications tierces que nous fournissons à nos clients mais qui ne font pas partie directement de notre système (phpMyAdmin, Webmail Roundcube, etc.), à moins que la faille exposant les données et/ou métadonnées des utilisateurs ne soit corrigée depuis plus d'un mois dans la version publiée et que nous ne soyons pas à jour ;
- Rapports concernant des failles connues dans des sous-composants (par exemple, OpenSSH) qui viennent juste d'être divulguées. Nous visons à appliquer des correctifs de sécurité en 30 jours ou moins, donc les rapports concernant des failles récemment divulguées ne sont pas pertinents ;
- Rapports concernant des sites ou applications hébergés par notre client, sauf si la faille est due à notre plateforme en conjonction avec l'application du client ;
- Rapports concernant des failles provenant d'applications tierces que nous utilisons qui sont soit inconnues, non corrigées ou corrigées dans des versions non publiées.

Notez que :

* le nom des comptes est [accessible de nombreuses façons différentes]({{< ref "remote-access/misc#lister-les-comptes" >}}) ;
* les adresses en `.alwaysdata.net` sont liées aux comptes de nos clients. Leurs failles ne sont pas de notre ressort ;
	* notamment s'ils divulguent leurs informations de connexions ;
* Le répertoire `/tmp` est un [répertoire partagé]({{< ref "remote-access/misc#répertoire-tmp" >}}) ;
* `https://files.alwaysdata.com` et `https://share.alwaysdata.com` présentent des fichiers publics ;
* le lien de réinitialisation du mot de passe expire après 3 jours ou la prochaine connexion à l'interface d'administration ; 
* un utilisateur peut réutiliser un ancien mot de passe. Ce n'est pas une [bonne pratique listée par NIST](https://pages.nist.gov/800-63-3/sp800-63-3.html) ;
* la vérification de l'email (que ce soit à l'inscription, à la modification d'informations de profil ou autre) n'est qu'une pratique, non une faille ;
* les injections HTML et XSS dans dans l'interface d'administration ne cibleraient que l'attaquant et ne peuvent donc être des failles ;
* nous n'utilisons pas de CDN et nos IP sont publiques ;
* le numéro de version des logiciels que nous utilisons [ne peut être déterminant]({{< ref "security/security-upgrades" >}}).

[^1]: nom, numéro de téléphone, email, adresse physique, carte d'identité physique
