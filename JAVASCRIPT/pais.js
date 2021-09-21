function inicio(){
    
   
    var principal = document.getElementById("pPrincipal")
    var consumo = document.getElementById("consumo")
    var saldo = document.getElementById("saldo")
    var produtos = document.getElementById("Produtos")
    let depositar =  document.getElementById("depositar")
    var extrato = document.getElementById("extrato")
    extrato.style.display = "none";
    depositar.style.display = "none";
    principal.style.display = "block";
    saldo.style.display = "none";
    produtos.style.display = "none";
    consumo.style.display = "none";
     
}
function consultar(){
    var principal = document.getElementById("pPrincipal")
    var consumo = document.getElementById("consumo")
    var saldo = document.getElementById("saldo")
    var produtos = document.getElementById("Produtos")
    let depositar =  document.getElementById("depositar")
    var extrato = document.getElementById("extrato")
    extrato.style.display = "none";
    depositar.style.display = "none";
    principal.style.display = "none";
    saldo.style.display = "none";
    produtos.style.display = "none";
    consumo.style.display = "block";
   
}
function saldo(){
    var principal = document.getElementById("pPrincipal")
    var consumo = document.getElementById("consumo")
    var saldo = document.getElementById("saldo")
    var produtos = document.getElementById("Produtos")
    let depositar =  document.getElementById("depositar")
    var extrato = document.getElementById("extrato")
    extrato.style.display = "none";
    depositar.style.display = "none";
    principal.style.display = "none";
    consumo.style.display = "none";
    produtos.style.display = "none";
    saldo.style.display = "block";
   
}
function compra(){
  /*   var barra = document.getElementById("barraP"); */
    var produtos = document.getElementById("Produtos");
    var principal = document.getElementById("pPrincipal");
    var consumo = document.getElementById("consumo");
    var saldo = document.getElementById("saldo");
    let depositar =  document.getElementById("depositar")
    var extrato = document.getElementById("extrato")
    extrato.style.display = "none";
    depositar.style.display = "none";
    produtos.style.display = "block";
    principal.style.display = "none";
    consumo.style.display = "none";
    saldo.style.display = "none";

}

function depositar(){

    /*   var barra = document.getElementById("barraP"); */
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

}  