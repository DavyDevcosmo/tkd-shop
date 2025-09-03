import { PrismaClient } from "@/app/generated/prisma";
const db = new PrismaClient();
export default db;