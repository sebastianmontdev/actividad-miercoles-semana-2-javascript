
const fullName = prompt("Ingrese su nombre completo:");
const ageInput = parseInt(prompt("Ingrese su edad:"));
const roleInput = prompt("Ingrese su rol (Coder / Tutor / Visitor):").toLowerCase();
const rulesInput = prompt("¿Acepta las reglas del lab? (yes / no):").toLowerCase();
const hoursInput = parseInt(prompt("¿Cuántas horas tiene disponibles hoy? (1-12):"));

const user = {
    name: fullName,
    age: ageInput,
    role: roleInput,
    acceptedRules: rulesInput === "yes",
    hoursAvailable: hoursInput
};

alert("SISTEMA: Procesando el check-in de " + user.name + "...");

const isAdult = (age) => age >= 18;

const isValidRole = (role) => ["coder", "tutor", "visitor"].includes(role);

const calculateRiskScore = (userData) => {
    let score = 0;
    
    if (userData.hoursAvailable < 2) score += 1;
    if (userData.role === "visitor") score += 1;
    if (userData.age >= 18 && userData.age <= 20) score += 1;

    if (userData.role === "coder" && userData.hoursAvailable >= 4) score -= 1;

    return Math.max(0, score);
};

const systemSteps = ["Validando datos", "Calculando risk score", "Generando decisión final"];

console.log("--- INICIANDO PROCESO DE VALIDACIÓN ---");
for (let i = 0; i < systemSteps.length; i++) {
    console.log(`Paso ${i + 1}: ${systemSteps[i]}...`);
}

const riskScore = calculateRiskScore(user);
let finalDecision = "";
let reason = "";

if (!isAdult(user.age) || !user.acceptedRules || !isValidRole(user.role)) {
    finalDecision = "DENY";
    reason = "No cumple con los requisitos básicos (edad, reglas o rol inválido).";
} else if (riskScore >= 2) {
    finalDecision = "REVIEW";
    reason = "Cumple requisitos, pero el puntaje de riesgo es elevado.";
} else {
    finalDecision = "ALLOW";
    reason = "Acceso concedido exitosamente.";
}

console.log("Objeto de Usuario:", user);
console.log("Risk Score:", riskScore);
console.log("Decisión Final:", finalDecision);

if (finalDecision === "DENY") {
    alert(`ACCESO DENEGADO\nRol: ${user.role}\nMotivo: ${reason}`);
} else if (finalDecision === "REVIEW") {
    alert(`ACCESO EN REVISIÓN\nRol: ${user.role}\nMotivo: ${reason}`);
} else {
    alert(`¡BIENVENIDO/A!\nHola ${user.name}, acceso permitido como ${user.role}.`);
}