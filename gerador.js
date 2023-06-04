let papel = document.querySelector(".papel")
let caixa = document.querySelector(".caixa")
let btn_editor = document.querySelectorAll(".btn-edt")
let btn_controlador = document.querySelectorAll(".btn-ctr")

let btn_fonte = document.querySelectorAll(".btn-fonte")
let btn_sublinhado = document.querySelector(".btn-sublinhado")
let btn_bold = document.querySelector(".btn-bold")
let btn_normal = document.querySelector(".btn-normal")
let btn_branco = document.querySelector(".btn-branco")

let btn_italico = document.querySelector(".btn-italico")
let fundo_balde = document.querySelector(".fundo-balde")
let fundo_texto = document.querySelector(".fundo-texto")

let img_imagemespecial = document.querySelector(".img_especial")

const input_img_especial = document.querySelector(".input")
input_img_especial.addEventListener("change",(e)=>{
    const trajeto = e.target;
    const files = trajeto.files;
    const rever = new FileReader();

    rever.onload = function(){
        document.querySelector(".img_especial").src=rever.result;
    }
    rever.readAsDataURL(files[0])
})


let fundo_imagem = document.querySelector(".fundo-imagem")
let img_imagem = document.querySelectorAll(".img-imagem")
let imagem01 = document.getElementsByName("img-img1")
let imagem02 = document.getElementsByName("img-img2")
let imagem03 = document.getElementsByName("img-img3")
let imagem04 = document.getElementsByName("img-img4")

let fundo_efeito = document.querySelector(".fundo-efeito")
let btn_efeito = document.querySelectorAll(".btn-efeito")



//balde
let btn_cor = document.querySelectorAll(".btn-cor")
let balde_cor1 = document.getElementsByName("c-1")
let balde_cor2 = document.getElementsByName("c-2")
let balde_cor3 = document.getElementsByName("c-3")
let balde_cor4 = document.getElementsByName("c-4")
let balde_cor5 = document.getElementsByName("c-5")
let balde_cor6 = document.getElementsByName("c-6")
let balde_cor7 = document.getElementsByName("c-7")
let balde_cor8 = document.getElementsByName("c-8")
let balde_cor9 = document.getElementsByName("c-9")
let balde_cor10 = document.getElementsByName("c-10")
let balde_cor11 = document.getElementsByName("c-11")
let balde_cor12 = document.getElementsByName("c-12")

const baldecor1 = "background-color:white;"
const baldecor2 = "background-color: #009dff;"
const baldecor3 = "background-color: yellow;"
const baldecor4 = "background-color: purple;"
const baldecor5 = "background-color: rgb(252, 93, 250);"
const baldecor6 = "  background-color: #387eaa;"
const baldecor7 = "background-color: rgb(72, 190, 72);"
const baldecor8 = "background-color: rgb(255, 38, 0);"
const baldecor9 = "background-color: rgb(210, 138, 4);"
const baldecor10 = "background-color: rgb(176, 146, 106);"
const baldecor11 = " background-color: gray;"
const baldecor12 = "background-color: black;  border: 2px solid white;"


let adicionar_texto = document.querySelector(".btn-texto-adicionar")


let cor_memoria = "white";
let ativo = "display:inline-block;"
let desativo = "display:none;"
let cor_frase_branca = "color:white;"

let posiçao = 0;
let posiçao_palavra = 0;
let posiçao_palavra_top = 1;
let posiçao_palavra_baixo = 1;

let posiçao_imagem = 0;
let posiçao_imagem_top = 1;
let posiçao_imagem_baixo = 1;

let imagem_especial = 0;
let imagem_especial_top = 1;
let imagem_especial_baixo = 1;

let ampliar_img_especial = 100

