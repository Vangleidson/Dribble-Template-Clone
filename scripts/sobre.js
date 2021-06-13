var mouseIn1 = document.getElementsByTagName("a")[0]
mouseIn1.addEventListener("mouseenter", entrar1)
mouseIn1.addEventListener("mouseout", sair1)
var cor = "rgb(122, 31, 240)"
function entrar1(){
    mouseIn1.style.borderBottom = "solid 3px"
    mouseIn1.style.color = cor
}

function sair1(){
    mouseIn1.style.borderBottom = "black"
    mouseIn1.style.color = "black"
}

var mouseIn3 = document.getElementsByTagName("a")[2]
mouseIn3.addEventListener("mouseenter", entrar3)
mouseIn3.addEventListener("mouseout", sair3)

function entrar3(){
    mouseIn3.style.borderBottom = "solid 3px"
    mouseIn3.style.color = cor
}

function sair3(){
    mouseIn3.style.borderBottom = "black"
    mouseIn3.style.color = "black"
}

var click = document.getElementById("botao1")
click.addEventListener("click", clicar)

function clicar(){
    alert("Vangleidson Fernandes --- Desenvolvimento WEB 2021.1")
}