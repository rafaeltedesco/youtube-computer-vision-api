const express = require('express');
const computerVisionService = require('./services/computerVisionService');

const app = express();
app.use(express.json());

app.post('/computer-vision/analyse-image', async (req, res) => {
  const { imageURL, language, features } = req.body;
  const aboutImage = await computerVisionService.analyseImage(imageURL, language, features);

  if (!aboutImage) {
    return res.status(500).json({
      message: 'Ocorreu algum erro',
    })
  }

  return res.status(200).json({
    aboutImage
  })
});

module.exports = app;