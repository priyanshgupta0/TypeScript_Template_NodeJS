"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    const isAuthenticated = true; // Replace with actual logic
    if (!isAuthenticated)
        return res.status(401).json({ error: "Unauthorized" });
    next();
};
