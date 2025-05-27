import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const isAuthenticated = true; // Replace with actual logic
  if (!isAuthenticated) return res.status(401).json({ error: "Unauthorized" });
  next();
};
