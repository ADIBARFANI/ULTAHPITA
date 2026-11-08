document.getElementById('btnRayakan').addEventListener('click', function(e) {
    e.preventDefault(); 

    // 1. EFEK LEDAKAN CONFETTI GANDA (Durasi 4 Detik)
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

    // 2. PEMUTARAN MUSIK KOTAK MUSIK SECARA AMAN
    const musik = document.getElementById('bgMusic');
    if (musik && musik.paused) {
        musik.play().catch(function(error) {
            console.log("Musik otomatis diblokir browser atau file tidak ditemukan, efek confetti tetap aman berjalan.");
        });
    }
});
