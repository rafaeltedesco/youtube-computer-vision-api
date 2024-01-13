const { ComputerVisionClient } = require('@azure/cognitiveservices-computervision');
const { CognitiveServicesCredentials } = require('@azure/ms-rest-azure-js');

const computerVisionKey = process.env.VISION_KEY;
const computerVisionEndpoint = process.env.VISION_ENDPOINT;

const credentials = new CognitiveServicesCredentials(computerVisionKey);

const azureClient = new ComputerVisionClient(credentials, computerVisionEndpoint);

module.exports = azureClient;
