+++
url = "/fr/guides/installer-jenkins/"
title = "Comment installer Jenkins"
layout = "howto"
hidden = true
+++

[Jenkins](https://jenkins.io/) est un outil d'intégration continue. 


Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh" >}}) et considérons les informations suivantes :

- Nom de compte : `foo`
- Répertoire de Jenkins : `$HOME/jenkins/`


## Étape 1 : Téléchargement

```
foo@ssh:~/jenkins$ wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
```

## Étape 2 : Création du site

Dans **Web > Sites**, créez un site de type [Programme utilisateur]({{< ref "sites/user-program" >}}) avec pour **Commande** :

- Debian Jessie : `/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java -Djava.net.preferIPv4Stack=true -Xmx512m -jar $HOME/jenkins/jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT`
- Debian Buster (nouveaux comptes) : `java -Xmx512m -jar $HOME/jenkins/jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT`
