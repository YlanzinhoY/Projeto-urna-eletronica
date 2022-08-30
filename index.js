let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateralDireita = document.querySelector(".d-1-right")
let numeros = document.querySelector('.d-1-3')

let eleitoresAtual = 0;
let numero = ''
let votobranco = true
let confirmado = true

function comecarEleicao(){
    let eleicao = eleitores[eleitoresAtual]
    let numeroHtml = ''
    numero = ''
   votobranco = false
   confirmado = false
    for(let i = 0; i <eleicao.numeros; i++){
        if(i === 0){
        numeroHtml += '<div class="numero pisca"></div>'
        }else {
        numeroHtml += '<div class="numero"></div>'
        }  
    }
    seuVotoPara.style.display = 'none'
    cargo.innerHTML = eleicao.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateralDireita.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

comecarEleicao()

function atualizaInterface(){
    let eleicao = eleitores[eleitoresAtual]
    let candidato = eleicao.candidatos.filter((item) => {
        if(item.numero === numero){
            return true
        } else{
            return false
        }
    })
    if(candidato.length > 0){
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}</br>Partido: ${candidato.partido}</br> Vice: ${candidato.vice}`
        let fotosHtml = ''
        for(let i in candidato.fotos){
            fotosHtml += `<div class="d-1-image">
            <img src="img/${candidato.fotos[i].url}">
            ${candidato.fotos[i].legenda}
        </div>`
        }
        lateralDireita.innerHTML = fotosHtml
    } else {
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>'
    }
}
function clicou (n){
    let elNumero = document.querySelector('.numero.pisca')
    if(elNumero !== null){
        elNumero.innerHTML = n
        numero = `${numero}${n}`
        elNumero.classList.remove('pisca')
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface( )
        }
    }
}

function branco(){
        votobranco = true
        numero = ''
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'  
        numeros.innerHTML = ''
        descricao.innerHTML = '<div class="aviso-grande pisca alinha">VOTO EM BRANCO</div>'
        lateralDireita.innerHTML = ''
}
function corrige(){
    comecarEleicao()
}

function confirma(){
    let eleicao = eleitores[eleitoresAtual]
    if(votobranco === true){
        seuVotoPara.style.display = 'none'
        aviso.style.display = 'none'
        lateralDireita.innerHTML = ''  
        numeros.innerHTML = ''
        cargo.innerHTML =''
        descricao.innerHTML = '<div class="aviso-grande pisca alinha fim">FIM</div>'
        setInterval(function(){
            document.location.reload(true)
        },1500)
    } if(numero.length === eleicao.numeros){
        seuVotoPara.style.display = 'none'
        aviso.style.display = 'none'
        lateralDireita.innerHTML = ''  
        numeros.innerHTML = ''
        cargo.innerHTML =''
        descricao.innerHTML = '<div class="aviso-grande pisca alinha fim">FIM</div>'
        setInterval(function(){
            document.location.reload(true)
        },1500)
    }    
}

