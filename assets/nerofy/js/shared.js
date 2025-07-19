const path = "https://nui.nerofy.de/";

loadStyle(path+"assets/bootstrap/css/bootstrap.min.css");
loadScript(path+"assets/bootstrap/js/bootstrap.min.js");
loadStyle(path+"assets/nerofy/css/shared.css");

let theme = "default";
if(localStorage.getItem("style") != null) {
    theme = localStorage.getItem("style");
}
setTheme(theme);

function setTheme(style) {
    style = style.toLocaleLowerCase();
    if(style === "dark" || style === "light") {
        theme = style;
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            style = "dark";
        } else {
            style = "light";
        }
        theme = "default";
    }
    connector("theme."+style);
    document.body.setAttribute('data-bs-theme', style);
    localStorage.setItem("style", theme);
}


function loadStyle(src) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = src;
    document.head.appendChild(link);
}

function loadScript(src) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.src = src;
    document.body.appendChild(script);
}

function loadBootstrap() {
    loadScript(path+"assets/popper/dist/umd/popper.min.js");
    loadScript(path+"assets/bootstrap/js/bootstrap.bundle.min.js");
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

function connector(cmd) {
    console.log("[CONNECTOR] "+cmd);
}

document.addEventListener('DOMContentLoaded', loadBootstrap);