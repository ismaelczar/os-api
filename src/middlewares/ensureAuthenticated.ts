import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

import authConfig from '../config/authConfig'

interface RequestPayload {
  iat: number
  exp: number
  sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing')
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
    throw new Error('Invalid JWT token')
  }
}
