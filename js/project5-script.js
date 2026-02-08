document.addEventListener('DOMContentLoaded', () => {
    // 1. 手機版選單切換功能
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // 切換 active class 來顯示/隱藏選單
            navLinks.classList.toggle('active');
            
            // 漢堡按鈕動畫效果 (可選)
            menuToggle.classList.toggle('is-active');
        });
    }

    // 2. 點擊連結後自動關閉選單 (手機版優化)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});