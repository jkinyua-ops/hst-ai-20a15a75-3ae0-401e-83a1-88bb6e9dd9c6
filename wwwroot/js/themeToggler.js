(function () {
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }

    // Expose the toggleTheme function globally
    window.toggleTheme = toggleTheme;

    // Initialize theme on page load
    document.addEventListener('DOMContentLoaded', initTheme);
})();