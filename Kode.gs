/**
 * ============================================================================
 * GUide - Backend Google Apps Script (Code.gs)
 * Tagline: "Let's Get to Know Your Health"
 * ============================================================================
 * File ini bertugas menyajikan halaman web aplikasi (Index.html) agar dapat
 * diakses sebagai Web App melalui Google Apps Script, serta menyediakan
 * struktur dasar jika di masa depan Anda ingin menghubungkannya ke Google Sheets.
 */

/**
 * Fungsi utama yang dijalankan saat Web App diakses melalui browser.
 * @param {Object} e - Parameter event dari HTTP GET request.
 * @return {HtmlOutput} Halaman HTML aplikasi TOILET TALK.
 */
function doGet(e) {
  try {
    // Membuat template dari file Index.html
    var template = HtmlService.createTemplateFromFile('Index');
    
    // Mengevaluasi template dan mengatur konfigurasi tampilan mobile-first
    return template.evaluate()
      .setTitle("TOILET TALK - Let's Talk About What Your Body Tells You")
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      
  } catch (error) {
    // Penanganan error jika file Index.html tidak ditemukan atau gagal dimuat
    Logger.log('Error pada doGet: ' + error.toString());
    return HtmlService.createHtmlOutput(
      '<h3>Terjadi kesalahan memuat aplikasi TOILET TALK.</h3>' +
      '<p>Detail: ' + error.toString() + '</p>'
    );
  }
}

/**
 * Fungsi pembantu (Opsional) untuk menyertakan file terpisah jika diperlukan.
 * @param {string} filename - Nama file HTML di proyek GAS.
 * @return {string} Konten mentah file tersebut.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}