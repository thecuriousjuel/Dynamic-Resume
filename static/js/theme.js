// Dark mode logic: set theme on load, toggle, and save preference
function setTheme(theme) {
    document.body.setAttribute("data-theme", theme);
}

function getPreferredTheme() {
    return localStorage.getItem("theme") || "light";
}

function toggleTheme() {
    const current = document.body.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.getElementById("theme-toggle-icon").textContent =
        next === "dark" ? "☀️" : "🌙";
}

window.addEventListener("DOMContentLoaded", function () {
    const theme = getPreferredTheme();
    setTheme(theme);
    // Set correct icon
    setTimeout(function () {
        var btn = document.getElementById("theme-toggle-icon");
        if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }, 0);
});
