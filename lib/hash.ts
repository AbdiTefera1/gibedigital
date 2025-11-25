// lib/hash.ts
import bcrypt from "bcryptjs";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS ?? 10);

export async function hashPassword(password: string) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
}

export async function hashToken(token: string) {
  // re-use bcrypt for hashing refresh tokens
  return bcrypt.hash(token, SALT_ROUNDS);
}

export async function compareToken(token: string, hashed: string) {
  return bcrypt.compare(token, hashed);
}
