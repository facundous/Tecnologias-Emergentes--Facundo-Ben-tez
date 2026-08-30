const cargar = document.getElementById("cargarGatos");
const galeria = document.getElementById("galeria");

cargar.addEventListener("click", cargarGatos);

async function cargarGatos(params) {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    
    galeria.innerHTML = "";
    datos.forEach(gato => {
        const img = document.createElement("img");
        img.src = gato.url;
        galeria.appendChild(img);
        
    });

    
}