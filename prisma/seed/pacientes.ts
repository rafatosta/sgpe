import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

const pacientesSeed = [
  {
    nome: 'João Silva',
    nomeSocial: null,
    email: 'joao@example.com',
    cpf: '12345678901',
    telefones: {
      create: [
        { numero: '(71) 91234-5678' },
        { numero: '(71) 98765-4321' },
      ],
    },
    endereco: {
      create: {
        endereco: 'Rua A, 123',
        complemento: 'Apto 101',
        estado: 'BA',
        cep: '40000-000',
        cidade: 'Salvador',
      },
    },
  },
  {
    nome: 'Maria Souza',
    nomeSocial: 'Mari',
    email: null,
    cpf: '23456789012',
    telefones: {
      create: [{ numero: '(71) 90000-0000' }],
    },
    // sem endereço
  },
  {
    nome: 'Carlos Pereira',
    nomeSocial: null,
    email: 'carlos@example.com',
    cpf: '34567890123',
    telefones: {
      create: [],
    },
    endereco: {
      create: {
        endereco: 'Av. Principal, 456',
        complemento: null,
        estado: 'BA',
        cep: '40100-000',
        cidade: 'Feira de Santana',
      },
    },
  },
  // ...adicione mais 27 pacientes com variações semelhantes
];

export async function seedPacientes(): Promise<void> {
  for (const paciente of pacientesSeed) {
    await prisma.paciente.create({ data: paciente });
  }
  console.log('Pacientes, telefones e endereços inseridos com sucesso!');
}
