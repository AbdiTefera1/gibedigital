// ./lib/prisma.ts
import { PrismaClient } from '../app/generated/prisma/client'  // Relative path from lib/ to app/
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })
export default prisma