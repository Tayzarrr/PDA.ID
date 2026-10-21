// Fungsi initEvents: menyiapkan init events.
function initEvents() {
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#searchInput').addEventListener('input', (e) => {
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.search = e.target.value;
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderMovies();
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#regionSelect').addEventListener('change', (e) => {
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.region = e.target.value;
        // Membaca atau memperbarui status pemesanan yang sedang aktif.
        state.cinema = currentCinemas()[0];
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        resetPaymentStatus();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderCinemas();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderHero();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderPaymentDetail();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderSummary();
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#scrollToMovies').addEventListener('click', () => {
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        $('#moviesSection').scrollIntoView({ behavior: 'smooth' });
      // Menutup blok logika atau kumpulan data di atas.
      });
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#scrollToBooking').addEventListener('click', () => {
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        $('#bookingSection').scrollIntoView({ behavior: 'smooth' });
      // Menutup blok logika atau kumpulan data di atas.
      });
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#scrollToBookingTop').addEventListener('click', () => {
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        $('#bookingSection').scrollIntoView({ behavior: 'smooth' });
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $$('.nav-link, .mobile-bottom-nav button').forEach(btn => btn.addEventListener('click', () => {
        // Menyiapkan target untuk digunakan pada langkah berikutnya.
        const target = btn.dataset.scroll;
        // Menyiapkan stepIndex untuk digunakan pada langkah berikutnya.
        const stepIndex = (typeof mobileSteps !== 'undefined' ? mobileSteps.findIndex(step => step.id === target) : -1);
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (isMobileView() && stepIndex >= 0) {
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          setMobileStep(stepIndex, true);
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        } else {
          // Menyiapkan el untuk digunakan pada langkah berikutnya.
          const el = target === 'top' ? document.getElementById('top') : document.getElementById(target);
          // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        // Menutup blok logika atau kumpulan data di atas.
        }
        // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
        $$('.nav-link, .mobile-bottom-nav button').forEach(item => item.classList.remove('active'));
        // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
        btn.classList.add('active');
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }));

      // Menyiapkan lastSeatMobileState untuk digunakan pada langkah berikutnya.
      let lastSeatMobileState = window.matchMedia('(max-width: 768px)').matches;
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      window.addEventListener('resize', () => {
        // Menyiapkan currentSeatMobileState untuk digunakan pada langkah berikutnya.
        const currentSeatMobileState = window.matchMedia('(max-width: 768px)').matches;
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (currentSeatMobileState !== lastSeatMobileState) {
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          lastSeatMobileState = currentSeatMobileState;
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          renderSeats();
        // Menutup blok logika atau kumpulan data di atas.
        }
      // Menutup blok logika atau kumpulan data di atas.
      });



      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#mobileSeeAllBtn').addEventListener('click', (event) => {
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        event.preventDefault();
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        event.stopPropagation();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        openAllMoviesMobile();
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#mobileMoviesBackBtn').addEventListener('click', (event) => {
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        event.preventDefault();
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        event.stopPropagation();
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        closeAllMoviesMobile();
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#closeMovieDetailBtn').addEventListener('click', closeMovieDetail);
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#movieDetailModal').addEventListener('click', (e) => {
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (e.target.id === 'movieDetailModal') closeMovieDetail();
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#checkoutBtn').addEventListener('click', () => {
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (!state.selectedSeats.length) {
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          alert('Silakan pilih minimal 1 kursi terlebih dahulu.');
          // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
          return;
        // Menutup blok logika atau kumpulan data di atas.
        }
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (!state.paymentCompleted) {
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          alert('Selesaikan pembayaran terlebih dahulu. Setelah pembayaran berhasil, klik tombol Konfirmasi Pembayaran Selesai.');
          // Menyiapkan paymentBox untuk digunakan pada langkah berikutnya.
          const paymentBox = $('#paymentDetail');
          // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
          if (isMobileView()) {
            // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
            setMobileStep(3, true);
            /* no auto scroll on mobile to prevent sudden jump */
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          } else if (paymentBox) {
            // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
            paymentBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Menutup blok logika atau kumpulan data di atas.
          }
          // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
          return;
        // Menutup blok logika atau kumpulan data di atas.
        }
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        renderTicket();
        // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
        $('#ticketModal').classList.add('show');
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        updateMobileStepButtonLabel();
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#closeTicketBtn').addEventListener('click', closeTicketAndGoHome);
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#closeBottomBtn').addEventListener('click', closeTicketAndGoHome);
      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#ticketModal').addEventListener('click', (e) => {
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (e.target.id === 'ticketModal') closeTicketAndGoHome();
      // Menutup blok logika atau kumpulan data di atas.
      });

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      $('#downloadSummaryBtn').addEventListener('click', () => {
        // Menyiapkan lines untuk digunakan pada langkah berikutnya.
        const lines = [
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          'PDA.ID Tickets',
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          '====================',
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Film: ${state.movie.title}`,
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Daerah: ${state.region}`,
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Bioskop: ${state.cinema.name}`,
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Tanggal: ${state.date.full}`,
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Jam: ${state.time}`,
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Kursi: ${state.selectedSeats.join(', ')}`,
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Pembayaran: ${state.payment.name}`,
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Kode Bayar: ${state.payment.id === 'qris' ? 'QRIS aktif' : paymentCode()}`,
          // Membaca atau memperbarui status pemesanan yang sedang aktif.
          `Promo: ${state.promo ? state.promo.title + ' - ' + rupiah(state.promo.price) : '-'}`,
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          `Kode Booking: ${bookingCode()}`,
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          `Total: ${rupiah(totalPrice())}`
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        ].join('\n');
        // Menyiapkan blob untuk digunakan pada langkah berikutnya.
        const blob = new Blob([lines], { type: 'text/plain;charset=utf-8' });
        // Menyiapkan url untuk digunakan pada langkah berikutnya.
        const url = URL.createObjectURL(blob);
        // Menyiapkan a untuk digunakan pada langkah berikutnya.
        const a = document.createElement('a');
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        a.href = url;
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        a.download = 'e-ticket-pda-id.txt';
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        a.click();
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        URL.revokeObjectURL(url);
      // Menutup blok logika atau kumpulan data di atas.
      });
    // Menutup blok logika atau kumpulan data di atas.
    }



    // Fungsi isTicketModalOpen: memeriksa is ticket modal open.
    function isTicketModalOpen() {
      // Menyiapkan modal untuk digunakan pada langkah berikutnya.
      const modal = $('#ticketModal');
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return !!modal && modal.classList.contains('show');
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi updateMobileStepButtonLabel: memperbarui update mobile step button label.
    function updateMobileStepButtonLabel() {
      // Menyiapkan next untuk digunakan pada langkah berikutnya.
      const next = $('#mobileNextBtn');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!next || !isMobileView()) return;

      // Menyiapkan current untuk digunakan pada langkah berikutnya.
      const current = currentMobileStep();
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (isTicketModalOpen()) {
        // Memperbarui teks elemen sesuai data pilihan pengguna.
        next.textContent = 'Selesai';
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return;
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (current >= mobileSteps.length - 1) {
        // Memperbarui teks elemen sesuai data pilihan pengguna.
        next.textContent = state.paymentCompleted ? 'Buka E-Tiket' : 'Selesaikan Pembayaran';
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return;
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Memperbarui teks elemen sesuai data pilihan pengguna.
      next.textContent = 'Lanjut';
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi closeTicketAndGoHome: menutup close ticket and go home.
    function closeTicketAndGoHome() {
      // Menyiapkan modal untuk digunakan pada langkah berikutnya.
      const modal = $('#ticketModal');
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (modal) modal.classList.remove('show');

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (isMobileView()) {
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        setMobileStep(0, true);
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        updateMobileStepButtonLabel();
      // Menutup blok logika atau kumpulan data di atas.
      }
    // Menutup blok logika atau kumpulan data di atas.
    }


    // Menyiapkan mobileSteps untuk digunakan pada langkah berikutnya.
    const mobileSteps = [
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'top', title: 'Home' },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'moviesSection', title: 'Pilih Film' },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'promoSection', title: 'Promo Snack' },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'bookingSection', title: 'Booking Tiket' }
    // Menutup blok logika atau kumpulan data di atas.
    ];

    // Fungsi isMobileView: memeriksa is mobile view.
    function isMobileView() {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return window.matchMedia('(max-width: 768px)').matches;
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi setMobileStep: mengatur set mobile step.
    function setMobileStep(index, shouldScroll = true) {
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!isMobileView()) {
        // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
        document.body.classList.remove('mobile-wizard');
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        document.body.removeAttribute('data-mobile-step');
        // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
        return;
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Menyiapkan safeIndex untuk digunakan pada langkah berikutnya.
      const safeIndex = Math.max(0, Math.min(index, mobileSteps.length - 1));
      // Menyiapkan previousStep untuk digunakan pada langkah berikutnya.
      const previousStep = document.body.dataset.mobileStep;

      // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
      document.body.classList.add('mobile-wizard');
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      document.body.dataset.mobileStep = String(safeIndex);

      // Menyiapkan label untuk digunakan pada langkah berikutnya.
      const label = $('#mobileStepLabel');
      // Menyiapkan title untuk digunakan pada langkah berikutnya.
      const title = $('#mobileStepTitle');
      // Menyiapkan dots untuk digunakan pada langkah berikutnya.
      const dots = $('#mobileStepDots');
      // Menyiapkan prev untuk digunakan pada langkah berikutnya.
      const prev = $('#mobilePrevBtn');
      // Menyiapkan next untuk digunakan pada langkah berikutnya.
      const next = $('#mobileNextBtn');

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (label) label.textContent = `Step ${safeIndex + 1} dari ${mobileSteps.length}`;
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (title) title.textContent = mobileSteps[safeIndex].title;

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (dots) {
        // Menyusun isi HTML dinamis untuk komponen tampilan.
        dots.innerHTML = mobileSteps.map((_, i) => `<span class="mobile-step-dot ${i === safeIndex ? 'active' : ''}"></span>`).join('');
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (prev) prev.textContent = safeIndex === 0 ? 'Home' : 'Kembali';
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (next) {
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (isTicketModalOpen()) {
          // Memperbarui teks elemen sesuai data pilihan pengguna.
          next.textContent = 'Selesai';
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        } else if (safeIndex === mobileSteps.length - 1) {
          // Memperbarui teks elemen sesuai data pilihan pengguna.
          next.textContent = state.paymentCompleted ? 'Buka E-Tiket' : 'Selesaikan Pembayaran';
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        } else {
          // Memperbarui teks elemen sesuai data pilihan pengguna.
          next.textContent = 'Lanjut';
        // Menutup blok logika atau kumpulan data di atas.
        }
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Jangan auto-scroll saat layout HP berubah karena address bar Safari/Chrome.
      // Scroll ke atas hanya saat user benar-benar pindah step.
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (shouldScroll && previousStep !== String(safeIndex)) {
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        requestAnimationFrame(() => {
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          window.scrollTo({ top: 0, behavior: 'smooth' });
        // Menutup blok logika atau kumpulan data di atas.
        });
      // Menutup blok logika atau kumpulan data di atas.
      }
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi currentMobileStep: mengambil pilihan aktif current mobile step.
    function currentMobileStep() {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return Number(document.body.dataset.mobileStep || 0);
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi initMobileWizard: menyiapkan init mobile wizard.
    function initMobileWizard() {
      // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
      setMobileStep(currentMobileStep(), false);

      // Menyiapkan prev untuk digunakan pada langkah berikutnya.
      const prev = $('#mobilePrevBtn');
      // Menyiapkan next untuk digunakan pada langkah berikutnya.
      const next = $('#mobileNextBtn');

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (prev) {
        // Memasang penanganan interaksi pengguna atau perubahan tampilan.
        prev.addEventListener('click', () => {
          // Menyiapkan current untuk digunakan pada langkah berikutnya.
          const current = currentMobileStep();
          // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
          document.body.classList.remove('mobile-all-movies');
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          setMobileStep(Math.max(0, current - 1), true);
        // Menutup blok logika atau kumpulan data di atas.
        });
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (next) {
        // Memasang penanganan interaksi pengguna atau perubahan tampilan.
        next.addEventListener('click', () => {
          // Menyiapkan current untuk digunakan pada langkah berikutnya.
          const current = currentMobileStep();

          // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
          if (isTicketModalOpen()) {
            // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
            closeTicketAndGoHome();
            // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
            return;
          // Menutup blok logika atau kumpulan data di atas.
          }

          // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
          if (current >= mobileSteps.length - 1) {
            // Menyiapkan checkout untuk digunakan pada langkah berikutnya.
            const checkout = $('#checkoutBtn');
            // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
            if (checkout) checkout.click();
            // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
            updateMobileStepButtonLabel();
            // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
            return;
          // Menutup blok logika atau kumpulan data di atas.
          }

          // Mengubah kelas CSS untuk mengatur kondisi tampilan elemen.
          document.body.classList.remove('mobile-all-movies');
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          setMobileStep(current + 1, true);
          // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
          updateMobileStepButtonLabel();
        // Menutup blok logika atau kumpulan data di atas.
        });
      // Menutup blok logika atau kumpulan data di atas.
      }

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      window.addEventListener('resize', () => {
        // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
        setMobileStep(currentMobileStep(), false);
      // Menutup blok logika atau kumpulan data di atas.
      });
    // Menutup blok logika atau kumpulan data di atas.
    }
