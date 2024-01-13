const azureClient = require('../config/computerVisionClient');

const analyseImage = async (imageUrl, language, visualFeatures) => {
  try {
    const aboutImage = await azureClient.analyzeImage(imageUrl, {
      language,
      visualFeatures,
    })
  
    return aboutImage;
  } 
  catch (err) {
    console.error(err.message);
    return false;
  }
}

module.exports = {
  analyseImage,
}
