document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menu && navList) {
        // 1. 點擊漢堡按鈕切換選單
        menu.addEventListener('click', function() {
            navList.classList.toggle('active');
            menu.classList.toggle('is-active'); // 讓漢堡按鈕變叉叉
        });

        // 2. 點擊選單內的連結後，自動關閉選單 (方便手機版跳轉)
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menu.classList.remove('is-active');
            });
        });
    }
});