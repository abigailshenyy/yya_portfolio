
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menu && navList) {
        // 點擊漢堡選單
        menu.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // 漢堡按鈕轉向效果
            menu.classList.toggle('is-active');
        });

        // 點擊選單連結後自動關閉
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }
});