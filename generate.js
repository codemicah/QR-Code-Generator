//If you are using a local server, change the `process.env.BASE_URL` to `localhost:3000`
const BASE_URL = process.env.BASE_URL

function generateQR() {
      const url = document.getElementById('urlInput').value;
      if (url) {
        const qrImage = `${BASE_URL}/generate-qr?url=${encodeURIComponent(url)}`

        document.getElementById('qrCode').innerHTML =
          `<img src="${BASE_URL}/generate-qr?url=${encodeURIComponent(url)}" alt="QR Code" />`;

          const downloadLink = document.getElementById('downloadLink');
          downloadLink.href = qrImage;
          downloadLink.download = 'qr_code.png';
          downloadLink.style.display = 'block' 
      } else {
        alert("Please enter a URL");
      }
    }
