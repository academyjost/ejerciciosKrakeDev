function listarNumeros(){
    for(let i = 0; i < 3; i++){
        console.log(i)
    }
}

function ejecutar(numEjercicio){
    if(numEjercicio == 1){
        listarNumeros();
    }else if(numEjercicio ==2){
        listarNumerosReversa();
    }else if(numEjercicio ==3){
        listarPares();
    }else if(numEjercicio ==4){
        listaImpares();
    }else if (numEjercicio ==5){
        listarParesReversa();
    }
}

function listarNumerosReversa(){
    for(let i = 3; i>0; i--){
        console.log(i)
    }
}

function listarPares(){
    for(let i=0; i<10; i+=2){
        console.log(i)
    }
}
function listaImpares(){
    for(let i=1; i<10; i+=2){
        console.log(i)}
}
function listarParesReversa(){
    for(let i=8; i>0; i-=2){
        console.log(i)
    }   
}