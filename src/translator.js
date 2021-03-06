"use strict";

const Translate = require('@google-cloud/translate');

const TranslateService = {};
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = (content, targetLang) => {
  return translate
    .translate(content, targetLang)
    .then(result => result[0])
}

module.exports = TranslateService;
