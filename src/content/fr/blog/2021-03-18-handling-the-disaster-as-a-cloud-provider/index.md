---
title: "Catastrophes et PCA : le Cloud quand tout va mal"
description: "Pourquoi avoir un Plan de Continuité d'Activité est nécessaire"
date: 2021-03-18
authors: ["Matthias Dugué"]
---

Le Cloud est désormais une part incontournable de nos vies numériques, à mesure que nous nous dirigeons vers des architectures orientées "Edge", à l'ère de l'IoT (Internet of (Terrible) Things — Internet des (Foutus) Objets) et de la 5G.

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBidjd4NTY1c3BlMXh4Z25yZGw3OWx5NTN3MW54YmdpbGt2cDdndiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/81xwEHX23zhvy/giphy.gif)

Récemment, l'hébergeur français OVHCloud a subi une perte impressionnante avec un [incendie massif d'un de ses centres de données](https://www.numerama.com/tech/695843-le-terrible-incendie-chez-ovh-rappelle-lenjeu-de-la-redondance-pour-les-sites-web.html) à Strasbourg, perdant une unité complète et endommageant des parties d'une autre. Derrière cet événement spécifique et la responsabilité du fournisseur qui vient avec, beaucoup de questions sont venues de nos utilisateurs sur leurs propres données hébergées par **alwaysdata**. Voici nos réponses sur la façon dont nous sécurisons notre plateforme Cloud.

---

Nous avons fait un fil rapide sur [Twitter](https://twitter.com/alwaysdata/status/1369995609009180673) et [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:6775779122309287936) au sujet de l'importance de préparer sa continuité d'activité. Cet article est leur version étendue, et aborde le sujet sous un angle opérationnel, appliqué au statut de fournisseur d'hébergement. [Les réponses techniques pratiques se trouvent dans notre documentation](/fr/docs/caracteristiques-techniques/pca/).

Tout d'abord, nous connaissons OVHCloud depuis longtemps maintenant, en tant qu'acteur de premier plan dans le domaine de l'hébergement en France et en Europe. Ils étaient également notre hébergeur initial avant [la migration vers notre propre infrastructure il y a plusieurs années](/fr/blog/2018-02-20-4-years-later-being-independent-feedback/). Partageant le même métier, nous avons été impressionnés par l'incident et heureux de savoir que tous les membres de l'équipe et les pompiers intervenus sont tous saufs.

## Plan de continuité d'activité, un sésame vers le futur

Un PCA (Plan de continuité d'activité) est un document qui décrit les procédures à activer en cas d'urgence. Ce document est interne à votre entreprise car il est étroitement lié à votre activité : quels sont vos modèles de menaces, et comment comptez-vous y faire face pour maintenir votre activité même lorsque les choses se dégradent ?

Comme l'a indiqué Octave Klaba, directeur technique d'OVHCloud, pendant l'incendie :

> We recommend to activate your Disaster Recovery Plan.

https://twitter.com/olesovhcom/status/1369478732247932929

Mais pour beaucoup de leurs clients, ce fut une surprise, comme en témoignent les réactions au tweet : qu'est-ce qu'un PCA, et comment pouvons-nous l'activer ?

La vérité, c'est qu'il faut se préparer au pire. C'est la [loi de Murphy](https://fr.wikipedia.org/wiki/Loi_de_Murphy) :

> Tout ce qui peut mal tourner tournera mal.

Le PCA est là pour empêcher votre entreprise de sombrer, parfois définitivement. Selon des analyses, [les entreprises qui subissent une perte de données ne s'en remettent pas dans 93 % des cas](https://www.keepersecurity.com/blog/2019/07/24/cyber-mindset-exposed-keeper-unveils-its-2019-smb-cyberthreat-study/). Pour 53% d'entre elles, elles mettront la clef sous la porte dans les deux ans qui suivent l'incident. Votre PCA doit être régulièrement mis à jour et testé, vous permettant de faire face à toutes les situations, même les plus désespérées.

Comme toute autre entreprise, nous disposons d'un PCA qui nous aide à rester en sécurité dans ce genre de situation. Nous ne faisons pas exception à la règle, surtout lorsque vous nous confiez les actifs critiques qui font fonctionner votre entreprise. En tant que fournisseur de services Cloud, vous vous fiez à notre infrastructure pour faire fonctionner vos sites Web, vos applications, vos services, *etc.*, tous liés à *vos données*.

Le Cloud est un élément central de chaque entreprise, des PME (Petites et moyennes entreprises) aux grands groupes, en passant par les écoles et les universités, les institutions gouvernementales… Il héberge des courriels, des fichiers, des bases de données, des outils, etc.

En tant que fournisseur, nous hébergeons bien plus que de simples sites Web et nous devons nous préparer à faire face à toute éventualité.

## Quand un plan se déroule sans accroc

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHI3bHFqeGhvYXRrYzU5ZzE5N21pbGRyd3hiZXByc3BscHd5bXE0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vR6aasfs0Ae3qdG/giphy.gif)

**alwaysdata**, en tant que plate-forme de services Cloud, gère plusieurs centaines de serveurs. Nous sommes préparés au pire, comme la perte d'alimentation, de matériel, ou (🤞) de tout un *data hall* voire d'un *data center* entier. Pour minimiser les risques, nous avons appliqué à notre infrastructure plusieurs choix techniques :

1. **Répartition du matériel** : nos serveurs sont hébergés dans plusieurs racks, tous situés à des endroits différents. Un ensemble de serveurs de secours est prêt à être démarré dans ces racks. En cas de défaillance matérielle, nous sommes prêts à basculer les services sur d'autres serveurs, même situés dans un autre rack, pour assurer la continuité du service ;
2. **Disponibilité** : même en cas de dommage majeur, nous pouvons basculer le service vers d'autres infrastructures et le rétablir rapidement ;
3. **Gestion des sauvegardes** : nous effectuons des copies de l'ensemble de vos données chaque jour et nous les conservons pendant 30 jours glissant ; ces sauvegardes contiennent vos fichiers, bases de données, e-mails, configurations, etc ; elles sont disponibles en lecture seule depuis votre compte à tout moment ; en [sauvegardant vos données automatiquement](/fr/docs/hebergement-web/sauvegardes/), nous nous assurons de pouvoir restaurer rapidement vos contenus en cas de sinistre ;
4. **Sécurisation des sauvegardes** : pour éviter qu'une catastrophe naturelle ne détruise tout, ces sauvegardes sont situées dans un autre data center que ceux de production. Ce DC (Data center) de sauvegarde est géographiquement éloigné des unités de production ; il est également exploité par un autre fournisseur que celui hébergeant nos unités de production, afin de rester indépendant ;
5. **Résilience des DNS** (Domain Name Server) : l'architecture DNS est aussi critique que les données ; en cas de défaillance, nous devons maintenir ce service en état de marche pour acheminer le trafic entrant vers de nouveaux serveurs ; nous hébergeons donc nos serveurs de noms à différents endroits et chez différents fournisseurs, afin que la partie DNS reste disponible pour les mises à jour et le maintien du trafic ;
6. **Connexion permanente** : nous nous engageons à rester indépendants de tout fournisseur, ce qui atténue le risque d'un SPoF (Single Point of Failure) ; notre accès Internet est fourni par quatre FAI (Fournisseurs d'accès à Internet) différents afin d'absorber tout problème de trafic ; notre plate-forme Cloud restera accessible, quel que soit le statut des FAI ;
7. **Consolidation du réseau** : à l'intérieur de nos centres de données, nous gérons notre infrastructure réseau globale afin de fournir à chaque serveur un lien réseau de secours ; si l'accès réseau principal est indisponible pour une raison quelconque, nous pouvons facilement basculer la connexion vers l'interface secondaire et réactiver le réseau immédiatement ;
8. **Expertise** : nous avons choisi les data centers d'[Equinix](https://www.equinix.com/) pour héberger nos unités de production ; ils sont [réputés pour leur qualité et leur expérience](https://www.equinix.com/data-centers/design/standards-compliance/) en matière d'hébergement premium dans le monde entier ; nos data centers bénéficient des meilleures infrastructures et certifications en termes de sécurité et de protection ;
9. **Réplication** : vous pouvez avoir des besoins de redondance et de scalabilité en fonction des besoins de vos services : nous proposons un [plan Gold avec Catalyst](https://www.alwaysdata.com/fr/offers/max/) qui répond à ces contraintes ; vos serveurs sont répartis sur des DC (data center) géographiquement distants dans des états de synchronisation redondés ; en cas de défaillance d'un nœud, tout le trafic est instantanément redirigé vers le(s) autre(s) nœud(s) pour que tout reste opérationnel.

### Qu'est-ce qui pourrait mal se passer ?

Lorsque tout est prévu, vous estimerez être prêt à faire face à toute situation. Nous avons une architecture solide, des processus bien conçus et nous choisissons des partenaires qualifiés pour nous accompagner. Nous sommes prêts. Et nous ne faisons pas exception.

En vérité, tous les fournisseurs qui ont connu des pannes par le passé, d'AWS à OVHCloud, pensaient être aussi prêts que nous. La réalité est que quiconque ne peut être prêt que pour le pire des scénarios qu'il sera capable d'envisager. Et c'est là qu'intervient votre responsabilité.

Nous avons pensé à tous les scénarios qui pourraient se produire et qui pourraient présenter un important niveau de risques. Vous devez faire de même de votre côté car vous connaissez votre business et vos besoins en terme de services. Lors de la dernière panne d'OVHCloud et de l'incendie de SBG2, OVHCloud était probablement convaincu d'être très bien préparé, mais beaucoup de ses clients ont quand même perdu leurs données. Certains parce qu'ils ne savaient pas que la sauvegarde de leurs données était optionnelle. D'autres parce qu'ils ont choisi de ne pas payer ce coût supplémentaire.

Il est essentiel de faire confiance à votre fournisseur, comme nous faisons confiance aux nôtres. Mais en définitive, il s'agit de comprendre la portée du service que vous achetez. Pour vous éviter un désastre majeur sur vos données et ses conséquences, nous avons choisi d'intégrer toutes ces sécurités par défaut. C'est exactement ce qui fait de [nous un fournisseur de Cloud (ou un fournisseur de PaaS infogéré)](/fr/blog/2018-03-05-saas-paas-iaas-what-are-the-differences-and-what-does-it-matter/). Certains utilisateurs en auront besoin, d'autres non. Votre responsabilité ici est de choisir une offre qui correspond à vos besoins de sécurité.

## Parez à toute éventualité

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2trOTBhNWZidzF3a2hjOXVmOGpjZjBrMzd3OGdxemJ3YWEwcW9uZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRxBeok96wnAwpy/giphy.gif)

Nous avons vu qu'un PCA (Plan de continuité d'activité) est une nécessité pour maintenir votre entreprise en activité. Le choix d'un fournisseur qui répond à vos besoins en termes de protection est étroitement lié à ce PCA mais ne vous absout pas d'en avoir un. Vos données sont critiques, vous devez avoir un plan en cas de défaillance et choisir vos partenaires en conséquence.

Comme vous connaissez votre entreprise mieux que quiconque, le choix de vos fournisseurs vous appartient : vous pouvez choisir de mettre en place un PCA qui ne dépend pas d'un seul fournisseur, ce qui vous permet de passer rapidement à un hébergeur de secours en cas d'urgence. Ou vous pouvez choisir un partenaire qui vous offre les garanties que vous attendez, afin de pouvoir rester concentré sur la continuité de vos activités.

Il n'y a pas de bon choix à faire. C'est à vous de décider de la manière dont vous gérerez la crise quand elle se produira : cela impliquera-t-il que toutes les actions soient de votre côté, ou préférez-vous vous appuyer sur l'expertise et la qualité de votre fournisseur ? Vous avez la réponse.

Soyez prêt. Vos données sont le cœur de votre entreprise. Protégez-les.
