'use strict';

/* VARIABLES & CONSTANTES*/
let nombreDisco;
let nombreAutor;
let numeroCodigo;
let nombrePista;
let duracionPista;
let discos = [];
let contadorDiscos = 0;
let disco;
let pista;



function Cargar(){
    
    // INGRESO DE DATOS
    nombreDisco = prompt("Ingrese el Nombre del disco");

        while(nombreDisco.length < 1){
            alert("El campo no puede estar vacio, por favor intente de nuevo");
            nombreDisco = prompt("Ingrese el Nombre del disco");}

    nombreAutor = prompt("Ingrese el Nombre del autor o banda");

        while(nombreAutor.length < 1){
            alert("El campo no puede estar vacio, por favor intente de nuevo");
            nombreAutor = prompt("Ingrese el Nombre del autor o banda");}

    IngresarCodigo();
    

    // ESTRUCTURA DEL DISCO
    disco = {
        Nombre: nombreDisco,
        Autor: nombreAutor,
        Codigo: [],
        Pistas: [],}
 
    do{
        nombrePista = prompt("Ingrese el nombre de la PISTA");

        IngresarDuracionPista();

        pista = {
        Nombre: nombrePista, 
        duracionPista: duracionPista,
        };

        //pista.duracionPista.push(duracionPista);
        
        disco.Pistas.push(pista);

    }while(confirm("Desea ingresar otra PISTA?") == true);

    disco.Codigo.push(numeroCodigo)
    discos.push(disco);
    contadorDiscos++;
    
}

function Mostrar(){
    let html = "<ul>";
    
        for (const item of discos){
            console.log(item);
        }

        for(let i = 0; i < discos.length; i++){
            html += `<div><strong> Nombre </strong> <li>${discos[i].Nombre}</li>`;
            html += `<strong> Autor </strong> <li>${discos[i].Autor}</li>`;
            html += `<strong> Código </strong> <li>${discos[i].Codigo}</li>`;

            for(let j = 0; j < discos[i].Pistas.length; j++){
            html += `<strong> Nombre de la pista </strong> <li>${discos[i].Pistas[j].Nombre}</li>`;
            html += discos[i].Pistas[j].duracionPista >= 180 ? `<strong> Duración de la pista </strong> <li style="color:red;">${discos[i].Pistas[j].duracionPista}</li>` : `<strong> Duración de la pista </strong> <li>${discos[i].Pistas[j].duracionPista}</li>`;
            }

        }
    
        html += "</ul></div>";
        
        document.querySelector("#listas").innerHTML = html;

        document.querySelector("#contador").innerHTML = contadorDiscos;

}


// FUNCIONES COMPLEMENTARIAS

// VALIDACIÓN DE DATOS - CODIGO NUMÉRICO

function IngresarCodigo(){
    numeroCodigo = Number(prompt("Ingrese el CÓDIGO NUMÉRICO"))

    for(let h = 0; h < discos.length; h++)
        while((isNaN(numeroCodigo)) || ((numeroCodigo < 1) || (numeroCodigo > 999)) || (numeroCodigo == discos[h].Codigo)){

            if(isNaN(numeroCodigo)){
                alert("La duración del CÓDIGO NUMÉRICO debe estar escrita en NÚMEROS. Ingrese un valor numérico.");

                }if(((numeroCodigo < 1) || (numeroCodigo > 999))){
                    alert("CÓDIGO NUMÉRICO incorrecto, por favor ingrese un número que NO sea menor a 1 y NO sea mayor a 999");

                    }if(numeroCodigo == discos[h].Codigo){
                        alert("Este codigo ya existe");}

        numeroCodigo = Number(prompt("Ingrese el CÓDIGO NUMÉRICO"));}

}
  

// FUNCIÓN PARA VALIDAR CAMPOS VACIOS 

 function IngresarDuracionPista(){
     duracionPista = Number(prompt("Ingrese la DURACIÓN de la pista"));

     while(((isNaN(duracionPista))) || (duracionPista > 7200)){

         if((isNaN(duracionPista))){
             alert("La duración de la PISTA debe estar escrita en NÚMEROS. Ingrese un valor numérico.");

            }if((duracionPista > 7200)){
             alert("DURACIÓN de la PISTA no permitida. Por favor ingrese un NÚMERO en el rango de 0 a 7200 segundos");}

         duracionPista = Number(prompt("Ingrese la DURACIÓN de la pista"));

         }
 }
