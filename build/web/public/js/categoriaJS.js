/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//alert('hola');

var v, v1;

function capturar(){
    v = document.getElementById('name').value;
    v1 = document.getElementById('name1').value;
    
    alert(v);
    alert(v1);
}

function construirJSON(){
    datos = {
        nombre  : document.getElementById('name').value,
        nombre1 : document.getElementById('name1').value 
    };
}