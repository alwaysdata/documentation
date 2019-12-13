+++
url = "/fr/plateforme/bases-de-donnees/postgresql/"
title = "PostgreSQL"
+++

## Connexion

| | |
|-------------------|---------------------------------------------------------------------------|
| **Serveur**       | postgresql-[compte].alwaysdata.net                                        |
| **Port**          | 5432 (Port MySQL par défaut)                                              |
| **Interface web** | [https://phppgadmin.alwaysdata.com](https://phppgadmin.alwaysdata.com/)   |

Ces informations de connexion dépendent du compte concerné. Vous pouvez retrouver les valeurs précises dans la section **Bases de données > PostgreSQL** de l'interface d'administration.

## Permissions

À la création de vos bases et utilisateurs PostgreSQL, vous définissez les permissions souhaitées puis notre système effectue les opérations suivantes :

* REVOKE ALL PRIVILEGES sur la base et ses schémas ;
* Si votre utilisateur doit avoir **tous les droits** :
  * GRANT ALL PRIVILEGES sur la base et ses schémas ;
  * ALTER DEFAULT PRIVILEGES : GRANT ALL PRIVILEGES sur les TABLES, SEQUENCES et FUNCTIONS ;
  * GRANT ALL PRIVILEGES sur les TABLES, SEQUENCES et FUNCTIONS.
* Si votre utilisateur doit avoir le droit **lecture seule** :
  * GRANT CONNECT sur la base ;
  * GRANT USAGE sur les schémas ;
  * ALTER DEFAULT PRIVILEGES :
        * GRANT SELECT sur les TABLES, SEQUENCES ;
        * GRANT EXECUTE sur les FUNCTIONS.
  * GRANT SELECT sur les TABLES, SEQUENCES ;
  * GRANT EXECUTE sur les FUNCTIONS.

{{% notice warning %}}
Si vous modifiez les permissions de vos utilisateurs via une application tierce, toute validation via l'interface d'administration (ou via l'API) réinitialisera les permissions selon les directives ci-dessus.
{{% /notice %}}

## Options

À la création d'une base de données, vous disposez des options suivantes :

* **locale** : détermine l'encodage, `LC_COLLATE` et `LC_CTYPE` ;
* **extensions** : vous pouvez installer d'un simple clic des extensions PostgreSQL (`hstore`, `pgcrypto`, `PostGIS`, etc.). Si vous avez besoin d'une extension non listée, vous pouvez tout à fait contacter notre équipe.
