const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
  params: {
    key: process.env.TTS_KEY,
    src: 'Hello, world!',
    hl: 'en-us',
    r: '0',
    c: 'mp3',
    f: '8khz_8bit_mono'
  },
  headers: {
    'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com',
    'X-RapidAPI-Key': 'c4c626c11fmsh8f9c37ae0e545fep106124jsn2330106d61f4'
  }
};

export default function textToSpeech(text, lang) {
    options.params.src = text;
    options.params.hl = lang;
    axios(options)
        .then(response => {
        console.log(response);
        })
        .catch(error => {
        console.log(error);
    });
}