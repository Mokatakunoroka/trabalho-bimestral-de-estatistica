//Esssa constante recebe o elemento <section> dentro do main, que tem o id "info-calculo"
const sessao_Main = document.getElementById("info-calculo");
//Esse for, faz um loop 7 vezes
for (let i = 0; i < 7; i++)
{
    //Uso a função insertAdjacentHTML para adicionar no fim do elemento os inputs
    sessao_Main.insertAdjacentHTML("beforeend", 
    `
    <input
    required
    class='inputs'
    type="text"
    id="input${i}"
    placeholder="Digite o número...">

    <br>
    `);
}