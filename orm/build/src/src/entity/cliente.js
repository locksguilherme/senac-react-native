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
exports.cliente = void 0;
var typeorm_1 = require("typeorm");
var venda_1 = require("./venda");
var cliente = /** @class */ (function () {
    function cliente() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], cliente.prototype, "idcliente", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], cliente.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], cliente.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], cliente.prototype, "fone", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return venda_1.Venda; }, function (venda) { return venda.idcliente; }),
        __metadata("design:type", Array)
    ], cliente.prototype, "vendas", void 0);
    cliente = __decorate([
        (0, typeorm_1.Entity)("cliente")
    ], cliente);
    return cliente;
}());
exports.cliente = cliente;
