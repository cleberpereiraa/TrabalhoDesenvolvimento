
function consultar() {
    document.getElementById("con").style.backgroundColor = "#343a40"
    document.getElementById("ini").style.backgroundColor = "#007bff"
    document.getElementById("car").style.backgroundColor = "#007bff"
    var consumo = document.getElementById("consumo")
    var compra = document.getElementById("compra")
    var carrinho = document.getElementById("carrinho")
    compra.style.display = "none"
    carrinho.style.display = "none"
    consumo.style.display = "block";



}

function compra() {
    document.getElementById("con").style.backgroundColor = "#007bff"
    document.getElementById("ini").style.backgroundColor = "#343a40"
    document.getElementById("car").style.backgroundColor = "#007bff"
    var compra = document.getElementById("compra");
    var consumo = document.getElementById("consumo");
    var carrinho = document.getElementById("carrinho")

    carrinho.style.display = "none"
    compra.style.display = "block";
    consumo.style.display = "none";




}
/****comidas e bebidas */
function comidasss() {
    let bebidas = document.getElementById("bebidass");
    let comidas = document.getElementById("comidass");
    comidas.style.display = "block"
    bebidas.style.display = "none"

}
function Bebidasss() {
    let bebidas = document.getElementById("bebidass");
    let comidas = document.getElementById("comidass");
    comidas.style.display = "none"
    bebidas.style.display = "block"
}

function carrinho() {
    document.getElementById("con").style.backgroundColor = "#007bff"
    document.getElementById("ini").style.backgroundColor = "#007bff"
    document.getElementById("car").style.backgroundColor = "#343a40"

    var carrinho = document.getElementById("carrinho")
    var compra = document.getElementById("compra");
    var consumo = document.getElementById("consumo");

    compra.style.display = "none";
    consumo.style.display = "none";
    carrinho.style.display = "block"
}

