+++
url = "/fr/domaines/transférer-un-domaine/"
title = "Comment transférer un domaine"
menuTitle = "Transférer un domaine"
layout = "howto"
weight = 2
tags = ["domaine"]
+++

Opération [payante](https://www.alwaysdata.com/fr/domaines/#main), elle permet de transférer la gestion _administrative_ de son domaine chez alwaysdata.

## Préparation en amont

Avant de lancer l'opération le propriétaire doit :

- enlever la protection contre les transferts ;
- vérifier que les informations du propriétaire sont correctes et visibles dans le `whois` [^1] ;
- obtenir le code d'autorisation ;
- récupérer une sauvegarde de ses données (notamment les emails).

Un transfert ne peut avoir lieu dans les 60 jours suivant sa création ou un précédent transfert.

{{% notice tip %}}
Le transfert de la [gestion technique]({{< ref "domains/add-an-external-domain" >}}) peut être effectué avant pour éviter d'être embêté par le temps pris par le transfert administratif.
{{% /notice %}}

## Lancement du transfert

1.  Dans votre interface d'administration, allez dans **Domaines > Ajouter un domaine** ;
    
    {{< fig "images/admin-panel_domain-list.fr.png" "Interface d'administration : liste des domaines" >}}
    
    Si le domaine a déjà été [ajouté]({{< ref "domains/add-an-external-domain" >}}) à votre interface alwaysdata, vous pouvez le transférer via **Domaines > Détails** du domaine concerné **> Transférer**.
    
    {{< fig "images/admin-panel_transfer-domain.fr.png" "Interface d'administration : Transfert d'un domaine déjà en gestion" >}}

2.  Renseignez les noms de domaines que vous souhaitez acheter ;
   
    {{< fig "images/admin-panel_add-domain-1.fr.png" "Interface d'administration : étape 1" >}}

{{% notice info %}}
Saisissez uniquement le domaine, sans le sous-domaine.
Par exemple : `exemple.org` et non `www.exemple.org`.
{{% /notice %}}

3.  Choisissez de le **transférer** ;
    {{< fig "images/admin-panel_add-domain-2.fr.png" "Interface d'administration : étape 2" >}}

4. 
    - Indiquez le _code d'authorisation_ si l'extension le demande ;
    - Choisissez d'utiliser ou non nos serveurs DNS : cela entraîne le transfert de la gestion technique du domaine chez alwaysdata ;
    - Et entrez les informations du contact propriétaire. Ces informations dépendent de l'extension prise.
   
    {{< fig "images/admin-panel_add-domain-3.fr.png" "Interface d'administration : étape 3" >}}

{{% notice warning %}}
Un email de validation est envoyé pour un certain nombre d'extensions. Sans validation, le transfert est abandonné.
{{% /notice %}}

{{% notice note %}}
Un transfert prend en moyenne 6 à 8 jours, cela peut être accéléré en contactant votre prestataire actuel.
{{% /notice %}}

## Préparation du domaine

Durant ce temps, le domaine sera ajouté à votre interface d'administration en temps que _Domaine externe_ avec une opération en cours. Vous pourrez préparer nos serveurs en :

- mettant à jour vos [enregistrements DNS]({{< ref "domains/add-dns" >}}) si vous utilisez d'autres serveurs pour certains services ;
- créant les [adresses emails]({{< ref "e-mails/create-an-e-mail-address" >}}).

Concernant le site internet, plusieurs choix sont possibles :

- ajouter les adresses avant qu'elles pointent sur nos serveurs. Dans ce cas, il peut y avoir un délai concernant la génération des [certificats SSL Let's Encrypt]({{< ref "security/ssl-tls/lets-encrypt" >}}) ;
- préparer le site sur une autre adresse et attendre le dernier moment pour ajouter les adresses au site. Il peut alors se passer un temps où le site n'est plus accessible.

---

## Liens

- [Transferts : code d'erreurs]({{< ref "/domains/troubleshooting" >}}#transfert)

[^1]: Plus d'informations sur [whois](https://fr.wikipedia.org/wiki/Whois)
