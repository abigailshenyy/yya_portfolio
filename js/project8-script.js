
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menu && navList) {
        // 點擊漢堡按鈕切換
        menu.addEventListener('click', function() {
            navList.classList.toggle('active');
            menu.classList.toggle('is-active');
        });

        // 點擊連結後自動收起
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menu.classList.remove('is-active');
            });
        });
    }
});