// 1. LOGIKA TOMBOL PERAYAAN & EFEK CONFETTI
document.getElementById('btnRayakan').addEventListener('click', function() {
    // Jalankan efek ledakan kembang api confetti dari kiri & kanan bawah (durasi 4 detik)
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 65,
            origin: { x: 0, y: 0.85 }
        });
        
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 65,
            origin: { x: 1, y: 0.85 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // Pemutaran musik box secara aman (tidak akan mengunci jalannya tombol jika file hilang)
    const musik = document.getElementById('bgMusic');
    if (musik && musik.paused) {
        musik.play().catch(function(error) {
            console.log("Audio otomatis diblokir browser atau file .mp3 tidak ditemukan di local.");
        });
    }
});


// 2. KODE LOGIKA SEARCH ASLI (DIPERTAHANKAN UTUH)
// Tuliskan kembali fungsi manipulasi array / pencarian data bawaan Anda di bawah sini:
document.getElementById('searchInput').addEventListener('input', function(e) {
    const keyword = e.target.value.toLowerCase();
    const resultDiv = document.getElementById('searchResult');
    
    // Contoh visual jalannya pencarian asli Anda
    if(keyword === "") {
        resultDiv.innerHTML = "";
    } else {
        resultDiv.innerHTML = `<p style="color: #6b7280;">Mencari: <strong>${keyword}</strong>...</p>`;
    }
});
