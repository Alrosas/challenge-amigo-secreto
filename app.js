// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  // Obtener el valor del campo de texto usando getElementById
  const nombre = document.getElementById("amigo").value.trim(); // .trim() elimina los espacios en blanco

  // Validar si el campo está vacío
  if (nombre === "") {
    // Si está vacío, mostrar un mensaje de error
    alert("Por favor, inserte un nombre.");
  } else {
    // Si no está vacío, agregar el nombre al array de amigos
    amigos.push(nombre);

    // Mostrar el array de amigos en la lista HTML
    mostrarAmigos();

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
  }
}

// Función para mostrar los amigos en el HTML
function mostrarAmigos() {
  // Obtener el elemento <ul> donde se mostrarán los amigos
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de agregar los nuevos amigos (en caso de que ya haya elementos)
  lista.innerHTML = "";

  // Recorrer el array de amigos y agregar cada uno como un <li>
  amigos.forEach(function (amigo) {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// seleccione de manera aleatoria uno de los nombres almacenados en el array

// Función para sortear un amigo aleatorio
function sortearAmigo() {
  // Comprobar si el array de amigos no está vacío
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear.");
    return; // Salir si no hay amigos
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre del amigo sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en un elemento HTML
  document.getElementById(
    "resultado"
  ).innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

  // Limpiar la lista de amigos después del sorteo
  amigos = []; // Limpiar el array de amigos

  // Limpiar la lista en el HTML
  mostrarAmigos();
}

// Llamar a la función para hacer el sorteo
sortearAmigo();
