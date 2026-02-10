// Update CSS variables from configuration (SAFE)
function applyTheme() {
    const config = window.VALENTINE_CONFIG || {};
    const root = document.documentElement;

    const colors = config.colors || {};
    const animations = config.animations || {};

    // Apply colors (with fallbacks)
    root.style.setProperty('--background-color-1', colors.backgroundStart || '#ffafbd');
    root.style.setProperty('--background-color-2', colors.backgroundEnd || '#ffc3a0');
    root.style.setProperty('--button-color', colors.buttonBackground || '#ff6b6b');
    root.style.setProperty('--button-hover', colors.buttonHover || '#ff8787');
    root.style.setProperty('--text-color', colors.textColor || '#ff4757');

    // Apply animation settings (with fallbacks)
    root.style.setProperty('--float-duration', animations.floatDuration || '15s');
    root.style.setProperty('--float-distance', animations.floatDistance || '50px');
    root.style.setProperty('--bounce-speed', animations.bounceSpeed || '0.5s');
    root.style.setProperty('--heart-explosion-size', animations.heartExplosionSize ?? 1.5);
}

// Apply theme when the page loads
window.addEventListener('DOMContentLoaded', applyTheme);