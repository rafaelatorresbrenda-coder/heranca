import { Cliente } from "./models/Cliente.js";
import { Logista } from "./models/Logista.js";

const c1 = new Cliente(1, "vander@gmail.com", "123abc", "Vander Martins", "123890")
console.log(c1.login());
c1.info();

const e1 = new Logista(1, "inovatech@gmail.com", "123abc", "InovaTech", "54321")
console.log(e1.login())
e1.infoLogista()