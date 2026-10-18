class Contador{
  constructor(){

    this.numero =0;

  }

  sumar(){
    this.numero++;
  }

  restar(){

    if(this.numero>0 ){
      this.numero--;
    }

    else{

  console.log("el numero " + this.numero )
    }

  }

  reiniciar(){
    this.numero=0;
  }


}

const objcontador = new Contador();
const patalla=document.getElementById('numero');

function mostrarNumero(){

patalla.textContent= objcontador.numero;

}

document.getElementById('sumar').onclick = function(){

objcontador.sumar();
mostrarNumero();

}

document.getElementById('restar').onclick = function(){

objcontador.restar();
mostrarNumero();

}

document.getElementById('reiniciar').onclick= function(){

objcontador.reiniciar();
mostrarNumero();

}