# 🧠 Pourquoi c’est facile dans ton setup

Tu as fait les bons choix :

- stockage centralisé :

/mnt/hardrive

- Docker avec volumes bindés (pas volumes internes)
- Traefik + configs persistantes

➡️ donc tout est portable 👍

---

# 🎯 Ce que tu dois transférer

👉 l’essentiel :

/mnt/hardrive

👉 + important aussi :

~/homelab/traefik/letsencrypt/acme.json

(optionnel si ailleurs)

---

# 🔥 MÉTHODE PROPRE (recommandée)

## 1. Brancher le SSD dans Proxmox VE

👉 comme tu as fait pour le HDD

---

## 2. Attacher à la VM

VM → Hardware → Add Disk

---

## 3. Formater dans Debian

sudo mkfs.ext4 /dev/sdb

---

## 4. Monter temporairement

sudo mkdir /mnt/ssd  
sudo mount /dev/sdb /mnt/ssd

---

## 5. Copier les données

rsync -aP /mnt/hardrive/ /mnt/ssd/

---

## 6. Stop Docker

docker compose down  
# ou via Portainer stop all

---

## 7. Switch du mount

👉 modifie `/etc/fstab`

remplace :

/mnt/hardrive

👉 par :

/mnt/ssd

(ou garde le même nom en remplaçant le disque)

---

💡 **Astuce propre : garder le même chemin**

👉 démonte HDD :

sudo umount /mnt/hardrive

👉 monte SSD à la place :

sudo mount /dev/sdb /mnt/hardrive

➡️ aucune modif Docker nécessaire 🔥

---

## 8. Redémarrer Docker

docker compose up -d

ou via Portainer