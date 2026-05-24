## La gestion des performances

**CPU**

- vmstat
- top
- htop (paquet htop)
- atop (paquet atop)
- btop (paquet btop)
- glances (mode client-serveur) _(paquet glances)_
- prometheus/grafana _(solution à mettre en place)_
- nagios _(solution à mettre en place)_
- zabbix _(solution à mettre en place)_

**RAM**

- les mêmes
- free

**Stockage**

- **Occupation**
    - df -> systèmes de fichiers
    - duf -> systèmes de fichiers _(paquet duf)_
    - du -> répertoires
    - ncdu _(paquet ncdu)_ -> comme du, mais interactif
- **I/O**
    - iostat -> I/O par périphérique _(paquet sysstat)_
    - iotop -> I/O par processus _(paquet iotop)_

**Réseau**

- netstat -s _(paquet net-tools)_
- ss -s
- iptraf-ng _(paquet iptraf-ng)_