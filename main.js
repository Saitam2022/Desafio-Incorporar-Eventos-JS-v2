class producto {
    constructor(nombre, descripcion, unidades, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.unidades = unidades;
        this.precio = precio;
    }
}

//VARIABLES GLOBALES

let arrayProductos = [];
let formulario = document.querySelector("#formulario_producto");
let inputNombre = document.querySelector("#form_nombre");

let nombreI = formulario_producto.children[1].value;
let descripcionI = formulario_producto.children[3].value;
let unidadesI = parseInt(formulario_producto.children[5].value);
let precioI = parseInt(formulario_producto.children[7].value);

let contenedor = document.querySelector("#productoIngresado");
let mostrarTodos = document.querySelector("#mostrarTodos");
let parrafos = mostrarTodos.getElementsByTagName("p");
let bandera = false;

//EVENTOS BOTONES

formulario.addEventListener('submit', agregarProductos);
btnMostrar.addEventListener('click', MostrarTodosProductos);

//FOCUS PRIMER INPUT

inputNombre.focus();

//FUNCIONES

//COMPROBAR INGRESO DE DATOS EN INPUTS

function validarForm() {
    nombreI = formulario.children[1].value;
    descripcionI = formulario_producto.children[3].value;
    unidadesI = parseInt(formulario_producto.children[5].value);
    precioI = parseInt(formulario_producto.children[7].value);

    console.log(nombreI);
    console.log(descripcionI);
    console.log(unidadesI);
    console.log(precioI);

    if (nombreI == "" || descripcionI == "" || unidadesI == "" || precioI == "") {
        alert("Error - Debe ingresar todos los campos para continuar");
        inputNombre.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

//ULTIMO OBJETO AGREGADO

function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Último producto ingresado: </h3>
    <p><strong> Nombre: </strong> ${nombreI}</p>
    <p><strong> Descripcion: </strong> ${descripcionI}</p>
    <p><strong> Cantidad: </strong> ${unidadesI}</p>
    <p><strong> Precio: </strong> ${precioI}</p>
    <hr>`;
}

// AGREGAR PRODUCTOS AL ARRAY

function agregarProductos(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = confirm("Desea agregar el producto?");
        if (opcion == true) {
            let formulario = e.target
            arrayProductos.push(new producto(nombreI, descripcionI, unidadesI, precioI));
        } else {
            alert("No se agregará el producto")
        }
        formulario_producto.children[1].value = "";
        formulario_producto.children[3].value = "";
        formulario_producto.children[5].value = "";
        formulario_producto.children[7].value = "";
        contenedor.innerHTML = "";
        AgregarAlDom();
        inputNombre.focus();
    } else {
        inputNombre.focus();
    }
}

// MOSTRAR TODOS LOS PRODUCTOS EN DOM

function MostrarTodosProductos(e) {
    e.preventDefault();
    let i = 0;
    mostrarTodos.innerHTML = "<h3> Listado de todos los Productos:</h3>";
    for (const producto of arrayProductos) {
        mostrarTodos.innerHTML += `
        <p><strong>Nombre: </strong> ${producto.nombre}</p>
        <p><strong>Descripcion: </strong> ${producto.descripcion}</p>
        <p><strong>Cantidad: </strong> ${producto.unidades}</p>
        <p><strong>Precio: </strong> ${producto.precio}</p>
        <hr>`;
    }
}