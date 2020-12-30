function juntarNomes(){
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let nomeCompleto = input1.value + ' ' + input2.value;    
alert(nomeCompleto);
    
}
function somar(){
let input3 = Number( document.getElementById('input3').value);
let input4 = Number( document.getElementById('input4').value);
let resultado =  `${input3 + input4}`
alert(resultado);


}
function cursed(){
  for( let i = 0; i<3 ; i++){
    console.log('alo')
    window.open('https://i.redd.it/cx6410i0rj751.jpg', '_blank', 'top=500,left=500,width=400,height=400, toolbar=no,scrollbars=no,resizable=no' );
  
  }
}
  let brinco =  document.querySelector('button#oi')  
  
    
  brinco.addEventListener('click',cursed)
 function metodo(){

location.replace('/index.html')
 }
 function metadinha(){
location.replace('/bartsad.html')

 }
