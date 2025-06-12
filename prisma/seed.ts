import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
    await prisma.paciente.createMany({
        data: [
            {
                nome: 'João da Silva',
                nascimento: new Date('1985-06-10'),
                sexo: 'MASCULINO',
                cpf: '12345678901',
                telefone: '(71) 91234-5678',
                endereco: 'Rua das Flores, 123'
            },
            {
                nome: 'Maria Oliveira',
                nascimento: new Date('1990-11-25'),
                sexo: 'FEMININO',
                cpf: '98765432100',
                telefone: '(71) 99876-5432',
                endereco: 'Av. Central, 456'
            }
        ]
    });

    console.log('Pacientes inseridos com sucesso!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
