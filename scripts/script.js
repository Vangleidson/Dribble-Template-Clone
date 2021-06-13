var cor = "rgb(122, 31, 240)"
var mouseIn2 = document.getElementsByTagName("a")[1]
mouseIn2.addEventListener("mouseenter", entrar2)
mouseIn2.addEventListener("mouseout", sair2)

function entrar2(){
    mouseIn2.style.borderBottom = "solid 3px"
    mouseIn2.style.color = cor
}

function sair2(){
    mouseIn2.style.borderBottom = "black"
    mouseIn2.style.color = "black"
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