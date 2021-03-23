"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load .env file
dotenv_1.default.config();
const auth_1 = __importDefault(require("./api/auth"));
const graph_1 = __importDefault(require("./api/graph"));
const app = express_1.default();
const PORT = 3000;
// Support JSON payloads
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'addin')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist/addin')));
app.use('/auth', auth_1.default);
app.use('/graph', graph_1.default);
const serverOptions = {
    key: fs_1.default.readFileSync(process.env.TLS_KEY_PATH),
    cert: fs_1.default.readFileSync(process.env.TLS_CERT_PATH),
};
https_1.default.createServer(serverOptions, app).listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
