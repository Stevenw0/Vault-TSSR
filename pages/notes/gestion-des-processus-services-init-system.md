# ⚙️ Gestion des processus & services — Init System Linux

---

# 📌 Définition

Un **init system** est le premier processus lancé au démarrage :

- PID 1
- initialise le système
- gère les services (daemons)

👉 responsable du démarrage et de l’état du système

---

# 🧠 Principe

```
Boot → Init (PID 1) → Services → Système opérationnel
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| démarrage | système |
| gestion services | start/stop |
| supervision | processus |
| dépendances | ordre |

---

# 🧱 Rôle de l’init

| Fonction | Description |
|---|---|
| lancer services | boot |
| gérer processus | lifecycle |
| redémarrer | services |
| logging | état |

---

# 📊 Init systems principaux

---

## 🧩 systemd (moderne)

| Élément | Description |
|---|---|
| usage | standard Linux |
| gestion | services |
| fonctionnalités | complètes |
| parallélisation | oui |

👉 utilisé sur :

- Ubuntu
- Debian
- Red Hat
- Arch

---

## ⚡ SysVinit (ancien)

| Élément | Description |
|---|---|
| scripts | /etc/init.d |
| séquentiel | oui |
| simplicité | élevée |
| performance | lente |

---

## 🔧 Upstart

| Élément | Description |
|---|---|
| événementiel | oui |
| usage | ancien Ubuntu |
| remplacé | systemd |

---

## 🧪 OpenRC

| Élément | Description |
|---|---|
| léger | oui |
| script | shell |
| dépendances | gérées |
| usage | Gentoo / Alpine |

---

## 🧩 runit

| Élément | Description |
|---|---|
| minimaliste | oui |
| rapide | très |
| supervision | simple |

---

## 🧪 s6 / s6-rc

| Élément | Description |
|---|---|
| moderne | oui |
| modulaire | oui |
| sécurisé | élevé |
| usage | avancé |

---

# 🔄 Comparaison

| Critère | systemd | SysVinit | OpenRC | runit |
|---|---|---|---|---|
| modernité | élevée | faible | moyenne | élevée |
| vitesse | rapide | lente | rapide | très rapide |
| complexité | élevée | faible | moyenne | faible |
| fonctionnalités | nombreuses | limitées | bonnes | minimal |

---

# ⚙️ systemd (focus)

## Commandes principales

```bash
systemctl start service
systemctl stop service
systemctl restart service
systemctl status service
systemctl enable service
systemctl disable service
```

---

## Voir services

```bash
systemctl list-units --type=service
```

---

## Logs

```bash
journalctl -u service
```

---

# 📦 Units systemd

| Type | Description |
|---|---|
| service | service |
| socket | socket |
| target | groupe |
| mount | montage |
| timer | planification |

---

# ⚙️ SysVinit

## Commandes

```bash
service apache2 start
/etc/init.d/apache2 start
```

---

# ⚙️ OpenRC

```bash
rc-service sshd start
rc-update add sshd
```

---

# ⚙️ runit

```bash
sv start service
sv stop service
```

---

# ⚙️ s6

👉 gestion via scripts et supervision

---

# 🔐 Sécurité

| Risque | Description |
|---|---|
| service compromis | accès |
| mauvaise config | faille |
| root services | critique |

---

# 🛡️ Bonnes pratiques

> [!warning]

- limiter services inutiles
- vérifier dépendances
- surveiller logs
- utiliser least privilege
- mettre à jour services

---

# 🌐 Cas d’utilisation

| Usage | Init |
|---|---|
| serveur | systemd |
| embedded | runit |
| container | s6 |
| lightweight | OpenRC |

---

# ⚠️ Limites

| Init | Limite |
|---|---|
| systemd | complexe |
| SysVinit | lent |
| OpenRC | moins complet |
| runit | minimal |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| init | PID 1 |
| rôle | services |
| systemd | standard |
| alternatives | OpenRC, runit |
| usage | boot |

---

# 🎯 Conclusion

Les init systems permettent :

- de démarrer Linux
- de gérer les services
- d’assurer la stabilité du système

👉 choix dépend du besoin :

🔥 systemd → complet  
🔥 OpenRC → léger  
🔥 runit/s6 → minimal / rapide