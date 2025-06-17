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
  {
    nome: 'Ana Oliveira',
    nomeSocial: 'AnaX',
    email: null,
    cpf: '10000000003',
    telefones: {
      create: [{ numero: '(71) 94753-4285' }, { numero: '(71) 95065-5454' }, { numero: '(71) 95665-7894' }],
    },
    endereco: {
      create: {
        endereco: 'Rua Exemplo 0, nº 100',
        complemento: null,
        estado: 'BA',
        cep: '40000-000',
        cidade: 'Salvador',
      },
    },
  },
  {
    nome: 'Bruno Lima',
    nomeSocial: null,
    email: 'bruno@example.com',
    cpf: '10000000004',
    telefones: {
      create: [{ numero: '(71) 91854-9875' }],
    },
  },
  {
    nome: 'Camila Duarte',
    nomeSocial: null,
    email: 'camila@example.com',
    cpf: '10000000005',
    telefones: {
      create: [{ numero: '(71) 99844-2154' }],
    },
    endereco: {
      create: {
        endereco: 'Rua Exemplo 2, nº 102',
        complemento: 'Apto 2',
        estado: 'BA',
        cep: '40002-000',
        cidade: 'Salvador',
      },
    },
  },
  {
    nome: 'Daniel Costa',
    nomeSocial: null,
    email: 'daniel@example.com',
    cpf: '10000000006',
    telefones: {
      create: [{ numero: '(71) 97528-3239' }, { numero: '(71) 90140-8844' }],
    },
  },
  {
    nome: 'Eduarda Martins',
    nomeSocial: 'EduardaX',
    email: 'eduarda@example.com',
    cpf: '10000000007',
    telefones: {
      create: [{ numero: '(71) 90829-3458' }],
    },
    endereco: {
      create: {
        endereco: 'Rua Exemplo 4, nº 104',
        complemento: 'Apto 4',
        estado: 'BA',
        cep: '40004-000',
        cidade: 'Salvador',
      },
    },
  },
  {
    nome: 'Felipe Rocha',
    nomeSocial: null,
    email: null,
    cpf: '10000000008',
    telefones: {
      create: [{ numero: '(71) 90381-9542' }],
    },
  },
  {
    nome: 'Gabriela Teixeira',
    nomeSocial: null,
    email: 'gabriela@example.com',
    cpf: '10000000009',
    telefones: {
      create: [{ numero: '(71) 94263-4288' }, { numero: '(71) 93019-4840' }],
    },
    endereco: {
      create: {
        endereco: 'Rua Exemplo 6, nº 106',
        complemento: null,
        estado: 'BA',
        cep: '40006-000',
        cidade: 'Salvador',
      },
    },
  },
  {
    nome: 'Henrique Barros',
    nomeSocial: null,
    email: 'henrique@example.com',
    cpf: '10000000010',
    telefones: {
      create: [{ numero: '(71) 96367-1970' }],
    },
  },
  {
    nome: 'Isabela Pinto',
    nomeSocial: 'IsabelaX',
    email: 'isabela@example.com',
    cpf: '10000000011',
    telefones: {
      create: [{ numero: '(71) 96464-6974' }],
    },
    endereco: {
      create: {
        endereco: 'Rua Exemplo 8, nº 108',
        complemento: 'Apto 8',
        estado: 'BA',
        cep: '40008-000',
        cidade: 'Salvador',
      },
    },
  },
  {
    nome: 'Jorge Fernandes',
    nomeSocial: null,
    email: 'jorge@example.com',
    cpf: '10000000012',
    telefones: {
      create: [{ numero: '(71) 98569-1479' }, { numero: '(71) 96082-1487' }],
    },
  }, {
    nome: 'Karen Dias',
    nomeSocial: null,
    email: 'karen@example.com',
    cpf: '10000000013',
    telefones: {
      create: [{ numero: '(71) 99123-4567' }],
    },
  },
  {
    nome: 'Leonardo Nunes',
    nomeSocial: 'Leo',
    email: null,
    cpf: '10000000014',
    telefones: {
      create: [{ numero: '(71) 98234-5678' }, { numero: '(71) 98765-4321' }],
    },
    endereco: {
      create: {
        endereco: 'Rua da Alegria, 789',
        complemento: null,
        estado: 'BA',
        cep: '40009-000',
        cidade: 'Lauro de Freitas',
      },
    },
  },
  {
    nome: 'Marcela Gomes',
    nomeSocial: null,
    email: 'marcela@example.com',
    cpf: '10000000015',
    telefones: {
      create: [{ numero: '(71) 98888-1122' }],
    },
  },
  {
    nome: 'Nicolas Freitas',
    nomeSocial: null,
    email: 'nicolas@example.com',
    cpf: '10000000016',
    telefones: {
      create: [{ numero: '(71) 97777-3344' }],
    },
  },
  {
    nome: 'Olívia Ribeiro',
    nomeSocial: 'Liv',
    email: 'olivia@example.com',
    cpf: '10000000017',
    telefones: {
      create: [{ numero: '(71) 96666-5566' }],
    },
    endereco: {
      create: {
        endereco: 'Av. Oceânica, 300',
        complemento: 'Casa',
        estado: 'BA',
        cep: '40170-110',
        cidade: 'Salvador',
      },
    },
  },
  {
    nome: 'Paulo Henrique',
    nomeSocial: null,
    email: null,
    cpf: '10000000018',
    telefones: {
      create: [{ numero: '(71) 95555-7788' }],
    },
  },
  {
    nome: 'Quezia Moura',
    nomeSocial: null,
    email: 'quezia@example.com',
    cpf: '10000000019',
    telefones: {
      create: [{ numero: '(71) 94444-9900' }],
    },
  },
  {
    nome: 'Rafael Tosta',
    nomeSocial: null,
    email: 'rafael@example.com',
    cpf: '10000000020',
    telefones: {
      create: [{ numero: '(71) 93333-1111' }, { numero: '(71) 92222-2222' }],
    },
    endereco: {
      create: {
        endereco: 'Rua das Palmeiras, 999',
        complemento: 'Apto 901',
        estado: 'BA',
        cep: '40200-000',
        cidade: 'Salvador',
      },
    },
  },
  {
    nome: 'Sabrina Melo',
    nomeSocial: 'Sá',
    email: 'sabrina@example.com',
    cpf: '10000000021',
    telefones: {
      create: [{ numero: '(71) 91111-3333' }],
    },
  },
  {
    nome: 'Tiago Matos',
    nomeSocial: null,
    email: 'tiago@example.com',
    cpf: '10000000022',
    telefones: {
      create: [],
    },
  },
  {
    nome: 'Ursula Lima',
    nomeSocial: null,
    email: 'ursula@example.com',
    cpf: '10000000023',
    telefones: {
      create: [{ numero: '(71) 90001-1234' }],
    },
  },
  {
    nome: 'Victor Hugo',
    nomeSocial: null,
    email: 'victor@example.com',
    cpf: '10000000024',
    telefones: {
      create: [{ numero: '(71) 90002-2345' }, { numero: '(71) 90003-3456' }],
    },
  },
  {
    nome: 'Wesley Silva',
    nomeSocial: 'Wes',
    email: null,
    cpf: '10000000025',
    telefones: {
      create: [{ numero: '(71) 90004-4567' }],
    },
  },
  {
    nome: 'Xênia Borges',
    nomeSocial: null,
    email: 'xenia@example.com',
    cpf: '10000000026',
    telefones: {
      create: [{ numero: '(71) 90005-5678' }],
    },
  },
  {
    nome: 'Yago Santos',
    nomeSocial: null,
    email: null,
    cpf: '10000000027',
    telefones: {
      create: [{ numero: '(71) 90006-6789' }],
    },
  },
  {
    nome: 'Zuleica Costa',
    nomeSocial: 'Zu',
    email: 'zuleica@example.com',
    cpf: '10000000028',
    telefones: {
      create: [],
    },
  },
  {
    nome: 'Bruna Silva',
    nomeSocial: null,
    email: 'bruna@example.com',
    cpf: '10000000029',
    telefones: {
      create: [{ numero: '(71) 90007-7890' }],
    },
  },
  {
    nome: 'Diego Castro',
    nomeSocial: null,
    email: 'diego@example.com',
    cpf: '10000000030',
    telefones: {
      create: [{ numero: '(71) 90008-8901' }],
    },
  },
  {
    nome: 'Elaine Barbosa',
    nomeSocial: null,
    email: null,
    cpf: '10000000031',
    telefones: {
      create: [{ numero: '(71) 90009-9012' }],
    },
  },
  {
    nome: 'Fábio Almeida',
    nomeSocial: null,
    email: 'fabio@example.com',
    cpf: '10000000032',
    telefones: {
      create: [{ numero: '(71) 90010-0123' }],
    },
  }
];

export async function seedPacientes(): Promise<void> {
  for (const paciente of pacientesSeed) {
    await prisma.paciente.create({ data: paciente });
  }
  console.log('Pacientes, telefones e endereços inseridos com sucesso!');
}
