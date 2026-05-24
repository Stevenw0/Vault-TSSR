# 🐳 Docker — Conteneurisation

---

# 📌 Définition

**Docker** est une plateforme permettant de :

- créer
- déployer
- exécuter

des applications dans des **conteneurs**.

---

# 🧠 Principe

Un conteneur est :

- léger
- isolé
- portable

---

## Fonctionnement

```
Application → Image → Conteneur → Exécution
```

---

# 📊 Docker vs Machine virtuelle

| Critère | Docker | VM |
|---|---|---|
| poids | léger | lourd |
| démarrage | rapide | lent |
| isolation | processus | OS complet |
| performance | élevée | moyenne |

---

# 🧩 Composants Docker

| Élément | Description |
|---|---|
| Image | modèle |
| Conteneur | instance |
| Dockerfile | instructions |
| Registry | stockage images |

---

# 📦 Images

Une **image** est un template :

```bash
docker pull nginx
```

---

# ▶️ Conteneurs

Créer un conteneur :

```bash
docker run nginx
```

---

# 🔎 Commandes de base

| Commande | Description |
|---|---|
| docker ps | conteneurs actifs |
| docker ps -a | tous |
| docker images | images |
| docker stop | arrêter |
| docker rm | supprimer |

---

# ⚙️ Dockerfile

Permet de créer une image.

## Exemple

```dockerfile
FROM nginx
COPY . /usr/share/nginx/html
```

---

# 📦 Build image

```bash
docker build -t monimage .
```

---

# 🌐 Ports

Exposer un port :

```bash
docker run -p 80:80 nginx
```

---

# 📁 Volumes

Permettent de :

- persister données
- partager fichiers

```bash
docker run -v /data:/app nginx
```

---

# 🔄 Réseaux

Docker crée des réseaux :

```bash
docker network ls
```

---

# ⚙️ Docker Compose

Permet de gérer plusieurs conteneurs.

## Exemple

```yaml
version: "3"

services:
  web:
    image: nginx
    ports:
      - "80:80"
```

---

## Lancer

```bash
docker-compose up -d
```

---

# 📊 Cycle de vie

```
build → run → stop → remove
```

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| dev | environnement local |
| microservices | apps |
| CI/CD | pipelines |
| test | sandbox |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser images officielles
- limiter taille images
- ne pas exécuter en root
- utiliser volumes

---

# 📊 Docker vs Kubernetes

| Critère | Docker | Kubernetes |
|---|---|---|
| conteneur | oui | oui |
| orchestration | non | oui |
| simplicité | élevée | complexe |
| usage | local / simple | cluster |

---

# 🔥 Exemple complet

```bash
docker run -d -p 8080:80 nginx
```

👉 Accès :

```
http://localhost:8080
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Docker | conteneurisation |
| Image | modèle |
| Conteneur | exécution |
| Compose | multi-services |
| avantage | portable |

---

# 🎯 Conclusion

Docker permet :

- de standardiser les environnements
- de simplifier le déploiement
- d’accélérer le développement

👉 C’est une base essentielle du DevOps moderne