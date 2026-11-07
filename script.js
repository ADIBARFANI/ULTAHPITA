function bukaKado() {
    // 1. Pindah halaman ke ucapan ulang tahun
    document.getElementById('welcome-page').classList.remove('active');
    document.getElementById('wish-page').classList.add('active');
    
    // 2. Mainkan musik otomatis saat tombol kado diklik
    const musik = document.getElementById('bg-music');
    musik.play().catch(error => {
        console.log("Autoplay diblokir oleh sistem keamanan browser:", error);
    });

    // 3. Deteksi lagu selesai untuk otomatis berhenti
    musik.onended = function() {
        musik.pause();
        musik.currentTime = 0; 
        console.log("Lagu selesai dan sistem audio dinonaktifkan.");
    };
}

function tampilkanPesanAkhir() {
    document.getElementById('wish-page').classList.remove('active');
    document.getElementById('final-page').classList.add('active');
}

function hindariTombol() {
    const btnNo = document.getElementById('btn-no');
    
    // Memberikan koordinat acak agar tombol berpindah tempat
    const x = Math.random() * (window.innerWidth < 400 ? 60 : 160) - 60;
    const y = Math.random() * 120 - 60;
    
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}
