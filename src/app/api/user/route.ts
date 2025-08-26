import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();



export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));

  const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true }
  });

  return NextResponse.json({ user });
}
export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();

    // verifica se já existe
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return NextResponse.json(
        { success: false, errors: { email: ["E-mail já cadastrado"] } },
        { status: 400 }
      );
    }

    

    // Criptografa senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Erro ao cadastrar" }, { status: 500 });
  }
}
