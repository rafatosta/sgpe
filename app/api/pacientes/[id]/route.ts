import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  try {
    const paciente = await prisma.paciente.findUnique({
      where: { id },
      include: {
        telefones: true,
        endereco: true,
      },
    });

    if (!paciente) {
      return NextResponse.json(
        { error: 'Paciente não encontrado.' },
        { status: 404 }
      );
    }

    return NextResponse.json(paciente);
  } catch (error) {
    console.error('Erro ao buscar paciente por ID:', error);
    return NextResponse.json(
      { error: 'Erro interno ao buscar paciente.' },
      { status: 500 }
    );
  }
}
