let jogador = document.querySelector('.jogador')
let computador = document.querySelector('.computador')
let jogada = document.querySelector('.jogada--img')
let jogadaComputador = document.querySelector('.jogada-computador--img')
let pedra = document.querySelector('.pedra')
let papel = document.querySelector('.papel')
let tesoura = document.querySelector('.tesoura')
let resultado = document.querySelector('#resultado')
let play = document.querySelector('.play')

let escolha1 = 0, escolhaPC, scoreJogador = 0, scorePC = 0



//MUDA ICONES JOGADOR
pedra.addEventListener('click', function(){
    jogada.src = `pedra.png`
    escolha1 = 1
    jogadaComputador.style.display = "none"
})
papel.addEventListener('click', function(){
    jogada.src = `papel.png`
    escolha1 = 2
    jogadaComputador.style.display = "none"
})
tesoura.addEventListener('click', function(){
    jogada.src = `tesoura.png`
    escolha1 = 3
    jogadaComputador.style.display = "none"
})
//MUDA ICONES COMPUTADOR///////////////


play.addEventListener('click', function(){
    escolhaPC = Math.trunc(Math.random()*3) + 1
//GERA ESCOLHA DO COMPUTADOR
    switch(escolhaPC){
        case 1:
        jogadaComputador.style.display = "block"
        jogadaComputador.src = `pedra.png`
        break
        case 2:    
        jogadaComputador.style.display = "block"
        jogadaComputador.src = `papel.png`
        break
        case 3:
        jogadaComputador.style.display = "block"
        jogadaComputador.src = `tesoura.png`
        break
    }   
    
  

    if(escolha1 == escolhaPC){
        console.log('empate')
        resultado.textContent = 'Empate'       
    }else if(escolha1 == 1 && escolhaPC == 2){  
        resultado.textContent = '🖥️ Computador venceu!'
        scorePC++
        document.querySelector('.pontosPC').textContent = `${scorePC} pontos`

    }else if(escolha1 == 1 && escolhaPC == 3){
        resultado.textContent = '🧑 Jogador venceu!'  
        scoreJogador++
        document.querySelector('.pontos').textContent = `${scoreJogador} pontos`

    }else if(escolha1 == 2 && escolhaPC == 1){
        resultado.textContent = '🧑 Jogador venceu!'  
        scoreJogador++
        document.querySelector('.pontos').textContent = `${scoreJogador} pontos`

    }else if(escolha1 == 2 && escolhaPC == 3){
        resultado.textContent = '🖥️ Computador venceu!'
        scorePC++
        document.querySelector('.pontosPC').textContent = `${scorePC} pontos`

    }else if(escolha1 == 3 && escolhaPC == 1){
        resultado.textContent = '🖥️ Computador venceu!'
        scorePC++
        document.querySelector('.pontosPC').textContent = `${scorePC} pontos`
        
    }else if(escolha1 == 3 && escolhaPC == 2){
        resultado.textContent = '🧑 Jogador venceu!'  
        scoreJogador++
        document.querySelector('.pontos').textContent = `${scoreJogador} pontos`
    }
    console.log(scoreJogador)

})

////////////////////////////////////////////////////////////////////////////////





    

