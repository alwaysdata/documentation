+++
url = "/fr/plateforme/bases-de-donnees/mariadb-mysql/"
title = "MariaDB / MySQL"
+++

## Connexion

| | |
|-------------------|---------------------------------------------------------------------------|
| **Serveur**       | mysql-[compte].alwaysdata.net                                             |
| **Port**          | 3306 (Port MySQL par défaut)                                              |
| **Interface web** | [https://phpmyadmin.alwaysdata.com](https://phpmyadmin.alwaysdata.com/)   |

Ces informations de connexion dépendent du compte concerné. Vous pouvez retrouver les valeurs précises dans la section **Bases de données > MySQL** de l'interface d'administration.

## Permissions

À la création de vos bases et utilisateurs MySQL, vous avez la possibilité de donner les permissions suivantes :

* tous les droits (GRANT ALL PRIVILEGES) ;
* lecteure seule (GRANT READONLY)
* aucun droit.

{{% notice warning %}}
Si vous modifiez les permissions de vos utilisateurs via une application tierce, toute validation via l'interface d'administration (ou via l'API) réinitialisera les permissions selon les directives ci-dessus.
{{% /notice %}}