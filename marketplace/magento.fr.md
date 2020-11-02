+++
url = "/fr/applithèque/magento/"
title = "Magento"
layout = "man"
tags = ["magento"]
+++

## Installation

Magento 2.4, ayant [besoin d'Elasticsearch](https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements-tech.html), n'est *pas compatible* avec les offres en Cloud public.

Magento 2.3 fait partie de nos applications auto-installables via l'interface d'administration : **Web > Sites > Installer une application**.

Il est possible de l'installer par soi-même en suivant leur [documentation](https://magento.com/tech-resources/download).

## Recommandations

Il est important de suivre ces quelques instructions d'usage pour éviter toute infection :

- mettez à jour régulièrement Magento et ses plugins ;
- informez-vous sur les rapports de bugs et failles de sécurité des plugins avant de les installer ;
- mettez en place le [profil complet]({{<ref "sites/use-waf#profils-disponibles">}}) de notre WAF ;
- supprimez les thèmes et plugins inactifs ;
- personnalisez le préfixe du nom des tables de votre base de données ;
- supprimez le fichier readme.txt à la racine de votre application ;
- supprimez les utilisateurs créés par défaut ;
- d'[autres règles]({{<ref "sites/clean-up-a-site" >}}#3-supprimer-les-vecteurs-dinfection).
