window.onload= function(){
  var bandera=0
  var operacion='';
  var memoria=0;

  function sumar(valor){
      memoria=parseFloat(valor);
      operacion ='sumar';
      console.log(operacion);
      console.log(memoria);

  }

  function resta(valor){
        memoria=parseFloat(valor);
      operacion ='resta';
      console.log(operacion);
      console.log(memoria);

  }

   function multipli(valor){
        memoria=parseFloat(valor);
      operacion ='multp';
      console.log(operacion);
      console.log(memoria);
   }

   function dividir(valor){
        memoria=parseFloat(valor);
      operacion ='divid';
      console.log(operacion);
      console.log(memoria);
   }

   function camsign(valor){
      var resul= parseFloat(valor);
      resul=resul*-1;
      document.getElementById('display').innerHTML=resul; 
   }

  function resultado(valor){
      var resul =0;
      if (operacion=='sumar'){
         resul= memoria + parseFloat(valor); 
      }
      if (operacion=='resta'){
         resul= memoria - parseFloat(valor); 
      }
      if (operacion=='divid'){
         resul= memoria / parseFloat(valor); 
      }
      if (operacion=='multp'){
         resul= memoria * parseFloat(valor); 
      }

      document.getElementById('display').innerHTML=resul;
  }
  

  function pantalla(valor){
    var  val1= document.getElementById('display').innerHTML;
    var  valor2=parseFloat(val1);
    console.log(val1);
    /* if (val1=='0'){
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
    }*/
     document.getElementById('display').innerHTML=valor;
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
   //inicio de operacion matematica
   document.getElementById('mas').onclick= function(){
     sumar(document.getElementById('display').innerHTML);
   }
   document.getElementById('igual').onclick= function(){
     resultado(document.getElementById('display').innerHTML);
   }
   document.getElementById('menos').onclick= function(){
     resta(document.getElementById('display').innerHTML);
   }
   document.getElementById('dividido').onclick= function(){
     dividir(document.getElementById('display').innerHTML);
   }
   document.getElementById('por').onclick= function(){
     multipli(document.getElementById('display').innerHTML);
   }
   document.getElementById('sign').onclick= function(){
     camsign(document.getElementById('display').innerHTML);
   }

   document.getElementById('punto').onclick= function(){
    pantalla('.')
   }

   document.getElementById('on').onclick= function(){
    document.getElementById('display').innerHTML='0';
    bandera=0;
    operacion='';
    }


}
