function openModal(){
    var modal = document.getElementById("modal_rules");
    var btn = document.getElementById("btn_rules");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        }
        
        span.onclick = function() {
        modal.style.display = "none";
        }
        
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

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