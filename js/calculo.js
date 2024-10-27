function calcular(){
    let ventas=document.getElementById('idventas').value;
    let viaticos=document.getElementById('idvia').value;
    let comida=document.getElementById('idcomida').value;
    let transporte=document.getElementById('idtrans').value;
    let hospedaje=document.getElementById('idhosp').value;

    let sueldoB, sueldoF, sobrante;

    sueldoB=ventas*.10;
    sobrante=viaticos-comida-transporte-hospedaje;
    sueldoF=sueldoB-sobrante;

    let espaciores=document.getElementById('txtresultado');

    espaciores.innerHTML='';
    espaciores.innerHTML=`
      <h1 class="text-white">Tu sueldo es de $${sueldoF}</h1>
    `;

}