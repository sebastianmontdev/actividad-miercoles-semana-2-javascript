const nombre = prompt('nombre');
const edad = prompt('edad');
const rol = prompt('rol');
const enMinusculas = rol.toLowerCase();
const aceptacion = prompt('acepta? s/n');
const horas = prompt('cantidad de horas');
alert('procesando el check-in');

const usuario = {
    nombre: nombre,
    edad:edad,
    rol: rol,
    aceptacion: aceptacion,
    horas: horas
}

let respuestaLimpia = aceptacion.trim().toLowerCase();
let esSi = (respuestaLimpia === "s" || respuestaLimpia === "si");
console.log(esSi);

function esMenorDeEdad(edad) {
    return Number(edad) < 18;
}

function esRolValido(rol) {
    const rolesPermitidos = ['coder', 'tutor', 'visitor'];
    const rolLimpio = rol.trim().toLowerCase();
    return rolesPermitidos.includes(rolLimpio);
}

const resultado = esMenorDeEdad(usuario.edad);

if (resultado) {
    console.log(`${usuario.nombre} es menor de edad.`);
} else {
    console.log(`${usuario.nombre} es mayor de edad.`);
}

const tieneAcceso = esRolValido(usuario.rol);

if (tieneAcceso) {
    console.log(`✅ Bienvenida ${usuario.nombre}. El rol [${usuario.rol.trim()}] es válido.`);
} else {
    console.error(`❌ Error: El rol [${usuario.rol}] no está permitido en el sistema.`);
}
