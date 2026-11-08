body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #e0f2fe; /* Latar belakang biru muda */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #1e3a8a;
    overflow: hidden; /* Mencegah munculnya scrollbar saat confetti aktif */
}

.main-card {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 40px 30px;
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(30, 58, 138, 0.1);
    backdrop-filter: blur(8px);
    text-align: center;
    max-width: 450px;
    width: 90%;
    box-sizing: border-box;
    position: relative;
    z-index: 10;
}

h1 {
    font-size: 2.2rem;
    margin: 0 0 10px 0;
    font-weight: 800;
}

p {
    font-size: 1rem;
    color: #4b5563;
    margin: 0 0 25px 0;
    line-height: 1.5;
}

/* Tombol Rayakan dipastikan responsif dan berada di lapisan paling depan */
#btnRayakan {
    padding: 15px 40px;
    font-size: 1.2rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    transition: all 0.2s ease;
    font-weight: bold;
    position: relative;
    z-index: 9999; /* Mengatasi tombol tidak bisa diklik */
    pointer-events: auto; /* Memaksa browser merespon sentuhan/klik */
}

#btnRayakan:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
}

#btnRayakan:active {
    transform: translateY(0);
}
