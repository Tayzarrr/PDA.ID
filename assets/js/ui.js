// Fungsi renderRegionOptions: menampilkan ulang render region options.
function renderRegionOptions() {
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#regionSelect').innerHTML = regionOptions.map(region => `
        ${/* Menyusun elemen option. */ ''}<option value="${region}" ${state.region === region ? 'selected' : ''}>${region}</option>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('');
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderGenreFilters: menampilkan ulang render genre filters.
    function renderGenreFilters() {
      // Menyiapkan genres untuk digunakan pada langkah berikutnya.
      const genres = buildGenres();
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#genreFilters').innerHTML = genres.map(genre => `
        ${/* Menyusun elemen button. */ ''}<button class="filter-btn ${state.selectedGenre === genre ? 'active' : ''}" data-genre="${genre}">${genre}</button>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('');
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      $$('#genreFilters [data-genre]').forEach(btn => {
        // Memasang penanganan interaksi pengguna atau perubahan tampilan.
        btn.addEventListener('click', () => {
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          state.selectedGenre = btn.dataset.genre;
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          renderGenreFilters();
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          renderMovies();
        // Menutup blok logika atau kumpulan data di atas.
        });
      // Menutup blok logika atau kumpulan data di atas.
      });
    // Menutup blok logika atau kumpulan data di atas.
    }



    // Fungsi openAllMoviesMobile: membuka open all movies mobile.
    function openAllMoviesMobile() {
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!isMobileView()) return;
      // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
      document.body.classList.add('mobile-all-movies');
      // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
      document.body.classList.add('mobile-wizard');
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      document.body.dataset.mobileStep = '1';
      // Menyiapkan regionLabel untuk digunakan pada langkah berikutnya.
      const regionLabel = $('#mobileMoviesRegion');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (regionLabel) regionLabel.textContent = state.region.toUpperCase();
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      window.scrollTo({ top: 0, behavior: 'smooth' });
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi closeAllMoviesMobile: menutup close all movies mobile.
    function closeAllMoviesMobile() {
      // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
      document.body.classList.remove('mobile-all-movies');
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      setMobileStep(1, true);
    // Menutup blok logika atau kumpulan data di atas.
    }


    // Fungsi detailForMovie: menjalankan logika detail for movie.
    function detailForMovie(movie) {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return movieDetails[movie.id] || {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: movieThemes[movie.id]?.subtitle || 'Detail film belum tersedia.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'PDA.ID Studio',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Cinema Director',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Creative Team',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'PDA.ID Pictures',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Actor A', 'Actor B', 'Actor C', 'Actor D']
      // Menutup blok logika atau kumpulan data di atas.
      };
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi openMovieDetail: membuka open movie detail.
    function openMovieDetail(movieId) {
      // Menyiapkan movie untuk digunakan pada langkah berikutnya.
      const movie = movies.find(item => item.id === movieId);
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!movie) return;

      // Menyiapkan detail untuk digunakan pada langkah berikutnya.
      const detail = detailForMovie(movie);
      // Menyiapkan modal untuk digunakan pada langkah berikutnya.
      const modal = $('#movieDetailModal');
      // Menyiapkan content untuk digunakan pada langkah berikutnya.
      const content = $('#movieDetailContent');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!modal || !content) return;

      // Menyiapkan poster untuk digunakan pada langkah berikutnya.
      const poster = makePosterData(movie);
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      content.innerHTML = `
        ${/* Menyusun elemen div. */ ''}<div class="movie-detail-hero" style="background-image:url('${poster}')">
          ${/* Menyusun elemen img. */ ''}<img class="movie-detail-poster" src="${poster}" alt="${movie.title}" />
          ${/* Menyusun elemen div. */ ''}<div class="movie-detail-main">
            ${/* Menyusun elemen h3. */ ''}<h3>${movie.title}</h3>
            ${/* Menyusun elemen div. */ ''}<div class="movie-detail-meta">
              ${/* Menyusun elemen span. */ ''}<span>${movie.genre}</span>
              ${/* Menyusun elemen span. */ ''}<span>${movie.duration}</span>
              ${/* Menyusun elemen span. */ ''}<span>${movie.rating}</span>
              ${/* Menyusun elemen span. */ ''}<span>2D</span>
            ${/* Menutup elemen div. */ ''}</div>
            ${/* Menyusun elemen p. */ ''}<p class="muted">${movieThemes[movie.id].subtitle}</p>
          ${/* Menutup elemen div. */ ''}</div>
        ${/* Menutup elemen div. */ ''}</div>
        ${/* Menyusun elemen div. */ ''}<div class="movie-detail-body">
          ${/* Menyusun elemen div. */ ''}<div class="movie-detail-tabs">
            ${/* Menyusun elemen button. */ ''}<button class="active" type="button">Details</button>
            ${/* Menyusun elemen button. */ ''}<button type="button">Schedule</button>
          ${/* Menutup elemen div. */ ''}</div>

          ${/* Menyusun elemen div. */ ''}<div class="movie-detail-section">
            ${/* Menyusun elemen h4. */ ''}<h4>Synopsis</h4>
            ${/* Menyusun elemen p. */ ''}<p>${detail.synopsis}</p>
          ${/* Menutup elemen div. */ ''}</div>

          ${/* Menyusun elemen div. */ ''}<div class="movie-detail-info-grid">
            ${/* Menyusun elemen div. */ ''}<div class="movie-detail-info"><span>Producer</span><strong>${detail.producer}</strong></div>
            ${/* Menyusun elemen div. */ ''}<div class="movie-detail-info"><span>Director</span><strong>${detail.director}</strong></div>
            ${/* Menyusun elemen div. */ ''}<div class="movie-detail-info"><span>Writers</span><strong>${detail.writers}</strong></div>
            ${/* Menyusun elemen div. */ ''}<div class="movie-detail-info"><span>Production</span><strong>${detail.production}</strong></div>
          ${/* Menutup elemen div. */ ''}</div>

          ${/* Menyusun elemen div. */ ''}<div class="movie-detail-section">
            ${/* Menyusun elemen h4. */ ''}<h4>Cast</h4>
            ${/* Menyusun elemen div. */ ''}<div class="movie-detail-cast">
              ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${detail.cast.map(name => `
                ${/* Menyusun elemen div. */ ''}<div class="cast-chip">
                  ${/* Menyusun elemen div. */ ''}<div class="cast-avatar">${name.charAt(0)}</div>
                  ${/* Menyusun elemen span. */ ''}<span>${name}</span>
                ${/* Menutup elemen div. */ ''}</div>
              ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('')}
            ${/* Menutup elemen div. */ ''}</div>
          ${/* Menutup elemen div. */ ''}</div>

          ${/* Menyusun elemen div. */ ''}<div class="movie-detail-actions">
            ${/* Menyusun elemen button dengan identitas detailScheduleBtn. */ ''}<button class="detail-schedule-btn" type="button" id="detailScheduleBtn">Lihat Jadwal</button>
            ${/* Menyusun elemen button dengan identitas detailSelectBtn. */ ''}<button class="detail-select-btn" type="button" id="detailSelectBtn">Pilih Film</button>
          ${/* Menutup elemen div. */ ''}</div>
        ${/* Menutup elemen div. */ ''}</div>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`;

      // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
      modal.classList.add('show');

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#detailSelectBtn').addEventListener('click', () => {
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        selectMovie(movie);
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        closeMovieDetail();
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (isMobileView()) setMobileStep(2, true);
        // Menjalankan alternatif ketika kondisi sebelumnya tidak terpenuhi.
        else $('#bookingSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#detailScheduleBtn').addEventListener('click', () => {
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        selectMovie(movie);
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        closeMovieDetail();
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (isMobileView()) setMobileStep(3, true);
        // Menjalankan alternatif ketika kondisi sebelumnya tidak terpenuhi.
        else $('#bookingSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Menutup blok logika atau kumpulan data di atas.
      });
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi closeMovieDetail: menutup close movie detail.
    function closeMovieDetail() {
      // Menyiapkan modal untuk digunakan pada langkah berikutnya.
      const modal = $('#movieDetailModal');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (modal) modal.classList.remove('show');
    // Menutup blok logika atau kumpulan data di atas.
    }


    // Fungsi renderMovies: menampilkan ulang render movies.
    function renderMovies() {
      // Menyiapkan list untuk digunakan pada langkah berikutnya.
      const list = filteredMovies();
      // Menyiapkan grid untuk digunakan pada langkah berikutnya.
      const grid = $('#moviesGrid');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!list.length) {
        // Menyusun isi HTML dinamis untuk komponen tampilan.
        grid.innerHTML = '<div class="empty-msg" style="grid-column:1/-1">Film tidak ditemukan. Coba kata kunci lain.</div>';
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return;
      // Menutup blok logika atau kumpulan data di atas.
      }
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      grid.innerHTML = list.map(movie => `
        ${/* Menyusun elemen article. */ ''}<article class="movie-card" data-open-detail="${movie.id}">
          ${/* Menyusun elemen div. */ ''}<div class="movie-thumb-wrap">
            ${/* Menyusun elemen img. */ ''}<img class="movie-thumb" src="${makePosterData(movie)}" alt="${movie.title}" />
            ${/* Menyusun elemen div. */ ''}<div class="movie-overlay"></div>
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen div. */ ''}<div class="movie-card-body">
            ${/* Menyusun elemen div. */ ''}<div class="chips" style="margin-bottom:10px">
              ${/* Menyusun elemen span. */ ''}<span class="chip">${movie.rating}</span>
              ${/* Menyusun elemen span. */ ''}<span class="chip">${movie.duration}</span>
            ${/* Menutup elemen div. */ ''}</div>
            ${/* Menyusun elemen h4. */ ''}<h4>${movie.title}</h4>
            ${/* Menyusun elemen p. */ ''}<p>${movieThemes[movie.id].subtitle}</p>
            ${/* Menyusun elemen div. */ ''}<div class="card-footer">
              ${/* Menyusun elemen span. */ ''}<span class="muted">${movie.genre}</span>
              ${/* Menyusun elemen button. */ ''}<button class="btn-mini primary" data-select-movie="${movie.id}">Pilih Film</button>
            ${/* Menutup elemen div. */ ''}</div>
          ${/* Menutup elemen div. */ ''}</div>
        ${/* Menutup elemen article. */ ''}</article>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('');
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      $$('[data-select-movie]').forEach(btn => {
        // Memasang penanganan interaksi pengguna atau perubahan tampilan.
        btn.addEventListener('click', (event) => {
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          event.stopPropagation();
          // Menyiapkan movie untuk digunakan pada langkah berikutnya.
          const movie = movies.find(m => m.id === btn.dataset.selectMovie);
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          selectMovie(movie);
          // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
          if (isMobileView()) {
            // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
            setMobileStep(2, true);
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          } else {
            // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
            $('#bookingSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Menutup blok logika atau kumpulan data di atas.
          }
        // Menutup blok logika atau kumpulan data di atas.
        });
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      $$('[data-open-detail]').forEach(card => {
        // Memasang penanganan interaksi pengguna atau perubahan tampilan.
        card.addEventListener('click', (event) => {
          // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
          if (event.target.closest('[data-select-movie]')) return;
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          openMovieDetail(card.dataset.openDetail);
        // Menutup blok logika atau kumpulan data di atas.
        });
      // Menutup blok logika atau kumpulan data di atas.
      });
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi selectMovie: menjalankan logika select movie.
    function selectMovie(movie) {
      // Membaca atau memperbarui status pemesanan yang sedang aktif.
      state.movie = movie;
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      resetPaymentStatus();
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      renderHero();
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      renderSelectedMovie();
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      renderPaymentDetail();
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      renderSummary();
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderHero: menampilkan ulang render hero.
    function renderHero() {
      // Menyiapkan movie untuk digunakan pada langkah berikutnya.
      const movie = state.movie;
      // Menyiapkan movieLabel untuk digunakan pada langkah berikutnya.
      const movieLabel = $('#heroMovieLabel');
      // Menyiapkan regionLabel untuk digunakan pada langkah berikutnya.
      const regionLabel = $('#heroRegionLabel');
      // Menyiapkan mobileMoviesRegion untuk digunakan pada langkah berikutnya.
      const mobileMoviesRegion = $('#mobileMoviesRegion');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (movieLabel) movieLabel.textContent = movie.title;
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (regionLabel) regionLabel.textContent = state.region;
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (mobileMoviesRegion) mobileMoviesRegion.textContent = state.region.toUpperCase();
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderSelectedMovie: menampilkan ulang render selected movie.
    function renderSelectedMovie() {
      // Menyiapkan movie untuk digunakan pada langkah berikutnya.
      const movie = state.movie;
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#selectedMovieCard').innerHTML = `
        ${/* Menyusun elemen img. */ ''}<img src="${makePosterData(movie)}" alt="${movie.title}" />
        ${/* Menyusun elemen div. */ ''}<div>
          ${/* Menyusun elemen h5. */ ''}<h5>${movie.title}</h5>
          ${/* Menyusun elemen div. */ ''}<div class="chips" style="margin-bottom:10px">
            ${/* Menyusun elemen span. */ ''}<span class="chip">${movie.genre}</span>
            ${/* Menyusun elemen span. */ ''}<span class="chip">${movie.duration}</span>
            ${/* Menyusun elemen span. */ ''}<span class="chip">${movie.rating}</span>
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen div. */ ''}<div class="muted" style="line-height:1.65">${movieThemes[movie.id].subtitle}</div>
        ${/* Menutup elemen div. */ ''}</div>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`;
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderCinemas: menampilkan ulang render cinemas.
    function renderCinemas() {
      // Menyiapkan list untuk digunakan pada langkah berikutnya.
      const list = currentCinemas();
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#cinemaMeta').textContent = `${list.length} lokasi tersedia di ${state.region}`;
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#cinemaGrid').innerHTML = list.map(cinema => `
        ${/* Menyusun elemen button. */ ''}<button class="select-card ${state.cinema.id === cinema.id ? 'active' : ''}" data-cinema="${cinema.id}">
          ${/* Menyusun elemen strong. */ ''}<strong>${cinema.name}</strong>
          ${/* Menyusun elemen div. */ ''}<div class="muted">${cinema.address}</div>
          ${/* Menyusun elemen div. */ ''}<div class="muted" style="margin-top:6px">${cinema.type} • ${cinema.distance}</div>
        ${/* Menutup elemen button. */ ''}</button>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('');
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $$('[data-cinema]').forEach(btn => btn.addEventListener('click', () => {
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.cinema = list.find(c => c.id === btn.dataset.cinema);
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        resetPaymentStatus();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderCinemas();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPaymentDetail();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSummary();
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }));
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderDates: menampilkan ulang render dates.
    function renderDates() {
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#dateGrid').innerHTML = dates.map(date => `
        ${/* Menyusun elemen button. */ ''}<button class="date-chip-card ${state.date.key === date.key ? 'active' : ''}" data-date="${date.key}">
          ${/* Menyusun elemen span. */ ''}<span class="date-day">${date.label}</span>
          ${/* Menyusun elemen span. */ ''}<span class="date-date">${date.dateText}</span>
        ${/* Menutup elemen button. */ ''}</button>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('');
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $$('[data-date]').forEach(btn => btn.addEventListener('click', () => {
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.date = dates.find(d => d.key === btn.dataset.date);
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        resetPaymentStatus();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderDates();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPaymentDetail();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSummary();
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }));
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderTimes: menampilkan ulang render times.
    function renderTimes() {
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#timeGrid').innerHTML = times.map(time => `
        ${/* Menyusun elemen button. */ ''}<button class="time-chip ${state.time === time ? 'active' : ''}" data-time="${time}">
          ${/* Menyusun elemen strong. */ ''}<strong style="display:block;font-size:18px;margin-bottom:6px">${time}</strong>
          ${/* Menyusun elemen span. */ ''}<span class="muted">Studio Regular</span>
        ${/* Menutup elemen button. */ ''}</button>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('');
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $$('[data-time]').forEach(btn => btn.addEventListener('click', () => {
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.time = btn.dataset.time;
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        resetPaymentStatus();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderTimes();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPaymentDetail();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSummary();
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }));
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderSeats: menampilkan ulang render seats.
    function renderSeats() {
      // Menyiapkan rows untuk digunakan pada langkah berikutnya.
      const rows = 'ABCDEFGH'.split('');
      // Menyiapkan colsLeft untuk digunakan pada langkah berikutnya.
      const colsLeft = [1,2,3,4,5,6,7,8];
      // Menyiapkan colsRight untuk digunakan pada langkah berikutnya.
      const colsRight = [9,10,11,12,13,14,15,16];
      // Menyiapkan isMobile untuk digunakan pada langkah berikutnya.
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      // Menyiapkan buildSeat untuk digunakan pada langkah berikutnya.
      const buildSeat = (row, n) => {
        // Menyiapkan code untuk digunakan pada langkah berikutnya.
        const code = `${row}${n}`;
        // Menyiapkan isTaken untuk digunakan pada langkah berikutnya.
        const isTaken = takenSeats.has(code);
        // Menyiapkan isBlocked untuk digunakan pada langkah berikutnya.
        const isBlocked = blockedSeats.has(code);
        // Menyiapkan isVip untuk digunakan pada langkah berikutnya.
        const isVip = vipSeats.has(code);
        // Menyiapkan isSelected untuk digunakan pada langkah berikutnya.
        const isSelected = state.selectedSeats.includes(code);
        // Menyiapkan cls untuk digunakan pada langkah berikutnya.
        const cls = isBlocked ? 'blocked' : isTaken ? 'taken' : isSelected ? 'selected' : isVip ? 'vip available' : 'available';
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return `<button class="seat ${cls}" ${isTaken || isBlocked ? 'disabled' : ''} data-seat="${code}" title="${code}">${n}</button>`;
      // Menutup blok logika atau kumpulan data di atas.
      };

      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#seatGrid').innerHTML = rows.map(row => {
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (isMobile) {
          // Menyiapkan allCols untuk digunakan pada langkah berikutnya.
          const allCols = [...colsLeft, ...colsRight];
          // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
          return `
            ${/* Menyusun elemen div. */ ''}<div class="seat-row-mobile">
              ${/* Menyusun elemen span. */ ''}<span class="row-label">${row}</span>
              ${/* Menyusun elemen div. */ ''}<div class="mobile-seat-wrap">${allCols.map(n => buildSeat(row, n)).join('')}</div>
            ${/* Menutup elemen div. */ ''}</div>
          ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`;
        // Menutup blok logika atau kumpulan data di atas.
        }

        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return `
          ${/* Menyusun elemen div. */ ''}<div class="seat-row">
            ${/* Menyusun elemen span. */ ''}<span class="row-label">${row}</span>
            ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${colsLeft.map(n => buildSeat(row, n)).join('')}
            ${/* Menyusun elemen span. */ ''}<span class="row-label"></span>
            ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${colsRight.map(n => buildSeat(row, n)).join('')}
            ${/* Menyusun elemen span. */ ''}<span class="row-label">${row}</span>
          ${/* Menutup elemen div. */ ''}</div>
        ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`;
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }).join('');

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $$('[data-seat]').forEach(btn => btn.addEventListener('click', () => {
        // Menyiapkan code untuk digunakan pada langkah berikutnya.
        const code = btn.dataset.seat;
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (state.selectedSeats.includes(code)) {
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          state.selectedSeats = state.selectedSeats.filter(seat => seat !== code);
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        } else {
          // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
          if (state.selectedSeats.length >= 6) {
            // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
            alert('Maksimal 6 kursi dalam satu transaksi.');
            // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
            return;
          // Menutup blok logika atau kumpulan data di atas.
          }
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          state.selectedSeats.push(code);
        // Menutup blok logika atau kumpulan data di atas.
        }
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.selectedSeats.sort((a,b) => a.localeCompare(b, undefined, { numeric: true }));
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        resetPaymentStatus();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSeats();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPaymentDetail();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSummary();
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }));
    // Menutup blok logika atau kumpulan data di atas.
    }


    // Fungsi resetPaymentStatus: mengatur ulang reset payment status.
    function resetPaymentStatus() {
      // Membaca atau memperbarui status pemesanan yang sedang aktif.
      state.paymentCompleted = false;
      // Menyiapkan checkout untuk digunakan pada langkah berikutnya.
      const checkout = $('#checkoutBtn');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (checkout) checkout.textContent = 'Selesaikan Pembayaran';
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi updateCheckoutButton: memperbarui update checkout button.
    function updateCheckoutButton() {
      // Menyiapkan checkout untuk digunakan pada langkah berikutnya.
      const checkout = $('#checkoutBtn');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!checkout) return;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      checkout.textContent = state.paymentCompleted ? 'Buka E-Tiket' : 'Selesaikan Pembayaran';
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      updateMobileStepButtonLabel();
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderPayments: menampilkan ulang render payments.
    function renderPayments() {
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#payGrid').innerHTML = payMethods.map(method => `
        ${/* Menyusun elemen button. */ ''}<button class="pay-card ${state.payment.id === method.id ? 'active' : ''}" data-pay="${method.id}">
          ${/* Menyusun elemen strong. */ ''}<strong>${method.name}</strong>
          ${/* Menyusun elemen div. */ ''}<div class="muted">${method.detail}</div>
        ${/* Menutup elemen button. */ ''}</button>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('');
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $$('[data-pay]').forEach(btn => btn.addEventListener('click', () => {
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.payment = payMethods.find(p => p.id === btn.dataset.pay);
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        resetPaymentStatus();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPayments();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPaymentDetail();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSummary();
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }));
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi serviceFee: menghitung biaya service fee.
    function serviceFee() {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return state.selectedSeats.length * 4000;
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi promoPrice: mengambil nilai promo promo price.
    function promoPrice() {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return state.promo ? state.promo.price : 0;
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi totalPrice: menghitung total total price.
    function totalPrice() {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return state.movie.price * state.selectedSeats.length + serviceFee() + promoPrice();
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderPromos: menampilkan ulang render promos.
    function renderPromos() {
      // Menyiapkan grid untuk digunakan pada langkah berikutnya.
      const grid = $('#promoGrid');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!grid) return;
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      grid.innerHTML = promoBundles.map(bundle => `
        ${/* Menyusun elemen article. */ ''}<article class="promo-card ${bundle.className}">
          ${/* Menyusun elemen div. */ ''}<div class="promo-topline">
            ${/* Menyusun elemen span. */ ''}<span class="promo-pill">✨ ${bundle.tag}</span>
            ${/* Menyusun elemen div. */ ''}<div class="promo-emoji">${bundle.emoji}</div>
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen div. */ ''}<div>
            ${/* Menyusun elemen h4. */ ''}<h4>${bundle.title}</h4>
            ${/* Menyusun elemen p. */ ''}<p>${bundle.description}</p>
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen div. */ ''}<div class="promo-card-actions">
            ${/* Menyusun elemen div. */ ''}<div>
              ${/* Menyusun elemen div. */ ''}<div class="promo-price">${rupiah(bundle.price)}</div>
              ${/* Menyusun elemen div. */ ''}<div class="promo-note" style="margin-top:10px">${bundle.note}</div>
            ${/* Menutup elemen div. */ ''}</div>
            ${/* Menyusun elemen button. */ ''}<button class="promo-add-btn ${state.promo && state.promo.id === bundle.id ? 'active' : ''}" data-promo="${bundle.id}">${state.promo && state.promo.id === bundle.id ? 'Promo Dipilih' : 'Tambah Promo'}</button>
          ${/* Menutup elemen div. */ ''}</div>
        ${/* Menutup elemen article. */ ''}</article>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`).join('');

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $$('[data-promo]').forEach(btn => btn.addEventListener('click', () => {
        // Menyiapkan bundle untuk digunakan pada langkah berikutnya.
        const bundle = promoBundles.find(item => item.id === btn.dataset.promo);
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.promo = state.promo && state.promo.id === bundle.id ? null : bundle;
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        resetPaymentStatus();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPromos();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPaymentDetail();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSummary();
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }));
    // Menutup blok logika atau kumpulan data di atas.
    }


    // Fungsi qrisPattern: membentuk pola QR qris pattern.
    function qrisPattern() {
      // Menyiapkan cells untuk digunakan pada langkah berikutnya.
      const cells = [];
      // Mengulangi pengolahan untuk setiap data atau indeks yang ditentukan.
      for (let i = 0; i < 169; i++) {
        // Menyiapkan r untuk digunakan pada langkah berikutnya.
        const r = Math.floor(i / 13);
        // Menyiapkan c untuk digunakan pada langkah berikutnya.
        const c = i % 13;
        // Menyiapkan finder untuk digunakan pada langkah berikutnya.
        const finder = (r < 4 && c < 4) || (r < 4 && c > 8) || (r > 8 && c < 4);
        // Menyiapkan dark untuk digunakan pada langkah berikutnya.
        const dark = finder || ((r * 7 + c * 5 + r * c) % 4 === 0) || (r === 6 && c > 2 && c < 11) || (c === 7 && r > 1 && r < 12);
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        cells.push(`<span class="qris-cell ${dark ? '' : 'light'}"></span>`);
      // Menutup blok logika atau kumpulan data di atas.
      }
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return cells.join('');
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi paymentCode: membuat kode pembayaran payment code.
    function paymentCode() {
      // Menyiapkan raw untuk digunakan pada langkah berikutnya.
      const raw = `${state.payment.id}-${state.movie.id}-${state.region}-${state.cinema.id}-${state.date.key}-${state.time}-${state.selectedSeats.join('')}`;
      // Menyiapkan hash untuk digunakan pada langkah berikutnya.
      let hash = 0;
      // Mengulangi pengolahan untuk setiap data atau indeks yang ditentukan.
      for (let i = 0; i < raw.length; i++) hash = (hash * 33 + raw.charCodeAt(i)) % 9999999999;
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return String(hash).padStart(10, '0');
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderPaymentDetail: menampilkan ulang render payment detail.
    function renderPaymentDetail() {
      // Menyiapkan box untuk digunakan pada langkah berikutnya.
      const box = $('#paymentDetail');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!box) return;

      // Menyiapkan amount untuk digunakan pada langkah berikutnya.
      const amount = rupiah(totalPrice());
      // Menyiapkan code untuk digunakan pada langkah berikutnya.
      const code = paymentCode();
      // Menyiapkan isPaid untuk digunakan pada langkah berikutnya.
      const isPaid = !!state.paymentCompleted;
      // Menyiapkan status untuk digunakan pada langkah berikutnya.
      const status = isPaid
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        ? '<span class="payment-status-pill paid">✅ Pembayaran Selesai</span>'
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        : '<span class="payment-status-pill">⏳ Menunggu Pembayaran</span>';

      // Menyiapkan confirmButton untuk digunakan pada langkah berikutnya.
      const confirmButton = isPaid
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        ? '<button class="payment-confirm-btn paid" type="button" disabled>✅ Pembayaran Sudah Dikonfirmasi</button>'
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        : '<button class="payment-confirm-btn" type="button" id="confirmPaymentBtn">Konfirmasi Pembayaran Selesai</button>';

      // Menyiapkan warning untuk digunakan pada langkah berikutnya.
      const warning = isPaid
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        ? ''
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        : '<div class="payment-warning">E-ticket baru bisa dibuka setelah pembayaran dikonfirmasi.</div>';

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (state.payment.id === 'qris') {
        // Menyusun isi HTML dinamis untuk komponen tampilan.
        box.innerHTML = `
          ${/* Menyusun elemen div. */ ''}<div class="payment-detail-head">
            ${/* Menyusun elemen div. */ ''}<div>
              ${/* Menyusun elemen h5. */ ''}<h5>Detail Pembayaran QRIS</h5>
              ${/* Menyusun elemen p. */ ''}<p>Scan QR code berikut dari aplikasi bank atau e-wallet. Setelah pembayaran berhasil, klik tombol konfirmasi.</p>
            ${/* Menutup elemen div. */ ''}</div>
            ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${status}
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen div. */ ''}<div class="payment-method-box">
            ${/* Menyusun elemen div. */ ''}<div class="qris-box"><div class="qris-grid">${qrisPattern()}</div></div>
            ${/* Menyusun elemen div. */ ''}<div>
              ${/* Menyusun elemen div. */ ''}<div class="payment-code-card">
                ${/* Menyusun elemen span. */ ''}<span>Total Pembayaran</span>
                ${/* Menyusun elemen strong. */ ''}<strong>${amount}</strong>
              ${/* Menutup elemen div. */ ''}</div>
              ${/* Menyusun elemen ol. */ ''}<ol class="payment-steps">
                ${/* Menyusun elemen li. */ ''}<li>Buka aplikasi bank atau e-wallet yang mendukung QRIS.</li>
                ${/* Menyusun elemen li. */ ''}<li>Pilih menu scan QR lalu arahkan kamera ke QR code.</li>
                ${/* Menyusun elemen li. */ ''}<li>Pastikan nominal sesuai dengan total pembayaran.</li>
                ${/* Menyusun elemen li. */ ''}<li>Konfirmasi pembayaran sampai status transaksi berhasil.</li>
              ${/* Menutup elemen ol. */ ''}</ol>
              ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${confirmButton}
              ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${warning}
            ${/* Menutup elemen div. */ ''}</div>
          ${/* Menutup elemen div. */ ''}</div>`;
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        bindPaymentCompleteButton();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        updateCheckoutButton();
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return;
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (state.payment.id === 'gopay') {
        // Menyusun isi HTML dinamis untuk komponen tampilan.
        box.innerHTML = `
          ${/* Menyusun elemen div. */ ''}<div class="payment-detail-head">
            ${/* Menyusun elemen div. */ ''}<div>
              ${/* Menyusun elemen h5. */ ''}<h5>Detail Pembayaran GoPay</h5>
              ${/* Menyusun elemen p. */ ''}<p>Gunakan kode pembayaran berikut di aplikasi GoPay. Setelah berhasil, klik tombol konfirmasi.</p>
            ${/* Menutup elemen div. */ ''}</div>
            ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${status}
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen div. */ ''}<div class="payment-code-card">
            ${/* Menyusun elemen span. */ ''}<span>Kode GoPay</span>
            ${/* Menyusun elemen strong. */ ''}<strong>GPY-${code}</strong>
            ${/* Menyusun elemen button. */ ''}<button class="copy-pay-btn" data-copy="GPY-${code}">Salin Kode</button>
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen ol. */ ''}<ol class="payment-steps">
            ${/* Menyusun elemen li. */ ''}<li>Buka aplikasi GoPay.</li>
            ${/* Menyusun elemen li. */ ''}<li>Pilih menu Bayar atau Pembayaran Online.</li>
            ${/* Menyusun elemen li. */ ''}<li>Masukkan kode pembayaran GPY-${code}.</li>
            ${/* Menyusun elemen li. */ ''}<li>Bayar sebesar ${amount}, lalu klik konfirmasi pembayaran.</li>
          ${/* Menutup elemen ol. */ ''}</ol>
          ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${confirmButton}
          ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${warning}`;
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        bindCopyButtons();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        bindPaymentCompleteButton();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        updateCheckoutButton();
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return;
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (state.payment.id === 'dana') {
        // Menyusun isi HTML dinamis untuk komponen tampilan.
        box.innerHTML = `
          ${/* Menyusun elemen div. */ ''}<div class="payment-detail-head">
            ${/* Menyusun elemen div. */ ''}<div>
              ${/* Menyusun elemen h5. */ ''}<h5>Detail Pembayaran DANA</h5>
              ${/* Menyusun elemen p. */ ''}<p>Gunakan kode DANA berikut untuk menyelesaikan transaksi. Setelah berhasil, klik tombol konfirmasi.</p>
            ${/* Menutup elemen div. */ ''}</div>
            ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${status}
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen div. */ ''}<div class="payment-code-card">
            ${/* Menyusun elemen span. */ ''}<span>Kode DANA</span>
            ${/* Menyusun elemen strong. */ ''}<strong>DANA-${code}</strong>
            ${/* Menyusun elemen button. */ ''}<button class="copy-pay-btn" data-copy="DANA-${code}">Salin Kode</button>
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen ol. */ ''}<ol class="payment-steps">
            ${/* Menyusun elemen li. */ ''}<li>Buka aplikasi DANA.</li>
            ${/* Menyusun elemen li. */ ''}<li>Pilih menu Kirim atau Bayar.</li>
            ${/* Menyusun elemen li. */ ''}<li>Masukkan kode DANA-${code} pada kolom pembayaran.</li>
            ${/* Menyusun elemen li. */ ''}<li>Konfirmasi pembayaran sebesar ${amount}, lalu klik konfirmasi pembayaran.</li>
          ${/* Menutup elemen ol. */ ''}</ol>
          ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${confirmButton}
          ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${warning}`;
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        bindCopyButtons();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        bindPaymentCompleteButton();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        updateCheckoutButton();
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return;
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Menyusun isi HTML dinamis untuk komponen tampilan.
      box.innerHTML = `
        ${/* Menyusun elemen div. */ ''}<div class="payment-detail-head">
          ${/* Menyusun elemen div. */ ''}<div>
            ${/* Menyusun elemen h5. */ ''}<h5>Detail Pembayaran Virtual Account</h5>
            ${/* Menyusun elemen p. */ ''}<p>Pilih salah satu bank, lalu transfer sesuai nomor virtual account dan nominal pembayaran. Setelah berhasil, klik tombol konfirmasi.</p>
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${status}
        ${/* Menutup elemen div. */ ''}</div>
        ${/* Menyusun elemen div. */ ''}<div class="bank-grid">
          ${/* Menyusun elemen div. */ ''}<div class="bank-card"><span>BCA Virtual Account</span><strong>3901${code}</strong></div>
          ${/* Menyusun elemen div. */ ''}<div class="bank-card"><span>BNI Virtual Account</span><strong>8808${code}</strong></div>
          ${/* Menyusun elemen div. */ ''}<div class="bank-card"><span>BRI Virtual Account</span><strong>1122${code}</strong></div>
          ${/* Menyusun elemen div. */ ''}<div class="bank-card"><span>Mandiri Virtual Account</span><strong>7001${code}</strong></div>
        ${/* Menutup elemen div. */ ''}</div>
        ${/* Menyusun elemen ol. */ ''}<ol class="payment-steps">
          ${/* Menyusun elemen li. */ ''}<li>Buka mobile banking, ATM, atau internet banking.</li>
          ${/* Menyusun elemen li. */ ''}<li>Pilih menu Virtual Account atau Pembayaran.</li>
          ${/* Menyusun elemen li. */ ''}<li>Masukkan nomor virtual account sesuai bank yang dipilih.</li>
          ${/* Menyusun elemen li. */ ''}<li>Bayar sebesar ${amount}, lalu klik konfirmasi pembayaran.</li>
        ${/* Menutup elemen ol. */ ''}</ol>
        ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${confirmButton}
        ${/* Menyisipkan hasil ekspresi JavaScript ke dalam template tampilan. */ ''}${warning}`;
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      bindPaymentCompleteButton();
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      updateCheckoutButton();
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi bindPaymentCompleteButton: memasang event untuk bind payment complete button.
    function bindPaymentCompleteButton() {
      // Menyiapkan btn untuk digunakan pada langkah berikutnya.
      const btn = $('#confirmPaymentBtn');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!btn) return;
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      btn.addEventListener('click', () => {
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.paymentCompleted = true;
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPaymentDetail();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSummary();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        updateCheckoutButton();
      // Menutup blok logika atau kumpulan data di atas.
      });
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi bindCopyButtons: memasang event untuk bind copy buttons.
    function bindCopyButtons() {
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      $$('[data-copy]').forEach(btn => {
        // Memasang penanganan interaksi pengguna atau perubahan tampilan.
        btn.addEventListener('click', async () => {
          // Menyiapkan value untuk digunakan pada langkah berikutnya.
          const value = btn.dataset.copy;
          // Memperbarui teks elemen sesuai data pilihan pengguna.
          try { await navigator.clipboard.writeText(value); btn.textContent = 'Kode Disalin'; }
          // Memperbarui teks elemen sesuai data pilihan pengguna.
          catch (err) { btn.textContent = value; }
        // Menutup blok logika atau kumpulan data di atas.
        });
      // Menutup blok logika atau kumpulan data di atas.
      });
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderSummary: menampilkan ulang render summary.
    function renderSummary() {
      // Membaca atau memperbarui status pemesanan yang sedang aktif.
      $('#summaryPoster').src = makePosterData(state.movie);
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryTitle').textContent = state.movie.title;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryGenre').textContent = state.movie.genre;
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#summaryChips').innerHTML = `
        ${/* Menyusun elemen span. */ ''}<span class="chip">${state.movie.rating}</span>
        ${/* Menyusun elemen span. */ ''}<span class="chip">${state.movie.duration}</span>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryRegion').textContent = state.region;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryCinema').textContent = state.cinema.name;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryDate').textContent = state.date.full;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryTime').textContent = state.time;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summarySeats').textContent = state.selectedSeats.length ? state.selectedSeats.join(', ') : '-';
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryPayment').textContent = state.payment.name;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryPaymentStatus').textContent = state.paymentCompleted ? 'Selesai' : 'Belum dibayar';
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryPromo').textContent = state.promo ? `${state.promo.title} (${rupiah(state.promo.price)})` : '-';
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryTicketPrice').textContent = `${rupiah(state.movie.price)} × ${state.selectedSeats.length}`;
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryFee').textContent = state.promo ? `${rupiah(serviceFee())} + promo ${rupiah(promoPrice())}` : rupiah(serviceFee());
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summaryTotal').textContent = rupiah(totalPrice());
      // Memperbarui teks elemen sesuai data pilihan pengguna.
      $('#summarySeatCount').textContent = `${state.selectedSeats.length} kursi`;
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      updateCheckoutButton();
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi bookingCode: membuat kode pemesanan booking code.
    function bookingCode() {
      // Menyiapkan raw untuk digunakan pada langkah berikutnya.
      const raw = `${state.movie.id}-${state.region}-${state.cinema.id}-${state.date.key}-${state.time}-${state.selectedSeats.join('')}`;
      // Menyiapkan hash untuk digunakan pada langkah berikutnya.
      let hash = 0;
      // Mengulangi pengolahan untuk setiap data atau indeks yang ditentukan.
      for (let i = 0; i < raw.length; i++) hash = (hash * 31 + raw.charCodeAt(i)) % 999999999;
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return 'CV' + String(hash).padStart(9, '0');
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi qrPattern: membentuk pola QR qr pattern.
    function qrPattern() {
      // Menyiapkan pattern untuk digunakan pada langkah berikutnya.
      const pattern = [];
      // Mengulangi pengolahan untuk setiap data atau indeks yang ditentukan.
      for (let i = 0; i < 121; i++) {
        // Menyiapkan r untuk digunakan pada langkah berikutnya.
        const r = Math.floor(i / 11);
        // Menyiapkan c untuk digunakan pada langkah berikutnya.
        const c = i % 11;
        // Menyiapkan finder untuk digunakan pada langkah berikutnya.
        const finder = ((r < 3 && c < 3) || (r < 3 && c > 7) || (r > 7 && c < 3));
        // Menyiapkan light untuk digunakan pada langkah berikutnya.
        const light = ((r + c) % 3 === 0) || finder || (r === 5 && c > 1 && c < 9) || (c === 5 && r > 2 && r < 9);
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        pattern.push(`<span class="qr-cell ${light ? '' : 'light'}"></span>`);
      // Menutup blok logika atau kumpulan data di atas.
      }
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return pattern.join('');
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi renderTicket: menampilkan ulang render ticket.
    function renderTicket() {
      // Menyiapkan seats untuk digunakan pada langkah berikutnya.
      const seats = state.selectedSeats.join(', ');
      // Menyusun isi HTML dinamis untuk komponen tampilan.
      $('#ticketCard').innerHTML = `
        ${/* Menyusun elemen div. */ ''}<div class="ticket-left">
          ${/* Menyusun elemen img. */ ''}<img class="ticket-poster" src="${makePosterData(state.movie)}" alt="${state.movie.title}" />
          ${/* Menyusun elemen div. */ ''}<div>
            ${/* Menyusun elemen div. */ ''}<div class="ticket-badges">
              ${/* Menyusun elemen span. */ ''}<span class="ticket-badge">${state.movie.rating}</span>
              ${/* Menyusun elemen span. */ ''}<span class="ticket-badge">${state.movie.duration}</span>
              ${/* Menyusun elemen span. */ ''}<span class="ticket-badge">${state.movie.genre}</span>
            ${/* Menutup elemen div. */ ''}</div>
            ${/* Menyusun elemen h4. */ ''}<h4 class="ticket-title">${state.movie.title}</h4>
            ${/* Menyusun elemen div. */ ''}<div class="ticket-grid">
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Daerah</span><strong>${state.region}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Bioskop</span><strong>${state.cinema.name}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Studio</span><strong>Studio 3</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Tanggal</span><strong>${state.date.full}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Jam</span><strong>${state.time}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Kursi</span><strong>${seats}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Pembayaran</span><strong>${state.payment.name}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Kode Bayar</span><strong>${state.payment.id === 'qris' ? 'QRIS aktif' : paymentCode()}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Promo</span><strong>${state.promo ? state.promo.title : '-'}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Total</span><strong>${rupiah(totalPrice())}</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Status</span><strong style="color:#34d399">Pembayaran Selesai</strong></div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info"><span>Kode Booking</span><strong>${bookingCode()}</strong></div>
            ${/* Menutup elemen div. */ ''}</div>
          ${/* Menutup elemen div. */ ''}</div>
        ${/* Menutup elemen div. */ ''}</div>
        ${/* Menyusun elemen div. */ ''}<div class="ticket-right">
          ${/* Menyusun elemen div. */ ''}<div class="code-box">
            ${/* Menyusun elemen small. */ ''}<small>Kode Booking</small>
            ${/* Menyusun elemen strong. */ ''}<strong>${bookingCode()}</strong>
          ${/* Menutup elemen div. */ ''}</div>
          ${/* Menyusun elemen div. */ ''}<div class="qr-wrap">
            ${/* Menyusun elemen div. */ ''}<div class="qr-box"><div class="qr-grid">${qrPattern()}</div></div>
            ${/* Menyusun elemen div. */ ''}<div>
              ${/* Menyusun elemen div. */ ''}<div class="ticket-info" style="margin-bottom:14px">
                ${/* Menyusun elemen span. */ ''}<span>Nomor Transaksi</span>
                ${/* Menyusun elemen strong. */ ''}<strong>TRX-${new Date().getFullYear()}-${Math.floor(Math.random() * 900000 + 100000)}</strong>
              ${/* Menutup elemen div. */ ''}</div>
              ${/* Menyusun elemen div. */ ''}<div class="barcode"></div>
              ${/* Menyusun elemen div. */ ''}<div class="hint" style="margin-top:14px">Scan QR ini di pintu masuk studio atau tunjukkan kode booking kepada petugas.</div>
            ${/* Menutup elemen div. */ ''}</div>
          ${/* Menutup elemen div. */ ''}</div>
        ${/* Menutup elemen div. */ ''}</div>
      ${/* Melanjutkan ekspresi, parameter, atau struktur data pada blok ini. */ ''}`;
    // Menutup blok logika atau kumpulan data di atas.
    }
