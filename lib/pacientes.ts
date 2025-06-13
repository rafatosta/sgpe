import { PrismaClient, Paciente } from '@/generated/prisma';

const prisma = new PrismaClient();

/**
 * Cria um novo paciente no banco de dados.
 */
export async function createPaciente(data: Omit<Paciente, 'id'>): Promise<Paciente> {
  return await prisma.paciente.create({ data });
}

/**
 * Retorna todos os pacientes cadastrados.
 */
export async function getAllPacientes(): Promise<Paciente[]> {
  return await prisma.paciente.findMany({ orderBy: { nome: 'asc' } });
}

/**
 * Retorna um paciente pelo ID.
 */
export async function getPacienteById(id: number): Promise<Paciente | null> {
  return await prisma.paciente.findUnique({ where: { id } });
}

/**
 * Atualiza os dados de um paciente.
 */
export async function updatePaciente(id: number, data: Partial<Omit<Paciente, 'id'>>): Promise<Paciente> {
  return await prisma.paciente.update({
    where: { id },
    data,
  });
}

/**
 * Exclui um paciente do banco de dados.
 */
export async function deletePaciente(id: number): Promise<Paciente> {
  return await prisma.paciente.delete({ where: { id } });
}