function totalComidas() {
    var n1 = document.getElementById("input1").value;
    var n2 = document.getElementById("input2").value;
    var n3 = document.getElementById("input3").value;
    var n4 = document.getElementById("input4").value;
    var n5 = document.getElementById("input5").value;
    var n6 = document.getElementById("input6").value;

    var n11 = parseFloat(n1)
    var n22 = parseFloat(n2)
    var n33 = parseFloat(n3)
    var n44 = parseFloat(n4)
    var n55 = parseFloat(n5)
    var n66 = parseFloat(n6)

    var valores = { banana: 2.99, maca: 2.49, uva: 3.49, bolinho: 5.50, sanduiche: 7.50, pizza: 8.49 }

    var res1 = valores.banana * n11
    var res2 = valores.maca * n22
    var res3 = valores.uva * n33
    var res4 = valores.bolinho * n44
    var res5 = valores.sanduiche * n55
    var res6 = valores.pizza * n66
    var zero = 0.00
    var t = res1 + res2 + res3 + res4 + res5 + res6
    if (n11 == 0 && n22 == 0 && n33 == 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultado").innerHTML = "R$" + zero.toFixed(2)
        //retorna 0 pra todos
    } else if (n11 > 0 && n22 == 0 && n33 == 0 && n4 == 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultado").innerHTML = "R$" + res1.toFixed(2)
        //retorna valor de banana
    } else if (n11 == 0 && n22 > 0 && n33 == 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultado").innerHTML = "R$" + res2.toFixed(2)
        //retorna valor de maça
    } else if (n11 == 0 && n22 == 0 && n33 > 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultado").innerHTML = "R$" + res3.toFixed(2)
        //retorna valor de uva
    } else if (n11 == 0 && n22 == 0 && n33 == 0 && n44 > 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultado").innerHTML = "R$" + res4.toFixed(2)
        //retorna valor de bolo
    } else if (n11 == 0 && n22 == 0 && n33 == 0 && n44 == 0 && n55 > 0 && n66 == 0) {
        document.getElementById("resultado").innerHTML = "R$" + res5.toFixed(2)
        //retorna valor de sanduiche
    } else if (n11 == 0 && n22 == 0 && n33 == 0 && n44 == 0 && n55 == 0 && n66 > 0) {
        document.getElementById("resultado").innerHTML = "R$" + res6.toFixed(2)

        //retorna valor de suco
        ///////////////////////////////BANANA X///////////////////////////////////////

    } else if (n11 > 0 && n22 > 0 && n33 == 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        let res5 = res1 + res2 //banana * maca
        document.getElementById("resultado").innerHTML = "R$" + res5.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 > 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        let res6 = res1 + res3 //banana * uva
        document.getElementById("resultado").innerHTML = "R$" + res6.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 == 0 && n44 > 0 && n55 == 0 && n66 == 0) {
        let res7 = res1 + res4 //banana * bolo
        document.getElementById("resultado").innerHTML = "R$" + res7.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 == 0 && n44 == 0 && n55 > 0 && n66 == 0) {
        let resbolo = res1 + res5 //banana * sanduiche/////
        document.getElementById("resultado").innerHTML = "R$" + resbolo.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 == 0 && n4 == 0 && n55 == 0 && n66 > 0) {
        let ressuco = res1 + res6 //banana * suco/////
        document.getElementById("resultado").innerHTML = "R$" + ressuco.toFixed(2)

        ///////////////////////////////MAÇA X/////////////////////////////////////////

    } else if (n11 == 0 && n22 > 0 && n33 > 0 && n4 == 0 && n55 == 0 && n66 == 0) {
        let res8 = res2 + res3 //maca * uva
        document.getElementById("resultado").innerHTML = "R$" + res8.toFixed(2)
    } else if (n11 == 0 && n22 > 0 && n33 == 0 && n4 > 0 && n55 == 0 && n66 == 0) {
        let res9 = res2 + res4 //maca * bolo
        document.getElementById("resultado").innerHTML = "R$" + res9.toFixed(2)
    } else if (n11 == 0 && n22 > 0 && n33 == 0 && n4 == 0 && n55 > 0 && n66 == 0) {
        let resbolo1 = res2 + res5 //maca * sanduiche
        document.getElementById("resultado").innerHTML = "R$" + resbolo1.toFixed(2)
    } else if (n11 == 0 && n22 > 0 && n33 == 0 && n4 == 0 && n55 == 0 && n66 > 0) {
        let ressuco1 = res2 + res6 //maca * suco
        document.getElementById("resultado").innerHTML = "R$" + ressuco1.toFixed(2)

        ///////////////////////////////UVA X//////////////////////////////////////////

    } else if (n11 == 0 && n22 == 0 && n33 > 0 && n4 > 0 && n55 == 0 && n66 == 0) {
        let res10 = res3 + res4 //uva * bolo
        document.getElementById("resultado").innerHTML = "R$" + res10.toFixed(2)
    } else if (n11 == 0 && n22 == 0 && n33 > 0 && n4 == 0 && n55 > 0 && n66 == 0) {
        let resbolinhoo = res3 + res5 //uva * sanduiche
        document.getElementById("resultado").innerHTML = "R$" + resbolinhoo.toFixed(2)
    } else if (n11 == 0 && n22 == 0 && n33 > 0 && n4 == 0 && n55 == 0 && n66 > 0) {
        let ressuco1 = res3 + res6 //uva * suco
        document.getElementById("resultado").innerHTML = "R$" + ressuco1.toFixed(2)

        /////////////////////////////////////////////////////////////////////////////

    } else if (n11 == 0 && n22 > 0 && n33 > 0 && n4 > 0 && n55 > 0 && n66 > 0) {
        let res11 = res2 + res3 + res4 + res5 + res6 //maca *uva* bolo * sanduiche * suco
        document.getElementById("resultado").innerHTML = "R$" + res11.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 > 0 && n4 > 0 && n55 > 0 && n66 > 0) {
        let res12 = res1 + res3 + res4 + res5 + res6 // banana *uva* bolo * sanduiche * suco
        document.getElementById("resultado").innerHTML = "R$" + res12.toFixed(2)
    } else if (n11 > 0 && n22 > 0 && n33 == 0 && n4 > 0 && n55 > 0 && n66 > 0) {
        let res13 = res1 + res2 + res4 + res5 + res6 // banana *maca* bolo * sanduiche * suco
        document.getElementById("resultado").innerHTML = "R$" + res13.toFixed(2)
    } else if (n11 > 0 && n22 > 0 && n33 > 0 && n4 == 0 && n55 > 0 && n66 > 0) {
        let res14 = res1 + res2 + res3 + res5 + res6 // banana *maca* uva * sanduiche * suco
        document.getElementById("resultado").innerHTML = "R$" + res14.toFixed(2)
    } else if (n11 > 0 && n22 > 0 && n33 > 0 && n4 > 0 && n55 == 0 && n66 > 0) {
        let res20 = res1 + res2 + res3 + res4 + res6 // banana *maca* uva * bolo * suco
        document.getElementById("resultado").innerHTML = "R$" + res20.toFixed(2)
    } else if (n11 > 0 && n22 > 0 && n33 > 0 && n4 == 0 && n55 > 0 && n66 == 0) {
        let res21 = res1 + res2 + res3 + res4 + res5 // banana *maca* uva * bolo * sanduiche
        document.getElementById("resultado").innerHTML = "R$" + res21.toFixed(2)
    } else {
        let res51 = res1 + res2 + res3 + res4 + res5 + res6//banana* maca *uva * sanduiche * sanduiche *suco
        document.getElementById("resultado").innerHTML = "R$" + res51.toFixed(2)
    }


}
function totalBebidas() {
    var n1 = document.getElementById("input11").value;
    var n2 = document.getElementById("input22").value;
    var n3 = document.getElementById("input33").value;
    var n4 = document.getElementById("input44").value;
    var n5 = document.getElementById("input55").value;
    var n6 = document.getElementById("input66").value;

    var n11 = parseFloat(n1)
    var n22 = parseFloat(n2)
    var n33 = parseFloat(n3)
    var n44 = parseFloat(n4)
    var n55 = parseFloat(n5)
    var n66 = parseFloat(n6)

    var valores = { agua: 1.99, aguaCoco: 3.49, cha: 4.20, guarana: 8.50, sucoMorango: 6.00, sucoUva: 7.20 }
    console.log(n11)
    var res1 = valores.agua * n11
    var res2 = valores.aguaCoco * n22
    var res3 = valores.cha * n33
    var res4 = valores.guarana * n44
    var res5 = valores.sucoMorango * n55
    var res6 = valores.sucoUva * n66
    var zero = 0.00
    var t1 = res1 + res2 + res3 + res4 + res5 + res6
    if (n11 == 0 && n22 == 0 && n33 == 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultadoBebidas").innerHTML = "R$" + zero.toFixed(2)
        //retorna 0 pra todos
    } else if (n11 > 0 && n22 == 0 && n33 == 0 && n4 == 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res1.toFixed(2)
        //retorna valor de banana
    } else if (n11 == 0 && n22 > 0 && n33 == 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res2.toFixed(2)
        //retorna valor de maça
    } else if (n11 == 0 && n22 == 0 && n33 > 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res3.toFixed(2)
        //retorna valor de uva
    } else if (n11 == 0 && n22 == 0 && n33 == 0 && n44 > 0 && n55 == 0 && n66 == 0) {
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res4.toFixed(2)
        //retorna valor de bolo
    } else if (n11 == 0 && n22 == 0 && n33 == 0 && n44 == 0 && n55 > 0 && n66 == 0) {
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res5.toFixed(2)
        //retorna valor de sanduiche
    } else if (n11 == 0 && n22 == 0 && n33 == 0 && n44 == 0 && n55 == 0 && n66 > 0) {
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res6.toFixed(2)

        //retorna valor de suco
        ///////////////////////////////BANANA X///////////////////////////////////////

    } else if (n11 > 0 && n22 > 0 && n33 == 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        let res5 = res1 + res2 //banana * maca
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res5.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 > 0 && n44 == 0 && n55 == 0 && n66 == 0) {
        let res6 = res1 + res3 //banana * uva
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res6.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 == 0 && n44 > 0 && n55 == 0 && n66 == 0) {
        let res7 = res1 + res4 //banana * bolo
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res7.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 == 0 && n44 == 0 && n55 > 0 && n66 == 0) {
        let resbolo = res1 + res5 //banana * sanduiche/////
        document.getElementById("resultadoBebidas").innerHTML = "R$" + resbolo.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 == 0 && n4 == 0 && n55 == 0 && n66 > 0) {
        let ressuco = res1 + res6 //banana * suco/////
        document.getElementById("resultadoBebidas").innerHTML = "R$" + ressuco.toFixed(2)

        ///////////////////////////////MAÇA X/////////////////////////////////////////

    } else if (n11 == 0 && n22 > 0 && n33 > 0 && n4 == 0 && n55 == 0 && n66 == 0) {
        let res8 = res2 + res3 //maca * uva
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res8.toFixed(2)
    } else if (n11 == 0 && n22 > 0 && n33 == 0 && n4 > 0 && n55 == 0 && n66 == 0) {
        let res9 = res2 + res4 //maca * bolo
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res9.toFixed(2)
    } else if (n11 == 0 && n22 > 0 && n33 == 0 && n4 == 0 && n55 > 0 && n66 == 0) {
        let resbolo1 = res2 + res5 //maca * sanduiche
        document.getElementById("resultadoBebidas").innerHTML = "R$" + resbolo1.toFixed(2)
    } else if (n11 == 0 && n22 > 0 && n33 == 0 && n4 == 0 && n55 == 0 && n66 > 0) {
        let ressuco1 = res2 + res6 //maca * suco
        document.getElementById("resultadoBebidas").innerHTML = "R$" + ressuco1.toFixed(2)

        ///////////////////////////////UVA X//////////////////////////////////////////

    } else if (n11 == 0 && n22 == 0 && n33 > 0 && n4 > 0 && n55 == 0 && n66 == 0) {
        let res10 = res3 + res4 //uva * bolo
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res10.toFixed(2)
    } else if (n11 == 0 && n22 == 0 && n33 > 0 && n4 == 0 && n55 > 0 && n66 == 0) {
        let resbolinhoo = res3 + res5 //uva * sanduiche
        document.getElementById("resultadoBebidas").innerHTML = "R$" + resbolinhoo.toFixed(2)
    } else if (n11 == 0 && n22 == 0 && n33 > 0 && n4 == 0 && n55 == 0 && n66 > 0) {
        let ressuco1 = res3 + res6 //uva * suco
        document.getElementById("resultadoBebidas").innerHTML = "R$" + ressuco1.toFixed(2)

        /////////////////////////////////////////////////////////////////////////////

    } else if (n11 == 0 && n22 > 0 && n33 > 0 && n4 > 0 && n55 > 0 && n66 > 0) {
        let res11 = res2 + res3 + res4 + res5 + res6 //maca *uva* bolo * sanduiche * suco
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res11.toFixed(2)
    } else if (n11 > 0 && n22 == 0 && n33 > 0 && n4 > 0 && n55 > 0 && n66 > 0) {
        let res12 = res1 + res3 + res4 + res5 + res6 // banana *uva* bolo * sanduiche * suco
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res12.toFixed(2)
    } else if (n11 > 0 && n22 > 0 && n33 == 0 && n4 > 0 && n55 > 0 && n66 > 0) {
        let res13 = res1 + res2 + res4 + res5 + res6 // banana *maca* bolo * sanduiche * suco
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res13.toFixed(2)
    } else if (n11 > 0 && n22 > 0 && n33 > 0 && n4 == 0 && n55 > 0 && n66 > 0) {
        let res14 = res1 + res2 + res3 + res5 + res6 // banana *maca* uva * sanduiche * suco
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res14.toFixed(2)
    } else if (n11 > 0 && n22 > 0 && n33 > 0 && n4 > 0 && n55 == 0 && n66 > 0) {
        let res20 = res1 + res2 + res3 + res4 + res6 // banana *maca* uva * bolo * suco
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res20.toFixed(2)
    } else if (n11 > 0 && n22 > 0 && n33 > 0 && n4 == 0 && n55 > 0 && n66 == 0) {
        let res21 = res1 + res2 + res3 + res4 + res5 // banana *maca* uva * bolo * sanduiche
        document.getElementById("resultadoBebidas").innerHTML = "R$" + res21.toFixed(2)
    } else {
        let res50 = res1 + res2 + res3 + res4 + res5 + res6//banana* maca *uva * sanduiche * sanduiche *suco

        document.getElementById("resultadoBebidas").innerHTML = "R$" + res50.toFixed(2)

    }


}

