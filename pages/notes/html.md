<!DOCTYPE html>

border: 1px solid var(--border);

border-radius: 18px;

padding: 22px;

}

  

.card h2 {

font-size: 1.15rem;

margin-bottom: 12px;

}

  

.card p {

color: var(--muted);

line-height: 1.6;

font-size: 0.97rem;

}

  

.footer {

padding: 18px 48px 32px;

color: var(--muted);

text-align: center;

font-size: 0.92rem;

}

  

code {

background: rgba(255,255,255,0.08);

padding: 2px 8px;

border-radius: 8px;

color: #fde68a;

}

  

@media (max-width: 640px) {

.hero,

.grid,

.footer {

padding-left: 22px;

padding-right: 22px;

}

  

.hero {

padding-top: 40px;

}

}

</style>

</head>

<body>

<main class="container">

<section class="hero">

<div class="badge">Apache HTTP Server</div>

<h1>Votre serveur Apache fonctionne correctement</h1>

<p class="subtitle">

Cette page de démonstration confirme que votre hébergement web est actif et prêt à servir vos applications,

sites vitrines ou outils internes.

</p>

<div class="actions">

<a class="btn btn-primary" href="#services">Voir les services</a>

<a class="btn btn-secondary" href="#infos">Informations serveur</a>

</div>

</section>

  

<section class="grid" id="services">

<article class="card">

<h2>Déploiement rapide</h2>

<p>

Placez vos fichiers dans le répertoire racine web, comme <code>/var/www/html</code>, puis rechargez Apache.

</p>

</article>

  

<article class="card">

<h2>Configuration flexible</h2>

<p>

Gérez vos virtual hosts, redirections, certificats TLS et règles de sécurité avec une configuration claire.

</p>

</article>

  

<article class="card" id="infos">

<h2>Prêt pour la production</h2>

<p>

Activez les modules nécessaires comme <code>rewrite</code>, <code>ssl</code> ou <code>headers</code> selon vos besoins.

</p>

</article>

</section>

  

<div class="footer">

Page générée pour Apache • Personnalisez le contenu, le domaine et les styles selon votre projet.

</div>

</main>

</body>

</html>