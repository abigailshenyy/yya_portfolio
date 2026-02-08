/**
 * YYA Studio - Portfolio Script
 * 修正版：處理輪播圖正確導向與手機選單
 */

// --- 1. 全域變數與對照表 ---
let currentIdx = 0; 

// 這裡定義每一張圖點擊後要去的正確 HTML 檔案
// 順序必須依照你 HTML 輪播圖出現的順序 (0~5)
const projectLinks = [
    'project-1.html',
    'project-2.html',
    'project-3.html',
    'project-4.html',
    'project-6.html',
    'project-8.html'
];

// --- 2. 輪播核心函數 ---
function showSlide(n) {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!track || slides.length === 0) return;

    const totalSlides = slides.length;

    // 循環處理索引
    if (n >= totalSlides) n = 0;
    if (n < 0) n = totalSlides - 1;
    currentIdx = n;

    // 更新 CSS 類別
    slides.forEach((s, i) => s.classList.toggle('active', i === currentIdx));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIdx));

    // 根據不同螢幕寬度計算位移
    const isMobile = window.innerWidth <= 768; 
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

    if (isMobile) {
        // 手機版：一次一張，滿版
        track.style.transform = `translateX(-${currentIdx * 100}%)`;
    } else if (isTablet) {
        // 平板版：一次兩張
        track.style.transform = `translateX(-${currentIdx * 50}%)`;
    } else {
        // 電腦版：一次三張，讓 Active 的那一張置中
        const offset = (currentIdx * 33.3333) - 33.3333;
        track.style.transform = `translateX(-${offset}%)`;
    }
}

// --- 3. 點擊事件處理 ---

// 處理輪播圖點擊
function handleSlideClick(n) {
    if (n === currentIdx) {
        // 如果點擊的是中間那張 (active)，就跳轉到對應頁面
        window.location.href = projectLinks[n];
    } else {
        // 如果點擊的是旁邊的圖，就先滑動過去
        showSlide(n);
    }
}

// 處理下方點點點擊
function currentSlide(n) {
    showSlide(n);
}

// --- 4. 初始化與監聽器 ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 手機版選單邏輯 ---
    const menu = document.querySelector('#mobile-menu');
    const navList = document.querySelector('#nav-list');

    if (menu && navList) {
        menu.addEventListener('click', () => {
            navList.classList.toggle('active');
            menu.classList.toggle('is-active');
        });

        // 點擊連結後自動關閉選單
        const links = navList.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menu.classList.remove('is-active');
            });
        });
    }

    // --- 輪播圖滑動邏輯 (手機觸控) ---
    const track = document.getElementById('sliderTrack');
    if (track) {
        let touchStartX = 0;
        track.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});

        track.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) { // 滑動超過 50px 才切換
                diff > 0 ? showSlide(currentIdx + 1) : showSlide(currentIdx - 1);
            }
        }, {passive: true});
    }

    // 初始化第一張投影片
    showSlide(currentIdx);
});

// 視窗大小改變時重新計算位置
window.addEventListener('resize', () => {
    showSlide(currentIdx);
});