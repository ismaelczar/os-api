import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

import auth from '../config/auth'

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error(' JWT token is missing')
  }

  //Separando Bearer e o token JWT
  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, auth.jwt.secret)
    console.log(decoded)
    return next()

  } catch {
    throw new Error('Invalid JWT token')
  }
}
