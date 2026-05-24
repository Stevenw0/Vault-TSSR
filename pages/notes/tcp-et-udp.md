# 🚚 Transport : **TCP et UDP**

^83f312

Ces deux protocoles fonctionnent à la **couche Transport (couche 4 OSI)**.

---

## 🔵 TCP — Transmission Control Protocol

Protocole **orienté connexion**.

  


### Fonctionnement (Three-Way Handshake)

1. **SYN** : le client envoie un numéro de séquence
    
2. **SYN-ACK** : le serveur répond
    
3. **ACK** : le client confirme
    

✔ Connexion maintenue  
✔ Accusé de réception des paquets  
✔ Retransmission si perte

---

### Ports TCP connus

|Port|Service|
|---|---|
|80 / 443|HTTP / HTTPS|
|25, 110, 143, 587, 993, 995|SMTP, POP3, IMAP|
|21|FTP|
|23|Telnet|
|22|SSH|
|445|SMB|
|3389|RDP|

---

## 🟠 UDP — User Datagram Protocol

Protocole **non connecté**.



✔ Pas d’accusé de réception  
✔ Plus rapide  
✔ Moins fiable  
✔ Utilisé quand la vitesse est prioritaire

---

### Ports UDP connus

|Port|Service|
|---|---|
|53|DNS|
|67 / 68|DHCP|
|69|TFTP|
|123|NTP|
|161 / 162|SNMP|
|88|Kerberos|

---

## ⚖️ TCP vs UDP



|Caractéristique|TCP|UDP|
|---|---|---|
|Connexion|Oui|Non|
|Fiabilité|Haute|Faible|
|Vitesse|Moyenne|Rapide|
|Accusé réception|Oui|Non|
|Usage|Web, mails|Streaming, DNS|
