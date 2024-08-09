import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Invalid fields!" },
      { status: 400, statusText: "All fields are required!" }
    );
  }

  const salt = await bcrypt.genSalt(13);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: { name, email, hashedPassword },
  });

  return NextResponse.json(user, {
    status: 201,
    statusText: "User created successfuly",
  });
}
