# 📤 Panduan Push PDA.ID ke GitHub lewat PowerShell

Panduan ini memakai nama repository **PDA-ID** sebagai contoh. Ganti `USERNAME` dengan username GitHub milikmu dan gunakan URL repository yang benar.

## 1. Ekstrak dan buka folder yang tepat

1. Klik kanan ZIP → **Extract All / Ekstrak Semua**.
2. Masuk ke folder `PDA-ID` sampai terlihat `index.html`, `README.md`, dan folder `assets`.
3. Klik kolom alamat File Explorer di bagian atas.
4. Ketik `powershell`, lalu tekan **Enter**. PowerShell akan terbuka di folder itu. Alternatif: klik kanan area kosong folder → **Open in Terminal / Buka di Terminal**, lalu pilih PowerShell.
5. Periksa lokasi dan isinya:

```powershell
Get-Location
Get-ChildItem
```

Jika masih berada di `C:\Windows\System32`, pindah ke folder project. Contoh berikut harus disesuaikan dengan lokasi ekstrak di laptopmu:

```powershell
Set-Location -LiteralPath 'C:\Users\ROG\Downloads\PDA-ID'
```

Jalankan perintah Git di folder yang berisi **index.html**, bukan di dalam ZIP atau di `System32`.

## 2. Periksa instalasi Git

```powershell
git --version
```

