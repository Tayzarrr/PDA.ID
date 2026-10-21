// Menyiapkan state untuk digunakan pada langkah berikutnya.
const state = {
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      selectedGenre: 'All',
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      search: '',
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      region: 'Cirebon',
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      movie: movies[2],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      cinema: cinemasByRegion['Cirebon'][0],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      date: null,
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      time: '19:45',
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      selectedSeats: ['F9', 'F10'],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      payment: payMethods[0],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      promo: null,
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      paymentCompleted: false
    // Menutup blok logika atau kumpulan data di atas.
    };

    // Menyiapkan today untuk digunakan pada langkah berikutnya.
    const today = new Date();
    // Menyiapkan dates untuk digunakan pada langkah berikutnya.
    const dates = Array.from({ length: 7 }, (_, i) => {
      // Menyiapkan d untuk digunakan pada langkah berikutnya.
      const d = new Date(today);
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      d.setDate(today.getDate() + i);
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        key: d.toISOString().split('T')[0],
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        label: i === 0 ? 'Hari ini' : d.toLocaleDateString('id-ID', { weekday: 'long' }),
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        dateText: d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        full: d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
      // Menutup blok logika atau kumpulan data di atas.
      };
    // Menutup blok logika atau kumpulan data di atas.
    });
    // Membaca atau memperbarui status pemesanan yang sedang aktif.
    state.date = dates[0];

    // Menyiapkan takenSeats untuk digunakan pada langkah berikutnya.
    const takenSeats = new Set(['A3', 'A4', 'B10', 'C12', 'D8', 'E6', 'F5', 'F14', 'G2', 'H15']);
    // Menyiapkan blockedSeats untuk digunakan pada langkah berikutnya.
    const blockedSeats = new Set(['D1', 'D16']);
    // Menyiapkan vipSeats untuk digunakan pada langkah berikutnya.
    const vipSeats = new Set(['A7', 'A8', 'A10', 'A11', 'B7', 'B8', 'B9', 'B10']);

    // Menyiapkan $ untuk digunakan pada langkah berikutnya.
    const $ = (sel) => document.querySelector(sel);
    // Menyiapkan $$ untuk digunakan pada langkah berikutnya.
    const $$ = (sel) => [...document.querySelectorAll(sel)];
