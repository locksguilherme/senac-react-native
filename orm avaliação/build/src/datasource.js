"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var categoria_1 = require("./entity/categoria");
var photo_1 = require("./entity/photo");
var produto_1 = require("./entity/produto");
var profile_1 = require("./entity/profile");
var User_1 = require("./entity/User");
var usuario_1 = require("./entity/usuario");
var questoes_1 = require("./entity/questoes");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [User_1.User, profile_1.Profile, categoria_1.Categoria, produto_1.Produto, photo_1.Photo, usuario_1.Usuario, questoes_1.Question],
    synchronize: true,
    logging: false,
});
exports.default = dataSource;
