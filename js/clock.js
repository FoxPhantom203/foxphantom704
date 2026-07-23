// clock.js - Clock and time travel UI

import { applySeason, seasonsOrder, seasonConfig } from './season.js';

let seasonIndex = 0;

function initClock() {
    const clockEl = document.getElementById('clock');
    if (!clockEl) return;

    function updateTime() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        clockEl.querySelector('#time-display').textContent = timeStr;
    }

    updateTime();
    setInterval(updateTime, 30000);

    clockEl.addEventListener('click', () => {
        seasonIndex = (seasonIndex + 1) % seasonsOrder.length;
        const newSeason = seasonsOrder[seasonIndex];
        applySeason(newSeason);

        const display = document.getElementById('time-display');
        display.textContent = seasonConfig[newSeason].name;
        display.style.transition = 'color 0.4s';
        display.style.color = '#fef08c';

        document.title = `Time Travelling → ${seasonConfig[newSeason].name}`;
        setTimeout(() => document.title = 'FoxPhantom Portfolio Template', 1800);
    });
}

export { initClock };