// import { PrismaClient } from "@/app/generated/prisma/client"
// import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"

// const adapter = new PrismaBetterSqlite3({
//   url: process.env.DATABASE_URL ?? '',
// });

// const prisma = new PrismaClient({ adapter });

// export default prisma;

import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

export default prisma;