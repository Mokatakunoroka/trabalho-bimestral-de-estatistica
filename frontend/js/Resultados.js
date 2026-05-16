import { media, mediana, varianca, desvioPadrao, coeficienteVarianca } from "./calculos.js";

const pMedia = document.getElementById("media");
const pMediana = document.getElementById("mediana");
const pVarianca = document.getElementById("variancia");
const pDesvioPadrao = document.getElementById("desvio-padrao");
const pCoeficienteVarianca = document.getElementById("coeficiente-variancia");

const botao = document.getElementById("botao-form");

botao.addEventListener("click", () => 
{
    pMedia.textContent = `Media: ${media()}`;
    pMediana.textContent = `Mediana: ${mediana()}`;
    pVarianca.textContent = `Variança: ${varianca()}`;
    pDesvioPadrao.textContent = `Desvio padrão: ${desvioPadrao()}`;
    pCoeficienteVarianca.textContent = `Coeficiente de variança: ${coeficienteVarianca()[0]}% -> ${coeficienteVarianca()[1]}`;
})