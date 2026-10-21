<div align="center">

# 🎬 PDA.ID Tickets

### Pilih film. Tentukan kursi. Nikmati pengalaman bioskop.

**Prototipe website pemesanan tiket bioskop dengan katalog film, pilihan jadwal, denah kursi, dan e-tiket.**

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

[Fitur](#-fitur-utama) · [Menjalankan](#-menjalankan-project) · [Struktur](#-struktur-project) · [Panduan GitHub](docs/PANDUAN-GITHUB.md)

</div>

---

## ✨ Tentang project

PDA.ID Tickets menyajikan alur pemesanan tiket bioskop dalam satu halaman interaktif. Tampilan bertema gelap memakai aksen warna, kartu film, denah kursi, dan navigasi bertahap pada layar ponsel.

Project ini berasal dari file `PDA.ID(4).html` yang dipisahkan menjadi HTML, CSS, JavaScript per tanggung jawab, dan aset gambar lokal. Seluruh file kode diberi komentar berbahasa Indonesia agar lebih mudah dipelajari. Pada template HTML/SVG dalam JavaScript, penjelasan memakai interpolasi komentar yang menghasilkan string kosong agar komentar tidak tampil pada halaman.

## 🚀 Fitur utama

| Fitur | Kemampuan |
| --- | --- |
| Katalog film | 12 film dengan poster, genre, durasi, dan klasifikasi usia |
| Pencarian dan filter | Cari judul film dan filter berdasarkan genre |
| Detail film | Sinopsis, produser, sutradara, penulis, dan pemeran |
| Lokasi bioskop | Pilihan daerah dan daftar bioskop dari data lokal |
| Jadwal tayang | Pilihan tanggal selama tujuh hari dan jam penayangan |
| Pilihan kursi | Denah dengan kursi tersedia, terpilih, terisi, diblokir, dan VIP |
| Promo | Pilihan tambahan paket snack dan bundle |
| Ringkasan otomatis | Harga tiket, biaya layanan, promo, dan total pembayaran |
| Pembayaran demo | Pilihan metode pembayaran dan konfirmasi manual |
| E-tiket | Ringkasan tiket dan unduhan berformat `.txt` |
| Tampilan responsif | Layout desktop dan navigasi bertahap untuk ponsel |

## 🧩 Teknologi

- **HTML5** untuk struktur halaman.
- **CSS3** untuk layout, warna, animasi, dan media query.
- **JavaScript murni** untuk data, status pemesanan, rendering, dan interaksi.
- **Gambar lokal** untuk logo dan poster, tanpa pengambilan poster dari server eksternal.

Tidak memerlukan npm, framework, database, atau proses build. Badge README memakai layanan eksternal; aplikasi utamanya tidak bergantung pada badge tersebut.

## 📁 Struktur project

| File/folder | Tanggung jawab |
| --- | --- |
| `index.html` | Struktur halaman, formulir, modal, serta pemuatan CSS dan JavaScript |
| `assets/css/styles.css` | Seluruh styling dan penyesuaian layar |
| `assets/js/compat.js` | Kompatibilitas scroll dan interaksi sentuh iOS |
| `assets/js/data.js` | Data film, tema, bioskop, pembayaran, promo, dan lokasi poster |
| `assets/js/state.js` | Status pilihan pengguna, tanggal, kursi, dan helper selector DOM |
| `assets/js/utils.js` | Format rupiah, helper poster, dan filter film |
| `assets/js/ui.js` | Rendering katalog, kursi, ringkasan, pembayaran, dan e-tiket |
| `assets/js/events.js` | Event pengguna, unduhan tiket, dan navigasi ponsel |
| `assets/js/app.js` | Rendering awal dan inisialisasi aplikasi |
| `assets/images/` | 13 gambar logo dan poster yang diekstrak dari sumber asli |
| `docs/PANDUAN-GITHUB.md` | Langkah PowerShell untuk push, update, branch, dan pull request |
| `.gitignore` | File sementara yang tidak perlu diunggah |
| `.gitattributes` | Pengaturan akhir baris teks dan file gambar biner |

**Urutan JavaScript penting:** `compat → data → state → utils → ui → events → app`. Script dimuat di bagian akhir halaman supaya elemen HTML sudah tersedia. File menggunakan script klasik dengan lingkup global bersama, sehingga urutannya perlu dipertahankan.

## 💻 Menjalankan project

### Cara langsung

1. Ekstrak ZIP.
2. Buka folder `PDA-ID` yang berisi `index.html`.
3. Klik dua kali `index.html` untuk membukanya di browser.

### Dengan server lokal

Jika Python tersedia, buka PowerShell di folder yang berisi `index.html`, lalu jalankan:

```powershell
py -m http.server 5500
```

Buka [http://localhost:5500](http://localhost:5500). Tekan **Ctrl+C** di PowerShell untuk menghentikan server. Jika `py` tidak dikenali tetapi Python terpasang, coba `python -m http.server 5500`.

## 🎟️ Alur penggunaan

1. Cari film atau gunakan filter genre.
2. Buka detail lalu pilih film yang diinginkan.
3. Pilih daerah, bioskop, tanggal, dan jam.
4. Pilih kursi yang masih tersedia.
5. Tambahkan promo bila diinginkan.
6. Pilih metode pembayaran dan lakukan konfirmasi **simulasi**.
7. Buka e-tiket, lalu unduh ringkasannya sebagai file teks.

**Perhitungan:** total = (harga film × jumlah kursi) + (Rp4.000 × jumlah kursi) + harga promo terpilih. Sesuai kode sumber, harga paket promo ditambahkan ke subtotal tiket; label bundle tidak otomatis mengganti harga tiket.

## 🛠️ Mengubah isi aplikasi

| Ingin mengubah | Lokasi |
| --- | --- |
| Judul, harga, genre, bioskop, promo, dan metode pembayaran | `assets/js/data.js` |
| Film, daerah, kursi, atau jam pilihan awal | `assets/js/state.js` |
| Warna utama dan tampilan responsif | `assets/css/styles.css` |
| Susunan halaman | `index.html` |
| Biaya layanan dan total harga | Fungsi `serviceFee()` dan `totalPrice()` di `assets/js/ui.js` |
| Poster | Gambar di `assets/images/` dan pemetaan `posterMap` di `assets/js/data.js` |

## 📌 Ruang lingkup demo

Pembayaran, nomor virtual account, status kursi, dan pola QR merupakan simulasi di browser. Konfirmasi pembayaran hanya mengubah status lokal; tidak terhubung ke bank, QRIS, payment gateway, atau sistem bioskop. Pola QR bukan kode pembayaran atau tiket yang tervalidasi. Data pemesanan belum disimpan secara permanen dan kembali ke nilai awal setelah refresh. Jadwal dan informasi bioskop merupakan data contoh, bukan informasi real-time.

---

<div align="center">

**PDA.ID Tickets** · Project pembelajaran antarmuka pemesanan tiket bioskop 🎞️

</div>
