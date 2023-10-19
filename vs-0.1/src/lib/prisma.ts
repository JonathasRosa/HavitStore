import { PrismaClient } from "@prisma/client";

declare global {
    var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.cahedPrisma){
        global.cahedPrisma = new PrismaClient();
    }
    prisma =  global.cahedPrisma;
}
export const prismaClient = prisma;