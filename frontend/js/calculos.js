function output()
{
    let quaisExistem = [];
    const inputs = document.querySelectorAll("#card-info input");

    inputs.forEach(input =>
    {
        const valor = input.value.trim();

        if (valor === "")
        {
            return;
        }

        const numero = Number(valor);

        if (!Number.isNaN(numero))
        {
            quaisExistem.push(numero);
        }
    })

    return quaisExistem;

}

export function media()
{
    const dados = output();

    if (dados.length === 0)
    {
        return 0;
    }

    let soma = 0;
    dados.forEach(elementos => 
    {
        soma += elementos;
    })
    return duasCasas(soma / dados.length);
}

export function mediana()
{
    let dados = output();

    if (dados.length === 0)
    {
        return 0;
    }

    dados.sort((a, b) => a - b) //Isso ordena dos menores pro maiores

    if (dados.length % 2 != 0)
    {
        return dados[((dados.length + 1) / 2) - 1];
    }

    const meio = dados.length / 2;
    return duasCasas((dados[meio - 1] + dados[meio]) / 2)
}

export function varianca()
{
    const dados = output();

    if (dados.length < 2)
    {
        return 0;
    }

    let soma = 0;
    const mediaDados = media();

    dados.forEach(elementos => 
    {
        soma += (elementos - mediaDados) ** 2;
    })

    return duasCasas(soma / (dados.length - 1));

}
export function desvioPadrao()
{
    return duasCasas(Math.sqrt(varianca()));
}

export function coeficienteVarianca()
{
    if (media() === 0)
    {
        return [0, "homogêneo"]
    }

    const homo_hetero = (desvioPadrao() / media()) * 100;

    if (homo_hetero > 30)
    {
        return [duasCasas(homo_hetero), "heterogêneo"]
    }
    return [duasCasas(homo_hetero), "homogêneo"]
}

function duasCasas(numero)
{
    return Number(numero.toFixed(2));
}