adicionar_texto.addEventListener("click", () => {
    let espaçotexto0 = document.createElement("div")
    let palavra = document.createElement("textarea")
    let br = document.createElement("br")
    let confirmtexto0 = document.createElement("button")
    let excluirtexto0 = document.createElement("button")
    let leftbotao = document.createElement("button")
    let rightbotao = document.createElement("button")
    let topbotao = document.createElement("button")
    let baixobotao = document.createElement("button")
    leftbotao.setAttribute("class", "left-botao-palavra")
    rightbotao.setAttribute("class", "right-botao-palavra")
    topbotao.setAttribute("class", "top-botao-palavra")
    baixobotao.setAttribute("class", "baixo-botao-palavra")
    palavra.setAttribute("rows", "20")
    palavra.setAttribute("cols", "40")
    palavra.setAttribute("maxlength", "23")
    espaçotexto0.setAttribute("class", "espaçotexto")
    confirmtexto0.setAttribute("class", "confirmtexto")
    excluirtexto0.setAttribute("class", "excluirtexto")
    palavra.setAttribute("class", "palavra_criada")
    palavra.setAttribute("name", "texto" + posiçao)

    confirmtexto0.textContent = "C"
    excluirtexto0.textContent = "X"

    papel.appendChild(espaçotexto0)
    espaçotexto0.appendChild(palavra)
    espaçotexto0.appendChild(br)
    espaçotexto0.appendChild(confirmtexto0)
    espaçotexto0.appendChild(excluirtexto0)
    espaçotexto0.appendChild(leftbotao)
    espaçotexto0.appendChild(topbotao)
    espaçotexto0.appendChild(rightbotao)
    espaçotexto0.appendChild(baixobotao)
    if (true) {
        posiçao += 1
        console.log('valor posiçao: ' + posiçao)
    }



    confirmtexto0.addEventListener("click", () => {
        espaçotexto0.removeAttribute("class", "espaçotexto")
        espaçotexto0.setAttribute("class", "espaço_texto_adaptavel")
        confirmtexto0.remove()
        fundo_texto.style = desativo;
        excluirtexto0.remove()
        palavra.setAttribute("disabled", "readonly")
        leftbotao.remove()
        rightbotao.remove()
        topbotao.remove()
        baixobotao.remove()
    })
    excluirtexto0.addEventListener("click", () => {
        espaçotexto0.remove()
        confirmtexto0.remove()
        excluirtexto0.remove()
        palavra.remove()
        fundo_texto.style = desativo;
        leftbotao.remove()
        rightbotao.remove()
        topbotao.remove()
        baixobotao.remove()
    })


    btn_fonte[0].addEventListener("click", () => {
        palavra.style = "font-family:Arial"
    })
    btn_fonte[1].addEventListener("click", () => {
        palavra.style = "font-family:Verdana"
    })
    btn_fonte[2].addEventListener("click", () => {
        palavra.style = "font-family:Tahoma"
    })
    btn_fonte[3].addEventListener("click", () => {
        palavra.style = "font-family:Trebuchet MS"
    })
    btn_fonte[4].addEventListener("click", () => {
        palavra.style = "font-family:Times New Romam"
    })
    btn_fonte[5].addEventListener("click", () => {
        palavra.style = "font-family:Georgia"
    })
    btn_fonte[6].addEventListener("click", () => {
        palavra.style = "font-family:Garamond"
    })
    btn_fonte[7].addEventListener("click", () => {
        palavra.style = "font-family:Courier"
    })
    btn_fonte[8].addEventListener("click", () => {
        palavra.style = " font-family: 'Gill Sans"
    })
    btn_fonte[9].addEventListener("click", () => {
        palavra.style = "font-family:Serif"
    })
    btn_fonte[10].addEventListener("click", () => {
        palavra.style = "font-family:Monospace"
    })
    btn_fonte[11].addEventListener("click", () => {
        palavra.style = "font-family:Lucida"
    })
    btn_bold.addEventListener("click", () => {
        palavra.style = "font-weight:bold"
    })
    btn_italico.addEventListener("click", () => {
        palavra.style = "font-style:italic"
    })
    btn_sublinhado.addEventListener("click", () => {
        palavra.style = "  text-decoration: underline;"
    })
    btn_normal.addEventListener("click", () => {
        palavra.style = "font:arial"
    })
    btn_branco.addEventListener("click",()=>{
        palavra.style = "color:white"
    })


    leftbotao.addEventListener("click", () => {
        espaçotexto0.style = "position:absolute;" +
            "left:" + posiçao_palavra + "%;" + "top:" + posiçao_palavra_top + "%;"

        if (true) {
            posiçao_palavra = 2
            console.log('valor posiçao_palavra_left : ' + posiçao_palavra)
        }
        if (posiçao_palavra >= 8) {
            posiçao_palavra = 2
        }
    })
    rightbotao.addEventListener("click", () => {
        espaçotexto0.style = "position:absolute;" +
            "left:" + posiçao_palavra + "%;" + "top:" + posiçao_palavra_top + "%;"

        if (true) {
            posiçao_palavra += 1
            console.log('valor posiçao_palavra_right : ' + posiçao_palavra)
        }
    })
    topbotao.addEventListener("click", () => {
        espaçotexto0.style = "position:absolute;" +
            "top:" + posiçao_palavra_top + "%;" + "left:" + posiçao_palavra + "%"

        if (true) {
            posiçao_palavra_top = 2
            console.log('valor posiçao_palavra_top : ' + posiçao_palavra_top)
        }
    })
    baixobotao.addEventListener("click", () => {
        espaçotexto0.style = "position:absolute;" +
            "top:" + posiçao_palavra_top + "%;" + "left:" + posiçao_palavra + "%"

        if (true) {
            posiçao_palavra_top += 1
            console.log('valor posiçao_palavra_baixo : ' + posiçao_palavra_top)
        }
        if (posiçao_palavra_top >= 61) {
            posiçao_palavra_top = 60
        }
    })
})

