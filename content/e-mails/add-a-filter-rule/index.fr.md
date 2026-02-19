+++
url = "/fr/emails/ajouter-regle-filtrage/"
title = "Ajouter une règle de filtrage"
tags = ["email"]
+++

Pour mieux gérer ses emails et les trier automatiquement, on peut utiliser les règles de filtrage. Ces règles peuvent être créées au niveau du client email ou du serveur email.

Pour le faire sur ce dernier, rendez-vous dans **Emails > Adresses > Modifier** l'adresse voulue **> Règles de filtrage**.
{{< fig "images/filter-rule1.fr.png" "Interface d'administration : aller dans les règles de filtrage" >}}

Vous y retrouverez la liste de vos règles et pourrez en ajouter.

{{< fig "images/filter-rule2.fr.png" "Liste de ses règles de filtrage" >}}
{{< fig "images/filter-rule3.fr.png" "Ajouter une règle de filtrage" >}}


Les règles de filtrages sont traduites au format [Sieve](http://sieve.info/) que vous pourrez retrouver dans le fichier `$HOME/admin/mail/[domaine]/[partie-locale]/filter.sieve` sur votre espace de fichiers.

{{% notice tip %}}
Pour créer des règles plus compliquées, ce sera des [règles Sieve](/e-mails/use-sieve-scripts).
{{% /notice %}}

---

- [Ressource API](https://api.alwaysdata.com/v1/mailbox/rule/doc/)
