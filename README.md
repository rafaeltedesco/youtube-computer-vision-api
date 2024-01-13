#### API de Visão Computacional com Azure Cognitive Services (Computer Vision)

Essa pequena API de exemplo para o youtube, utiliza o serviço de inteligência artifical
da Azure para análise de imagens.

O endpoint para acionar o serviço e obter o resultado é demonstrado abaixo:

```
POST http://localhost:3000/computer-vision/analyse-image
Content-Type: application/json
```

```json
{
  "imageURL": "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2021/11/Turtle-brumation-pet-talk-1024x767.jpeg",
  "language": "en",
  "features": [
        "Tags",
        "Description",
        "Color"
      ]
}
```

Ah, não esqueça de criar seu _resource group_ na Azure, além do serviço de _Computer Vision_, e também adicionar a _chave_ e _endpoint_ no arquivo .env.
