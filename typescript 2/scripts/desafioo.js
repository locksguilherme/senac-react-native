"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const desfio_1 = __importDefault(require("./desfio"));
let p1 = new desfio_1.default(1, 'Jonas', '57774', 'jonas@gamil.com', 50, 1.55);
p1.imc();
p1.imprimir();
let p2 = new desfio_1.default(2, 'Giovana', '45454564', 'jooj@gmail.com', 75, 1.88);
p2.imc();
p2.imprimir();