/////////////////////////////////////////////////
img_imagem[0].addEventListener("click", () => {
    let imagem_criada = document.createElement("img")
    let br_imagem_criada = document.createElement("br")
    let base_imagem_criada = document.createElement("div")
    let btn_imagem_left = document.createElement("button")
    let btn_imagem_right = document.createElement("button")
    let btn_imagem_top = document.createElement("button")
    let btn_imagem_botao = document.createElement("button")
    let confirme_imagem_criada = document.createElement("button")

    btn_imagem_left.setAttribute("class", "btn_imagem_left")
    btn_imagem_right.setAttribute("class", "btn_imagem_right")
    btn_imagem_top.setAttribute("class", "btn_imagem_top")
    btn_imagem_botao.setAttribute("class", "btn_imagem_botao")
    confirme_imagem_criada.setAttribute("class","confirme_imagem_criada")
    confirme_imagem_criada.textContent = "ok"

    base_imagem_criada.setAttribute("class", "base_imagem_criada")
    imagem_criada.setAttribute("class", "imagem_criada")
    imagem_criada.setAttribute("src", "/imagens/imagens/balao-01.png")
    papel.appendChild(base_imagem_criada)
    base_imagem_criada.appendChild(imagem_criada)
    base_imagem_criada.appendChild(br_imagem_criada)
    base_imagem_criada.appendChild(btn_imagem_left)
    base_imagem_criada.appendChild(btn_imagem_top)
    base_imagem_criada.appendChild(btn_imagem_right)
    base_imagem_criada.appendChild(btn_imagem_botao)
    base_imagem_criada.appendChild(confirme_imagem_criada)

confirme_imagem_criada.addEventListener("click",()=>{
    btn_imagem_botao.remove()
    btn_imagem_top.remove()
    btn_imagem_left.remove()
    btn_imagem_right.remove()
    confirme_imagem_criada.remove()
})

   btn_imagem_left.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "left:" + posiçao_imagem + "%;" + "top:" + posiçao_imagem_top + "%;"

        if (true) {
            posiçao_imagem = 2
            console.log('valor posiçao_imagem_left : ' + posiçao_imagem)
        }
       
    })
    btn_imagem_right.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "left:" + posiçao_imagem + "%;" + "top:" + posiçao_imagem_top + "%;"

        if (true) {
            posiçao_imagem += 1
            console.log('valor posiçao_imagem_right : ' + posiçao_imagem)
        } if (posiçao_imagem >= 15) {
            posiçao_imagem = 14
        }
    })
    btn_imagem_top.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "top:" + posiçao_imagem_top + "%;" + "left:" + posiçao_imagem + "%"

        if (true) {
            posiçao_imagem_top = 1
            console.log('valor posiçao_imagem_top : ' + posiçao_imagem_top)
        }
    })
    btn_imagem_botao.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "top:" + posiçao_imagem_top + "%;" + "left:" + posiçao_imagem + "%"

        if (true) {
            posiçao_imagem_top += 1
            console.log('valor posiçao_imagem_baixo : ' + posiçao_imagem_top)
        }
        if (posiçao_imagem_top >= 51) {
            posiçao_imagem_top = 50
        }
    })
})


