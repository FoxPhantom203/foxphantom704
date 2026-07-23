// js/season.js - Pure global seasonal logic

window.getRealSeason = function() {
    const now = new Date();
    const month = now.getMonth() + 1;
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
};

window.applySeason = function(season) {
    document.body.classList.remove('spring', 'summer', 'autumn', 'winter');
    document.body.classList.add(season);

    const container = document.getElementById('season-elements');
    if (container) container.innerHTML = '';

    if (season === 'summer') {
        const sun = document.createElement('div');
        sun.className = 'sun';
        container.appendChild(sun);
    } else if (season === 'winter') {
        const snowLayer = document.createElement('div');
        snowLayer.className = 'snow-layer';
        for (let i = 0; i < 45; i++) {
            const p = document.createElement('div');
            p.className = 'snow-particle';
            p.textContent = '❄';
            p.style.left = Math.random() * 100 + 'vw';
            p.style.animationDuration = (Math.random() * 7 + 8) + 's';
            p.style.opacity = 0.6 + Math.random() * 0.4;
            p.style.fontSize = '1.1rem';
            snowLayer.appendChild(p);
        }
        container.appendChild(snowLayer);
    }

    console.log(`%cSwitched to ${season.toUpperCase()} season`, 'color:#a5b4fc');
};