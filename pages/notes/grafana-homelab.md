# 📊 Grafana — Visualisation & Monitoring (Homelab)

---

# 📌 Définition

**Grafana** est une plateforme de visualisation permettant de :

- afficher des métriques
- visualiser des logs
- créer des dashboards interactifs

👉 Grafana **n’analyse pas seul**, il affiche des données provenant d’autres sources

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| monitoring | système |
| visualisation | données |
| centralisation | métriques |
| alerting | supervision |

---

# 🧠 Fonctionnement global

```
Sources de données (Prometheus / Loki)
        ↓
Grafana
        ↓
Dashboards (graphiques / logs)
```

---

# 🔎 Rôle dans un homelab

👉 Grafana agit comme :

```
Interface de monitoring centralisée
```

---

👉 Il ne collecte pas les données

---

# 📦 Sources de données courantes

---

## 🔹 Prometheus (métriques)

| Donnée | Exemple |
|---|---|
| CPU | utilisation |
| RAM | mémoire |
| disque | espace |
| Docker | containers |

---

---

## 🔹 Loki (logs)

| Donnée | Exemple |
|---|---|
| logs Docker | erreurs |
| logs système | événements |

---

---

# 🔗 Architecture type

## Métriques

```
Node Exporter / cAdvisor
        ↓
Prometheus
        ↓
Grafana
```

---

## Logs

```
Docker logs
        ↓
Alloy
        ↓
Loki
        ↓
Grafana
```

---

# 🌐 Accès

👉 via navigateur :

```
https://grafana.exemple.com
```

---

👉 généralement derrière Traefik (HTTPS)

---

# 🧪 Exemples de données

---

## 📊 Prometheus

```promql
up
```

👉 service UP / DOWN

---

## 📈 CPU

```promql
rate(container_cpu_usage_seconds_total[5m])
```

---

## 📜 Loki

```logql
{container=~".+"}
```

👉 logs Docker

---

# 🧱 Dashboards

👉 un dashboard contient :

- panels
- graphiques
- logs
- statistiques

---

# 📊 Types de panels

| Panel | Description |
|---|---|
| Time series | graphique |
| Logs | logs |
| Stat | valeur unique |
| Table | tableau |

---

# ⚙️ Configuration de base

---

## Ajouter Prometheus

```
http://prometheus:9090
```

---

## Ajouter Loki

```
http://loki:3100
```

---

# 🧪 Debug rapide

---

## Logs Grafana

```bash
docker logs grafana --tail=50
```

---

## Tester Prometheus

Dans Grafana :

```promql
up
```

---

## Tester Loki

```logql
{container=~".+"}
```

---

# ❌ Problèmes fréquents

---

## Aucun graphique

👉 causes :

- Prometheus non connecté
- mauvaise requête

---

## Aucun log

👉 causes :

- Loki mal configuré
- Alloy absent

---

## Accès impossible

👉 vérifier :

- Traefik
- DNS
- container actif

---

# 🔐 Bonnes pratiques

> [!warning]

- protéger avec mot de passe
- utiliser HTTPS (Traefik)
- ne pas exposer ports
- sauvegarder dashboards
- limiter rétention données

---

# 🔄 Grafana vs Prometheus

| Outil | Rôle |
|---|---|
| Grafana | affichage |
| Prometheus | collecte |
| Loki | logs |

---

# 🏗️ Architecture homelab complète

```
Docker / système
   ↓
Prometheus (métriques)
   ↓
Grafana (visualisation)

Docker logs
   ↓
Alloy
   ↓
Loki
   ↓
Grafana
```

---

# 🧠 Vision globale homelab

| Outil | Rôle |
|---|---|
| AdGuard | DNS |
| Traefik | reverse proxy |
| Prometheus | métriques |
| Loki | logs |
| Grafana | visualisation |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Grafana | visualisation |
| rôle | affichage |
| données | externes |
| panels | dashboards |
| usage | monitoring |

---

# 🎯 Conclusion

Grafana permet :

- de visualiser facilement les données
- de surveiller un système en temps réel
- de centraliser métriques et logs

👉 indispensable pour :

🔥 monitoring homelab  
🔥 supervision serveur  
🔥 analyse système