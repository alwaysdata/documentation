+++
url = "/fr/accès-distant/ssh/problèmes-fréquents/"
title = "SSH - Problèmes fréquents"
layout = "faq"
weight = 70
hidden = true
tags = ["accès distant", "dépannage", "ssh"]
+++

## Connexion
Lors de problèmes de connexion vous pouvez utiliser la commande `ssh -v [utilisateur]@ssh-[compte].alwaysdata.net` pour avoir plus d'informations.

{{% notice note %}}
Remplacez `[utilisateur]` par le nom de votre utilisateur SSH et `ssh-[compte].alwaysdata.net` par votre nom d’hôte SSH.
{{% /notice %}}

Un [blocage d'IP]({{< ref "security/network" >}}#prévention-des-intrusions) a lieu après une dizaine de tentatives échouées de connexion au serveur.

{{% notice info %}}
alwaysdata a des logs de connexion dont vous pouvez exceptionnellement demander une copie.
{{% /notice %}}

### Too many authentication failures
C'est un problème de clés SSH, précisez la clé correspondante. Si vous ne la trouvez pas, connectez-vous par mot de passe et mettez à jour le fichier `$HOME/.ssh/authorized_keys`.

### WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

Un compte peut être déplacé de serveur SSH. Les nouveaux fingerprints sont indiqués dans **Accès distant > SSH**.

Il est nécessaire de mettre à jour le fichier `known_hosts`, ce qui est possible via la commande suivante :

```ssh
ssh-keygen -R [nom_d'hôte]
```

### Input/output error
Erreur liée à des opérations de notre côté, il faut patienter le temps qu'elle soit terminée mais vous pouvez aussi contacter le [support](https://admin.alwaysdata.com/support/add/) pour avoir plus d'informations. 

{{% notice info %}}
alwaysdata a des logs de connexion dont vous pouvez exceptionnellement demander une copie.
{{% /notice %}}

## Droits
Utiliser plusieurs utilisateurs SSH peut avoir des effets secondaires non désirables : problèmes à l'accès à certains fichiers, lors de la suppression de dossiers, des fichiers n'appartenant plus à personne si l'utilisateur propriétaire a été supprimé... Les utilisateurs d'un compte font partie du même groupe. Vous pouvez :

- utiliser la commande `chmod` avec l'utilisateur propriétaire des fichiers concernés pour donner les droits nécessaires au groupe ;
- contacter le [support](https://admin.alwaysdata.com/support/add/) pour qu'il modifie le propriétaire des fichiers concernés via la commande `chown`.