///////////////////////////////////////////////////////////
img_imagem[1].addEventListener("click", () => {
    let imagem_criada = document.createElement("img")
    let br_imagem_criada = document.createElement("br")
    let base_imagem_criada = document.createElement("div")
    let btn_imagem_left = document.createElement("button")
    let btn_imagem_right = document.createElement("button")
    let btn_imagem_top = document.createElement("button")
    let btn_imagem_botao = document.createElement("button")
    let confirme_imagem_criada = document.createElement("button")

    btn_imagem_left.setAttribute("class", "btn_imagem_left")
    btn_imagem_right.setAttribute("class", "btn_imagem_right")
    btn_imagem_top.setAttribute("class", "btn_imagem_top")
    btn_imagem_botao.setAttribute("class", "btn_imagem_botao")
    confirme_imagem_criada.setAttribute("class","confirme_imagem_criada")
    confirme_imagem_criada.textContent = "ok"

    base_imagem_criada.setAttribute("class", "base_imagem_criada")
    imagem_criada.setAttribute("class", "imagem_criada")
    imagem_criada.setAttribute("src", "/imagens/imagens/balao-02.png")
    papel.appendChild(base_imagem_criada)
    base_imagem_criada.appendChild(imagem_criada)
    base_imagem_criada.appendChild(br_imagem_criada)
    base_imagem_criada.appendChild(btn_imagem_left)
    base_imagem_criada.appendChild(btn_imagem_top)
    base_imagem_criada.appendChild(btn_imagem_right)
    base_imagem_criada.appendChild(btn_imagem_botao)
    base_imagem_criada.appendChild(confirme_imagem_criada)

confirme_imagem_criada.addEventListener("click",()=>{
    btn_imagem_botao.remove()
    btn_imagem_top.remove()
    btn_imagem_left.remove()
    btn_imagem_right.remove()
    confirme_imagem_criada.remove()
})

   btn_imagem_left.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "left:" + posiçao_imagem + "%;" + "top:" + posiçao_imagem_top + "%;"

        if (true) {
            posiçao_imagem = 2
            console.log('valor posiçao_imagem_left : ' + posiçao_imagem)
        }
       
    })
    btn_imagem_right.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "left:" + posiçao_imagem + "%;" + "top:" + posiçao_imagem_top + "%;"

        if (true) {
            posiçao_imagem += 1
            console.log('valor posiçao_imagem_right : ' + posiçao_imagem)
        } if (posiçao_imagem >= 14) {
            posiçao_imagem = 13
        }
    })
    btn_imagem_top.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "top:" + posiçao_imagem_top + "%;" + "left:" + posiçao_imagem + "%"

        if (true) {
            posiçao_imagem_top = 1
            console.log('valor posiçao_imagem_top : ' + posiçao_imagem_top)
        }
    })
    btn_imagem_botao.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "top:" + posiçao_imagem_top + "%;" + "left:" + posiçao_imagem + "%"

        if (true) {
            posiçao_imagem_top += 1
            console.log('valor posiçao_imagem_baixo : ' + posiçao_imagem_top)
        }
        if (posiçao_imagem_top >= 51) {
            posiçao_imagem_top = 50
        }
    })
})


