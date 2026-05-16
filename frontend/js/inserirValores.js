const botao = Number(JSON.parse(localStorage.getItem("botaoEscolhido")))
const formulario = document.getElementById("card-info");

for (let i = 0; i < botao; i++)
{
    let inputs = document.createElement("input");

    inputs.id = `input${i}`;
    inputs.placeholder = "Insira um valor...";
    inputs.required = true;

    formulario.insertAdjacentElement("beforeend", inputs);
    formulario.insertAdjacentElement("beforeend", document.createElement("br"));
}

let botaoForm = document.createElement("button");

botaoForm.type = "submit";
botaoForm.id = "botao-form";
botaoForm.textContent = "Calcular";

formulario.insertAdjacentElement("beforeend", botaoForm)