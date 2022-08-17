"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var usuarios_1 = require("./usuarios");
var app = express();
app.use(express.json());
app.use('/user', usuarios_1.default);
var PORT = process.env.PORT;
app.listen(PORT, function () { console.log("executando em http://localhost:".concat(PORT)); });
