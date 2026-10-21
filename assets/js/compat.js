// Fungsi isIOSDevice: memeriksa is i o s device.
function isIOSDevice() {
      // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
      return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi installScrollIntoViewFallback: memasang install scroll into view fallback.
    function installScrollIntoViewFallback() {
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!window.Element || !Element.prototype.scrollIntoView) return;
      // Menyiapkan nativeScrollIntoView untuk digunakan pada langkah berikutnya.
      const nativeScrollIntoView = Element.prototype.scrollIntoView;
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (nativeScrollIntoView.__pdaPatched) return;

      // Menyiapkan patchedScrollIntoView untuk digunakan pada langkah berikutnya.
      const patchedScrollIntoView = function(options) {
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        try {
          // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
          return nativeScrollIntoView.call(this, options);
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        } catch (error) {
          // Mengembalikan hasil fungsi atau menghentikan proses pada kondisi ini.
          return nativeScrollIntoView.call(this);
        // Menutup blok logika atau kumpulan data di atas.
        }
      // Menutup blok logika atau kumpulan data di atas.
      };

      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      patchedScrollIntoView.__pdaPatched = true;
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      Element.prototype.scrollIntoView = patchedScrollIntoView;
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Fungsi installIphoneTapFix: memasang install iphone tap fix.
    function installIphoneTapFix() {
      // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
      if (!isIOSDevice()) return;

      // Menyiapkan lastTapTime untuk digunakan pada langkah berikutnya.
      let lastTapTime = 0;

      // Memasang penanganan interaksi pengguna atau perubahan tampilan.
      document.addEventListener('touchend', (event) => {
        // Menyiapkan interactive untuk digunakan pada langkah berikutnya.
        const interactive = event.target.closest(
          // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
          'button, [data-open-detail], .movie-card, .filter-btn, .select-card, .date-chip-card, .time-chip, .seat, .pay-card, .promo-add-btn, .nav-link, .mobile-step-nav button, .mobile-bottom-nav button'
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        );

        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (!interactive) return;
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (event.target.closest('input, select, textarea, option')) return;
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (interactive.disabled || interactive.getAttribute('aria-disabled') === 'true') return;

        // Menyiapkan now untuk digunakan pada langkah berikutnya.
        const now = Date.now();
        // Memeriksa kondisi sebelum menjalankan tindakan pada baris ini.
        if (now - lastTapTime < 280) return;
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        lastTapTime = now;

        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        event.preventDefault();
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        event.stopPropagation();
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        interactive.click();
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      }, { passive: false });
    // Menutup blok logika atau kumpulan data di atas.
    }

    // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
    installScrollIntoViewFallback();
    // Memanggil fungsi untuk menjalankan langkah pemrosesan ini.
    installIphoneTapFix();
