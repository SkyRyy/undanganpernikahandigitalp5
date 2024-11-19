// Set the date for the wedding event
let weddingDate = new Date("October 26, 2024 08:00:00").getTime();

let countdownFunction = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = weddingDate - now;

    // Calculations for days, hours, minutes, and seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Output the result in the respective elements
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown is finished
    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);

let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }
            slides[slideIndex-1].style.display = "block"
        }

function handleSubmit(event) {
    event.preventDefault(); // Mencegah form dari submit default

    // Menghilangkan form dan menampilkan pesan "Terima kasih"
    document.getElementById('rsvpForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
}

function submitWish(event) {
    event.preventDefault();

    // Mengambil nilai input dari form
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const attendance = document.getElementById('attendance').value;

    // Membuat elemen HTML baru untuk ucapan yang akan ditambahkan ke daftar
    const wishList = document.getElementById('wishList');
    const wishDiv = document.createElement('div');
    wishDiv.classList.add('wish');

    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = name;

    const attendanceElement = document.createElement('div');
    attendanceElement.classList.add('attendance');
    attendanceElement.textContent = attendance === 'Akan Hadir' ? '✅ Akan Hadir' : '❌ Tidak Hadir';

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    // Menyusun elemen dalam wishDiv
    wishDiv.appendChild(nameElement);
    wishDiv.appendChild(attendanceElement);
    wishDiv.appendChild(messageElement);

    // Menambahkan wishDiv ke wishList
    wishList.appendChild(wishDiv);

    // Mengosongkan form setelah submit
    document.getElementById('wishForm').reset();
}

// Fungsi untuk menambahkan wish ke halaman
function addWishToPage(name, attendance, message) {
    const wishList = document.getElementById('wishList');
    const wishDiv = document.createElement('div');
    wishDiv.classList.add('wish');

    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = name;

    const attendanceElement = document.createElement('div');
    attendanceElement.classList.add('attendance');
    attendanceElement.textContent = attendance === 'Akan Hadir' ? '✅ Akan Hadir' : '❌ Tidak Hadir';

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    // Menyusun elemen dalam wishDiv
    wishDiv.appendChild(nameElement);
    wishDiv.appendChild(attendanceElement);
    wishDiv.appendChild(messageElement);

    // Menambahkan wishDiv ke wishList
    wishList.appendChild(wishDiv);
}

// Fungsi untuk menyimpan ucapan ke LocalStorage
function saveWishToLocalStorage(name, attendance, message) {
    // Ambil data yang sudah ada di LocalStorage
    let wishes = JSON.parse(localStorage.getItem('wishes')) || [];

    // Tambahkan ucapan baru ke array
    wishes.push({ name, attendance, message });

    // Simpan kembali ke LocalStorage
    localStorage.setItem('wishes', JSON.stringify(wishes));
}

// Fungsi untuk mengambil dan menampilkan ucapan yang sudah disimpan di LocalStorage
function loadWishesFromLocalStorage() {
    let wishes = JSON.parse(localStorage.getItem('wishes')) || [];

    // Tambahkan setiap ucapan ke halaman
    wishes.forEach(wish => {
        addWishToPage(wish.name, wish.attendance, wish.message);
    });
}

// Fungsi submit form yang akan menyimpan data ke halaman dan LocalStorage
function submitWish(event) {
    event.preventDefault();

    // Mengambil nilai input dari form
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const attendance = document.getElementById('attendance').value;

    // Tambahkan wish ke halaman
    addWishToPage(name, attendance, message);

    // Simpan wish ke LocalStorage
    saveWishToLocalStorage(name, attendance, message);

    // Mengosongkan form setelah submit
    document.getElementById('wishForm').reset();
}

// Muat ulang ucapan yang sudah ada di LocalStorage saat halaman dimuat
window.onload = function() {
    loadWishesFromLocalStorage();
}

// Copy Teks
function copyText() {
    var textToCopy = document.getElementById("textToCopy").innerText;

    var tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Teks berhasil disalin: " + textToCopy);
}

const audio = document.getElementById('backgroundMusic');
const playPauseButton = document.getElementById('playPauseButton');

// Mulai audio secara otomatis saat halaman dimuat

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}
