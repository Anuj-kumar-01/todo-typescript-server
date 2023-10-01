"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3200;
const http_status_codes_1 = require("http-status-codes");
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
