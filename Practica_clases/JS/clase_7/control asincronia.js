async function clima(ciudad) {
    if (ciudad !== "") {
        const api_id = "a49f2089297d7216a6e25354544799ce";
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_id}&units=metric&lang=es`;

        try {
            const response = await fetch(api_url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                tarjetas.innerHTML = `${data.name}
                    <img src="https://openweathermap.org/img/wn/${icono}@2x.png">
                    <p>Temperatura: ${data.main.temp}°C</p>
                `;
            } else {
                tarjetas.innerHTML = "Ciudad no encontrada o error en la consulta.";
            }
            
        } catch (err) {
            console.error("Error al conectar con la API:", err);
            tarjetas.innerHTML = "Ocurrió un error de conexión.";
        }
    }
}