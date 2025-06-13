import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get('page') || '1', 10);
  const query = searchParams.get('query') || '';
  const pageSize = 15;
  const skip = (page - 1) * pageSize;

  const where = query
    ? {
        OR: [
          { nome: { contains: query, mode: 'insensitive' } },
          { cpf: { contains: query, mode: 'insensitive' } },
          { telefone: { contains: query, mode: 'insensitive' } },
          { endereco: { contains: query, mode: 'insensitive' } },
        ],
      }
    : {};

  try {
    const [pacientes, totalCount] = await Promise.all([
      prisma.paciente.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { nome: 'asc' },
      }),
      prisma.paciente.count({ where }),
    ]);

    console.log(totalCount)
    return NextResponse.json({
      data: pacientes,
      totalCount,
    });
  } catch (error) {
    console.error('Erro ao buscar pacientes:', error);
    return NextResponse.json({ error: 'Erro ao buscar pacientes.' }, { status: 500 });
  }
}
