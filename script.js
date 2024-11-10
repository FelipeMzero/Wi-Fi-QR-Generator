function gerarQRCode() {
    // Obtém os valores de SSID e senha inseridos pelo usuário
    const ssid = document.getElementById("ssid").value;
    const password = document.getElementById("password").value;

    // Formato de Wi-Fi para QR Code
    const wifiInfo = `WIFI:S:${ssid};T:WPA;P:${password};;`;

    // Limpa o QR Code anterior, se existir
    document.getElementById("qrcode").innerHTML = "";

    // Gera um novo QR Code
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: wifiInfo,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });

    // Espera o QR Code ser gerado e obtém a imagem
    setTimeout(() => {
        // Seleciona o elemento canvas gerado pelo QRCode.js
        const qrCanvas = document.querySelector("#qrcode canvas");

        if (qrCanvas) {
            // Converte o canvas para uma URL de imagem PNG
            const qrImage = qrCanvas.toDataURL("image/png");

            // Define o link de download com a imagem gerada
            const downloadLink = document.getElementById("download");
            downloadLink.href = qrImage;
            downloadLink.style.display = "inline";
        }
    }, 500);
}
