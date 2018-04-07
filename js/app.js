window.onload= function(){
  var bandera=0
  function pantalla(valor){
    var  val1= document.getElementById('display').innerHTML;
    var  valor2=parseFloat(val1);
    console.log(val1);
    if (val1=='0'){
       if (valor=='.'){
         if (bandera==0){
           document.getElementById('display').innerHTML=val1.concat(valor);
           bandera=1;
           console.log(bandera);
         }
       }else{
         document.getElementById('display').innerHTML=valor;
       }
    }else if (valor2>0) {
       if (valor=='.'){
         if (bandera==0){
         document.getElementById('display').innerHTML=val1.concat(valor);
         bandera=1;
       }else {
         if (valor!='.')
            document.getElementById('display').innerHTML=val1.concat(valor);
       }
      }
    }
  }

   document.getElementById('1').onclick= function(){
      document.getElementById("1").style.Color = "red";
     pantalla(1);
     document.getElementById("1").style.Color = "black";
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
    pantalla('.')
   }
   document.getElementById('on').onclick= function(){
    document.getElementById('display').innerHTML='0';
    bandera=0;
    }


}
