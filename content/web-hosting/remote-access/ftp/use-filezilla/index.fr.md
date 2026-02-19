+++
url = "/fr/hebergement-web/acces-distant/ftp/utiliser-filezilla/"
title = "Télécharger des fichiers avec FileZilla"
tags = [ "fichiers", "filezilla", "ftp"]
+++

[Rappel des informations de connexion](/web-hosting/remote-access/ftp#se-connecter-en-ftp)

[FileZilla](https://filezilla-project.org/) est un client FTP gratuit fonctionnel sur tous les systèmes d'exploitation.

Dans notre exemple nous utilisons le compte `test` et son utilisateur FTP principal. C'est à remplacer par vos informations de connexion personnelles.

- Rendez-vous dans **Fichiers > Gestionnaire de Sites > Nouveau site**

{{< fig "images/site-manager.fr.png" "" >}}

- Renseignez-y vos informations de connexion (nom d'hôte, identifiant et port) puis cliquez sur **Connecter**
- Renseignez votre mot de passe

{{< fig "images/password.fr.png" "" >}}

- La connexion s'effectue et vous n'avez plus qu'à faire des glisser-déposer du répertoire **Site Local** vers le répertoire **Site distant**.

{{< fig "images/interface.fr.png" "" >}}

Mettez les fichiers directement dans le répertoire `www`.
