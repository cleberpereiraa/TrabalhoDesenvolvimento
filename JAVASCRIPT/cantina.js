
/**********CADASTROSSSS usuario */
function casdastroR() {

    let pais = document.getElementById("CadastroResponsavel");

    let listaR = document.getElementById("listaResponsavel")
    let ListAluno = document.getElementById("listaAluno")

    ListAluno.style.display = "none"
    listaR.style.display = "none"

    pais.style.display = "block"

}

function Lresponsavel() {
    let cantina = document.getElementById("CadastroResponsavel");

    let listaR = document.getElementById("listaResponsavel")
    let ListAluno = document.getElementById("listaAluno")
    ListAluno.style.display = "none"
    listaR.style.display = "block"

    cantina.style.display = "none"


}

function cadastroUsuario() {

    document.getElementById("inic").style.backgroundColor = "#007bff"
    document.getElementById("cdu").style.backgroundColor = "#343a40"
    document.getElementById("cdp").style.backgroundColor = "#007bff"
    document.getElementById("ap").style.backgroundColor = "#007bff"
    document.getElementById("sa").style.backgroundColor = "#007bff"


    var principal = document.getElementById("pPrincipal")
    let alterar = document.getElementById("AlterarProduto")
    var cadastroUsuario = document.getElementById("cadastroUsuario")
    let cadastroProduto = document.getElementById("cadastroProdutos")
    var saldoAluno = document.getElementById("saldoAluno");
    saldoAluno.style.display = "none"
    cadastroProduto.style.display = "none"
    cadastroUsuario.style.display = "block"
    alterar.style.display = "none"
    principal.style.display = "none";

}

/**********************cadastro produto************ */


function Cadastrocomida() {

    let Ccomida = document.getElementById("cadastroComida")
    let bebidas = document.getElementById("cadastroBebidas")
    bebidas.style.display = "none"
    Ccomida.style.display = "block"

}

function casdastroBebidas() {

    let Ccomida = document.getElementById("cadastroComida")
    let bebidas = document.getElementById("cadastroBebidas")
    bebidas.style.display = "block"
    Ccomida.style.display = "none"


}
/********************************* */
function inicio() {

    document.getElementById("inic").style.backgroundColor = "#343a40"
    document.getElementById("cdu").style.backgroundColor = "#007bff"
    document.getElementById("cdp").style.backgroundColor = "#007bff"
    document.getElementById("ap").style.backgroundColor = "#007bff"
    document.getElementById("sa").style.backgroundColor = "#007bff"


    var principal = document.getElementById("pPrincipal")
    let alterar = document.getElementById("AlterarProduto")
    var cadastroUsuario = document.getElementById("cadastroUsuario")
    let cadastroProduto = document.getElementById("cadastroProdutos")
    var saldoAluno = document.getElementById("saldoAluno");
    saldoAluno.style.display = "none"
    cadastroProduto.style.display = "none"
    cadastroUsuario.style.display = "none"
    alterar.style.display = "none"
    principal.style.display = "block";


}
function cadastroProduto() {
    document.getElementById("inic").style.backgroundColor = "#007bff"
    document.getElementById("cdu").style.backgroundColor = "#007bff"
    document.getElementById("cdp").style.backgroundColor = "#343a40"
    document.getElementById("ap").style.backgroundColor = "#007bff"
    document.getElementById("sa").style.backgroundColor = "#007bff"

    var principal = document.getElementById("pPrincipal")
    let alterar = document.getElementById("AlterarProduto")
    let cadastroProduto = document.getElementById("cadastroProdutos")
    var cadastroUsuario = document.getElementById("cadastroUsuario")
    var saldoAluno = document.getElementById("saldoAluno");
    saldoAluno.style.display = "none"
    cadastroUsuario.style.display = "none"
    cadastroProduto.style.display = "block"
    alterar.style.display = "none"
    principal.style.display = "none";


}
function AlterarProduto() {
    document.getElementById("inic").style.backgroundColor = "#007bff"
    document.getElementById("cdu").style.backgroundColor = "#007bff"
    document.getElementById("cdp").style.backgroundColor = "#007bff"
    document.getElementById("ap").style.backgroundColor = "#343a40"
    document.getElementById("sa").style.backgroundColor = "#007bff"

    var principal = document.getElementById("pPrincipal")
    let alterar = document.getElementById("AlterarProduto")
    var cadastroUsuario = document.getElementById("cadastroUsuario")
    let cadastroProduto = document.getElementById("cadastroProdutos")
    var saldoAluno = document.getElementById("saldoAluno");
    saldoAluno.style.display = "none"
    cadastroProduto.style.display = "none"
    cadastroUsuario.style.display = "none"
    alterar.style.display = "block"
    principal.style.display = "none";

}

function SaldoAluno() {

    document.getElementById("inic").style.backgroundColor = "#007bff"
    document.getElementById("cdu").style.backgroundColor = "#007bff"
    document.getElementById("cdp").style.backgroundColor = "#007bff"
    document.getElementById("ap").style.backgroundColor = "#007bff"
    document.getElementById("sa").style.backgroundColor = "#343a40"

    var principal = document.getElementById("pPrincipal");
    var saldoAluno = document.getElementById("saldoAluno");
    let alterar = document.getElementById("AlterarProduto")
    var cadastroUsuario = document.getElementById("cadastroUsuario")
    let cadastroProduto = document.getElementById("cadastroProdutos")


    cadastroProduto.style.display = "none"
    cadastroUsuario.style.display = "none"
    alterar.style.display = "none"
    principal.style.display = "none";
    saldoAluno.style.display = "block"
    principal.style.display = "none";


}
