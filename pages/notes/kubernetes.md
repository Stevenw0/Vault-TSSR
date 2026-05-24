# ☸️ Kubernetes — Orchestration de conteneurs

---

# 📌 Définition

**Kubernetes (K8s)** est une plateforme permettant de :

- déployer
- gérer
- automatiser

des applications conteneurisées (Docker).

---

# 🧠 Principe

Kubernetes orchestre des conteneurs :

```
Utilisateur → Kubernetes → Pods → Conteneurs
```

---

# 📊 Objectifs

| Objectif | Description |
|---|---|
| Automatisation | déploiement |
| Scalabilité | montée en charge |
| Résilience | auto-restart |
| Gestion | centralisée |

---

# 🏗️ Architecture

## Schéma

```
Client → API Server → Cluster → Nodes → Pods
```

---

# 🧩 Composants principaux

## Control Plane

| Composant | Rôle |
|---|---|
| API Server | point d’entrée |
| etcd | base de données |
| Scheduler | placement pods |
| Controller Manager | gestion état |

---

## Nodes

| Élément | Description |
|---|---|
| kubelet | agent |
| kube-proxy | réseau |
| container runtime | Docker / containerd |

---

# 📦 Objets Kubernetes

| Objet | Description |
|---|---|
| Pod | plus petite unité |
| Deployment | gestion pods |
| Service | exposition |
| ConfigMap | config |
| Secret | données sensibles |

---

# 🧠 Pod

Un **Pod** contient :

- un ou plusieurs conteneurs
- partage réseau et stockage

---

# ⚙️ Déploiement

## Exemple YAML

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: test
  template:
    metadata:
      labels:
        app: test
    spec:
      containers:
      - name: app
        image: nginx
```

---

# 🌐 Service

Permet d’exposer une application.

| Type | Description |
|---|---|
| ClusterIP | interne |
| NodePort | accessible externe |
| LoadBalancer | cloud |

---

# 🔄 Scalabilité

```bash
kubectl scale deployment app --replicas=3
```

---

# 🔎 Commandes utiles

| Commande | Description |
|---|---|
| kubectl get pods | voir pods |
| kubectl get svc | voir services |
| kubectl apply -f file.yaml | déployer |
| kubectl delete -f file.yaml | supprimer |
| kubectl describe pod | détail |
| kubectl logs | logs |

---

# 📊 Kubernetes vs Docker

| Critère | Docker | Kubernetes |
|---|---|---|
| conteneur | oui | oui |
| orchestration | non | oui |
| scaling | limité | automatique |
| gestion cluster | non | oui |

---

# ⚙️ Networking

- chaque Pod a une IP
- communication interne
- services pour accès externe

---

# 📦 Volumes

Permettent de :

- stocker données
- persistance

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser namespaces
- sécuriser accès
- monitorer cluster
- limiter ressources

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| microservices | apps |
| cloud | infra |
| CI/CD | déploiement |
| scaling | trafic |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Kubernetes | orchestration |
| Pod | unité |
| Deployment | gestion |
| Service | accès |
| kubectl | outil |

---

# 🎯 Conclusion

Kubernetes permet :

- automatisation complète
- haute disponibilité
- scalabilité

👉 C’est un standard pour les infrastructures modernes (cloud & DevOps)