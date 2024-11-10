# 📶 Gerador de QR Code para Wi-Fi

Este é um gerador de QR Code de Wi-Fi gratuito e de código aberto, criado com HTML, CSS e JavaScript. O projeto foi desenvolvido para fornecer uma alternativa gratuita às soluções pagas disponíveis na internet para gerar QR Codes de redes Wi-Fi.

## 📝 Sobre o Projeto

Com este gerador, você pode facilmente criar um QR Code que contém o **nome da rede Wi-Fi (SSID)** e a **senha**. Esse QR Code pode ser escaneado para conectar-se automaticamente à rede sem a necessidade de inserir manualmente as credenciais. É especialmente útil para ambientes públicos ou residências, onde o compartilhamento rápido de Wi-Fi é necessário.

![Interface do Gerador de QR Code de Wi-Fi](https://felipemzero.github.io/qr_wifi/)

### 🎯 Funcionalidades

- **Entrada para o Nome da Rede (SSID)**: O usuário pode inserir o nome da rede Wi-Fi.
- **Entrada para a Senha**: O usuário insere a senha da rede.
- **Geração de QR Code**: Ao clicar no botão "Gerar QR Code", um QR Code é criado instantaneamente com as informações fornecidas.
- **Download do QR Code**: O usuário pode baixar o QR Code em formato PNG, facilitando o uso e compartilhamento.

### 🚀 Tecnologias Utilizadas

- **HTML**: Estrutura básica do sistema web.
- **CSS**: Estilização da interface para uma experiência visual agradável e responsiva.
- **JavaScript**: Função de geração de QR Code utilizando a biblioteca [QRCode.js](https://davidshimjs.github.io/qrcodejs/).

## 📂 Estrutura do Projeto

```plaintext
📁 Gerador-QR-WiFi
│
├── index.html        # Página principal do gerador
├── styles.css        # Estilos para a interface do gerador
└── script.js         # Função para geração de QR Code e download
