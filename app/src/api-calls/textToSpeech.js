const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
  params: {
    key: 'ccf44a535d034b58b8b775bf3636c619' || process.env.REACT_APP_TTS_KEY,
    src: 'Hello, world!',
    hl: 'en-us',
    r: '0',
    c: 'wav',
    f: '8khz_8bit_mono'
  },
  headers: {
    'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com',
    'X-RapidAPI-Key': 'c4c626c11fmsh8f9c37ae0e545fep106124jsn2330106d61f4'
  }
};

export default function textToSpeech(text, lang, then) {
  options.params.src = text;
  options.params.hl = lang;
  axios(options)
      .then(response => {
        then(response);
      })
      .catch(error => {
      console.log(error);
  });
}