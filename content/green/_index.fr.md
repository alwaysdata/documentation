+++
url = "/fr/green-hosting/"
title = "Éco-responsabilité"
pre = "<i class='fas fa-fw fa-leaf'></i> "
weight = 55
tags = ["green"]
+++

## Organisation

Il est de notre responsabilité à tous d'effectuer les efforts possibles dans le cadre de notre mission afin de limiter l'impact de notre activité dans les émissions néfastes pour notre planète.

Ainsi, notre entreprise a intégré les éléments suivant dans son fonctionnement quotidien :

  * **Télétravail à 100%** : notre équipe travaille depuis plusieurs années en télétravail, permettant ainsi de limiter toutes les émissions liées au transport (à l'exception des déplacements en datacenters) ;
  * **Gestion d'un stock minimum** : ajouter des serveurs en grandes quantités juste pour faire plus de chiffre ne nous intéresse pas, nous anticipons un stock raisonnable, en fonction du rythme constaté des commandes effectuées les derniers mois ;
  * **Conseil approprié** : nous attachons de l'importance à apporter un conseil personnalisé à nos utilisateurs afin qu'ils s'orientent vers l'offre la plus adaptée à leur véritable besoin et donc vers une consommation maîtrisée.

## Compensation

_Dernière mise à jour : 28 janvier 2025_

Chaque année, nous souhaitons **compenser à hauteur de 200%** nos émissions de GES (gaz à effet de serre). Bien que notre impact soit extrêment compliqué à déterminer de manière précise, nous voulons détailler ici en toute transparence notre méthode de calcul pour déterminer le budget alloué à cette compensation.

### Données et hypothèses

Afin de simplifier la méthode, mais également de compenser dans le bon sens, certaines données sont margées. Nous précisons cela dans le tableau suivant.


| Donnée | Détails | Valeur 2024 |
|--------|---------|------------:|
| Nombre de serveurs | Ensemble des appareils consommateurs (serveurs, routeurs, hyperviseurs, etc.) achetés et intégrés à notre infrastructure dans le courant de l'année. | 39 |
| Puissance apparente (kVA)| Puissance souscrite auprès des datacenters sur l'ensemble de notre infrastructure. Marge : le calcul utilise donc la puissance maximale souscrite plutôt que la consommation réelle. | 31 kVA |
| Facteur de puissance (cos φ) | En général, on prend 0.8 comme valeur moyenne pour des installations standards. Marge : même si la plupart des serveurs modernes ont un facteur supérieur à 0.9 (s'approchant effectivement du Power Factor [affiché par nos alimentations](https://store.supermicro.com/us_en/pub/media/wysiwyg/productspecs/PWS-606P-1R/PWS-606P-1R_quick_spec.pdf)), nous choisissons de rester sur cette valeur plus pessimiste. | 0.8 |
| Durée d'utilisation annuelle | Temps total de consommation des serveurs. Marge : hypothèse la plus énergivore, donc 100% du temps. | 8760 heures |
|PUE|Efficacité énergétique moyenne de [nos datacenters partenaires](https://sustainability.equinix.com/environment/operational-sustainability/).|1.42|
| Facteur d'émission | Prenons la moyenne en France. Dernière valeur 2024 : source [RTE-france.com](https://www.rte-france.com/actualites/production-electricite-francaise-atteint-plus-haut-niveau-depuis-5-ans). | 21,3 gCO₂eq/kWh |
| Consommation de production d'un serveur | Estimation de la consommation engendrée lors de la production d'un serveur : voir [Boavizta](https://boavizta.org/blog/empreinte-de-la-fabrication-d-un-serveur). Marge : information très complexe à trouver, qui dépend de nombreux facteurs. Les valeurs se situent toujours sous l'entier. On arrondit à l'entier supérieur. | 1 tCO₂eq |

### Calcul

```python
# Données pour le calcul
serveurs = 39           # Serveurs arrivés en 2024
kVA = 31                # Consommation en kVA
cos_phi = 0.8           # Facteur de puissance moyen
heures_par_an = 8760    # Nombre d'heures dans une année
pue = 1.42              # Efficacité énergétique du DC
facteur_emission = 21.3 # Facteur d'émission en gCO₂eq/kWh
emission_production = 1 # Émission de la production d'un serveur en tCO₂eq

# Conversion de kVA en kW
kW = kVA * cos_phi

# Calcul de la consommation annuelle en kWh
kWh_annuels = kW * heures_par_an

# Calcul des émissions de consommation totale en tCO₂eq
emissions_consommation = (kWh_annuels * facteur_emission * pue) / 1000 / 1000  # Conversion de g à tonnes

# Calcul des émissions liées à la production des serveurs entrant en 2024
emissions_production = emission_production * serveurs

# Calcul des émissions totales (consommation et production)
emissions = emissions_consommation + emissions_production

print(kWh_annuels, emissions)
```

Le résultat :

- Consommation calculée pour l'année 2024 : **217 248 kWh** ;
- Émissions correspondantes estimées : **45.57 tCO₂eq** ;
- Compensation nécessaire (200%) : **92 tonnes de CO₂**.

Nous avons fait le choix de [Gold Standard](https://www.goldstandard.org/) pour acter notre compensation.
Voir notre [certificat](https://files.alwaysdata.com/certifications/2025_GOLDSTANDARD_CERTIFICATE.zip).

