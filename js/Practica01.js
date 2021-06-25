//var a=1; //variable de cualquier tipo (esta manera ya no es recomendable usar)
//String, int, boolean, float, long, char
//se setea automaticamente
//let b=2; //variable de cualquier tipo
// se espera a que concluya la petición o el proceso que este por encima para setearse
//const c=3;//eclaración de constantes
//las constantes no pueden cambiar su valor


// template -- plantillas
/*const createUser =() =>{
    fetch('http://localhost:8080/createUser').then(Response =>{
        var respuesta = Response;
    }).catch(error=>{

    })
}

console.log(suma(1,2));
console.log("Hola");

const rename =function(type){
    if(type === 'Marvel'){
        return 'IRON MAN';
    }else{
        return 'BATMAN';
    }
}

const bestTeam =(team)=>{
    switch (team) {
        case 'barcelona':
            return `Tu equipo es ${team} felicidades es buen equipo`
            break; 
        case 'real madrid':
            return `Tu equipo es ${team} felicidades es mal equipo`
            break;   
        default:
            return `No encontramos a tu equipo`
    }
}

console.log(besTeam('barcelona'));
console.log(rename('Marvelss'));

//javascrip antiguo
const completename=(name, surname)=>{
    return "Tu nombre completo es: " + name+ " " + surname; //name y surname NO son variables son parametros
}
console.log(completename('Thayli','Villegas'));

//javascrip moderno
const completename =(name, surname)=> `Tu nombre completo es : ${name} ${surname}`;*/



const suma = function (num1, num2){
   let respuesta = num1+num2;
   return `La suma ` +num1+ `+`+num2+ ` es de:` +respuesta;
};
console.log(suma(5,9));
const resta = function (num1, num2){
    let respuesta =num1-num2;
    return `La resta ` +num1+ `-`+num2+ ` es de:` +respuesta;
};
console.log(resta(25,5));

const multi = function (num1, num2){
    let respuesta =num1*num2;
    return `La multiplicacion ` +num1+ `*`+num2+ ` es de:` +respuesta;
};
console.log(multi(5,8));

const div = function (num1, num2){
    let respuesta =num1/num2;
    return `La division ` +num1+ `/`+num2+ ` es de:` +respuesta;
};
console.log(div(100,8));

const thousanStop = (number) => {
    for (let i = number; i <= 1000; i = i*number) {
        console.log(`${i} * ${number} = ${i * number}`);
    }
    console.log("Hemos llegado al 1000");
} 
console.log(thousanStop(5));