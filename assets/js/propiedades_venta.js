const propiedades_venta = [
  {
    nombre: "Casa 1",
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa 1",
    ubicacion: "Ubicacion 1",
    habitaciones: 1,
    costo: 15000,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Casa 3",
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa 3",
    ubicacion: "Ubicacion 3",
    habitaciones: 3,
    costo: 30000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa 2",
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa 2",
    ubicacion: "Ubicacion 2",
    habitaciones: 2,
    costo: 20000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa 4",
    src: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa 4",
    ubicacion: "Ubicacion 4",
    habitaciones: 4,
    costo: 40000,
    smoke: false,
    pets: false,
  },
];

const contenedor = document.querySelector("#ventaContainer");

let template = "";

for (propiedad of propiedades_venta) {
  template += `
  <div  class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedad.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                 ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    propiedad.habitaciones
                  } Habitaciones |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="text-${
                  propiedad.smoke == true ? "success" : "danger"
                }">
                  <i class="fas fa-smoking-ban"></i> ${
                    propiedad.smoke == true
                      ? "Se permite fumar"
                      : "No se permite fumar"
                  }
                </p>
                <p class="text-${
                  propiedad.pets == true ? "success" : "danger"
                }">
                  <i class="fa-solid fa-ban"></i> ${
                    propiedad.pets == true
                      ? "Se permiten mascotas"
                      : "No se permiten mascotas"
                  }
                </p>
              </div>
            </div>
            </div>
            `;
}

console.log(template);

contenedor.innerHTML = template;
