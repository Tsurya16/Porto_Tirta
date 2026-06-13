// ==========================================
// 1. Logika Ganti Bahasa (IND / ENG)
// ==========================================
function setLanguage(lang) {
    const indElements = document.querySelectorAll('.lang-ind');
    const engElements = document.querySelectorAll('.lang-eng');
    
    const btnInd = document.getElementById('btn-ind');
    const btnEng = document.getElementById('btn-eng');

    if (lang === 'ind') {
        indElements.forEach(el => el.classList.remove('hidden'));
        engElements.forEach(el => el.classList.add('hidden'));
        
        btnInd.classList.add('text-red-500');
        btnInd.classList.remove('hover:text-red-500');
        btnEng.classList.remove('text-red-500');
        btnEng.classList.add('hover:text-red-500');
    } else {
        indElements.forEach(el => el.classList.add('hidden'));
        engElements.forEach(el => el.classList.remove('hidden'));
        
        btnEng.classList.add('text-red-500');
        btnEng.classList.remove('hover:text-red-500');
        btnInd.classList.remove('text-red-500');
        btnInd.classList.add('hover:text-red-500');
    }
}

// ==========================================
// 2. Logika Menu Mobile (Hamburger)
// ==========================================
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const icon = btn.querySelector('i');

// Buka/Tutup Menu
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    
    if(menu.classList.contains('hidden')){
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Tutup otomatis saat link diklik
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ==========================================
// 3. Logika "Tampilkan Lebih Banyak" Portofolio
// ==========================================
let isPortfolioExpanded = false;

function togglePortfolio() {
    const extraItems = document.querySelectorAll('.extra-portfolio');
    const textInd = document.getElementById('toggle-text-ind');
    const textEng = document.getElementById('toggle-text-eng');

    isPortfolioExpanded = !isPortfolioExpanded;

    extraItems.forEach(item => {
        if (isPortfolioExpanded) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });

    if (isPortfolioExpanded) {
        textInd.innerText = "SEMBUNYIKAN SEBAGIAN";
        textEng.innerText = "SHOW LESS";
    } else {
        textInd.innerText = "TAMPILKAN LEBIH BANYAK";
        textEng.innerText = "SHOW MORE";
    }
}