/////////////////////////////////////////////////////////////////
img_imagem[2].addEventListener("click", () => {
    let imagem_criada = document.createElement("img")
    let br_imagem_criada = document.createElement("br")
    let base_imagem_criada = document.createElement("div")
    let btn_imagem_left = document.createElement("button")
    let btn_imagem_right = document.createElement("button")
    let btn_imagem_top = document.createElement("button")
    let btn_imagem_botao = document.createElement("button")
    let confirme_imagem_criada = document.createElement("button")

    btn_imagem_left.setAttribute("class", "btn_imagem_left")
    btn_imagem_right.setAttribute("class", "btn_imagem_right")
    btn_imagem_top.setAttribute("class", "btn_imagem_top")
    btn_imagem_botao.setAttribute("class", "btn_imagem_botao")
    confirme_imagem_criada.setAttribute("class","confirme_imagem_criada")
    confirme_imagem_criada.textContent = "ok"

    base_imagem_criada.setAttribute("class", "base_imagem_criada")
    imagem_criada.setAttribute("class", "imagem_criada")
    imagem_criada.setAttribute("src", "/imagens/imagens/balao-03.png")
    papel.appendChild(base_imagem_criada)
    base_imagem_criada.appendChild(imagem_criada)
    base_imagem_criada.appendChild(br_imagem_criada)
    base_imagem_criada.appendChild(btn_imagem_left)
    base_imagem_criada.appendChild(btn_imagem_top)
    base_imagem_criada.appendChild(btn_imagem_right)
    base_imagem_criada.appendChild(btn_imagem_botao)
    base_imagem_criada.appendChild(confirme_imagem_criada)

confirme_imagem_criada.addEventListener("click",()=>{
    btn_imagem_botao.remove()
    btn_imagem_top.remove()
    btn_imagem_left.remove()
    btn_imagem_right.remove()
    confirme_imagem_criada.remove()
})

   btn_imagem_left.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "left:" + posiçao_imagem + "%;" + "top:" + posiçao_imagem_top + "%;"

        if (true) {
            posiçao_imagem = 2
            console.log('valor posiçao_imagem_left : ' + posiçao_imagem)
        }
       
    })
    btn_imagem_right.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "left:" + posiçao_imagem + "%;" + "top:" + posiçao_imagem_top + "%;"

        if (true) {
            posiçao_imagem += 1
            console.log('valor posiçao_imagem_right : ' + posiçao_imagem)
        } if (posiçao_imagem >= 14) {
            posiçao_imagem = 13
        }
    })
    btn_imagem_top.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "top:" + posiçao_imagem_top + "%;" + "left:" + posiçao_imagem + "%"

        if (true) {
            posiçao_imagem_top = 1
            console.log('valor posiçao_imagem_top : ' + posiçao_imagem_top)
        }
    })
    btn_imagem_botao.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "top:" + posiçao_imagem_top + "%;" + "left:" + posiçao_imagem + "%"

        if (true) {
            posiçao_imagem_top += 1
            console.log('valor posiçao_imagem_baixo : ' + posiçao_imagem_top)
        }
        if (posiçao_imagem_top >= 51) {
            posiçao_imagem_top = 50
        }
    })
})

