/* CARTAS PLACEHOLDER */
const placeholderContainer = document.getElementById("cartas"); // Contenedor de las cartas y placeholders

function mostrarPlaceholders() {
    const placeholders = [];
    for (let i = 0; i < 6; i++) {
        placeholders.push(`
        <div class="card m-3 col-sm-5 col-md-4 placeholder-card">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder">
                <div class="card-body">
                        <p class="card-text placeholder-glow">
                        <span class="placeholder4"></span>
                    </p>
                </div>
         </div>
        `);
    }
    /* Llamar la función */
    placeholderContainer.innerHTML = placeholders.join(""); // Mostrar placeholders
    placeholderContainer.style.display = "flex"; // Asegurarse de que se vea

    // Ocultar automáticamente después de unos segundos (en caso de que no llegue la API aún)
    setTimeout(() => {
        placeholderContainer.innerHTML = "";
    }, 5000); // 5 segundos
}

/* FUNCION PARA OBTENER DATOS */
async function getData() {
    try {
        mostrarPlaceholders(); // Mostrar los placeholders mientras llegan los datos

        const res = await fetch("https://reqres.in/api/users?delay=3&page=2");
        const profile = await res.json();

        // Limpiar los placeholders al recibir los datos reales
        placeholderContainer.innerHTML = "";
        placeholderContainer.style.display = "none"; // Ocultar contenedor

        profile.data.forEach(element => {
            // Crear tarjeta con datos reales
            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.src = element.avatar; // Imagen del usuario

            const titulo = document.createElement("h3");
            titulo.textContent = `${element.first_name} ${element.last_name}`;

            const emailParafo = document.createElement("p");
            emailParafo.id = 'email';
            emailParafo.textContent = `${element.email}`;

            const idParafo = document.createElement("p");
            idParafo.id = 'id';
            idParafo.textContent = `ID: ${element.id}`;
            
            // Agregar contenido a la tarjeta
            card.append(img, titulo, emailParafo, idParafo);

            const main = document.querySelector('main'); 
            main.append(card);
     });
        
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

/* Llamar la función */
getData();