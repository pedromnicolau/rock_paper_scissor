function setNickName(x){

    if(x == 1){
    var player_1 = prompt('Player 1, digite seu nick:')
    document.getElementById('nickname_1').innerHTML = player_1

    }
    else if(x == 2){
    var player_2 = prompt('Player 2, digite seu nick:')
    document.getElementById('nickname_2').innerHTML = player_2
    }

}

document.addEventListener("keypress", function(e){
    switch(e.key) {
        case '1':
            changeValue('rock', '1');
            break;
        case '2':
            changeValue('paper', '1');
            break;
        case '3':
            changeValue('scissor', '1');
            break;
        case '7':
            changeValue('rock', '2');
            break;
        case '8':
            changeValue('paper', '2');
            break;
        case '9':
            changeValue('scissor', '2');
            break;    
        }
});

function changeValue(choice, player) {
    document.getElementById('value_' + player).innerHTML = choice

    changeBackGroundColor(choice, player)

    playGame();
};

function changeBackGroundColor(choice, player){

    if(choice == 'clear'){
        btn_choices = document.getElementsByClassName('btn_choice')

        for (let i = 0; i < btn_choices.length; i++) {
            btn_choices[i].style.backgroundColor = 'white';
        };
     }
    
     document.getElementById('rock_' + player).style.backgroundColor = (choice == 'rock' ? 'gray' : 'white')
     document.getElementById('paper_' + player).style.backgroundColor = (choice == 'paper' ? 'gray' : 'white')
     document.getElementById('scissor_' + player).style.backgroundColor = (choice == 'scissor' ? 'gray' : 'white')
     
}

function playGame() {

    var choice_1 = document.getElementById('value_1').innerHTML
    var choice_2 = document.getElementById('value_2').innerHTML

    var qtd_ties = 0, qtd_victories_1 = 0, qtd_victories_2 = 0;

    if(choice_1 == '' || choice_2 == ''){
        return
    }

    if(choice_1 == choice_2) {
        qtd_ties ++
        paintPoints('qtd_ties')
    }
    else if((choice_1 == 'rock' && choice_2 == 'scissor') || (choice_1 == 'paper' && choice_2 == 'rock') || (choice_1 == 'scissor' && choice_2 == 'paper')){
        qtd_victories_1 ++
        paintPoints('qtd_victories_1')
    }
    else{
        qtd_victories_2 ++
        paintPoints('qtd_victories_2')
    }
    
    setPoints(qtd_ties, qtd_victories_1, qtd_victories_2);
    clearAll();  
}

function setPoints(qtd_ties, qtd_victories_1, qtd_victories_2) {
    qtd_ties += parseInt(document.getElementById('qtd_ties').innerHTML)    
    qtd_victories_1 += parseInt(document.getElementById('qtd_victories_1').innerHTML)
    qtd_victories_2 += parseInt(document.getElementById('qtd_victories_2').innerHTML)

    document.getElementById('qtd_ties').innerHTML = qtd_ties
    document.getElementById('qtd_victories_1').innerHTML = qtd_victories_1
    document.getElementById('qtd_victories_2').innerHTML = qtd_victories_2
}

function paintPoints(id){
    document.getElementById('qtd_victories_1').style.color = 'black';
    document.getElementById('qtd_victories_2').style.color = 'black';
    document.getElementById('qtd_ties').style.color = 'black';

    document.getElementById(id).style.color = 'green';

}

function clearAll(){
    document.getElementById('value_1').innerHTML = ""
    document.getElementById('value_2').innerHTML = ""
    
     setTimeout(function(){
         changeBackGroundColor('clear')
     }, 500);      
 }

 function showRules(){
    var rules = document.getElementById('rules')
    var btn_rules = document.getElementById('btn_rules')

    if (rules.style.display === 'none') {
        rules.style.display = 'block';
        btn_rules.innerHTML = 'Ocultar regras'
      } else {
        rules.style.display = 'none';
        btn_rules.innerHTML = 'Mostrar regras'
      }



 }


// document.addEventListener("keypress", function(e){
//     switch(e.key) {
//         case '1':
//             escolher('pedra',1);
//             break;
//         case '2':
//             escolher('papel',1);
//             break;
//         case '3':
//             escolher('tesoura',1);
//             break;
//         case '7':
//             escolher('pedra',2);
//             break;
//         case '8':
//             escolher('papel',2);
//             break;
//         case '9':
//             escolher('tesoura',2);
//             break;                            
//         }
// });

// function escolher(choice, player) {
//     document.getElementById('valor_e' + player).innerHTML = choice

//     document.getElementById('rock' + player).style.backgroundColor = (choice == 'pedra' ? 'gray' : 'white')
//     document.getElementById('paper' + player).style.backgroundColor = (choice == 'papel' ? 'gray' : 'white')
//     document.getElementById('s' + player).style.backgroundColor = (choice == 'tesoura' ? 'gray' : 'white')

//     playGame();
// };

// function playGame() {
//     var qtd0 = 0, qtd1 = 0, qtd2 = 0;
    
//     var escolha1 = document.getElementById('valor_e1').innerHTML
//     var escolha2 = document.getElementById('valor_e2').innerHTML

//     if(escolha1 == "" || escolha2 == "")
//         return;      

//     if(escolha1 == escolha2) {
//         qtd0++
//         pintarPontos('v0');
//     }
//     else if((escolha1 == 'pedra' && escolha2 == 'tesoura') || (escolha1 == 'papel' && escolha2 == 'pedra') || (escolha1 == 'tesoura' && escolha2 == 'papel')){
//         qtd1++
//         pintarPontos('v1');
//     }
//     else{
//         qtd2++
//         pintarPontos('v2');
//     }
    
//     setarPontos(qtd0, qtd1, qtd2);
//     limparEscolhas();  
// }

// function limparEscolhas(){
//     document.getElementById('valor_e1').innerHTML = ""
//     document.getElementById('valor_e2').innerHTML = ""
    
//     setTimeout(function(){
//         pintarBotoes('white')
//     }, 500);      
// }

// function setarPontos(qtd0, qtd1, qtd2) {
//     qtd0 += parseInt(document.getElementById('v0').innerHTML)    
//     qtd1 += parseInt(document.getElementById('v1').innerHTML)
//     qtd2 += parseInt(document.getElementById('v2').innerHTML)

//     document.getElementById('v0').innerHTML = qtd0
//     document.getElementById('v1').innerHTML = qtd1
//     document.getElementById('v2').innerHTML = qtd2
// }

// function pintarPontos(id) {
//     document.getElementById('v0').style.color = 'black';
//     document.getElementById('v1').style.color = 'black';
//     document.getElementById('v2').style.color = 'black';

//     document.getElementById(id).style.color = 'green';
// }

// function pintarBotoes(cor) {    
//     botoes = document.getElementsByClassName('btn_escolha')

//     for (let i = 0; i < botoes.length; i++) {
//         botoes[i].style.backgroundColor = cor;
//     };
// }