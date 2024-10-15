async function getData() {
    try {
        const res = await fetch("https://reqres.in/api/users?delay=3&page=1")
        console.log(res)
        /* Convertitr la informacion a un json */
        const profile = await res.json() 
        console.log(profile)

        // Accedemos al arreglo de usuarios con profile.data
        profile.data.forEach(element => {
            console.log(element);

            /* Codigo para crear una tarjeta */
            const card = document.createElement('div');
            card.className = "card";

            const img = document.createElement('img');
            img.src = element.avatar; // Usamos la imagen del usuario de la API
            /* img.src     = "https://play-lh.googleusercontent.com/Vrh2igAfSTfIxC_3d2DLAe522RfUePEJ9ZpecH-S1cWe0ZUaYZQAhKU1Bdc43VseYkA" */

            const titulo = document.createElement('h3');
            titulo.textContent = `${element.first_name} ${element.last_name}`;

            // Crear párrafo para el email
            const emailParafo = document.createElement('p');
            emailParafo.id = 'email';
            emailParafo.textContent = `${element.email}`;
  
            // Crear párrafo para el ID
            const idParafo = document.createElement('p');
            idParafo.id = 'id';
            idParafo.textContent = `ID: ${element.id}`;

            // Asegúrate de que los elementos se añaden correctamente
            card.append(img, titulo, emailParafo, idParafo);

            // Agregar la tarjeta al contenedor principal (main)
            const main = document.querySelector('main'); // Asegúrate de que exista un <main> en tu HTML
            main.append(card);
     });
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

export function getData() {
}

getData();

