# 🚽 GUide — Genitourinary Health Education Web App

Aplikasi web edukasi kesehatan saluran kemih (*genitourinary health*) berbasis *mobile-first* yang dibangun menggunakan **Google Apps Script** dan **HTML/CSS/JavaScript**. Proyek ini dirancang agar informasi medis seputar kesehatan saluran kemih mudah dipahami dengan cara yang interaktif dan menarik.

## ✨ Fitur Utama
* **Home:** Halaman utama berisi ringkasan navigasi dan pengenalan aplikasi.
* **Myth vs Fact:** Edukasi interaktif untuk meluruskan mitos dan fakta seputar kesehatan saluran kemih.
* **Mini Quiz:** Kuis singkat untuk menguji pemahaman pengguna terkait pencegahan dan perawatan kesehatan saluran kemih.
* **Toilet Talk Scenario:** Studi kasus atau skenario sehari-hari untuk membantu pengguna mengambil keputusan kesehatan yang tepat.
* **Health Corner:** Pusat informasi visual berupa infografis kesehatan dan grafik panduan hidrasi interaktif.
* **Local Storage:** Menyimpan progres kuis atau preferensi pengguna secara lokal di browser.

## 📂 Struktur Proyek
* `Code.gs` — Skrip *backend* Google Apps Script untuk menyajikan halaman web (`doGet`) dan mengelola logika sisi server.
* `Index.html` — Antarmuka pengguna (*frontend*) lengkap dengan tata letak responsif (*mobile-first*), logika interaktif, dan infografis SVG.

## 🚀 Cara Menjalankan / Deploy di Google Apps Script
1. Buka [Google Apps Script](https://script.google.com/) dan buat proyek baru (**New Project**).
2. Salin isi file `Code.gs` dari *repository* ini ke dalam file `Code.gs` di editor Apps Script.
3. Buat file HTML baru dengan nama `Index` (`Index.html`), lalu salin seluruh isi `Index.html` dari *repository* ini ke dalamnya.
4. Klik tombol **Deploy** > **New deployment** di pojok kanan atas.
5. Pilih jenis **Web app**, atur *Execute as* ke **Me**, dan *Who has access* sesuai kebutuhan (misalnya **Anyone**).
6. Klik **Deploy** dan buka tautan Web App yang dihasilkan.

## 🛠️ Teknologi yang Digunakan
* **Google Apps Script**
* **HTML5, CSS3, JavaScript**
* **SVG** (untuk visualisasi grafik hidrasi & infografis)

---
*Dibuat untuk tujuan edukasi dan promosi kesehatan.*
