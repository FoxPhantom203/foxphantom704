// season.js - Handles seasonal logic and time travel

let currentSeason = 'summer'; // default

const seasonConfig = {
    spring: { name: 'March (Spring)', class: 'spring' },
    summer: { name: 'June (Summer)', class: 'summer' },
    autumn: { name: 'September (Autumn)', class: 'autumn' },
    winter: { name: 'December (Winter)', class: 'winter' }
};

const seasonsOrder = ['spring', 'summer', 'autumn', 'winter'];

function getRealSeason() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
}

function applySeason(season) {
    currentSeason = season;
    document.body.classList.remove(...Object.keys(seasonConfig));
    document.body.classList.add(seasonConfig[season].class);

    // Clear previous elements
    const container = document.getElementById('season-elements') || document.createElement('div');
    container.id = 'season-elements';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1';
    if (!document.getElementById('season-elements')) document.body.appendChild(container);
    container.innerHTML = '';

    console.log(`%cSeason changed to ${seasonConfig[season].name}`, 'color: #a5b4fc; font-weight: bold;');
}

export { applySeason, getRealSeason, seasonsOrder, seasonConfig };