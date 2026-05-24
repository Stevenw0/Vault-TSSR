# 🧩 Classes PowerShell

## 📌 Définition

Les **classes PowerShell** permettent de définir des **objets personnalisés** avec :

- des **propriétés**
- des **méthodes**
- un **constructeur**

Elles introduisent une approche **orientée objet (POO)** dans PowerShell.

---

# 🧠 Principe

Une classe permet de modéliser une entité.

Exemple :

```
Utilisateur → nom, âge, méthode afficher()
```

---

# ⚙️ Syntaxe de base

```powershell
class Personne {
    [string]$Nom
    [int]$Age
}
```

---

# 📦 Créer un objet

```powershell
$p = [Personne]::new()
$p.Nom = "Alice"
$p.Age = 30
```

---

# 📊 Propriétés

| Élément | Description |
|---|---|
| $Nom | propriété string |
| $Age | propriété int |

---

# ⚙️ Ajouter un constructeur

```powershell
class Personne {
    [string]$Nom
    [int]$Age

    Personne([string]$nom, [int]$age) {
        $this.Nom = $nom
        $this.Age = $age
    }
}
```

---

## Utilisation

```powershell
$p = [Personne]::new("Alice", 30)
```

---

# ⚙️ Ajouter une méthode

```powershell
class Personne {
    [string]$Nom
    [int]$Age

    Personne([string]$nom, [int]$age) {
        $this.Nom = $nom
        $this.Age = $age
    }

    [void]Afficher() {
        Write-Output "Nom : $($this.Nom), Age : $($this.Age)"
    }
}
```

---

## Appel méthode

```powershell
$p.Afficher()
```

---

# 📊 Méthodes

| Type | Description |
|---|---|
| void | ne retourne rien |
| string | retourne texte |
| int | retourne nombre |

---

# ⚙️ Méthode avec retour

```powershell
[string]GetNom() {
    return $this.Nom
}
```

---

# 🧬 Héritage

PowerShell supporte l’héritage.

```powershell
class Employe : Personne {
    [string]$Poste
}
```

---

# 📦 Utilisation héritage

```powershell
$e = [Employe]::new()
$e.Nom = "Bob"
$e.Poste = "Admin"
```

---

# ⚙️ Méthodes statiques

```powershell
class Utils {
    static [int]Addition([int]$a, [int]$b) {
        return $a + $b
    }
}
```

---

## Utilisation

```powershell
[Utils]::Addition(2,3)
```

---

# 📊 Classes vs objets simples

| Approche | Avantage |
|---|---|
| PSCustomObject | rapide |
| Classe | structuré, réutilisable |

---

# ⚠️ Limitations

| Limite | Description |
|---|---|
| version | PowerShell 5+ |
| rigidité | moins flexible |
| usage | scripts avancés |

---

# 🧠 Bonnes pratiques

| Conseil | Description |
|---|---|
| nom clair | Personne, Serveur |
| typage | définir types |
| méthodes simples | lisibilité |
| éviter complexité | garder simple |

---

# 📦 Exemple complet

```powershell
class Serveur {
    [string]$Nom
    [string]$IP

    Serveur([string]$nom, [string]$ip) {
        $this.Nom = $nom
        $this.IP = $ip
    }

    [void]Afficher() {
        Write-Output "Serveur : $($this.Nom) - IP : $($this.IP)"
    }
}

$s = [Serveur]::new("AD1", "192.168.1.1")
$s.Afficher()
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| class | définition objet |
| propriétés | données |
| méthodes | actions |
| constructeur | initialisation |
| héritage | réutilisation |

Les classes PowerShell permettent de **structurer les scripts complexes et d’adopter une approche orientée objet dans l’automatisation**.