import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '../generated/prisma'

const getPrisma = () => new PrismaClient().$extends(withAccelerate())

type ExtendedPrismaClient = ReturnType<typeof getPrisma>

const globalForPrisma = global as unknown as { 
    prisma: ExtendedPrismaClient
}

const prisma = globalForPrisma.prisma || getPrisma()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma