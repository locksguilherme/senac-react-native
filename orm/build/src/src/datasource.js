"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var venda_1 = require("./entity/venda");
var cliente_1 = require("./entity/cliente");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [venda_1.Venda, cliente_1.cliente],
    synchronize: true,
    logging: false,
});
exports.default = dataSource;
