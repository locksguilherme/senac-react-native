"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = __importDefault(require("./produtos"));
let v1 = new produtos_1.default('melão', 5, 200);
v1.preçocomacrescimo(7);
v1.preçocomdesconto(14);
v1.imprimirdados();
