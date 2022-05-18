window.addEventListener('DOMContentLoaded',  () => {

    class Tareas {
        constructor(nombre, fecha) {
            this.nombre = prompt('Nombre to do');
            this.fecha = prompt('Fecha');
            this.eliminar = false;

        }

    }

    
    let tareasArray = [];
    let agregar = document.getElementById('agregar');

    function nuevo(nombre, fecha) {

 
            tareasArray.push(new Tareas(nombre, fecha));
            
            for (tarea of tareasArray) {
                let tareasTemplate = `
                <li class="tarea">
                    <p class="tarea_nombre">${tarea.nombre}</p>
                    <p class="tarea_fecha">${tarea.fecha}</p>
                    <p class="tarea_eliminar">Eliminar</p>
            
                </li>
                
                `
                document.getElementById('tareas').innerHTML += tareasTemplate;
                console.log(tarreasArray.length);
            }
      
    }   
    agregar.addEventListener('click', nuevo);
})