////////////////////////////////////////////////////////////
img_imagem[3].addEventListener("click", () => {
    let imagem_criada = document.createElement("img")
    let br_imagem_criada = document.createElement("br")
    let base_imagem_criada = document.createElement("div")
    let btn_imagem_left = document.createElement("button")
    let btn_imagem_right = document.createElement("button")
    let btn_imagem_top = document.createElement("button")
    let btn_imagem_botao = document.createElement("button")
    let confirme_imagem_criada = document.createElement("button")

    btn_imagem_left.setAttribute("class", "btn_imagem_left")
    btn_imagem_right.setAttribute("class", "btn_imagem_right")
    btn_imagem_top.setAttribute("class", "btn_imagem_top")
    btn_imagem_botao.setAttribute("class", "btn_imagem_botao")
    confirme_imagem_criada.setAttribute("class","confirme_imagem_criada")
    confirme_imagem_criada.textContent = "ok"

    base_imagem_criada.setAttribute("class", "base_imagem_criada")
    imagem_criada.setAttribute("class", "imagem_criada")
    imagem_criada.setAttribute("src", "/imagens/imagens/balao-04.png")
    papel.appendChild(base_imagem_criada)
    base_imagem_criada.appendChild(imagem_criada)
    base_imagem_criada.appendChild(br_imagem_criada)
    base_imagem_criada.appendChild(btn_imagem_left)
    base_imagem_criada.appendChild(btn_imagem_top)
    base_imagem_criada.appendChild(btn_imagem_right)
    base_imagem_criada.appendChild(btn_imagem_botao)
    base_imagem_criada.appendChild(confirme_imagem_criada)

confirme_imagem_criada.addEventListener("click",()=>{
    btn_imagem_botao.remove()
    btn_imagem_top.remove()
    btn_imagem_left.remove()
    btn_imagem_right.remove()
    confirme_imagem_criada.remove()
})

   btn_imagem_left.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "left:" + posiçao_imagem + "%;" + "top:" + posiçao_imagem_top + "%;"

        if (true) {
            posiçao_imagem = 2
            console.log('valor posiçao_imagem_left : ' + posiçao_imagem)
        }
       
    })
    btn_imagem_right.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "left:" + posiçao_imagem + "%;" + "top:" + posiçao_imagem_top + "%;"

        if (true) {
            posiçao_imagem += 1
            console.log('valor posiçao_imagem_right : ' + posiçao_imagem)
        } if (posiçao_imagem >= 15) {
            posiçao_imagem = 14
        }
    })
    btn_imagem_top.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "top:" + posiçao_imagem_top + "%;" + "left:" + posiçao_imagem + "%"

        if (true) {
            posiçao_imagem_top = 1
            console.log('valor posiçao_imagem_top : ' + posiçao_imagem_top)
        }
    })
    btn_imagem_botao.addEventListener("click", () => {
        base_imagem_criada.style = "position:absolute;" +
            "top:" + posiçao_imagem_top + "%;" + "left:" + posiçao_imagem + "%"

        if (true) {
            posiçao_imagem_top += 1
            console.log('valor posiçao_imagem_baixo : ' + posiçao_imagem_top)
        }
        if (posiçao_imagem_top >= 51) {
            posiçao_imagem_top = 50
        }
    })
})


