async function clima() {
    const selectCiudad = document.getElementById("select-ciudad");
    const ciudad = selectCiudad.value;
    const tarjeta = document.getElementById("tarjeta");

    if (ciudad === "defecto") {
        tarjeta.innerHTML = "";
        return;
    }

    const api_id = "e67cf67596e951596651451af6b61713";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_id}&units=metric&lang=es`;

    try {
        const response = await fetch(api_url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            const icono = data.weather[0].icon;
            const temperatura = Math.round(data.main.temp);
            const des = data.weather[0].descripcion;

            tarjeta.innerHTML = `
            <h2>Ciudad: ${ciudad}</h2> 
            <img src="https://openweathermap.org/img/wn/${icono}@2x.png"> <p><strong>Temperatura:</strong> ${temperatura}°C</p>`; 
        } else {
            tarjeta.innerHTML = "Ciudad no encontrada o error en la consulta";
        }
    } catch (err) {
        console.error("Error al consultar con la API: ", err);
        tarjeta.innerHTML = "Ocurrio un error de conexion";
    }
}
