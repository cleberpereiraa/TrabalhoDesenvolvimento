 
/**********CADASTROSSSS usuario */
function casdastroR(){

let pais= document.getElementById("CadastroResponsavel");
let  aluno = document.getElementById("CadastroAluno");
let listaR = document.getElementById("listaResponsavel")
let ListAluno = document.getElementById("listaAluno")

ListAluno.style.display = "none"
listaR.style.display= "none"
aluno.style.display = "none"
pais.style.display = "block"

}
function casdastroA(){

    let cantina = document.getElementById("CadastroResponsavel");
    let  aluno = document.getElementById("CadastroAluno");
    let listaR = document.getElementById("listaResponsavel")
    let ListAluno = document.getElementById("listaAluno")
    ListAluno.style.display = "none"
    listaR.style.display= "none"
    aluno.style.display = "block"
    cantina.style.display = "none"
    
    }

 function Lresponsavel(){
    let cantina = document.getElementById("CadastroResponsavel");
    let  aluno = document.getElementById("CadastroAluno");
    let listaR = document.getElementById("listaResponsavel")
    let ListAluno = document.getElementById("listaAluno")
    ListAluno.style.display = "none"
    listaR.style.display= "block"
    aluno.style.display = "none"
    cantina.style.display = "none"


 }    
 function Laluno(){
    let cantina = document.getElementById("CadastroResponsavel");
    let  aluno = document.getElementById("CadastroAluno");
    let listaR = document.getElementById("listaResponsavel")
    let ListAluno = document.getElementById("listaAluno")
    ListAluno.style.display = "block"
    listaR.style.display= "none"
    aluno.style.display = "none"
    cantina.style.display = "none"


 }  
 function cadastroUsuario(){
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
/**********************************************/
/**********************cadastro produto************ */


function Cadastrocomida(){
   
    let Ccomida = document.getElementById("cadastroComida")
    let bebidas = document.getElementById("cadastroBebidas")
    bebidas.style.display = "none"
    Ccomida.style.display = "block"

}

function casdastroBebidas(){
    
    let Ccomida = document.getElementById("cadastroComida")
    let bebidas = document.getElementById("cadastroBebidas")
    bebidas.style.display = "block"
    Ccomida.style.display = "none"


}
/********************************* */
function inicio(){
    
   
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
   
     
} /* var extrato = document.getElementById("extrato")
    

    
    extrato.style.display = "none"; */
function cadastroProduto(){
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
function AlterarProduto(){
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

function SaldoAluno(){
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
/* 



function depositar(){

    
    var produtos = document.getElementById("Produtos");
    var principal = document.getElementById("pPrincipal");
    var consumo = document.getElementById("consumo");
    var saldo = document.getElementById("saldo");
    let depositar =  document.getElementById("depositar")
    var extrato = document.getElementById("extrato")
    extrato.style.display = "none";
   depositar.style.display = "block";
    produtos.style.display = "none";
    principal.style.display = "none";
    consumo.style.display = "none";
    saldo.style.display = "none";


}

function extrato(){
    
    var produtos = document.getElementById("Produtos");
    var principal = document.getElementById("pPrincipal");
    var consumo = document.getElementById("consumo");
    var saldo = document.getElementById("saldo");
    let depositar =  document.getElementById("depositar")
    var extrato = document.getElementById("extrato")
    extrato.style.display = "block";
   depositar.style.display = "none";
    produtos.style.display = "none";
    principal.style.display = "none";
    consumo.style.display = "none";
    saldo.style.display = "none";

}  */