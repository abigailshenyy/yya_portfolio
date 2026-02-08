document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menu && navList) {
        // 切換手機選單
        menu.addEventListener('click', function() {
            navList.classList.toggle('active');
            menu.classList.toggle('is-active'); // 如果 CSS 有設定漢堡變叉叉
        });

        // 點擊連結後自動關閉選單
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menu.classList.remove('is-active');
            });
        });
    }
});