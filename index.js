const axios = require("axios");
require("dotenv").config();

(async function () {
  try {
  const sms = await axios({
    url: "https://voice-api.zenvia.com/sms",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Access-Token": process.env.TOTALVOICE_API_KEY,
    },
    data: {
      numero_destino: process.env.TELEPHONE,
      mensagem: "3",
    },
  });
  } catch (error) {
    console.log("Erro: ", error.message);
  }
})();
