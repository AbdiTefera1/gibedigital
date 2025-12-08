// lib/jwt.ts
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import { env } from "@/lib/env";

export interface JWTPayload {
  userId: string;
  email: string;
  role?: string;
  permissions?: string[];
}

// These are only evaluated when the functions are called (runtime)
const getJwtSecret = () => env.JWT_SECRET as Secret;
const accessExpires = env.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"];
const refreshExpires = env.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"];

export function signAccessToken(payload: JWTPayload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: accessExpires });
}

export function signRefreshToken(payload: JWTPayload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: refreshExpires });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, getJwtSecret()) as JWTPayload & { iat?: number; exp?: number };
  } catch {
    return null;
  }
}