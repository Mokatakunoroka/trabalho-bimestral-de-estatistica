const botao4 = document.getElementById("btn4");
const botao5 = document.getElementById("btn5");
const botao6 = document.getElementById("btn6");
const botao7 = document.getElementById("btn7");

botao4.addEventListener("click", () => 
{
    localStorage.setItem("botaoEscolhido", 4)
    return window.location.href = "calculo.html";
})

botao5.addEventListener("click", () => 
{
    localStorage.setItem("botaoEscolhido", 5)
    return window.location.href = "calculo.html";
})

botao6.addEventListener("click", () => 
{
    localStorage.setItem("botaoEscolhido", 6)
    return window.location.href = "calculo.html";
})

botao7.addEventListener("click", () => 
{
    localStorage.setItem("botaoEscolhido", 7)
    return window.location.href = "calculo.html";
})