btn_cor[0].addEventListener("click", () => {
    cor_memoria = baldecor1;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[1].addEventListener("click", () => {
    cor_memoria = baldecor2;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[2].addEventListener("click", () => {
    cor_memoria = baldecor3;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[3].addEventListener("click", () => {
    cor_memoria = baldecor4;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[4].addEventListener("click", () => {
    cor_memoria = baldecor5;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[5].addEventListener("click", () => {
    cor_memoria = baldecor6;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[6].addEventListener("click", () => {
    cor_memoria = baldecor7;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[7].addEventListener("click", () => {
    cor_memoria = baldecor8;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[8].addEventListener("click", () => {
    cor_memoria = baldecor9;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[9].addEventListener("click", () => {
    cor_memoria = baldecor10;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[10].addEventListener("click", () => {
    cor_memoria = baldecor11;
    console.log("cor memoria = " + cor_memoria)
})
btn_cor[11].addEventListener("click", () => {
    cor_memoria = baldecor12;
    console.log("cor memoria = " + cor_memoria)
})

papel.addEventListener("click", () => {
    papel.style = cor_memoria;

})

btn_editor[0].addEventListener("click", () => {
    console.log("balde selecionado")
    if (true) {
        fundo_balde.style = ativo;
        fundo_texto.style = desativo;
        fundo_imagem.style = desativo;
        fundo_efeito.style = desativo;
    }
})

btn_editor[1].addEventListener("click", () => {
    console.log("texto selecionado")
    if (true) {
        fundo_balde.style = desativo;
        fundo_texto.style = ativo;
        fundo_imagem.style = desativo;
        fundo_efeito.style = desativo;
    }
})
btn_editor[2].addEventListener("click", () => {
    console.log("imagem selecionado")
    if (true) {
        fundo_balde.style = desativo;
        fundo_texto.style = desativo;
        fundo_imagem.style = ativo;
        fundo_efeito.style = desativo;
    }
})
btn_editor[3].addEventListener("click", () => {
    console.log("efeito selecionado")
    if (true) {
        fundo_balde.style = desativo;
        fundo_texto.style = desativo;
        fundo_imagem.style = desativo;
        fundo_efeito.style = ativo;
    }
})



btn_controlador[0].addEventListener("click", () => {
    console.log("Btn-left")

        img_imagemespecial.style = "position:absolute;" +
            "left:" + imagem_especial + "%;" + "top:" + imagem_especial_top + "%;"
           + "width:"+ ampliar_img_especial +"px;"

        if (true) {
            imagem_especial = 2
            console.log('valor imagem_especial_left : ' + imagem_especial)
        }
        if (imagem_especial >= 8) {
            imagem_especial = 2
        }
   
})

btn_controlador[1].addEventListener("click", () => {
    console.log("Btn-right")
   img_imagemespecial.style = "position:absolute;" +
            "left:" + imagem_especial + "%;" + "top:" + imagem_especial_top + "%;"
            + "width:"+ ampliar_img_especial +"px;"
        if (true) {
            imagem_especial += 1
            console.log('imagem_especial_right : ' + imagem_especial)
        }
        if(imagem_especial >= 24){
            imagem_especial = 23
        }
    
})
btn_controlador[2].addEventListener("click", () => {
    console.log("Btn-top")
    img_imagemespecial.style = "position:absolute;" +
    "top:" + imagem_especial_top + "%;" + "left:" + imagem_especial + "%"
    + "width:"+ ampliar_img_especial +"px;"
if (true) {
    imagem_especial_top = 2
    console.log('valor imagem_especial_top : ' + imagem_especial_top)
}
})
btn_controlador[3].addEventListener("click", () => {
    console.log("Btn-bottom")
img_imagemespecial.style = "position:absolute;" +
            "top:" + imagem_especial_top + "%;" + "left:" + imagem_especial + "%"
            + "width:"+ ampliar_img_especial +"px;"
        if (true) {
            imagem_especial_top += 1
            console.log('imagem_especial_baixo : ' + imagem_especial_top)
        }
        if (imagem_especial_top >= 51) {
            imagem_especial_top = 50
        }
})
btn_controlador[4].addEventListener("click",()=>{
    img_imagemespecial.style = "position:absolute;" +
    "width:"+ ampliar_img_especial +"px;"+
    "top:" + imagem_especial_top + "%;" + "left:" + imagem_especial + "%;"

    if(true){
        ampliar_img_especial +=5
        console.log("valor da imgem em pxs: "+ampliar_img_especial)
    }if(ampliar_img_especial >=295){
        ampliar_img_especial = 295
    }
})
btn_controlador[5].addEventListener("click",()=>{
    img_imagemespecial.style = "position:absolute;" +
    "width:"+ ampliar_img_especial +"px;"+
    "top:" + imagem_especial_top + "%;" + "left:" + imagem_especial + "%;"

    if(true){
        ampliar_img_especial =-5
        console.log("valor da imgem em pxs: "+ampliar_img_especial)
    }
    if(ampliar_img_especial <=100){
        ampliar_img_especial = 100
    }
    
})

btn_efeito[0].addEventListener("click", () => {
    papel.style = "filter:none" + cor_memoria;
})
btn_efeito[1].addEventListener("click", () => {
    papel.style = "filter: blur(5px);" + cor_memoria;
})
btn_efeito[2].addEventListener("click", () => {
    papel.style = "filter: brightness(200%);;" + cor_memoria;
})
btn_efeito[3].addEventListener("click", () => {
    papel.style = "filter: contrast(200%);" + cor_memoria;
})
btn_efeito[4].addEventListener("click", () => {
    papel.style = "filter: drop-shadow(8px 8px 10px gray);" + cor_memoria;
})
btn_efeito[5].addEventListener("click", () => {
    papel.style = "filter: grayscale(100%);" + cor_memoria;
})
btn_efeito[6].addEventListener("click", () => {
    papel.style = "filter: hue-rotate(90deg);" + cor_memoria;
})
btn_efeito[7].addEventListener("click", () => {
    papel.style = "filter: invert(100%);" + cor_memoria;
})
btn_efeito[8].addEventListener("click", () => {
    papel.style = "filter: opacity(30%);" + cor_memoria;
})
btn_efeito[9].addEventListener("click", () => {
    papel.style = "filter: saturate(8);" + cor_memoria;
})
btn_efeito[10].addEventListener("click", () => {
    papel.style = "filter: sepia(100%);" + cor_memoria;
})
btn_efeito[11].addEventListener("click", () => {
    papel.style = "contrast(200%) brightness(150%);" + cor_memoria;
})



