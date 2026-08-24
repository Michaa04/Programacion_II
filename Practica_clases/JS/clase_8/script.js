const salidaEL = document.getElementById("salida");

const salida = (mensaje) => {
    if (salidaEL) {
        salidaEL.textContent = JSON.stringify(mensaje, null, 2);
    }
}; 

//Conexion a la base de datos 
const db = await new Promise ((resolve,reject) => {
        const requests = indexedDB.open("producto", 2);
        requests.onupgradeneeded = () => {
            requests.result.createObjectStore("producto", {keyPath: "id", autoIncrement:true,});}
            requests.onsuccess = () => resolve(requests.result);
            requests.onerror = () => reject(requests.error);
    });

const store = (modo) => 
    db.transaction("producto", modo).objectStore("producto");

// Poder insertar o actualizar 
const put = (producto) =>
    new Promise((resolve, reject) => {
        const requests = store("readwrite").put (producto);
        requests.onsuccess = () => resolve(requests.result);
        requests.onerror = () => reject(requests.error);
    })

// Obtener todos 
const getAll = () =>
    new Promise((resolve, reject) => {
        const requests = store("readonly").getAll();
        requests.onsuccess = () => resolve(requests.result);
        requests.onerror = () => reject(requests.error);
    }); 

// Eliminar producto
const remove = (id) =>
    new Promise((resolve, reject) => {
        const requests = store("readwrite").delete(id);
        requests.onsuccess = () => resolve(requests.result);
        requests.onerror = () => reject(requests.error);
})

//Agregar
 agregar.onclick = async () =>
    await put({
        nombre: nombre.value,
        precio: +precio.value, // (+precio.value) Debe ser numerico el valor.
    })
//Obtener todos
obtener.onclick = async () =>
    salida(await getAll());

//Modificar
modificar.onclick = async() => {
    const id = prompt("Ingresa el ID");
    if (id) {
        await put ({
            id: +id,
            nombre: nombre.value,
            precio: +precio.value,
        });
    } 
}

//Eliminar 
eliminar.onclick = async() => {
    const id = prompt("Ingresa el ID") 
    if (id) {
        await remove(+id);
    }
}
    
