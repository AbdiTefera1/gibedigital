// lib/jwt.ts
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import { env } from "@/lib/env";


export interface JWTPayload {
  userId: string;
  email: string;
  role?: string;
  permissions?: string[];
}

const accessExpires = env.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"];
const refreshExpires = env.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"];
const jwtSecret = env.JWT_SECRET as Secret;

export function signAccessToken(payload: JWTPayload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: accessExpires });
}

export function signRefreshToken(payload: JWTPayload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: refreshExpires });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, env.JWT_SECRET) as JWTPayload & { iat?: number; exp?: number };
  } catch (e) {
    return null;
  }
}
