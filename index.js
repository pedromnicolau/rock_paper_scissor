document.addEventListener("keypress", function(e){
    var r1 = document.getElementById('r1')
    var r2 = document.getElementById('r2')

    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')

    var s1 = document.getElementById('s1')
    var s2 = document.getElementById('s2')

    var e1 = document.getElementById('valor_e1')
    var e2 = document.getElementById('valor_e2')
    
    var qtd1 = parseInt(document.getElementById('v1').innerHTML)
    var qtd2 = parseInt(document.getElementById('v2').innerHTML)
    var qtd0 = parseInt(document.getElementById('v0').innerHTML)


    if(e.key == "1") {
        e1.innerHTML = 'pedra'
        r1.style.backgroundColor = 'gray';
        p1.style.backgroundColor = 'white';
        s1.style.backgroundColor = 'white';
    };
    if(e.key == "2") {
        e1.innerHTML = 'papel'
        r1.style.backgroundColor = 'white';
        p1.style.backgroundColor = 'gray';
        s1.style.backgroundColor = 'white';
    };
    if(e.key == "3") {
        e1.innerHTML = 'tesoura'
        r1.style.backgroundColor = 'white';
        p1.style.backgroundColor = 'white';
        s1.style.backgroundColor = 'gray';
    };
    if(e.key == "7") {
        e2.innerHTML = 'pedra'
        r2.style.backgroundColor = 'gray';
        p2.style.backgroundColor = 'white';
        s2.style.backgroundColor = 'white';
    };
    if(e.key == "8") {
        e2.innerHTML = 'papel'
        r2.style.backgroundColor = 'white';
        p2.style.backgroundColor = 'gray';
        s2.style.backgroundColor = 'white';
    };
    if(e.key == "9") {
        e2.innerHTML = 'tesoura'
        r2.style.backgroundColor = 'white';
        p2.style.backgroundColor = 'white';
        s2.style.backgroundColor = 'gray';
    };
    if(e.key == "Enter") {
        validar(e1.innerHTML, e2.innerHTML, qtd1, qtd2, qtd0)
    };
});

function validar(e1, e2, qtd1, qtd2, qtd0){

    if(e1 == e2){
        qtd0++
    }
    if(e1 == 'pedra' && e2 =='papel'){
        qtd2++
    }
    if(e1 == 'pedra' && e2 =='tesoura'){
        qtd1++
    }
    if(e1 == 'papel' && e2 =='pedra'){
        qtd1++
    }
    if(e1 == 'papel' && e2 =='tesoura'){
        qtd2++
    }
    if(e1 == 'tesoura' && e2 =='pedra'){
        qtd2++
    }
    if(e1 == 'tesoura' && e2 =='papel'){
        qtd1++
    }

    document.getElementById('v1').innerHTML = qtd1
    document.getElementById('v2').innerHTML = qtd2
    document.getElementById('v0').innerHTML = qtd0

    setTimeout(function(){
        document.getElementById('r1').style.backgroundColor = 'white'
        document.getElementById('p1').style.backgroundColor = 'white'
        document.getElementById('s1').style.backgroundColor = 'white'
        document.getElementById('r2').style.backgroundColor = 'white'
        document.getElementById('p2').style.backgroundColor = 'white'
        document.getElementById('s2').style.backgroundColor = 'white'
    }, 500);

};

function alterarE1(e1) {
    document.getElementById('valor_e1').innerHTML = e1
    if(e1 == 'pedra'){
        document.getElementById('r1').style.backgroundColor = 'gray'
        document.getElementById('p1').style.backgroundColor = 'white'
        document.getElementById('s1').style.backgroundColor = 'white'
    }
    if(e1 == 'papel'){
        document.getElementById('r1').style.backgroundColor = 'white'
        document.getElementById('p1').style.backgroundColor = 'gray'
        document.getElementById('s1').style.backgroundColor = 'white'
    }
    if(e1 == 'tesoura'){
        document.getElementById('r1').style.backgroundColor = 'white'
        document.getElementById('p1').style.backgroundColor = 'white'
        document.getElementById('s1').style.backgroundColor = 'gray'
    }
};

function alterarE2(e2) {
    document.getElementById('valor_e2').innerHTML = e2
    if(e2 == 'pedra'){
        document.getElementById('r2').style.backgroundColor = 'gray'
        document.getElementById('p2').style.backgroundColor = 'white'
        document.getElementById('s2').style.backgroundColor = 'white'
    }
    if(e2 == 'papel'){
        document.getElementById('r2').style.backgroundColor = 'white'
        document.getElementById('p2').style.backgroundColor = 'gray'
        document.getElementById('s2').style.backgroundColor = 'white'
    }
    if(e2 == 'tesoura'){
        document.getElementById('r2').style.backgroundColor = 'white'
        document.getElementById('p2').style.backgroundColor = 'white'
        document.getElementById('s2').style.backgroundColor = 'gray'
    }
};