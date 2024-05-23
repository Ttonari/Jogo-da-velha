var vez_jogador = 'player_1'  
var divsClicadas = {}

function marcar1(quadrado){
    if (!divsClicadas[quadrado.id]){
    var img = document.createElement('img')       
      
    img.style.maxWidth = '100%'    

            if( vez_jogador == 'player_1'){
                vez_jogador = 'player_2'
                img.setAttribute('src', 'simbolo_x.png')

            }else{
                vez_jogador = 'player_1'
                img.setAttribute('src', 'simbolo_o.png')
            }

           

        quadrado.appendChild(img)
        divsClicadas[quadrado.id] = true
    } 
    if(divsClicadas['quadrado_1'] == vez_jogador == 'player_2'){
            
             console.log('2 venceu')
            window.alert('player 2 venceu')
                
            }
}
