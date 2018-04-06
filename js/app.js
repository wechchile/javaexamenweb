window.onload= function(){
  function pantalla(valor){
    var  val1= document.getElementById('display').innerHTML;
    console.log(val1);
    console.log(parseInt(val1));
    if (val1='0'){
      document.getElementById('display').innerHTML=valor;
    }else if (parseInt(val1)>0) {
      document.getElementById('display').innerHTML=val1.concat(valor);
    }
    console.console.log(parseInt(val1)+valor);
  }
   document.getElementById('1').onclick= function(){
     pantalla('1');
   }
   document.getElementById('2').onclick= function(){
     document.getElementById('display').innerHTML='2';
   }
   document.getElementById('3').onclick= function(){
     document.getElementById('display').innerHTML='3';
   }
   document.getElementById('4').onclick= function(){
     document.getElementById('display').innerHTML='4';
   }
   document.getElementById('5').onclick= function(){
     document.getElementById('display').innerHTML='5';
   }
   document.getElementById('6').onclick= function(){
     document.getElementById('display').innerHTML='6';
   }
   document.getElementById('7').onclick= function(){
     document.getElementById('display').innerHTML='7';
   }
   document.getElementById('8').onclick= function(){
     document.getElementById('display').innerHTML='8';
   }
   document.getElementById('9').onclick= function(){
     document.getElementById('display').innerHTML='9';
   }
   document.getElementById('0').onclick= function(){
     document.getElementById('display').innerHTML='0';
   }
   document.getElementById('punto').onclick= function(){
     document.getElementById('display').value='.';
   }

}
