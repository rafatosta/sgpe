// seed.ts
import sequelize from "..";
import {
    Paciente,
    Consulta,
    Atestado,
    SolicitacaoExame,
    Receita,
} from "../models";
import { PacienteAttributes } from "../models/Paciente";

async function seed() {
    try {
        await sequelize.sync({ force: true }); // ⚠️ Apaga e recria tudo

        console.log('Banco sincronizado. Iniciando seed...');

        // Dados reais simulados para 30 pacientes
        const pacientesData: PacienteAttributes[] = [
            {
                nome: 'João Carlos da Silva',
                nomeSocial: 'João',
                cpf: '12345678901',
                telefone1: '71991234567',
                telefone2: '71998765432',
                endereco: 'Rua Afonso Pena, 45',
                complemento: 'Casa',
                estado: 'BA',
                cep: '40015000',
                cidade: 'Salvador'
            },
            {
                nome: 'Ana Beatriz Oliveira',
                nomeSocial: 'Ana',
                cpf: '23456789012',
                telefone1: '71992345678',
                telefone2: '71997654321',
                endereco: 'Av. Sete de Setembro, 123',
                complemento: 'Apto 301',
                estado: 'BA',
                cep: '40020000',
                cidade: 'Salvador'
            },
            {
                nome: 'Carlos Eduardo Pereira',
                nomeSocial: 'Carlos',
                cpf: '34567890123',
                telefone1: '71993456789',
                telefone2: '71996543210',
                endereco: 'Rua da Paz, 789',
                complemento: '',
                estado: 'BA',
                cep: '40030000',
                cidade: 'Salvador'
            },
            {
                nome: 'Fernanda Lima Souza',
                nomeSocial: 'Fernanda',
                cpf: '45678901234',
                telefone1: '71994567890',
                telefone2: '71995432109',
                endereco: 'Travessa dos Navegantes, 12',
                complemento: 'Bloco B',
                estado: 'BA',
                cep: '40040000',
                cidade: 'Salvador'
            },
            {
                nome: 'Marcos Vinicius Santos',
                nomeSocial: 'Marcos',
                cpf: '56789012345',
                telefone1: '71995678901',
                telefone2: '71994321098',
                endereco: 'Rua do Comércio, 150',
                complemento: '',
                estado: 'BA',
                cep: '40050000',
                cidade: 'Salvador'
            },
            {
                nome: 'Patrícia Rocha',
                nomeSocial: 'Patrícia',
                cpf: '67890123456',
                telefone1: '71996789012',
                telefone2: '71993210987',
                endereco: 'Alameda dos Anjos, 90',
                complemento: 'Apto 202',
                estado: 'BA',
                cep: '40060000',
                cidade: 'Salvador'
            },
            {
                nome: 'Ricardo Alves',
                nomeSocial: 'Ricardo',
                cpf: '78901234567',
                telefone1: '71997890123',
                telefone2: '71992109876',
                endereco: 'Rua da Alegria, 34',
                complemento: '',
                estado: 'BA',
                cep: '40070000',
                cidade: 'Salvador'
            },
            {
                nome: 'Beatriz Dias',
                nomeSocial: 'Beatriz',
                cpf: '89012345678',
                telefone1: '71998901234',
                telefone2: '71991098765',
                endereco: 'Praça do Sol, 87',
                complemento: 'Casa',
                estado: 'BA',
                cep: '40080000',
                cidade: 'Salvador'
            },
            {
                nome: 'Lucas Fernandes',
                nomeSocial: 'Lucas',
                cpf: '90123456789',
                telefone1: '71999012345',
                telefone2: '71990987654',
                endereco: 'Rua das Laranjeiras, 56',
                complemento: '',
                estado: 'BA',
                cep: '40090000',
                cidade: 'Salvador'
            },
            {
                nome: 'Carla Gomes',
                nomeSocial: 'Carla',
                cpf: '01234567890',
                telefone1: '71990123456',
                telefone2: '71989876543',
                endereco: 'Avenida Brasil, 22',
                complemento: 'Apto 101',
                estado: 'BA',
                cep: '40100000',
                cidade: 'Salvador'
            },
            // ... 20 outros pacientes abaixo
            {
                nome: 'Felipe Martins',
                nomeSocial: 'Felipe',
                cpf: '11223344556',
                telefone1: '71991122334',
                telefone2: '71992233445',
                endereco: 'Rua das Acácias, 15',
                complemento: 'Casa',
                estado: 'BA',
                cep: '40110000',
                cidade: 'Salvador'
            },
            {
                nome: 'Juliana Costa',
                nomeSocial: 'Juliana',
                cpf: '22334455667',
                telefone1: '71993344556',
                telefone2: '71994455667',
                endereco: 'Travessa do Sol, 70',
                complemento: '',
                estado: 'BA',
                cep: '40120000',
                cidade: 'Salvador'
            },
            {
                nome: 'Rafael Mendes',
                nomeSocial: 'Rafael',
                cpf: '33445566778',
                telefone1: '71995566778',
                telefone2: '71996677889',
                endereco: 'Rua das Palmeiras, 43',
                complemento: 'Apto 303',
                estado: 'BA',
                cep: '40130000',
                cidade: 'Salvador'
            },
            {
                nome: 'Aline Carvalho',
                nomeSocial: 'Aline',
                cpf: '44556677889',
                telefone1: '71997788990',
                telefone2: '71998899001',
                endereco: 'Avenida das Flores, 88',
                complemento: '',
                estado: 'BA',
                cep: '40140000',
                cidade: 'Salvador'
            },
            {
                nome: 'Roberto Ribeiro',
                nomeSocial: 'Roberto',
                cpf: '55667788990',
                telefone1: '71990011223',
                telefone2: '71991122334',
                endereco: 'Rua das Orquídeas, 29',
                complemento: 'Casa',
                estado: 'BA',
                cep: '40150000',
                cidade: 'Salvador'
            },
            {
                nome: 'Camila Pinto',
                nomeSocial: 'Camila',
                cpf: '66778899001',
                telefone1: '71992233445',
                telefone2: '71993344556',
                endereco: 'Rua do Carmo, 12',
                complemento: '',
                estado: 'BA',
                cep: '40160000',
                cidade: 'Salvador'
            },
            {
                nome: 'André Barros',
                nomeSocial: 'André',
                cpf: '77889900112',
                telefone1: '71994455667',
                telefone2: '71995566778',
                endereco: 'Praça da Sé, 99',
                complemento: 'Apto 404',
                estado: 'BA',
                cep: '40170000',
                cidade: 'Salvador'
            },
            {
                nome: 'Tatiana Moreira',
                nomeSocial: 'Tatiana',
                cpf: '88990011223',
                telefone1: '71996677889',
                telefone2: '71997788990',
                endereco: 'Rua das Violetas, 31',
                complemento: '',
                estado: 'BA',
                cep: '40180000',
                cidade: 'Salvador'
            },
            {
                nome: 'Eduardo Nascimento',
                nomeSocial: 'Eduardo',
                cpf: '99001122334',
                telefone1: '71998899001',
                telefone2: '71990011223',
                endereco: 'Av. Getúlio Vargas, 75',
                complemento: 'Casa',
                estado: 'BA',
                cep: '40190000',
                cidade: 'Salvador'
            },
            {
                nome: 'Daniela Silva',
                nomeSocial: 'Daniela',
                cpf: '10111213141',
                telefone1: '71991122334',
                telefone2: '71992233445',
                endereco: 'Rua das Margaridas, 44',
                complemento: 'Apto 202',
                estado: 'BA',
                cep: '40200000',
                cidade: 'Salvador'
            },
            {
                nome: 'Bruno Farias',
                nomeSocial: 'Bruno',
                cpf: '12131415161',
                telefone1: '71993344556',
                telefone2: '71994455667',
                endereco: 'Rua dos Girassóis, 56',
                complemento: '',
                estado: 'BA',
                cep: '40210000',
                cidade: 'Salvador'
            },
            {
                nome: 'Amanda Duarte',
                nomeSocial: 'Amanda',
                cpf: '13141516171',
                telefone1: '71995566778',
                telefone2: '71996677889',
                endereco: 'Av. das Américas, 12',
                complemento: 'Casa',
                estado: 'BA',
                cep: '40220000',
                cidade: 'Salvador'
            },
            {
                nome: 'Leandro Melo',
                nomeSocial: 'Leandro',
                cpf: '14151617181',
                telefone1: '71997788990',
                telefone2: '71998899001',
                endereco: 'Rua do Comércio, 87',
                complemento: 'Apto 101',
                estado: 'BA',
                cep: '40230000',
                cidade: 'Salvador'
            },
            {
                nome: 'Priscila Castro',
                nomeSocial: 'Priscila',
                cpf: '15161718191',
                telefone1: '71990011223',
                telefone2: '71991122334',
                endereco: 'Rua do Rosário, 9',
                complemento: '',
                estado: 'BA',
                cep: '40240000',
                cidade: 'Salvador'
            },
            {
                nome: 'Diego Araújo',
                nomeSocial: 'Diego',
                cpf: '16171819201',
                telefone1: '71992233445',
                telefone2: '71993344556',
                endereco: 'Rua das Palmeiras, 21',
                complemento: 'Casa',
                estado: 'BA',
                cep: '40250000',
                cidade: 'Salvador'
            },
            {
                nome: 'Marina Santos',
                nomeSocial: 'Marina',
                cpf: '17181920211',
                telefone1: '71994455667',
                telefone2: '71995566778',
                endereco: 'Av. Brasil, 77',
                complemento: 'Apto 303',
                estado: 'BA',
                cep: '40260000',
                cidade: 'Salvador'
            },
            {
                nome: 'Thiago Ribeiro',
                nomeSocial: 'Thiago',
                cpf: '18192021221',
                telefone1: '71996677889',
                telefone2: '71997788990',
                endereco: 'Rua das Flores, 8',
                complemento: '',
                estado: 'BA',
                cep: '40270000',
                cidade: 'Salvador'
            },
            {
                nome: 'Sabrina Lopes',
                nomeSocial: 'Sabrina',
                cpf: '19202122231',
                telefone1: '71998899001',
                telefone2: '71990011223',
                endereco: 'Rua da Paz, 35',
                complemento: 'Casa',
                estado: 'BA',
                cep: '40280000',
                cidade: 'Salvador'
            },
            {
                nome: 'Gustavo Fernandes',
                nomeSocial: 'Gustavo',
                cpf: '20212223241',
                telefone1: '71991122334',
                telefone2: '71992233445',
                endereco: 'Travessa do Sol, 60',
                complemento: '',
                estado: 'BA',
                cep: '40290000',
                cidade: 'Salvador'
            },
            {
                nome: 'Renata Alves',
                nomeSocial: 'Renata',
                cpf: '21222324251',
                telefone1: '71993344556',
                telefone2: '71994455667',
                endereco: 'Rua dos Lírios, 42',
                complemento: 'Apto 104',
                estado: 'BA',
                cep: '40300000',
                cidade: 'Salvador'
            }
        ];

        const consultasData = [
            {
                queixaPrincipal: 'Dor de cabeça intensa e frequente',
                historiaDoenca: 'Paciente relata dor de cabeça tipo enxaqueca há 2 semanas.',
                historiaNascimento: 'Nascimento normal, sem intercorrências.',
                historiaPatologica: 'Sem doenças crônicas conhecidas.',
                historiaGinecologica: 'Menstruação regular.',
                historicoFamiliar: 'Avó materna com enxaqueca.',
                habitosVida: 'Pratica exercícios leves 3x por semana.',
                exameFisico: 'PA 120x80 mmHg, FC 78 bpm.',
                examesComplementares: 'Solicitado hemograma completo e ressonância magnética.',
                suspeitaDiagnostica: 'Enxaqueca com aura',
                conduta: 'Prescrever analgésicos e acompanhar em 15 dias.'
            },
            {
                queixaPrincipal: 'Tosse persistente e falta de ar',
                historiaDoenca: 'Tosse seca e dificuldade respiratória há 10 dias.',
                historiaNascimento: 'Nascimento cesáreo sem complicações.',
                historiaPatologica: 'Asma diagnosticada aos 15 anos.',
                historiaGinecologica: 'Menstruação irregular.',
                historicoFamiliar: 'Pai com histórico de asma.',
                habitosVida: 'Fumante há 5 anos.',
                exameFisico: 'PA 118x75 mmHg, FC 85 bpm, sibilos pulmonares.',
                examesComplementares: 'Solicitado raio-X de tórax e espirometria.',
                suspeitaDiagnostica: 'Crise de asma',
                conduta: 'Prescrever broncodilatadores e corticosteróides inalatórios.'
            },
            {
                queixaPrincipal: 'Dor abdominal em cólica',
                historiaDoenca: 'Dor abdominal intensa e intermitente há 3 dias.',
                historiaNascimento: 'Nascimento normal.',
                historiaPatologica: 'Sem alergias.',
                historiaGinecologica: 'Gravidez atual de 20 semanas.',
                historicoFamiliar: 'Sem histórico relevante.',
                habitosVida: 'Não pratica exercícios regularmente.',
                exameFisico: 'Abdome doloroso à palpação no quadrante inferior direito.',
                examesComplementares: 'Solicitado ultrassom abdominal.',
                suspeitaDiagnostica: 'Apendicite aguda',
                conduta: 'Encaminhar para cirurgia urgente.'
            },
            // Adicione mais consultas variadas para os demais pacientes...
        ];

        // Para os pacientes que não tem consulta específica no array, criar uma consulta genérica
        const consultaGenerica = {
            queixaPrincipal: 'Consulta de rotina',
            historiaDoenca: 'Paciente sem queixas específicas.',
            historiaNascimento: 'Nascimento normal.',
            historiaPatologica: 'Sem comorbidades.',
            historiaGinecologica: 'Sem alterações.',
            historicoFamiliar: 'Sem histórico familiar relevante.',
            habitosVida: 'Pratica exercícios moderados.',
            exameFisico: 'PA 120x80 mmHg, FC 75 bpm.',
            examesComplementares: 'Exames laboratoriais normais.',
            suspeitaDiagnostica: 'Saudável',
            conduta: 'Orientação para manutenção de hábitos saudáveis.'
        };

        // CIDs realistas para atestados
        const cids = [
            'G43.0', // Enxaqueca sem aura
            'J45.9', // Asma não especificada
            'K35',   // Apendicite aguda
            'I10',   // Hipertensão essencial
            'E11.9', // Diabetes mellitus tipo 2 sem complicações
            'M54.5', // Dor lombar baixa
            'R51',   // Cefaleia
            'J06.9', // Infecção aguda das vias respiratórias superiores
            'L20.9', // Dermatite atópica
            'F32.9'  // Episódio depressivo, não especificado
        ];

        // Exames realistas para solicitações
        const exames = [
            'Hemograma completo, Ressonância magnética cerebral',
            'Raio-X de tórax, Espirometria',
            'Ultrassonografia abdominal',
            'Eletrocardiograma, MAPA 24h',
            'Glicemia de jejum, Hemoglobina glicada',
            'Radiografia da coluna lombar',
            'Tomografia computadorizada de cabeça',
            'Exames de sangue gerais',
            'Teste alérgico, exame de pele',
            'Avaliação psicológica'
        ];

        // Receitas realistas
        const receitas = [
            'Paracetamol 500mg, 1 comprimido a cada 6 horas por 5 dias',
            'Salbutamol inalatório, 2 jatos a cada 12 horas por 7 dias',
            'Dipirona 500mg, 1 comprimido a cada 8 horas por 3 dias',
            'Losartana 50mg, 1 comprimido ao dia',
            'Metformina 850mg, 1 comprimido ao dia',
            'Ibuprofeno 400mg, 1 comprimido a cada 8 horas por 5 dias',
            'Amoxicilina 500mg, 1 comprimido a cada 8 horas por 7 dias',
            'Omeprazol 20mg, 1 comprimido antes do café da manhã por 30 dias',
            'Cetirizina 10mg, 1 comprimido ao dia por 10 dias',
            'Sertralina 50mg, 1 comprimido ao dia'
        ];


        function gerarEmailAleatorio(nome: string) {
            const prefixo = nome.toLowerCase().replace(/\s/g, '.');
            const sufixoNum = Math.floor(Math.random() * 10000);
            return `${prefixo}${sufixoNum}@email.com`;
        }

        for (let i = 0; i < pacientesData.length; i++) {
            const pacienteData = pacientesData[i];

            // Sobrescreve email com email aleatório
            pacienteData.email = gerarEmailAleatorio(pacienteData.nome);

            const paciente = await Paciente.create(pacienteData);

            // Escolher dados de consulta conforme índice, ou consulta genérica
            const consultaData = consultasData[i] || consultaGenerica;

            const consulta = await Consulta.create({
                pacienteId: paciente.id,
                data: new Date(),
                ...consultaData
            });

            // Usar CID, exame e receita baseados no índice com loop
            const cid = cids[i % cids.length];
            const exame = exames[i % exames.length];
            const receita = receitas[i % receitas.length];

            await Atestado.create({
                consultaId: consulta.id,
                data: new Date(),
                cid
            });

            await SolicitacaoExame.create({
                consultaId: consulta.id,
                exames: exame
            });

            await Receita.create({
                consultaId: consulta.id,
                conteudo: receita
            });
        }

        console.log('Seed finalizado com sucesso!');
    } catch (error) {
        console.error('Erro no seed:', error);
    } finally {
        await sequelize.close();
    }
}

export default seed;
