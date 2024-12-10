document.getElementById('downloadBtn').addEventListener('click', function() {
    // Gunakan path relatif ke file PDF
    const pdfUrl = 'file.pdf'; // Pastikan nama file sesuai dan tidak perlu 'file://'
    
    const link = document.createElement('a');
    link.href = pdfUrl;  // Path relatif ke file PDF
    link.download = 'WYTAB NUM.pdf';  // Nama file yang akan diunduh
  
    // Memicu klik untuk mengunduh file
    link.click();
  });  