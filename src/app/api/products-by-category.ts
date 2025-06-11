import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;

  if (!category || typeof category !== "string") {
    return res.status(400).json({ error: "Categoria não informada" });
  }

  const products = await prisma.product.findMany({
    where: { category },
    orderBy: { createdAt: "desc" },
  });

  res.status(200).json(products);
}