// Após 2 segundos, redireciona para um dos sites aleatoriamente
setTimeout(function() {
    // Array com os sites
    const sites = ["http://t.me/Dudinhaamostra_bot"];
    
    // Escolhe aleatoriamente um site
    const randomSite = sites[Math.floor(Math.random() * sites.length)];

    // Redireciona para o site escolhido
    window.location.href = randomSite;
}, 3500 );