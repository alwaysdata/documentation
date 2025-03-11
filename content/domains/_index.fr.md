+++
url = "/fr/domaines/"
title = "Domaines"
pre = "<i class='fas fa-fw fa-server'></i> "
weight = 16
archetype = "chapter"
tags = ["dns", "domaine"]
+++

Les domaines sont gérés dans l'onglet **Domaines** de votre interface d'administration. [Achetez](buy-a-domain), [transférez](transfer-a-domain) ou [ajoutez en gestion](add-an-external-domain) votre domaine. Revendeur [GANDI](https://www.gandi.net/fr), nous nous appuyons sur leur expérience pour vous proposer le plus d'extensions possible. [Contactez-nous](https://admin.alwaysdata.com/support/add/) si l'extension souhaitée n'est pas proposée par défaut.

{{% notice note %}}
Étant revendeur GANDI vous pouvez recevoir des mails de notre part, de la leur et des [registres](https://fr.wikipedia.org/wiki/Registre_de_noms_de_domaine) gérant les extensions de domaines prises.
{{% /notice %}}

## Ressources

- [Prix](https://www.alwaysdata.com/fr/domaines/#main)
- [Acheter un domaine](buy-a-domain)
- [Transférer un domaine](transfer-a-domain)
- [Ajouter un domaine externe](add-an-external-domain)
* [Renouveler un domaine](renew-a-domain)
* [Dates limites](deadlines)
* [Changer de propriétaire](change-of-owner)
* [Mettre à jour les informations du propriétaire du domaine](update-owner-details)
* [Détruire un domaine](wipe-a-domain)
* [Mettre en place DNSSEC](dnssec)
- [Déplacer un domaine](move-a-domain)
- [Déléguer un sous-domaine](delegate-a-subdomain)
- [Transfert sortant](outgoing-transfer)
* [API - Domaine](https://api.alwaysdata.com/v1/domain/doc/)
* [Problèmes fréquents](./troubleshooting)

{{% notice warning %}}
Officiellement invalides (d'après [IDNA2008](http://unicode.org/faq/idn.html)), nous ne supportons pas les **emojis** dans un nom de domaine. Notre infrastructure utilise la [bibliothèque Python `idna`](https://github.com/kjd/idna), qui [respecte impérativement](https://github.com/kjd/idna/issues/18) IDNA2008 à ce stade.
{{% /notice %}}

## Gestion DNS

Vous pouvez aussi gérer vos DNS, via un système classique, directement dans l'onglet **Domaines**.

Pour utiliser nos serveurs DNS, indiquez chez votre registrar `dns1.alwaysdata.com` et `dns2.alwaysdata.com`.


- [API - Enregistrement DNS](https://api.alwaysdata.com/v1/record/doc/)
- [Ajouter un enregistrement DNS](add-dns)
- [Importer un fichier de zone](add-dns#importer-un-fichier-de-zone)
- [Ajouter des enregistrements DNS avec CSV](create-dns-records-using-csv)
- [Utiliser des MX externes](use-external-mx)
- [Changer de serveurs DNS](change-of-dns-servers)
- [Ajouter un enregistrement SRV](add-srv-record)
- [Ajouter un enregistrement CAA](add-caa-record)
- [Supprimer un enregistrement DNS](delete-dns)

{{% notice note %}}
L'[enregistrement SOA](https://fr.wikipedia.org/wiki/SOA_Resource_Record) comprend un numéro de série de 32 bits (compris entre 1 et 4294967295). Nous ne suivons pas la *convention* de le définir avec un format de date qui vient d'une période où les fichiers de zone étaient édités à la main. Le fait de ne pas suivre cette convention *ne doit pas* être considéré comme une erreur.
{{% /notice %}}
