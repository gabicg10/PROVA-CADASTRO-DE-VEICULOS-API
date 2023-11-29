const url_server = "http://localhost:5000";

function cadastrar() {
    console.log('Enviando dados ao servidor...');

    // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
    const dados = {
        combustivel: document.querySelector('[veiculo="combustivel"]').value,
        roda: document.querySelector('[veiculo="roda"]').value,
        cor: document.querySelector('[veiculo="cor"]').value,
        placa: document.querySelector('[veiculo="placa"]').value,
        modelo: document.querySelector('[veiculo="modelo"]').value,
        ano: document.querySelector('[veiculo="ano"]').value,
        tipo: document.querySelector('[veiculo="tipo"]').value
    }

    // Requisição para back-end
    
    // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
    fetch(`${url_server}/cadastro-teste`, {
        // define o uso do método POST
        method: 'POST',
        // informações sobre o cabeçalho da requisição
        headers: {
            'Content-Type': 'application/json'
        },
        // transforma os dados da requisição em um JSON chamado body
        body: JSON.stringify(dados)
    })
        // Depois de feita a requisição, o front-end irá receber um retorno do servidor
        .then(response => response.json())
        // Se toda a requisição deu certo, será informado no log
        .then(dados => {
            console.log('Resposta do servidor:', dados);
            // Faça algo com a resposta do servidor, se necessário
        })
        // Caso tenha algum tipo de erro na requisição, é lançada a excessão
        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);
            // Trate os erros, se necessário
        });
}

function listarVeiculo() {

    // faça algo antes de montar a tabela, SE NECESSÁRIO
    // recupera o elemento da tabela
    const tabela = document.querySelector('table');
    // verifica quantas linhas existem na tabela
    const contadorLinhas = tabela.rows.length;
    // apaga todas as linhas da tabela
    for(var i = contadorLinhas - 1; i > 0; i--) {
        tabela.deleteRow(i);
    }

    fetch(`${url_server}/testandoCadastro`)
        .then(response => response.json())
        .then(data => {
            // Inserindo os dados da pessoa na tabela
            // fazendo um loop usando forEach para percorrer todos os dados retornados pelo servidor
            data.forEach(veiculo => {
                // Criando os elementos HTML
                const tabela = document.querySelector('table');
                const elementTr = document.createElement('tr');
                const tdCombustivel = document.createElement('td');
                const tdRodas = document.createElement('td');
                const tdCor = document.createElement('td');
                const tdPlaca = document.createElement('td');
                const tdModelo = document.createElement('td');
                const tdAno = document.createElement('td');
                const tdTipo = document.createElement('td');

                // Inserindo os dados da pessoa no elemento	
                tdCombustivel.textContent = veiculo.combustivel;
                tdRodas.textContent = combustivel.roda;
                tdCor.textContent = combustivel.cor;
                tdPlaca.textContent = combustivel.placa;
                tdModelo.textContent = combustivel.modelo;
                tdAno.textContent = combustivel.ano;
                tdTipo.textContent = combustivel.tipo;

                // Inserindo os elementos nas linhas da tabela (tr => TableRow)
                elementTr.appendChild(tdCombustivel);
                elementTr.appendChild(tdRodas);
                elementTr.appendChild(tdCor);
                elementTr.appendChild(tdPlaca);
                elementTr.appendChild(tdModelo);
                elementTr.appendChild(tdAno);
                elementTr.appendChild(tdTipo);

                // Adicionando a linha com as informações na tabela
                tabela.appendChild(elementTr);
            });
        })
    }
    
    // sempre ligar o servidor no back-end node .\dist\controller\app.js
    