function alerta() {
    let combustivel = document.getElementById('idcombustivel').value;
    let rodas = document.getElementById('idrodas').value;
    let cor = document.getElementById('idcor').value;
    let placa = document.getElementById('idplaca').value;
    let modelo = document.getElementById('idmodelo').value;
    let ano = document.getElementById('idano').value;


    if (combustivel == "" || rodas == "" || cor == "" || placa == "" || modelo == "" || ano == "") {
        window.alert('voce nao preencheu todos os campos!!');
    } else {
        window.alert('cadastrado com sucesso!!');
    }



}