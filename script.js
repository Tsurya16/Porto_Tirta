function setLanguage(lang) {
    // Mengambil semua elemen dengan class lang-ind dan lang-eng
    const indElements = document.querySelectorAll('.lang-ind');
    const engElements = document.querySelectorAll('.lang-eng');
    
    // Mengambil elemen tombol
    const btnInd = document.getElementById('btn-ind');
    const btnEng = document.getElementById('btn-eng');

    if (lang === 'ind') {
        // Tampilkan Indonesia, Sembunyikan Inggris
        indElements.forEach(el => el.classList.remove('hidden'));
        engElements.forEach(el => el.classList.add('hidden'));
        
        // Ubah gaya tombol (Indo menjadi merah muda)
        btnInd.classList.add('text-red-500');
        btnInd.classList.remove('hover:text-red-500');
        btnEng.classList.remove('text-red-500');
        btnEng.classList.add('hover:text-red-500');
    } else {
        // Tampilkan Inggris, Sembunyikan Indonesia
        indElements.forEach(el => el.classList.add('hidden'));
        engElements.forEach(el => el.classList.remove('hidden'));
        
        // Ubah gaya tombol (Inggris menjadi merah muda)
        btnEng.classList.add('text-red-500');
        btnEng.classList.remove('hover:text-red-500');
        btnInd.classList.remove('text-red-500');
        btnInd.classList.add('hover:text-red-500');
    }
}

// ==========================================
// Logika untuk Hamburger Menu di Mobile
// ==========================================
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const icon = btn.querySelector('i');

// Saat tombol hamburger diklik
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // Munculkan/sembunyikan menu
    
    // Ubah ikon dari garis tiga (bars) menjadi silang (times)
    if(menu.classList.contains('hidden')){
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Tutup menu otomatis setelah salah satu link diklik
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ==========================================
// Logika untuk Fitur "Tampilkan Lebih Banyak"
// ==========================================
let isPortfolioExpanded = false;

function togglePortfolio() {
    // Mengambil elemen portfolio yang disembunyikan dan teks tombol
    const extraItems = document.querySelectorAll('.extra-portfolio');
    const textInd = document.getElementById('toggle-text-ind');
    const textEng = document.getElementById('toggle-text-eng');

    // Ubah status (dari sembunyi ke tampil, atau sebaliknya)
    isPortfolioExpanded = !isPortfolioExpanded;

    extraItems.forEach(item => {
        if (isPortfolioExpanded) {
            item.classList.remove('hidden'); // Tampilkan
        } else {
            item.classList.add('hidden'); // Sembunyikan
        }
    });

    // Ubah teks tombol sesuai dengan status saat ini
    if (isPortfolioExpanded) {
        textInd.innerText = "SEMBUNYIKAN SEBAGIAN";
        textEng.innerText = "SHOW LESS";
    } else {
        textInd.innerText = "TAMPILKAN LEBIH BANYAK";
        textEng.innerText = "SHOW MORE";
    }
}