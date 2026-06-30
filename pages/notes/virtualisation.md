# Virtualisation

### 1.1 Le problème que la virtualisation résout


Pendant longtemps, chaque service informatique vivait sur sa propre machine physique. Un serveur pour la messagerie, un pour la base de données, un pour le site web. Résultat : des salles machine bondées de serveurs sous-utilisés, des coûts d'électricité et de refroidissement disproportionnés, et surtout un gaspillage colossal de ressources — un serveur physique typique tournait en moyenne à 10 à 15 % de sa capacité CPU.

La virtualisation répond à cette absurdité en permettant à plusieurs systèmes d'exploitation de coexister sur un seul matériel physique. Chaque système croit disposer de sa propre machine, alors qu'il partage en réalité les ressources avec ses voisins. Cette illusion est produite par une couche logicielle — l'hyperviseur — qui s'intercale entre le matériel et les systèmes d'exploitation invités.

---

### 1.2 Les trois grandes familles


La virtualisation ne se présente pas sous une forme unique. Trois familles coexistent, chacune avec ses compromis.

**L'hyperviseur de type 1** — aussi appelé **"bare metal"** — s'installe directement sur le matériel, sans système d'exploitation hôte intermédiaire. Il est le premier programme à s'exécuter au démarrage, bien avant tout système invité. Cette position privilégiée lui donne un accès direct aux ressources physiques, ce qui se traduit par des performances proches du natif. VMware ESXi, Microsoft Hyper-V, et **Proxmox VE** appartiennent à cette famille.

**L'hyperviseur de type 2** fonctionne différemment : il s'installe comme une **application dans un système d'exploitation hôte déjà en place**. **VirtualBox** que vous avez peut-être déjà utilisé sur votre poste, ou VMware Workstation, sont des hyperviseurs de type 2. Pratiques pour le poste de développeur ou le lab, ils introduisent une couche supplémentaire qui dégrade légèrement les performances et les rend inadaptés à la production.

**La conteneurisation** adopte une approche radicalement différente : plutôt que d'émuler un matériel complet, elle **partage le noyau du système hôte entre les environnements isolés**. Chaque conteneur ne contient que les binaires et bibliothèques dont il a besoin — pas de noyau, pas de firmware, pas d'émulation matérielle. **LXC (Linux Containers) et Docker sont les représentants les plus connus**. Le gain en densité et en vitesse de démarrage est spectaculaire, mais au prix d'une contrainte : tous les conteneurs partagent le même noyau Linux, ce qui exclut de faire tourner un système Windows dans un conteneur.

> [!INFO]
> **À retenir :** Proxmox VE est un hyperviseur de type 1 qui supporte à la fois les machines virtuelles KVM (virtualisation complète) et les conteneurs LXC. C'est cette dualité qui en fait une plateforme particulièrement polyvalente.

