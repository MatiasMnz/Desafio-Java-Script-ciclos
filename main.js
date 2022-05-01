alert("Bienvenido a mi desafio interactivo ¿ seras capaz de superarlo ?");
alert("Soy el malvado villano de esta historia y vos caiste en mi trampa sin embargo voy a darte una oportunidad si logras adivinar en que numero estoy pensando del 1 al 10 lograras salir de aqui , si no , nunca lograras escapar")
let entrada = prompt("ingresa un numero del 1 al 10");
while(entrada != "8") {
    switch (entrada) {
        case "1":
            alert("Mejor voy preparando cafe");
            break;
            case "2":
            alert("¿Cubo o Cuadrado?");
            break;
            case "3":
            alert("WUAJAJAJAJAJ equivocado mi estimado");
            break;
            case "4":
            alert("Si fuera tu me rendiria , ¿sera que no hay salida?");
            break;
            case "5":
            alert("Nunca tendrias la capacidad de adivinar el numero ¿ de igual manera seguiras?");
            break;
            case "6":
            alert("IMPRECIONANTE pero no");
            break;
            case "7":
            alert("¿Que numero de intento tenes ya?");
            break;
            case "8":
            
            break;
            case "9":
            alert("Buena eleccion pero es la incorrecta , ¿ listo para rendirte?");
            break;
            case "10":
            alert("Una decena interesante ¿no?");
            break;
            default:
                alert("Crei haber mencionado que era del 1 al 10 , ¿Me estare volviendo loco?")
    }
    entrada = prompt("Si deseas salir de aca deberas intentarlo nuevamente")
}
alert("No puedo creer que deba dejarte ir")
alert("Felicidades por cumplir con el desafio")
