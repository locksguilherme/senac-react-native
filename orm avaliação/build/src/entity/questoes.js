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
exports.Question = void 0;
var typeorm_1 = require("typeorm");
var categoria_1 = require("./categoria");
var Question = /** @class */ (function () {
    function Question() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Question.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Question.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Question.prototype, "text", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return categoria_1.Categoria; }),
        (0, typeorm_1.JoinTable)({ name: 'categoria_questao',
            joinColumn: {
                name: "questao_id",
                referencedColumnName: "id"
            },
            inverseJoinColumn: {
                name: "categoria_id",
                referencedColumnName: "id"
            } }),
        __metadata("design:type", Array)
    ], Question.prototype, "categorias", void 0);
    Question = __decorate([
        (0, typeorm_1.Entity)()
    ], Question);
    return Question;
}());
exports.Question = Question;
