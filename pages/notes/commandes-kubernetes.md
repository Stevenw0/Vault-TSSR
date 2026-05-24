# 🚀 Commandes essentielles Kubernetes (kubectl)

---

# 🧭 🔍 État du cluster

| Commande | Description |
|---|---|
| kubectl get nodes | voir les nodes |
| kubectl get pods -A | voir tous les pods |
| kubectl get all -A | tout afficher |

---

# 🌐 🌍 Ingress (accès externe)

| Commande | Description |
|---|---|
| kubectl get ingress -A | liste accès externes |
| kubectl describe ingress NOM -n NAMESPACE | détail ingress |

---

👉 Exemple :

```
kubernetes-dashboard → k8s.local
```

---

# 📦 📦 Pods

| Commande | Description |
|---|---|
| kubectl get pods | namespace courant |
| kubectl get pods -n NAMESPACE | namespace spécifique |
| kubectl describe pod NOM -n NAMESPACE | debug complet |

---

## 📜 Logs

| Commande | Description |
|---|---|
| kubectl logs NOM -n NAMESPACE | logs |
| kubectl logs -f NOM -n NAMESPACE | logs live 🔥 |

---

# ⚙️ ⚙️ Deployments

| Commande | Description |
|---|---|
| kubectl get deployments -A | liste |
| kubectl describe deployment NOM -n NAMESPACE | détail |
| kubectl rollout restart deployment NOM -n NAMESPACE | restart propre |

---

# 🌐 🌐 Services

| Commande | Description |
|---|---|
| kubectl get svc -A | voir services |
| kubectl describe svc NOM -n NAMESPACE | détail |

---

# 🔐 🔐 Secrets

| Commande | Description |
|---|---|
| kubectl get secrets -A | liste |
| kubectl describe secret NOM -n NAMESPACE | détail |

---

# 📂 📂 Namespaces

| Commande | Description |
|---|---|
| kubectl get ns | liste namespaces |
| kubectl config set-context --current --namespace=homelab | changer namespace |

---

# 📄 📄 Déploiement

| Commande | Description |
|---|---|
| kubectl apply -f fichier.yaml | appliquer |
| kubectl apply -f dossier/ | appliquer dossier 🔥 |
| kubectl delete -f fichier.yaml | supprimer |

---

# 🧠 🔍 Debug (très important)

| Commande | Description |
|---|---|
| kubectl get events -A | erreurs globales |
| kubectl top pods -A | CPU / RAM |
| kubectl exec -it POD -n NS -- bash | entrer dans pod |

---

# 🔥 Commandes clés (90% du temps)

```
kubectl get pods -A
kubectl get ingress -A
kubectl get svc -A
kubectl logs -f NOM -n NAMESPACE
kubectl describe pod NOM -n NAMESPACE
kubectl apply -f dossier/
```

---

# ⚡ Astuce pro

## Alias

```bash
alias k=kubectl
```

---

## Utilisation

```bash
k get pods -A
```

---

# 🧠 Mémo rapide

| Élément | Rôle |
|---|---|
| kubectl | interface |
| pods | applications |
| svc | réseau interne |
| ingress | accès externe |

---

# 🎯 Résumé

👉 `kubectl` = ton outil principal  
👉 `pods` = ce qui tourne  
👉 `svc` = réseau interne  
👉 `ingress` = accès web  

---

# 🚀 Conclusion

Avec ces commandes tu peux :

- monitorer ton cluster
- debug rapidement
- déployer efficacement

👉 C’est le **minimum vital pour travailler sur Kubernetes**