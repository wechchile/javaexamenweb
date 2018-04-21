window.onload= function(){
  var bandera=0
  var operacion='';
  var memoria=0;

  function sumar(valor){
      memoria=parseFloat(valor);
      operacion ='sumar';

  }

  function resta(valor){
        memoria=parseFloat(valor);
      operacion ='resta';
  }

   function multipli(valor){
        memoria=parseFloat(valor);
      operacion ='multp';
   }

   function dividir(valor){
        memoria=parseFloat(valor);
      operacion ='divid';
   }

   function camsign(valor){
      var resul= parseFloat(valor);
      resul=resul*-1;
      document.getElementById('display').innerHTML=resul; 
   }

  function resultado(valor){
      var resul =0;
      var alma='';
      if (operacion!=''){
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
        alma=resul.toString();
        document.getElementById('display').innerHTML=alma.substr(0,9);      
      }

      
  }
  function araiz(valor){   
   var modif ="";
   var resul=0;
   resul=Math.sqrt(valor);
   modif=resul.toString();
   document.getElementById('display').innerHTML=modif.substr(0,9); 
  }

  function pantalla(valor){
    var  val1= document.getElementById('display').innerHTML;
    var  valor2=parseFloat(val1);
    var contenido=0;
      if (val1=='0'){
        document.getElementById('display').innerHTML=valor;
      }else if( val1!='0'){
        if (operacion==''){
             contenido=val1.concat(valor); 
              
            document.getElementById('display').innerHTML=contenido.substr(0,9);         
        }else{
            document.getElementById('display').innerHTML=valor;
        }
      }
    /* 
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

  }

   /*document.getElementById('1').onmousedown=function(){
      document.getElementById("1").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("1").style.transform="scale(1)";
       }, 200);
   }*/
  
   document.getElementById('1').onclick= function(){
     pantalla(1); 
     document.getElementById("1").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("1").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('2').onclick= function(){
     pantalla(2);
     document.getElementById("2").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("2").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('3').onclick= function(){
     pantalla(3);
     document.getElementById("3").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("3").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('4').onclick= function(){
     pantalla(4);
     document.getElementById("4").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("4").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('5').onclick= function(){
     pantalla(5);
     document.getElementById("5").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("5").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('6').onclick= function(){
     pantalla(6);
     document.getElementById("6").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("6").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('7').onclick= function(){
     pantalla(7);
     document.getElementById("7").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("7").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('8').onclick= function(){
     pantalla(8);
     document.getElementById("8").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("8").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('9').onclick= function(){
     pantalla(9);
     document.getElementById("9").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("9").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('0').onclick= function(){
     pantalla(0);
     document.getElementById("0").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("0").style.transform="scale(1)";
       }, 200);   
   }
   //inicio de operacion matematica
   document.getElementById('mas').onclick= function(){
     sumar(document.getElementById('display').innerHTML);
     document.getElementById("mas").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("mas").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('igual').onclick= function(){
     resultado(document.getElementById('display').innerHTML);
     document.getElementById("igual").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("igual").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('menos').onclick= function(){
     resta(document.getElementById('display').innerHTML);
     document.getElementById("menos").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("menos").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('dividido').onclick= function(){
     dividir(document.getElementById('display').innerHTML);
     document.getElementById("dividido").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("dividido").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('por').onclick= function(){
     multipli(document.getElementById('display').innerHTML);
     document.getElementById("por").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("por").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('sign').onclick= function(){
     camsign(document.getElementById('display').innerHTML);
     document.getElementById("sign").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("sign").style.transform="scale(1)";
       }, 200);   
   }
   document.getElementById('raiz').onclick= function(){
     araiz(document.getElementById('display').innerHTML);
     document.getElementById("raiz").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("raiz").style.transform="scale(1)";
       }, 200);   
   }

   document.getElementById('punto').onclick= function(){
    if (bandera==0){
           pantalla('.');
           bandera=1;
      }
      document.getElementById("punto").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("punto").style.transform="scale(1)";
       }, 200);   
   }

   document.getElementById('on').onclick= function(){
    document.getElementById('display').innerHTML='0';
    bandera=0;
    operacion='';
    }
    document.getElementById('on').addEventListener("click", function() {
       document.getElementById("on").style.transform="scale(0.9)";
       setTimeout(function () {
        document.getElementById("on").style.transform="scale(1)";
       }, 200);
      });

}
