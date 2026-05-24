# 🤖 TUTO — Bot Discord rappel feuille de présence

---

# 📌 Objectif

Créer un bot Discord qui envoie automatiquement un rappel :

| Jour | Heure |
|---|---|
| Lundi → Vendredi | 09h00 |
| Lundi → Vendredi | 13h00 |

👉 avec une mention :

```text
@everyone
```

---

# 🧠 Principe

```
Bot Discord → Scheduler → Message automatique → Salon Discord
```

---

# 🔹 1. Créer le bot Discord

Aller sur :

```text
https://discord.com/developers/applications
```

---

## Étapes

| Étape | Action |
|---|---|
| 1 | New Application |
| 2 | Nom : Presence Reminder Bot |
| 3 | Onglet Bot |
| 4 | Add Bot |
| 5 | Reset Token |
| 6 | Copier le token |

> [!warning]
> Le token est secret. Ne jamais le partager.

---

# 🔹 2. Donner les permissions

Aller dans :

```text
OAuth2 → URL Generator
```

---

## Scope

| Scope | État |
|---|---|
| bot | ✅ |

---

## Permissions

| Permission | État |
|---|---|
| Send Messages | ✅ |
| View Channels | ✅ |
| Mention Everyone | ✅ |

---

👉 Ouvrir le lien généré pour inviter le bot sur le serveur.

---

# 🔹 3. Récupérer l’ID du salon

Dans Discord :

```text
Settings → Advanced → Developer Mode ON
```

---

Puis :

```text
Clic droit sur le salon → Copy ID
```

---

# 🔹 4. Créer les fichiers

## Créer le dossier

```bash
mkdir -p /mnt/hdd/storage/discord-presence-bot/app
```

---

# 📄 requirements.txt

```txt
discord.py==2.4.0
apscheduler==3.10.4
```

---

# 📄 bot.py

```python
import os
import discord
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.cron import CronTrigger
from zoneinfo import ZoneInfo

DISCORD_TOKEN = os.getenv("DISCORD_TOKEN")
CHANNEL_ID = int(os.getenv("DISCORD_CHANNEL_ID"))
TIMEZONE = os.getenv("TIMEZONE", "Europe/Paris")

intents = discord.Intents.default()
client = discord.Client(intents=intents)

scheduler = AsyncIOScheduler(timezone=ZoneInfo(TIMEZONE))


async def send_presence_reminder():
    channel = client.get_channel(CHANNEL_ID)

    if channel is None:
        print("Salon introuvable")
        return

    await channel.send(
        "@everyone 📋 **Rappel feuille de présence**\n\n"
        "N’oubliez pas de signer la feuille de présence. ✅",
        allowed_mentions=discord.AllowedMentions(everyone=True),
    )


@client.event
async def on_ready():
    print(f"Connecté en tant que {client.user}")

    channel = client.get_channel(CHANNEL_ID)

    if channel:
        await channel.send("✅ Bot connecté !")

    if not scheduler.running:
        scheduler.add_job(
            send_presence_reminder,
            CronTrigger(day_of_week="mon-fri", hour=9, minute=0, timezone=ZoneInfo(TIMEZONE)),
        )

        scheduler.add_job(
            send_presence_reminder,
            CronTrigger(day_of_week="mon-fri", hour=13, minute=0, timezone=ZoneInfo(TIMEZONE)),
        )

        scheduler.start()


client.run(DISCORD_TOKEN)
```

---

# 🔹 5. Créer le docker-compose

## docker-compose.yml

```yaml
version: "3.8"

services:
  discord-presence-bot:
    image: python:3.12-slim
    container_name: discord-presence-bot
    working_dir: /app
    restart: unless-stopped
    environment:
      DISCORD_TOKEN: "TON_TOKEN"
      DISCORD_CHANNEL_ID: "TON_CHANNEL_ID"
      TIMEZONE: "Europe/Paris"
    command: sh -c "pip install --no-cache-dir -r requirements.txt && python bot.py"
    volumes:
      - /mnt/hdd/storage/discord-presence-bot/app:/app
```

---

# 🔹 6. Lancer le bot

```bash
docker compose up -d
```

---

# 🔹 7. Vérifier

```bash
docker logs -f discord-presence-bot
```

---

## Résultat attendu

```text
Connecté en tant que ...
```

Dans Discord :

```text
✅ Bot connecté !
```

---

# 🎯 Résultat final

Le bot envoie automatiquement :

| Élément | Valeur |
|---|---|
| jours | lundi → vendredi |
| heures | 09h et 13h |
| salon | Discord |
| mention | @everyone |

---

# ⚠️ Points d’attention

> [!warning]

- ne jamais publier le token
- vérifier l’ID du salon
- autoriser la permission `Mention Everyone`
- vérifier l’heure système / timezone
- redémarrer le conteneur après modification

---

# 🛠️ Commandes utiles

## Voir les logs

```bash
docker logs -f discord-presence-bot
```

---

## Redémarrer

```bash
docker restart discord-presence-bot
```

---

## Stopper

```bash
docker compose down
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Discord Bot | envoie le rappel |
| APScheduler | planifie les horaires |
| Docker Compose | déploiement |
| Token | authentification |
| Channel ID | salon cible |

---

# 🎯 Conclusion

Ce bot permet :

- d’automatiser les rappels
- d’éviter les oublis
- de centraliser l’envoi dans Discord

👉 utile pour les formations, équipes et groupes de travail.