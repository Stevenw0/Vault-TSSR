# LXC avec Proxmox

📖 Documentation : [pve.proxmox.com/wiki/Linux_Container](https://pve.proxmox.com/wiki/Linux_Container)
> Ressource : [Guide complet des conteneurs LXC Proxmox — pve-admin-guide](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#chapter_pct)

## 6.1 La virtualisation par isolation — comprendre avant de faire


Avant de créer notre premier conteneur, il est utile de s'arrêter une minute sur ce que signifie "virtualiser par isolation". Vous avez sans doute déjà entendu parler de machines virtuelles — avec KVM ou VMware, on émule un ordinateur complet, avec son propre noyau, ses propres pilotes, son BIOS virtuel. C'est puissant, mais cela a un coût : chaque VM doit démarrer un système d'exploitation entier, ce qui prend du temps, de la mémoire et des ressources processeur, même quand la VM ne fait rien d'utile.

La virtualisation par isolation repose sur un principe radicalement différent. Plutôt que d'émuler un ordinateur complet, on **partage le noyau** de la machine hôte entre plusieurs environnements isolés. Ces environnements — qu'on appelle conteneurs — voient chacun leur propre système de fichiers, leur propre réseau, leurs propres processus, mais ils utilisent tous le même noyau Linux qui tourne sur l'hôte physique.

Le gain est immédiat : un conteneur démarre en quelques secondes (parfois moins), consomme quelques dizaines de mégaoctets de RAM au repos, et peut être créé ou détruit en un instant. C'est pour cette raison que LXC est idéal pour héberger des services légers — un serveur web, une base de données, un reverse proxy — sans gaspiller les ressources que réclamerait une VM complète pour le même service.

La contrepartie est tout aussi claire : parce que tous les conteneurs partagent le même noyau, on ne peut pas faire tourner Windows dans un conteneur LXC, ni charger des modules noyau arbitraires depuis l'intérieur d'un conteneur non-privilégié. LXC est Linux pour Linux.

---

## 6.2 LXC — histoire et mécanismes noyau


### 6.2.1 Origine et place dans l'écosystème

LXC — Linux Containers — a été développé en 2008 par Daniel Lezcano chez IBM, comme une interface de haut niveau pour accéder aux primitives d'isolation que le noyau Linux avait progressivement intégrées depuis le milieu des années 2000. Contrairement à Docker, qui est apparu cinq ans plus tard avec une couche d'abstraction supplémentaire orientée application, LXC reste proche du noyau : c'est une virtualisation légère de système, pas de processus.

Proxmox VE intègre LXC via son propre outil, **pct** — le Proxmox Container Toolkit. `pct` est la commande qui fait le lien entre l'interface graphique Proxmox, l'API, et les primitives LXC sous-jacentes. Quand vous créez un conteneur depuis l'interface web, c'est `pct create` qui s'exécute en coulisses.

