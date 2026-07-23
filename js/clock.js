// js/clock.js - Clock + time travel

window.initClock = function() {
    const clock = document.getElementById('clock');
    if (!clock) return;

    let seasonIndex = 0;
    const seasonCycle = ['spring', 'summer', 'autumn', 'winter'];
    const seasonLabels = ['March (Spring)', 'June (Summer)', 'September (Autumn)', 'December (Winter)'];

    function updateRealTime() {
        const now = new Date();
        document.getElementById('time-display').textContent = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    }

    updateRealTime();
    setInterval(updateRealTime, 20000);

    clock.addEventListener('click', function() {
        seasonIndex = (seasonIndex + 1) % 4;
        const newSeason = seasonCycle[seasonIndex];
        window.applySeason(newSeason);

        const display = document.getElementById('time-display');
        display.textContent = seasonLabels[seasonIndex];
        display.style.color = '#fef08c';

        document.title = 'Time Travelling...';
        setTimeout(() => { document.title = 'FoxPhantom Portfolio Template'; }, 1400);
    });
};