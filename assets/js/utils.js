// Fungsi rupiah: memformat nilai rupiah rupiah.
function rupiah(num) {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return new Intl.NumberFormat('id-ID', {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        style: 'currency',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        currency: 'IDR',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        maximumFractionDigits: 0
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }).format(num);
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi currentCinemas: mengambil pilihan aktif current cinemas.
    function currentCinemas() {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return cinemasByRegion[state.region] || [];
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi escapeXml: mengamankan escape xml.
    function escapeXml(str) {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi breakTitle: memecah break title.
    function breakTitle(title, maxChars) {
      // Menyiapkan words untuk digunakan pada langkah berikutnya.
      const words = title.split(' ');
      // Menyiapkan lines untuk digunakan pada langkah berikutnya.
      const lines = [];
      // Menyiapkan current untuk digunakan pada langkah berikutnya.
      let current = '';
      // Mengulangi pengolahan untuk setiap data atau indeks yang ditentukan.
      for (const word of words) {
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if ((current + ' ' + word).trim().length <= maxChars) current = (current + ' ' + word).trim();
        // Menjalankan alternatif ketika kondisi sebelumnya tidak terpenuhi.
        else {
          // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
          if (current) lines.push(current);
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          current = word;
        // Menutup blok logika atau kumpulan data di atas.
        }
      // Menutup blok logika atau kumpulan data di atas.
      }
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (current) lines.push(current);
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return lines.slice(0, 3);
    // Menutup blok logika atau kumpulan data di atas.
    }

        

// Fungsi makePosterData: membuat make poster data.
function makePosterData(movie) {
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (posterMap[movie.id]) return posterMap[movie.id];
      // Menyiapkan t untuk digunakan pada langkah berikutnya.
      const t = movieThemes[movie.id];
      // Menyiapkan titleLines untuk digunakan pada langkah berikutnya.
      const titleLines = breakTitle(movie.title, 16);
      // Menyiapkan svg untuk digunakan pada langkah berikutnya.
      const svg = `
      ${/* Menyusun elemen svg. */ ''}<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
        ${/* Menyusun elemen defs. */ ''}<defs>
          ${/* Menyusun elemen linearGradient dengan identitas g. */ ''}<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            ${/* Menyusun elemen stop. */ ''}<stop offset="0%" stop-color="${t.bg1}"/>
            ${/* Menyusun elemen stop. */ ''}<stop offset="55%" stop-color="${t.bg2}"/>
            ${/* Menyusun elemen stop. */ ''}<stop offset="100%" stop-color="${t.bg3}"/>
          ${/* Menutup elemen linearGradient. */ ''}</linearGradient>
          ${/* Menyusun elemen radialGradient dengan identitas r. */ ''}<radialGradient id="r" cx="50%" cy="15%" r="70%">
            ${/* Menyusun elemen stop. */ ''}<stop offset="0%" stop-color="rgba(255,255,255,.55)"/>
            ${/* Menyusun elemen stop. */ ''}<stop offset="100%" stop-color="rgba(255,255,255,0)"/>
          ${/* Menutup elemen radialGradient. */ ''}</radialGradient>
        ${/* Menutup elemen defs. */ ''}</defs>
        ${/* Menyusun elemen rect. */ ''}<rect width="800" height="1000" fill="url(#g)"/>
        ${/* Menyusun elemen circle. */ ''}<circle cx="640" cy="140" r="220" fill="rgba(255,255,255,.08)"/>
        ${/* Menyusun elemen circle. */ ''}<circle cx="150" cy="880" r="200" fill="rgba(255,255,255,.08)"/>
        ${/* Menyusun elemen circle. */ ''}<circle cx="390" cy="250" r="240" fill="url(#r)" opacity=".35"/>
        ${/* Menyusun elemen text. */ ''}<text x="70" y="120" fill="white" font-size="54" font-family="Inter, Arial, sans-serif" font-weight="700" opacity=".88">CineVerse Exclusive</text>
        ${/* Menyusun elemen text. */ ''}<text x="70" y="320" fill="white" font-size="260" font-family="Arial, sans-serif">${t.icon}</text>
        ${/* Menyusun elemen text. */ ''}<text x="70" y="610" fill="white" font-size="80" font-family="Inter, Arial, sans-serif" font-weight="900">${escapeXml(titleLines[0] || '')}</text>
        ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${titleLines[1] ? `<text x="70" y="700" fill="white" font-size="80" font-family="Inter, Arial, sans-serif" font-weight="900">${escapeXml(titleLines[1])}</text>` : ''}
        ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${titleLines[2] ? `<text x="70" y="790" fill="white" font-size="80" font-family="Inter, Arial, sans-serif" font-weight="900">${escapeXml(titleLines[2])}</text>` : ''}
        ${/* Menyusun elemen text. */ ''}<text x="70" y="875" fill="rgba(255,255,255,.85)" font-size="34" font-family="Inter, Arial, sans-serif">${escapeXml(movie.genre)} • ${movie.duration} • ${movie.rating}</text>
        ${/* Menyusun elemen rect. */ ''}<rect x="70" y="908" width="210" height="46" rx="23" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.25)"/>
        ${/* Menyusun elemen text. */ ''}<text x="175" y="938" fill="white" font-size="26" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-weight="700">Book Now</text>
      ${/* Menutup elemen svg. */ ''}</svg>`;
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi buildGenres: membentuk build genres.
    function buildGenres() {
      // Menyiapkan base untuk digunakan pada langkah berikutnya.
      const base = ['All'];
      // Menyiapkan unique untuk digunakan pada langkah berikutnya.
      const unique = [...new Set(movies.flatMap(m => m.genre.split(',').map(g => g.trim())))];
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return base.concat(unique);
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi filteredMovies: menyaring filtered movies.
    function filteredMovies() {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return movies.filter(movie => {
        // Menyiapkan genreMatch untuk digunakan pada langkah berikutnya.
        const genreMatch = state.selectedGenre === 'All' || movie.genre.includes(state.selectedGenre);
        // Menyiapkan searchMatch untuk digunakan pada langkah berikutnya.
        const searchMatch = movie.title.toLowerCase().includes(state.search.toLowerCase().trim());
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return genreMatch && searchMatch;
      // Menutup blok logika atau kumpulan data di atas.
      });
    // Menutup blok logika atau kumpulan data di atas.
    }
