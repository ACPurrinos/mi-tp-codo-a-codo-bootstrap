
// window.addEventListener("DOContentLoaded", (event)=>{
//     const el = document.getElementById('btnResumen');
//     if (el){
//         el.addEventListener('click', calcularTotalAPagar);
//     }
// })
// const cantidad = parseInt(document.getElementById('cantidad'));
// const categoria = document.getElementById('categoria');

document.getElementById('btnResumen').addEventListener('click', (event)=>{
event.preventDefault();
calcularTotalAPagar();
});

function calcularTotalAPagar(){
const cantidad = parseInt(document.getElementById('cantidad').value);
const categoria = document.getElementById('categoria').value;
const valorTicket= 200;
let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;
let total = cantidad * valorTicket;


 switch(categoria){
   
 case "Estudiante": 
 total = total - (total*descuentoEstudiante);
break;
 case "Trainee":
total = total - (total*descuentoTrainee);
break;
case "Junior":
total=total-(total*descuentoJunior);
break;
default:
 total="";
 break;
}
const totalAPagar = document.getElementById('totalAPagar');
totalAPagar.textContent=`Total a Pagar: $ ${total}`;

 };