Jika tidak dikenali, instal Git for Windows dari [git-scm.com](https://git-scm.com/downloads/win), tutup PowerShell, lalu buka lagi dari folder project.

## 3. Atur identitas commit

Ganti contoh email berikut dengan email GitHub milikmu atau alamat noreply dari pengaturan email GitHub:

```powershell
git config --global user.name "Andika Novanda Putra"
git config --global user.email "GANTI_DENGAN_EMAIL_GITHUB_KAMU"
```

Periksa hasilnya:

```powershell
git config --global user.name
git config --global user.email
```

## 4. Buat repository kosong di GitHub

1. Masuk ke [github.com](https://github.com).
2. Klik **+ → New repository**.
3. Isi nama **PDA-ID** atau nama pilihanmu.
4. Pilih Public atau Private sesuai kebutuhan.
5. Biarkan pilihan menambahkan README, `.gitignore`, dan license tidak dicentang, karena project ini sudah berisi README dan konfigurasi Git.
6. Klik **Create repository**.
7. Salin URL HTTPS repository dari halaman yang tampil, misalnya `https://github.com/USERNAME/PDA-ID.git`.

## 5. Push pertama ke repository kosong

Jalankan berurutan di PowerShell folder project. Ubah URL pada baris `git remote add` terlebih dahulu:

```powershell
git init
git add .
git status
git commit -m "Initial commit: PDA.ID Tickets dengan struktur modular"
git branch -M main
git remote add origin https://github.com/USERNAME/PDA-ID.git
git remote -v
git push -u origin main
```

Jika muncul jendela autentikasi GitHub, selesaikan login menggunakan akun yang memiliki akses ke repository. Jangan memakai password akun biasa sebagai password Git HTTPS. Gunakan alur login browser dari Git Credential Manager; jika memakai autentikasi token, masukkan token hanya pada prompt autentikasi yang sesuai.

Refresh halaman repository. File `index.html`, folder `assets`, serta README seharusnya sudah terlihat.

| Perintah | Kegunaan |
| --- | --- |
| `git init` | Mengaktifkan Git di folder project |
| `git add .` | Memasukkan perubahan ke staging |
| `git status` | Memeriksa perubahan yang akan dicatat |
| `git commit` | Mencatat versi project di komputer |
| `git branch -M main` | Menamai branch utama sebagai main |
| `git remote add origin ...` | Menghubungkan folder lokal ke repository GitHub |
| `git push -u origin main` | Mengirim commit dan memasang upstream branch |

## 6. Jika repository sudah berisi file

Untuk repository yang sudah memiliki riwayat, gunakan clone ke folder baru. Jangan menjalankan langkah `git init` dari bagian sebelumnya di folder clone.

1. Buka PowerShell pada folder induk yang bisa ditulis, misalnya Downloads.
2. Sesuaikan URL, lalu jalankan:

```powershell
Set-Location -LiteralPath "$env:USERPROFILE\Downloads"
git clone https://github.com/USERNAME/PDA-ID.git PDA-ID-GitHub
Set-Location -LiteralPath '.\PDA-ID-GitHub'
git switch -c refactor/pisahkan-file
```

3. Lewat File Explorer, salin **isi** folder hasil ekstrak ke dalam `PDA-ID-GitHub`: `index.html`, `assets`, `docs`, `README.md`, `.gitignore`, dan `.gitattributes`. Tinjau file bernama sama sebelum menggantinya; pertahankan file project lain yang masih diperlukan. Jangan menyalin folder `.git` dari tempat lain.
4. Catat dan kirim perubahan:

```powershell
git status
git add .
git diff --cached --stat
git commit -m "Refactor: pisahkan HTML CSS JavaScript dan tambah dokumentasi"
git push -u origin refactor/pisahkan-file
```

5. Di GitHub, buka **Compare & pull request**. Pastikan base adalah branch utama repository dan compare adalah `refactor/pisahkan-file`.
6. Isi judul serta penjelasan perubahan → **Create pull request**.
7. Tinjau perubahan, tunggu pemeriksaan yang berlaku, lalu **Merge pull request → Confirm merge** jika kamu memiliki izin.
8. Setelah merge, perbarui komputer. Perintah berikut mengasumsikan branch utama bernama `main`:

```powershell
git switch main
git pull --ff-only origin main
```

Push pertama ke repository kosong pada bagian 5 dapat langsung menuju `main`. Untuk perubahan berikutnya, workflow branch dan pull request ini membantu proses peninjauan.

## 7. Push perubahan berikutnya

Untuk project pribadi dengan perubahan langsung di `main`, setelah mengedit file:

```powershell
git status
git add .
git diff --cached --stat
git commit -m "Update tampilan dan fitur PDA.ID"
git pull --rebase origin main
git push origin main
```

Jika rebase menampilkan konflik, selesaikan file bertanda konflik, lalu jalankan `git add NAMA_FILE` dan `git rebase --continue`. Jika ingin membatalkan rebase yang sedang berlangsung, gunakan `git rebase --abort`. Lanjutkan push setelah konflik selesai.

## 8. Mengatasi pesan umum

| Pesan | Penanganan |
| --- | --- |
| `Permission denied` saat membuat folder | Pindah dari folder sistem ke Downloads/Documents, lalu jalankan perintah lagi |
| `git is not recognized` | Instal Git dan buka kembali terminal |
| `Author identity unknown` | Lengkapi `user.name` dan `user.email` pada bagian 3 |
| `remote origin already exists` | Periksa `git remote -v`; jika URL salah, jalankan `git remote set-url origin URL_REPOSITORY_YANG_BENAR` |
| `Repository not found` | Periksa URL, keberadaan repository, serta akses akun yang digunakan |
| `src refspec main does not match any` | Pastikan sudah ada commit, periksa `git branch`, lalu gunakan nama branch yang benar |
| `nothing to commit` | Tidak ada perubahan baru; gunakan `git status` untuk memeriksa |
| `non-fast-forward` / push ditolak | Jika satu riwayat, tarik perubahan dengan rebase setelah working tree bersih; untuk repository terpisah yang sudah berisi file, gunakan alur clone pada bagian 6 |
| Peringatan `LF will be replaced by CRLF` | Ini peringatan akhir baris teks, bukan kegagalan push |

## 9. Memeriksa aplikasi sebelum diunggah

- Buka `index.html` dan pastikan logo serta poster tampil.
- Coba cari judul film, filter genre, dan buka detail film.
- Ubah bioskop, tanggal, jam, dan pilihan kursi.
- Periksa total: harga tiket + Rp4.000 per kursi + harga promo.
- Lakukan konfirmasi pembayaran simulasi, buka e-tiket, dan unduh file `.txt`.
- Coba ukuran layar ponsel dan tombol navigasi bertahap.

Panduan merujuk ke dokumentasi resmi [menambahkan kode lokal ke GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github) dan [mengelola remote repository](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories).
