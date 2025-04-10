/*🟣 MÓDULOS DE JS (ESModules)
ex11. Módulo de utilidades matemáticas (import/export básico)
Crea mathUtils.js con las funciones exportadas:

export function suma(a, b) { return a + b; }
export function multiplica(a, b) { return a * b; }
En main.js , importa ambas funciones y muestra:
3 + 4 = 7
3 × 4 = 12*/

import { suma, multiplica } from "./mathUtils.js";

console.log(`3 + 4 = ${suma(3, 4)}`);
console.log(`3 × 4 = ${multiplica(3, 4)}`);
