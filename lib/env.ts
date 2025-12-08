// // lib/env.ts
// import "dotenv/config"; // still loads .env*.local files in dev

// // Helper that throws only when the value is accessed (not at import time)
// function required(name: string): string {
//   const value = process.env[name];
//   if (value === undefined || value === "") {
//     throw new Error(`Missing required environment variable: ${name}`);
//   }
//   return value;
// }

// // Lazy getters – validation happens only when you actually read the variable
// export const env = {
//   get DATABASE_URL() { return required("DATABASE_URL"); },
//   get JWT_SECRET() { return required("JWT_SECRET"); },

//   // Optional variables with defaults
//   ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN ?? "15m",
//   REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN ?? "7d",
//   BCRYPT_SALT_ROUNDS: Number(process.env.BCRYPT_SALT_ROUNDS ?? "10"),
//   NODE_ENV: process.env.NODE_ENV ?? "development",
// };