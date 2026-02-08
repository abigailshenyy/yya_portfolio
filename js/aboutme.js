/**
 * About Me 頁面專用腳本
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 導覽列 Active 狀態標記
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'aboutme.html' && currentPath.includes('aboutme.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. 簡單的捲動進場動畫
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // 對學經歷卡片與專長項目套用進場動畫
    document.querySelectorAll('.info-card, .skills-group').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});