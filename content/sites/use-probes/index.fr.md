+++
url = "/fr/sites/utiliser-les-sondes-de-monitoring/"
title = "Comment utiliser les sondes de monitoring"
layout = "howto"
hidden = true
tags = ["http", "serveur dédié", "serveur gold", "site"]
+++

Pour nos utilisateurs qui disposent d'un serveur dédié, il est possible de programmer des sondes de monitoring afin de vérifier qu'un site web fonctionne correctement. Si un problème est constaté par une sonde, une alerte est envoyée à notre équipe.

## Configuration

La configuration d'une sonde permet de paramétrer différentes options :

- adresse : l'adresse précise qui sera surveillée par la sonde, éventuellement via une identification HTTP ;
- notification : quand enclencher une alerte et comment contacter le responsable de l'application ;
- réponse : vérification du contenu de la réponse HTTP avec un texte (par défaut la sonde vérifie que la réponse HTTP est de type 2xx).

## Responsabilité

Les interventions enclenchées par les sondes sont facturées si la responsabilité de l'application est engagée.

Exemples (liste non-exhaustive) :

- tout problème résultant d'une utilisation incorrecte du serveur par l'utilisateur ;
- comportement anormal des applications de l'utilisateur ;
- tout problème de performances ne provenant pas d'un dysfonctionnement du serveur ou du réseau ;
- saturation des ressources du serveur par les applications de l'utilisateur ;
- tout dysfonctionnement réseau dont l'origine ne serait pas de la responsabilité d'alwaysdata.

{{% notice note %}}
Une sonde coûte 10€ HT par mois et chaque intervention déclenchée par une panne n'étant pas de notre responsabilité est facturée 100 € HT.
{{% /notice %}}
