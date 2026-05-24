# 📏 Unités de stockage : KB, KiB, MB, MiB, GB, GiB, TB, TiB

## 📌 Pourquoi existe-t-il deux types d’unités ?

Il existe **deux systèmes de mesure** pour le stockage informatique :

- **Système décimal (base 10)** → utilisé par les constructeurs
    
- **Système binaire (base 2)** → utilisé par les systèmes d’exploitation
    

Cette différence explique pourquoi la capacité affichée n’est pas toujours celle annoncée.

---

## 🔢 Système décimal (SI) – KB, MB, GB, TB

Basé sur **10** (multiples de 1 000).

|Unité|Valeur|
|---|---|
|KB|1 000 octets|
|MB|1 000 000 octets|
|GB|1 000 000 000 octets|
|TB|1 000 000 000 000 octets|

> [!info]  
> Ce système est utilisé par les **fabricants de disques**, clés USB et SSD.

---

## 💻 Système binaire (IEC) – KiB, MiB, GiB, TiB

Basé sur **2** (multiples de 1 024).

|Unité|Valeur|
|---|---|
|KiB|1 024 octets|
|MiB|1 048 576 octets|
|GiB|1 073 741 824 octets|
|TiB|1 099 511 627 776 octets|

> [!note]  
> Ces unités ont été normalisées par la **CEI (IEC)** pour éviter les confusions.

---

## 🪟 Cas de Windows

> [!warning]  
> Windows **calcule en binaire**, mais **affiche des unités décimales**.

Exemple :

- Disque annoncé : **1 TB**
    
- Windows affiche : **~931 GB**
    
- En réalité : **931 GiB**
    

> [!summary]  
> Windows affiche **GB**, mais ce sont en fait des **GiB**.

---

## 🐧 Linux et macOS

> [!info]
> 
> - Linux affiche généralement **GiB / MiB**
>     
> - macOS affiche **GB / TB** (base 10)
>     

---

## 🔍 Comparaison rapide

|Décimal|Binaire|
|---|---|
|KB|KiB|
|MB|MiB|
|GB|GiB|
|TB|TiB|

➡️ Les unités binaires sont **toujours plus grandes**.

---

## 🤔 Pourquoi c’est important ?

- Comprendre la différence entre capacité annoncée et réelle
    
- Éviter les erreurs de calcul en stockage
    
- Question fréquente en **support informatique** et **entretien**
    

---

## 🧠 À retenir

> [!summary]
> 
> - KB / MB / GB / TB → base 10
>     
> - KiB / MiB / GiB / TiB → base 2
>     
> - Windows mélange affichage et calcul
>     
> - La différence augmente avec la taille du disque
>