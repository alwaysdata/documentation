+++
url = "/fr/domaines/problemes-frequents/"
title = "Domaines - Problèmes fréquents"
tags = ["dépannage", "domaine"]
+++

## Transfert
### "2304 : Object status prohibits operation", "Transfer Prohibited from Registry Request" ou "2308 : Data management policy violation (domain [example.org] has invalid status (clientTransferProhibited))"

Domaine protégé contre les transferts un `whois` [^1] renverra :

{{% notice %}}
Domain Status: clientTransferProhibited
{{% /notice %}}

La protection doit être supprimée chez le registrar actuel.

### "Invalid Authorization Code"
Vérifiez qu'aucune faute de frappe n'a été effectuée en reprenant le code d'autorisation ou régénérez un code d'autorisation.

{{% notice info %}}
Pour le régénérer lors d'un transfert sortant contactez notre [support](https://admin.alwaysdata.com/support/add).
{{% /notice %}}

### "Registry error - 2308 : Data management policy violation (domain expired)"
Domaine expiré, renouvelez-le avant de relancer le transfert.

### "Transfer Refused by Registrar (Queue Message #[id])"
Le prestataire actuel du domaine a bloqué le transfert. Contactez-les pour en connaître la cause avant de relancer le transfert.

## Changement de propriétaire
### "Max waiting duration for owner responses (15 days) reached"
Un changement de propriétaire doit être accepté par l'ancien et le nouveau propriétaire dans un délai de 15 jours. Vérifiez les adresses email des deux contacts.

## Domaine suspendu
De nombreux registres vérifient les adresses email des propriétaires de domaine pour s'assurer de leur bon fonctionnement. Pour les domaines gérés par l'[ICANN](https://www.icann.org/), notamment, les propriétaires ont 15 jours pour valider l'email.

Un `whois` indiquera le message suivant : `Domain Status: clientHold`

Dans l'interface d'administration alwaysdata, le message suivant - onglet **Domaines > Détails de [example.org] - 🔎 > Statut** - vous permettra de renvoyer l'email :

```
Ce domaine a été suspendu par l'ICANN car son propriétaire n'a pas confirmé son adresse email dans les 15 jours suivant sa création, son transfert ou sa cession.
```

Si vous n'êtes pas sûr de l'adresse email, vous pouvez la changer dans le détail du contact propriétaire, menu **Domaines > Détails de [example.org] - 🔎 > MODIFIER** (en face de **Propriétaire**).

## Liens

- [Glossaire des codes de statut EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en)


[^1]: Plus d'informations sur [whois](https://fr.wikipedia.org/wiki/Whois)
