+++
url = "/en/green-hosting/"
title = "Green Hosting"
pre = "<i class='fas fa-fw fa-leaf'></i> "
weight = 55
tags = ["green"]
+++

## Organization

It is everyone's responsibility to make every possible effort within our mission to limit the impact of our activity on harmful emissions for our planet.

Thus, our company has integrated the following elements into its daily operations:

  * **100% Remote Work**: Our team has been working remotely for several years, thereby reducing all transport-related emissions (except for data center visits)
  * **Minimal Stock Management**: Adding large quantities of servers just to boost sales is not our goal. We anticipate a reasonable   stock based on the order trends observed over recent months
  * **Appropriate Guidance**: We prioritize providing personalized advice to our users, helping them choose the most suitable offer for their actual needs, thus promoting responsible consumption

## Carbon offsetting

_Last updated: January 28, 2025_

Every year, we aim to offset 200% of our greenhouse gas (GHG) emissions. Although accurately determining our impact is extremely complex, we want to provide full transparency regarding our calculation method to allocate the budget for this compensation.

### Data and Assumptions

To simplify the method while ensuring appropriate compensation, some data points are estimated with a margin. These details are outlined in the following table.

| Data | Details | 2024 Value |
|--------|---------|------------:|
| Number of Servers | Total power-consuming devices (servers, routers, hypervisors, etc.) purchased and integrated into our infrastructure during the year. | 39 |
| Apparent Power (kVA) | Subscribed power across all our data centers. Margin: the calculation uses the maximum subscribed power instead of actual consumption. | 31 kVA |
| Power Factor (cos φ) | A standard average value of 0.8 is used. Margin: while most modern servers have a power factor above 0.9 (close to the Power Factor [displayed by our power supplies](https://store.supermicro.com/us_en/pub/media/wysiwyg/productspecs/PWS-606P-1R/PWS-606P-1R_quick_spec.pdf)), we choose to remain conservative with this value. | 0.8 |
| Annual Usage Duration | Total server operating time. Margin: the most energy-intensive assumption, i.e., 100% uptime. | 8760 hours |
|PUE|Average energy efficiency of [our partner data centers](https://sustainability.equinix.com/environment/operational-sustainability/).|1.42|
| Emission Factor | Using the national average for France. Latest 2024 value: source [RTE-france.com](https://www.rte-france.com/actualites/production-electricite-francaise-atteint-plus-haut-niveau-depuis-5-ans). | 21,3 gCO₂eq/kWh |
| Server Production Emissions | Estimated emissions from manufacturing a server: see [Boavizta](https://boavizta.org/blog/empreinte-de-la-fabrication-d-un-serveur). Margin: a highly complex value dependent on numerous factors. The values are always slightly below a whole number, so we round up. | 1 tCO₂eq |

### Calcul

```python
# Data for calculation
servers = 39            # Servers added in 2024
kVA = 31                # Power consumption in kVA
cos_phi = 0.8           # Average power factor
hours_per_year = 8760   # Number of hours in a year
pue = 1.42              # Data center energy efficiency
emission_factor = 21.3  # Emission factor in gCO₂eq/kWh
production_emission = 1 # Emission per server production in tCO₂eq

# Convert kVA to kW
kW = kVA * cos_phi

# Annual consumption in kWh
annual_kWh = kW * hours_per_year

# Total consumption emissions in tCO₂eq
consumption_emissions = (annual_kWh * emission_factor * pue) / 1000 / 1000  # Convert g to tonnes

# Production emissions for servers added in 2024
production_emissions = production_emission * servers

# Total emissions (consumption + production)
total_emissions = consumption_emissions + production_emissions

print(annual_kWh, total_emissions)
```

The result:

  * Estimated annual consumption for 2024: **217,248 kWh**
  * Estimated corresponding emissions: **45.57 tCO₂eq**
  * Required compensation (200%): **92 tons of CO₂**

We have chosen [Gold Standard](https://www.goldstandard.org/) to certify our offset efforts.
See our [certificate](https://files.alwaysdata.com/certifications/2025_GOLDSTANDARD_CERTIFICATE.zip).
