let subjects = ["Mi perro",
    "El gato",
    "Mi hermano",
    "El vecino",
    "El cartero",
    "Mi abuela",
    "Mi gato aristócrata",
    "El mayordomo del castillo",
    "La vizcondesa del tercer piso",
    "Un violinista de Viena",
    "El relojero del palacio real",
    "Mi primo",
    "El pájaro",
    "El ratón",
    "El niño del vecino",
    "La lluvia","Un extraterrestre",
    "Mi sombra",
    "Un unicornio invisible",
    "El autobús espacial",
    "Mi planta carnívora",
    "Una versión futura de mí",
    "El ratón volador",
    "El Wi-Fi",
    "La manzana de Newton",
    "Dora la Exploradora",
    "El agujero negro de Einstein",
    "El espía de KGB",
    "Putin",
    "Mi gato interdimensional",
    "El espíritu de mi abuela",
    "Un ninja invisible",
    "El vizconde de Hertfordshire",
    "La condesa de Pembroke",
    "El duque de Montagu",
    "La marquesa de Vauxhall",
    "El barón de Waverley",
    "La princesa de Gales",
    "El conde de Sutherland",
    "La señora Rosalie Kensington",
    "El embajador de los Países Bajos",
    "La duquesa de Clydesdale",
    "El príncipe regente",
    "La baronesa de Windermere",
    "El eco",
"Un dragón que perdió sus alas",
    "El sofá del futuro",
    "Un robot confundido",
    "El último dodo",
    "El sol en su día libre",
    "Mi sombra que se rebeló",
    "El presidente de los pájaros",
    "El pollo interdimensional",
    "Un espía de Marte",
    "El Wi-Fi consciente",
    "Un fantasma con amnesia",
    "El T-Rex que se pasó de moda"];

let acciones = ["se comió", "tiró","perdió", "escondió","rompió",
    "lanzó","atrapó a", "pintó","borró","escribió mal","ocultó","destruyó", "se metió en una dimensión paralela con",
    "se teletransportó al futuro",
    "se convirtió en un agujero negro",
    "me lanzó un hechizo de",
    "me lanzó un rayo láser de",
    "me invadió un ejército de hormigas mutantes con ayuda de",
    "me dio un golpe en la cabeza con un meteoro y",
    "me absorbió la mente con",
    "me secuestró un ejército de clones al servicio de",
    "me dejó atrapado en un bucle temporal por culpa de",
    "me robó el alma para un experimento de",
    "me envió a Marte con ayuda de","se transformó en un platillo volador e hizo un aterrizaje forzoso en",
    "me desafió a un duelo de baile con",
    "me regaló un agujero negro para mi cumpleaños de",
    "me convirtió en una pelota de ping pong con",
    "me pintó una cebra en el ojo con",
    "me envió un mensaje desde 3025 con ayuda de",
    "me sacó un selfie con el fin del mundo",
    "se olvidó de cómo caminar y comenzó a flotar",
    "me usó como control remoto",
    "me metió en una máquina del tiempo y me dejó en el 1500",
    "me secuestró para un tour por la luna",
    "me abrazó y me hizo desaparecer en",
    "se desmayó tras un duelo de esgrima por culpa de",
    "se olvidó de asistir a la gala por estar afinando su violín Stradivarius",
    "se retiró a su biblioteca secreta a leer los escritos de Voltaire",
    "me pidió un favor mientras tomaba té con la reina encima de",
    "se embarcó en una expedición a las Indias Orientales",
    "se deshizo de su monóculo tras una broma inapropiada",
    "se pasó la tarde en su invernadero cultivando rosas blancas",
    "me desafió a una partida de ajedrez a ciegas para demostrar su inteligencia a",
    "me pidió prestado un sombrero de copa alta para una fiesta benéfica",
    "se escapó con un retrato de la corte de Versalles",
    "se enredó con un espadón en una batalla de estilo en el jardín",
    "se despidió de mí con un lazo de seda mientras subía a su carruaje junto a",
    ];   
let objetos = [
        "mis deberes",
        "la computadora",
        "mi tarea",
        "el teléfono",
        "mi cuaderno",
        "la consola de videojuegos",
        "un reloj de bolsillo de oro macizo",
    "un retrato de la reina Victoria",
    "un cuaderno de notas de cuero con iniciales doradas",
    "una copa de cristal de Bohemia",
    "un mapa antiguo de las Américas",
    "una silla de rococó importada de París",
    "un candelabro de cristal tallado",
    "un jarrón Ming que me regaló un embajador",
    "un collar de perlas que perteneció a la emperatriz de Austria",
    "un bastón con empuñadura de marfil",
    "una pluma de cisne para escribir cartas",
    "un frasco de perfume de la corte francesa",
        "el café",
        "la mesa",
        "mi zapato",
        "el coche",
        "mi mochila",
        "el reloj","un cono de helado gigante",
    "un libro de hechizos olvidado",
    "un espejo encantado",
    "un sombrero volador",
    "un cubo de Rubik dimensional",
    "un arco iris de chocolate",
    "un dispositivo de viaje en el tiempo",
    "un zapato con alas",
    "una pluma de fénix",
    "una camiseta que no existe",
    "una pizza que cantaba",
    "un portal a otro mundo","un tazón de sopa que canta ópera",
    "un portal de pizza interdimensional",
    "un disco volador que se cayó del cielo",
    "un pepino con poderes psíquicos",
    "un paraguas que predice el futuro",
    "una patineta flotante con wifi",
    "una medusa que toma fotos",
    "un reloj que avisa el fin del mundo, pero siempre llega tarde",
    "un pato con un mapa del multiverso",
    "una camiseta que hace telequinesis",
    "un camión que vende estrellas",
    "un chicle que sabe los secretos del universo"
    ];

function generarExcusa() {
    const excusa = document.getElementById('excusa');
    const sujeto = subjects[Math.floor(Math.random() * subjects.length)];
    const accion = acciones[Math.floor(Math.random() * acciones.length)];
    const objeto = objetos[Math.floor(Math.random() * objetos.length)];

    const resultado = `${sujeto} ${accion} ${objeto}.`;

    if (resultado) {
        excusa.textContent = resultado;
        excusa.style.display = 'block'; // Mostrar el párrafo cuando tenga texto
    }
}

function añadirExcusa() {
    const nuevoSujeto = document.getElementById("sujeto").value;
    const nuevaAccion = document.getElementById("accion").value;
    const nuevoObjeto = document.getElementById("objeto").value;

    if (nuevoSujeto && nuevaAccion && nuevoObjeto) { // Corregir validación
        subjects.push(nuevoSujeto);
        acciones.push(nuevaAccion);
        objetos.push(nuevoObjeto);

        document.getElementById("sujeto").value = "";
        document.getElementById("accion").value = "";
        document.getElementById("objeto").value = "";

        alert("¡Excusa añadida con éxito!");
    } else {
        alert("Por favor, completa todos los campos.");
    }
}