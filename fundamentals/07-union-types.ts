
console.log("\n");

// UNION TYPES
// ===========

let uniqueIdentifier: number | string = 1000;

uniqueIdentifier = "201e72bb-49e3-40ef-8331-b7f3e7d947f8";

// Para utilizar union types em um array de number ou strings

const keys: (number | string) [] = [1000, "Hello"];

// Boa prática de tipar uma variável que não é obrigatória mas 
// precisa de um tipo específico ao ser preenchida
let courseId: number | null = 1000;

courseId = null;

console.log("UNION TYPES");
console.log(courseId);
