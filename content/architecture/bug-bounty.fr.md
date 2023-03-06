+++
url = "/fr/architecture/bug-bounty"
title = "Bug Bounty"
layout = "man"
hidden = true
tags = [""]
+++

**[Présentation et règles du programme](https://www.alwaysdata.com/fr/bug-bounty/)**

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

Tout type d'attaque par déni de service (DDoS) est strictement interdit, ainsi que toute interférence entre les équipements de réseau et l'infrastructure de alwaysdata.

## Rapports invalides

La liste suivante reprend des rapports de vulnérabilité non acceptés par nos services et la raison :

* le nom des comptes est [accessible de nombreuses façons différentes]({{< ref "remote-access/misc#lister-les-comptes" >}}) ;
* les adresses en `.alwaysdata.net` sont liées aux comptes de nos clients. Leurs failles ne sont pas de notre ressort ;
	* notamment s'ils divulguent leurs informations de connexions ;
* Le répertoire `/tmp` est un [répertoire partagé]({{< ref "remote-access/misc#répertoire-tmp" >}}) ;
* `https://files.alwaysdata.com` présente des fichiers publics ;
* le lien de réinitialisation du mot de passe expire après 3 jours ou la prochaine connexion à l'interface d'administration ; 
* un utilisateur peut réutiliser un ancien mot de passe. Ce n'est pas une [bonne pratique listée par NIST](https://pages.nist.gov/800-63-3/sp800-63-3.html) ;
* la vérification de l'email (que ce soit à l'inscription, à la modification d'informations de profil ou autre) n'est qu'une pratique, non une faille ;
* les injections HTML et XSS dans dans l'interface d'administration ne cibleraient que l'attaquant et ne peuvent donc être des failles ;
* nous n'utilisons pas de CDN et nos IP sont publiques ;
* le numéro de version des logiciels que nous utilisons [ne peut être déterminant]({{< ref "security/security-upgrades" >}}).


Les rapports suivants sont aussi refusés :

- si l'attaquant est la victime ;
- si l'attaquant prend la main sur l'interface de la victime car celle-ci l'a laissé ouverte.
