const botao = Number(JSON.parse(localStorage.getItem("botaoEscolhido")))
const formulario = document.getElementById("Formulario");

for (let i = 0; i < botao; i++)
{
    formulario.insertAdjacentElement("beforeend", document.createElement("input", id=`input${i}`));
    formulario.insertAdjacentElement("beforeend", document.createElement("br"));
}

let botaoForm = document.createElement("button");

botaoForm.type = "submit";
botaoForm.id = "botao-form";
botaoForm.textContent = "Calcular";

formulario.insertAdjacentElement("beforeend", botaoForm)