const displayValorAnterior = document.querySelector(".valor-anterior");
const displayValorActual = document.querySelector(".valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
class Calculadora{
    sumar(a,b){
        return a+b;
    }
    restar(a,b){
        return a-b;
    }
    multiplicar(a,b){
        return a*b;
    }
    dividir(a,b){
        return a/b;
    }
}