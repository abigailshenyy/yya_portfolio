document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // 確保 ID 存在才執行
    if (menu && navList) {
        // 點擊漢堡按鈕
        menu.addEventListener('click', function() {
            navList.classList.toggle('active');
            menu.classList.toggle('is-active');
            console.log("Menu Toggle!"); 
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