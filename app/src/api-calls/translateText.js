const axios = require("axios");

const translateRequest = {
  method: 'GET',
  url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
  params: {langpair: 'en|it', q: 'Hello World!', mt: '1', onlyprivate: '0', de: 'a@b.c'},
  headers: {
    'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.TRANSLATE_API_KEY
  }
};

export default function translateText(text, lang) {
  translateRequest.params.q = text;
  translateRequest.params.langpair = `en|${lang}`;
  axios(translateRequest)
    .then(response => {
      for (let i = 0; i < response.data.matches.length; i++) {
        let match = response.data.matches[i];
        if (match.segment !== match.translation) {
          console.log(match, match.translation);
          return match.translation;
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
}
