document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menu && navList) {
        menu.addEventListener('click', function() {
            navList.classList.toggle('active');
            // 可選：加入選單開啟時的漢堡動畫標籤
            menu.classList.toggle('is-active');
        });
    }
});