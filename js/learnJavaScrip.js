const formContact =() =>{
    let name= document.getElementById("name").value;
    let birthday =document.getElementById("birthday").value;
    let message = document.getElementById("message").value;
    alert(`Bienvenido: ${name} 
    tu fecha de nacimiento es: ${birthday}.
    Gracias por escribir este mensaje: ${message}`);
}

const viewBallBlue = () =>{
  let ballBlue = document.getElementById("ballBlue");
  let ballRed = document.getElementById("ballRed");
  ballBlue.style.display = "block";
  ballRed.style.display = "none";
}

const viewBallRed = () =>{
  let ballBlue = document.getElementById("ballBlue");
  let ballRed = document.getElementById("ballRed");
  ballBlue.style.display = "none";
  ballRed.style.display = "block";
}
/*Página de operaciones básicas*/

const suma =() =>{
    let num = document.getElementById("num").value;
    let num2 =document.getElementById("num2").value;
    let respuesta = parseInt(num) + parseInt (num2);
    alert(`La suma : ${num} + ${num2} es de : ${respuesta}`);
}

const resta =() =>{
    let num3 = document.getElementById("num3").value;
    let num4 =document.getElementById("num4").value;
    let respuesta = parseInt(num3) - parseInt (num4);
    alert(`La resta : ${num3} - ${num4} es de : ${respuesta}`);
}

const multiplicacion =() =>{
    let num5 = document.getElementById("num5").value;
    let num6 =document.getElementById("num6").value;
    let respuesta = parseInt(num5) * parseInt (num6);
    alert(`La multiplicación : ${num5} * ${num6} es de : ${respuesta}`);
}

const division =() =>{
    let num7 = document.getElementById("num7").value;
    let num8 =document.getElementById("num8").value;
    let respuesta = parseInt(num7) / parseInt (num8);
    alert(`La división : ${num7} / ${num8} es de : ${respuesta}`);
}

/*Página de operaciones básicas con alert de bootstrap*/
/*
const suma2 =() =>{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let respuesta = num1+num2;
    document.getElementById('resultado1').innerHTML= respuesta;
    viewSuma.style.display = "block";
}

const resta2 =() =>{
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let respuesta = num3-num4;
    document.getElementById('resultado2').innerHTML= respuesta;
    viewResta.style.display = "block";
}

const multiplicacion2 =() =>{
    let num5 = parseInt(document.getElementById("num5").value);
    let num6 = parseInt(document.getElementById("num6").value);
    let respuesta = num5*num6;
    document.getElementById('resultado3').innerHTML= respuesta;
    viewMulti.style.display = "block";
}

const division2 =() =>{
    let num7 = parseInt(document.getElementById("num7").value);
    let num8 = parseInt(document.getElementById("num8").value);
    let respuesta = num7/num8;
    document.getElementById('resultado4').innerHTML= respuesta;
    viewDiv.style.display = "block";
}
*/
/*

let miPrimeraPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("¡Éxito!"); // ¡Todo salió bien!
    }, 250);
  });
  
  miPrimeraPromise.then((successMessage) => {
    console.log("¡Sí! " + successMessage);
  });*/

/*
  fetch('https://randomuser.me/api/?results=10')
  .then( response => {
    if(response.status == 200) {
      return response.text();
    } else {
      throw "Respuesta incorrecta del servidor" 
    }
  })
  .then( responseText => {
    let users = JSON.parse(responseText).results;
    console.log('Este es el objeto de usuarios', users);
  })
  .catch( err => {
    console.log(err);
  });*/


