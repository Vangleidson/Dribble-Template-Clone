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

var click = document.getElementById("botao1")
click.addEventListener("click", clicar)

function clicar(){
    alert("Vangleidson Fernandes --- Desenvolvimento WEB 2021.1")
}
