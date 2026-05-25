---
permalink: /fr/docs/domaines/
title: Domaines
eleventyNavigation:
  key: Domaines
  order: 3
---

Les domaines sont gérés dans l'onglet **Domaines** de votre interface d'administration. [Achetez](/fr/docs/domaines/acheter-un-domaine/), [transférez](/fr/docs/domaines/transferer-un-domaine/) ou [ajoutez en gestion](/fr/docs/domaines/ajouter-un-domaine-externe/) votre domaine. Revendeur [GANDI](https://www.gandi.net/fr), nous nous appuyons sur leur expérience pour vous proposer le plus d'extensions possible. [Contactez-nous](https://admin.alwaysdata.com/support/add/) si l'extension souhaitée n'est pas proposée par défaut.

> [!NOTE]
> Étant revendeur GANDI vous pouvez recevoir des mails de notre part, de la leur et des [registres](https://fr.wikipedia.org/wiki/Registre_de_noms_de_domaine) gérant les extensions de domaines prises.


## Ressources

- [Prix](https://www.alwaysdata.com/fr/domaines/#main)
- [Acheter un domaine](/fr/docs/domaines/acheter-un-domaine/)
- [Transférer un domaine](/fr/docs/domaines/transferer-un-domaine/)
- [Ajouter un domaine externe](/fr/docs/domaines/ajouter-un-domaine-externe/)
* [Renouveler un domaine](/fr/docs/domaines/renouveler-un-domaine/)
* [Dates limites](/fr/docs/domaines/dates-limites/)
* [Changer de propriétaire](/fr/docs/domaines/changer-de-proprietaire/)
* [Mettre à jour les informations du propriétaire du domaine](/fr/docs/domaines/mettre-a-jour-informations-proprietaire/)
* [Détruire un domaine](/fr/docs/domaines/detruire-un-domaine/)
* [Mettre en place DNSSEC](/fr/docs/domaines/dnssec/)
- [Déplacer un domaine](/fr/docs/domaines/deplacer-un-domaine/)
- [Déléguer un sous-domaine](/fr/docs/domaines/deleguer-un-sous-domaine/)
- [Transfert sortant](/fr/docs/domaines/transfert-sortant/)
* [API - Domaine](https://api.alwaysdata.com/v1/domain/doc/)
* [Problèmes fréquents](/fr/docs/domaines/problemes-frequents/)

> [!WARNING] Attention
> Officiellement invalides (d'après [IDNA2008](http://unicode.org/faq/idn.html)), nous ne supportons pas les **emojis** dans un nom de domaine. Notre infrastructure utilise la [bibliothèque Python `idna`](https://github.com/kjd/idna), qui [respecte impérativement](https://github.com/kjd/idna/issues/18) IDNA2008 à ce stade.


## Gestion DNS

Vous pouvez aussi gérer vos DNS, via un système classique, directement dans l'onglet **Domaines**.

Pour utiliser nos serveurs DNS, indiquez chez votre registrar `dns1.alwaysdata.com` et `dns2.alwaysdata.com`.


- [API - Enregistrement DNS](https://api.alwaysdata.com/v1/record/doc/)
- [Ajouter un enregistrement DNS](/fr/docs/domaines/ajouter-un-enregistrement-dns/)
- [Importer un fichier de zone](/fr/docs/domaines/ajouter-un-enregistrement-dns/#importer-un-fichier-de-zone)
- [Ajouter des enregistrements DNS avec CSV](/fr/docs/domaines/creer-des-enregistrements-DNS-via-csv/)
- [Utiliser des MX externes](/fr/docs/domaines/utiliser-des-mx-externes/)
- [Changer de serveurs DNS](/fr/docs/domaines/changer-de-serveurs-dns/)
- [Ajouter un enregistrement SRV](/fr/docs/domaines/ajouter-un-enregistrement-srv/)
- [Ajouter un enregistrement CAA](/fr/docs/domaines/ajouter-un-enregistrement-caa/)
- [Supprimer un enregistrement DNS](/fr/docs/domaines/supprimer-un-enregistrement-dns/)

> [!NOTE]
> L'[enregistrement SOA](https://fr.wikipedia.org/wiki/SOA_Resource_Record) comprend un numéro de série de 32 bits (compris entre 1 et 4294967295). Nous ne suivons pas la *convention* de le définir avec un format de date qui vient d'une période où les fichiers de zone étaient édités à la main. Le fait de ne pas suivre cette convention *ne doit pas* être considéré comme une erreur.
