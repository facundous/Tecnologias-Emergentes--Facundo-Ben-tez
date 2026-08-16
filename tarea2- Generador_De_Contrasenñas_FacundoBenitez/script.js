const contrasenha = document.querySelector('#claves')
const input = document.querySelector('#rango')
const mayus = document.querySelector('#mayusculas')
const minus = document.querySelector('#minusculas')
const nums = document.querySelector('#numeros')
const simbols = document.querySelector('#simbolos')

function validar(){
    let str= ''
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const minusculas = 'abcdefghijklmnopqrstuvwxyz'
    const numeros = '0123456789'
    const simbolos = '!@#$%&'

    if(
        mayus.checked === false &&
        minus.checked === false &&
        nums.checked === false && 
        simbols.checked === false
    ){
        alert("Debes seleccionar al menos un campo para generar una clave");
        return;
    }
    if(mayus.checked){
        str += mayusculas;
    }
    if(minus.checked){
        str += minusculas;
    }
    if(nums.checked){
        str += numeros;
    }
    if(simbols.checked){
        str += simbolos;
    }

    generarContrasenha(str);
}
function generarContrasenha(str){
    let pass = ' ';
    const longitud = Number(input.value);
    for(let i = 0; i < longitud; i++){
        const char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }
    contrasenha.value = pass;
}