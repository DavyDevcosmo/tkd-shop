import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const color = searchParams.get("color")
    const sizeDobok = searchParams.get("sizeDobok")

    const where: any = {}

    if (category) {
      where.category = { name: category}
    }

    if (color) {
      where.color = color
    }
    if (sizeDobok) {
      where.sizeDobok = sizeDobok
    }

    const products = await prisma.product.findMany({ where })
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar produtos!" }, { status: 500 })
  }
}