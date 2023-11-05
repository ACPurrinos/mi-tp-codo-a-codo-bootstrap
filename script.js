
document.getElementById('resumen').addEventListener('click', (evento)=>{
    evento.preventDefault();
     calcularTotalAPagar();
    });

function calcularTotalAPagar(){
    const valorTicket= 200;
    let descuentoEstudiante = 0.80;
    let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;
let total = cantidad * valorTicket;
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
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



