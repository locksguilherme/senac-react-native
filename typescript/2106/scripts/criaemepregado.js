"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classempregado_1 = __importDefault(require("./classempregado"));
var emp1 = new classempregado_1.default('Jose', 7.89, 40);
console.log(emp1);
//console.log(emp1.calcularSalario())
console.log(emp1.imprimeDados());
