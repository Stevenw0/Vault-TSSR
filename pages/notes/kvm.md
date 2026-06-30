# KVM

KVM — Kernel-based Virtual Machine — est un module du noyau Linux, pas un logiciel externe. Depuis sa fusion dans le noyau Linux 2.6.20 en 2007, KVM transforme n'importe quel noyau Linux en hyperviseur. C'est une décision architecturale fondamentale : plutôt que de réinventer la gestion de la mémoire, des interruptions et de l'ordonnancement, KVM réutilise tout ce que le noyau sait déjà faire, en ajoutant simplement la capacité d'isoler des contextes d'exécution.

Pour fonctionner, KVM s'appuie sur les extensions matérielles de virtualisation intégrées dans les processeurs modernes. Intel les appelle **VT-x** (Virtualization Technology for IA-32/64), AMD les appelle **AMD-V** (ou SVM — Secure Virtual Machine). Ces extensions permettent au processeur de basculer rapidement entre le contexte de l'hyperviseur et celui des machines virtuelles, sans que les instructions sensibles (accès matériel, gestion de la mémoire) ne puissent "s'échapper" vers le matériel réel.

```bash
# Vérifier que les extensions de virtualisation sont présentes
lscpu | grep -i virtualization

# Vérifier les flags CPU
grep -E 'vmx|svm' /proc/cpuinfo | head -1
# vmx = Intel VT-x
# svm = AMD-V

# Vérifier que KVM peut réellement être utilisé (Debian/Ubuntu)
apt install cpu-checker
kvm-ok
# INFO: /dev/kvm exists
# KVM acceleration can be used
```

> [!TIP]
> **Résultat attendu :**
> ```
> flags		: ... vmx sse4_1 sse4_2 x2apic ...
> ```
> ou pour AMD :
> ```
> flags		: ... svm sse4a abm ...
> ```


Si la commande ne renvoie rien, les extensions de virtualisation sont soit absentes du processeur (rare sur le matériel récent), soit désactivées dans le BIOS/UEFI. Proxmox affichera une erreur au démarrage des VMs dans ce cas. Sur nos labs, le matériel a été vérifié en amont — les extensions sont actives.

KVM seul ne suffit pas pour créer une machine virtuelle complète : il gère la virtualisation CPU et mémoire, mais pas l'émulation des périphériques (carte réseau, disque, clavier). C'est QEMU qui prend en charge cette émulation. Dans Proxmox, KVM et QEMU travaillent toujours en tandem — vous entendrez d'ailleurs parfois parler de "KVM/QEMU" comme d'un seul bloc.

```bash
# Binaires présents ?
command -v qemu-system-x86_64 qemu-img

# Version installée
qemu-system-x86_64 --version
qemu-img --version

# Paquets Proxmox liés à QEMU
dpkg -l | grep -E 'pve-qemu|qemu-server'
```

> [!INFO]
> **À retenir :** KVM est le module noyau qui permet l'isolation des VMs. QEMU est l'émulateur qui simule les périphériques. Proxmox VE orchestre les deux à travers son API.


---

