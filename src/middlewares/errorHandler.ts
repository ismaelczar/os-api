import { Request, Response, NextFunction } from "express";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { AppError } from "../erros/AppError";


export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      status: "error",
      message: "Token inválido. Faça login novamente.",
    });
  }

  if (err instanceof TokenExpiredError) {
    return res.status(401).json({
      status: "error",
      message: "Token expirado. Faça login novamente.",
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
}
