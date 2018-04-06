window.onload= function(){
  var gvalor=0
  function pantalla(valor){
    var  val1= document.getElementById('display').innerHTML;
    var  valor2=parseInt(val1);
    console.log(val1);
    if (val1=='0'){
      document.getElementById('display').innerHTML=valor;
    }else if (valor2>0) {
      document.getElementById('display').innerHTML=val1.concat(valor);
    }
    console.log(valor2+valor);
  }
   document.getElementById('1').onclick= function(){
     pantalla(1);
   }
   document.getElementById('2').onclick= function(){
     pantalla(2);
   }
   document.getElementById('3').onclick= function(){
     pantalla(3);
   }
   document.getElementById('4').onclick= function(){
     pantalla(4);
   }
   document.getElementById('5').onclick= function(){
     pantalla(5);
   }
   document.getElementById('6').onclick= function(){
     pantalla(6);
   }
   document.getElementById('7').onclick= function(){
     pantalla(7);
   }
   document.getElementById('8').onclick= function(){
     pantalla(8);
   }
   document.getElementById('9').onclick= function(){
     pantalla(9);
   }
   document.getElementById('0').onclick= function(){
     pantalla(0);
   }

   document.getElementById('punto').onclick= function(){
     document.getElementById('display').value='.';
   }

}
