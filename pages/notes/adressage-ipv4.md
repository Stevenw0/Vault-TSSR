# 🌐 Adressage IP – A, B et C

## 📌 Généralités
- Une **adresse IP** est codée sur **32 bits**
- Format général :  
  **`<net-id><host-id>`**

### 🔎 Définitions
- **Net-ID** : identificateur du réseau  
- **Host-ID** : identificateur de la machine  

---

## 🅰️ Classe A

### 📍 Intervalle
**[1.0.0.0 – 127.255.255.255]**

### 🧱 Structure binaire
- **Net-ID** : `0XXXXXXX`
- **Host-ID** : `XXXXXXXX.XXXXXXXX.XXXXXXXX` → **24 bits**

### 🔢 Valeurs du 1er octet
| Type | Binaire | Décimal |
|----|----|----|
| Minimum | `00000000` | 0 |
| Maximum | `01111111` | 127 |

### 📊 Capacités
- **Nombre de réseaux** :  
  `2⁷ = 128 réseaux`
- **Nombre de machines par réseau** :  
  `2²⁴ - 2 = 16 777 214 machines`

> ⚠️ `-2` correspond à :
> - 1 adresse réseau (host-id = 0)
> - 1 adresse de diffusion (host-id = 255.255.255)

---

## 🅱️ Classe B

### 📍 Intervalle
**[128.0.0.0 – 191.255.255.255]**

### 🧱 Structure binaire
- **Net-ID** : `10XXXXXX.XXXXXXXX` → **14 bits**
- **Host-ID** : `XXXXXXXX.XXXXXXXX` → **16 bits**

### 🔢 Valeurs du 1er octet
| Type | Binaire | Décimal |
|----|----|----|
| Minimum | `10000000` | 128 |
| Maximum | `10111111` | 191 |

### 📊 Capacités
- **Nombre de réseaux** :  
  `2¹⁴ = 16 384 réseaux`
- **Nombre de machines par réseau** :  
  `2¹⁶ - 2 = 65 534 machines`

---

## 🅲 Classe C

### 📍 Intervalle
**[192.0.0.0 – 223.255.255.255]**

### 🧱 Structure binaire
- **Net-ID** : `110XXXXX.XXXXXXXX.XXXXXXXX` → **21 bits**
- **Host-ID** : `XXXXXXXX` → **8 bits**

### 🔢 Valeurs du 1er octet
| Type | Binaire | Décimal |
|----|----|----|
| Minimum | `11000000` | 192 |
| Maximum | `11011111` | 223 |

### 📊 Capacités
- **Nombre de réseaux** :  
  `2²¹ = 2 097 152 réseaux`
- **Nombre de machines par réseau** :  
  `2⁸ - 2 = 254 machines`

---

## 🧠 Résumé rapide

| Classe | Bits Net-ID | Bits Host-ID | Réseaux | Machines / réseau |
|------|-----------|-------------|--------|------------------|
| A | 7 | 24 | 128 | 16 777 214 |
| B | 14 | 16 | 16 384 | 65 534 |
| C | 21 | 8 | 2 097 152 | 254 |

---