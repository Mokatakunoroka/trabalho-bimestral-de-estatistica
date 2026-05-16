const opcaoEscolhida = Number(JSON.parse(localStorage.getItem("botaoEscolhido")))

function output()
{
    let quaisExistem = [];
    for (let i = 0; i < 7; i++)
    {
        const input = document.getElementById(`input${i}`) || null;
        if (input == "" || input == null)
        {
            continue;
        }
        else
        {
            quaisExistem.push(Number(input.value));
        }
    }
    return quaisExistem;

}

export function media()
{
    const dados = output();
    let soma = 0;
    dados.forEach(elementos => 
    {
        soma += elementos;
    })
    return soma / opcaoEscolhida;
}

export function mediana()
{
    let dados = output();
    dados.sort((a, b) => a - b) //Isso ordena dos menores pro maiores

    if (dados.length % 2 != 0)
    {
        return dados[((dados.length + 1) / 2) - 1];
    }

    return (dados[(dados.length / 2) - 1] + dados[((dados.length + 1) / 2) - 1]) / 2;
}

export function varianca()
{
    const dados = output();
    let soma = 0;

    dados.forEach(elementos => 
    {
        soma += (elementos - media()) ** 2;
    })
    return (soma / (opcaoEscolhida - 1));

}
export function desvioPadrao()
{
    const primeiro = ((Math.sqrt(varianca())).toString()).split(".")[0];
    const segundo = ((Math.sqrt(varianca())).toString()).split(".")[1][0];
    const resultado = Number((primeiro.toString() + "." + segundo.toString()));
    return resultado;
}

export function coeficienteVarianca()
{
    const homo_hetero = (desvioPadrao() / media()) * 100;
    
    const primeiro = ((homo_hetero).toString()).split(".")[0];
    const segundo = ((homo_hetero).toString()).split(".")[1][0];

    const resultado = Number((primeiro.toString() + "." + segundo.toString()));

    if (homo_hetero > 30)
    {
        return [resultado, "heterogêneo"]
    }
    return [resultado, "homogêneo"]
}