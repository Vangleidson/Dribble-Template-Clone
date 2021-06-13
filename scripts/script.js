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

var enviar = document.getElementById("btn1")
enviar.addEventListener("click", insere)

function insere () {
    var nome1  = document.createElement('p')
    var input1 = document.getElementById("inp1")
    var texto1 = document.createTextNode(input1.value)
    nome1.appendChild(texto1);

    var msg1 = document.createElement('p')
    var input2 = document.getElementById("inp2")
    var texto2 = document.createTextNode(input2.value)
    msg1.appendChild(texto2);
    
    var btn1 = document.createElement('button')
    var texto3 = document.createTextNode("EXCLUIR")
    btn1.appendChild(texto3);
    btn1.addEventListener('click', excluir)
    var i
    for (i = 0; i < 5; i++) {
        var lista = document.getElementById('ul1')
        var itens = document.getElementById('li1')
        lista.insertBefore(nome1, itens[i])
        nome1.className = 'nomeE'

        lista.insertBefore(msg1, itens[i])
        msg1.className = 'msgE'

        lista.insertBefore(btn1, itens[i])
        btn1.className = 'btnE'
    }
}

function excluir() {
    for (i = 0; i < 5; i++) {
            document.getElementsByClassName('nomeE')[i].remove()
            document.getElementsByClassName('msgE')[i].remove()
            document.getElementsByClassName('btnE')[i].remove()
    }
}
