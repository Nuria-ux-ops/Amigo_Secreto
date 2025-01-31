//Almacena los nombres de los amigos ingresados:
let amigos = [];

//Capturar el valor del campo de entrada
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
//Validar la entrada:
if(nombreDeAmigo === '') {
    alert('Por favor, inserte un nombre.');
} else {
    //Actualizar el array de amigos:
    amigos.push(nombreDeAmigo);
    //Limpia el campo de entrada
    document.getElementById('amigo').value = ''; 
    
    // Actualizar la lista en el HTML
    actualizarLista();
    }
}

// Función para limpiar y actualizar la lista
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";
    // Iterar sobre el arreglo con un bucle for
    for (let i = 0; i < amigos.length; i++) { 
    // Agregar elementos a la lista
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}
// función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos.
function sortearAmigoSecreto() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
