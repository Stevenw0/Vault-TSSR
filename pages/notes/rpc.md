L'appel de procédure à distance (RPC, Remote Procedure Call) est un [protocole](https://www.lemagit.fr/definition/Protocole) qu'un programme peut utiliser pour solliciter un service auprès d'un programme situé sur un autre ordinateur d'un [réseau](https://www.lemagit.fr/definition/Reseau) dont il n'a pas besoin de connaître les détails. On l'appelle parfois appel de fonction ou de sous-routine.

Le RPC s'appuie sur le modèle [client/serveur](https://www.lemagit.fr/definition/Architecture-client-serveur-ou-modele-client-serveur). Le programme demandeur est le client et le programme assurant le service, le [serveur](https://www.lemagit.fr/definition/Serveur). Comme un appel de procédure locale ou habituelle, un remote procedure call est une opération synchrone : le programme demandeur attend la fin du traitement de la procédure distante pour reprendre. Toutefois, le recours à des [threads](https://www.lemagit.fr/definition/thread-fil) ou processus légers à espace d'adressage commun permet l'exécution simultanée de plusieurs appels de procédure à distance.

## Procédure de message des RPC

Quand des instructions de programme qui utilisent un [framework](https://www.lemagit.fr/definition/Framework) RPC sont compilées en un programme exécutable, un fichier stub est inclus dans le code compilé pour représenter le code de la procédure distante. Quand le programme s'exécute et que la procédure est appelée, le fichier stub reçoit la demande et la fait suivre à un programme d'exécution client sur l'ordinateur local.

  
_Explication du RPC  
_

Le programme d'exécution client sait comment s'adresser à l'application serveur de l'ordinateur distant et envoie par le réseau un message demandant la procédure à distance. De même, le serveur comprend un fichier stub et un programme d'exécution qui communiquent avec la procédure distante proprement dite. Les protocoles de type demande-réponse suivent la même méthode.

## Modèles RPC et autres méthodes de communication client-serveur

Il existe plusieurs modèles RPC et implémentations de traitements distribués. Parmi les plus courants se trouve l'environnement d'informatique distribuée DCE (Distributed Computing Environment) de l'Open Software Foundation. L'IEEE (Institute of Electrical and Electronics Engineers) définit le RPC dans la spécification _ISO Remote Procedure Call Specification_, ISO/IEC CD 11578 N6561, ISO/IEC, novembre 1991.

Le RPC couvre les [couches de transport](https://www.lemagit.fr/definition/Couche-4-couche-transport) et d'application du [modèle OSI](https://www.lemagit.fr/definition/Modele-OSI) (Open Systems Interconnection) de communication réseau. Il facilite le développement d'une application incluant plusieurs programmes distribués sur un réseau.

Parmi les autres méthodes de communication client-serveur, citons les files d'attente de messages et les communications évoluées de programme à programme APPC d'IBM.