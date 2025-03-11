import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth'
import { AppError } from '../erros/AppError';

interface RequestPayload {
  iat: number
  exp: number
  sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing')
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    const { sub } = decoded as RequestPayload

    req.user = {
      id: sub
    }

    return next()

  } catch {
    throw new AppError('Invalid JWT token')
  }
}
