function bukaKado() {
    // 1. Pindah halaman dari kado ke ucapan ulang tahun (Halaman 2)
    document.getElementById('welcome-page').classList.remove('active');
    document.getElementById('wish-page').classList.add('active');
    
    // 2. Mainkan musik lokal otomatis begitu kado diklik
    const musik = document.getElementById('bg-music');
    musik.play().catch(error => {
        console.log("Autoplay diblokir oleh browser:", error);
    });

    // 3. Deteksi lagu selesai untuk otomatis berhenti
    musik.onended = function() {
        musik.pause();
        musik.currentTime = 0; 
        console.log("Lagu selesai dan musik dinonaktifkan.");
    };
}

function tampilkanPesanAkhir() {
    // Pindah halaman ke bagian tagih traktiran (Halaman 3)
    document.getElementById('wish-page').classList.remove('active');
    document.getElementById('final-page').classList.add('active');
}

function tampilkanHalamanRahasia() {
    // Pindah halaman ke ucapan serius/doa penutup (Halaman 4)
    document.getElementById('final-page').classList.remove('active');
    document.getElementById('secret-page').classList.add('active');
}

function hindariTombol() {
    const btnNo = document.getElementById('btn-no');
    
    // Memberikan koordinat acak agar tombol "Nggak Mau" terus menghindar saat didekati kursor
    const x = Math.random() * (window.innerWidth < 400 ? 60 : 160) - 60;
    const y = Math.random() * 120 - 60;
    
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}
