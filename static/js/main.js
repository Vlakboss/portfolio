// Ahoj!!!
sidebar = document.getElementById("sidebar");
sidebarButton = document.getElementById("sidebar-button-img");
sidebarState = 0;

function closeSidebar() {
    sidebar.style.display = 'none';
    sidebarButton.src = '/static/img/menu_icon.png';
    sidebarState = 0;
}

function openSidebar() {
    sidebar.style.display = 'flex';
    sidebarButton.src = '/static/img/close_icon.png';
    sidebarState = 1;
}

function toggleSidebar() {
    if (sidebarState != 0) {
        closeSidebar();
    }
    else {
        openSidebar();
    }
}

addEventListener("resize", (event) => {
    if (window.innerWidth > 855) {
        if (sidebarState != 1) {
            openSidebar();
        }
    }
});