// lib/jwt.ts
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
// import { env } from "@/lib/env";

export interface JWTPayload {
  userId: string;
  email: string;
  role?: string;
  permissions?: string[];
}

// These are only evaluated when the functions are called (runtime)
// const getJwtSecret = () => env.JWT_SECRET as Secret;
// const jwtSecret = process.env.JWT_SECRET as Secret;
const jwtSecret = process.env.JWT_SECRET as Secret;
if (!jwtSecret) {
  throw new Error("Missing required environment variable: JWT_SECRET");
}

const accessExpires = process.env.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"] ?? "15m";
const refreshExpires = process.env.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"] ?? "7d";

export function signAccessToken(payload: JWTPayload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: accessExpires });
}

export function signRefreshToken(payload: JWTPayload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: refreshExpires });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, jwtSecret) as JWTPayload & { iat?: number; exp?: number };
  } catch {
    return null;
  }
}