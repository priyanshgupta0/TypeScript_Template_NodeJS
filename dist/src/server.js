"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, database_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routes_1.default);
app.get("/", (_req, res) => {
    res.send("API is running...");
});
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const ipAddress = "0.0.0.0";
app.listen(PORT, ipAddress, () => console.log(`Server running on <http://localhost>:${PORT}`));
