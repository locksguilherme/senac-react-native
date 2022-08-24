"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
var typeorm_1 = require("typeorm");
var cliente_1 = require("./cliente");
var Venda = /** @class */ (function () {
    function Venda() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Venda.prototype, "idvenda", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Venda.prototype, "url", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return cliente_1.cliente; }, function (cliente) { return cliente.vendas; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_cliente' }),
        __metadata("design:type", cliente_1.cliente)
    ], Venda.prototype, "idcliente", void 0);
    Venda = __decorate([
        (0, typeorm_1.Entity)()
    ], Venda);
    return Venda;
}());
exports.Venda = Venda;
