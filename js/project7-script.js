
/**
 * Project 7 - 手機版選單邏輯
 */
document.addEventListener('DOMContentLoaded', function() {
    // 取得漢堡按鈕與導覽選單元素
    const menu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // 確保元素存在才執行，防止在其他頁面報錯
    if (menu && navList) {
        
        // 1. 點擊漢堡按鈕切換選單
        menu.addEventListener('click', function() {
            // 切換選單的顯示狀態
            navList.classList.toggle('active');
            // 切換漢堡按鈕變叉叉的動畫效果
            menu.classList.toggle('is-active');
            console.log("Menu Toggle Active");
        });

        // 2. 點擊選單內的連結後，自動關閉選單 (手機版點擊後跳轉用)
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menu.classList.remove('is-active');
            });
        });

        // 3. 點擊選單以外的地方自動關閉 (選配功能，增加體驗)
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                menu.classList.remove('is-active');
            }
        });
    }
});