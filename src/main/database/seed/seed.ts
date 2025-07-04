// seed.ts
import sequelize from "..";
import {
    Paciente,
    Consulta,
    Atestado,
    SolicitacaoExame,
    Receita,
} from "../models";

async function seed() {
    try {
        await sequelize.sync({ force: true }); // ⚠️ Apaga e recria tudo

        console.log('Banco sincronizado. Iniciando seed...');

        const paciente = await Paciente.create({
            nome: 'Maria da Silva',
            nomeSocial: 'Maria',
            email: 'maria@email.com',
            cpf: '12345678901',
            telefone1: '71999999999',
            telefone2: '71988888888',
            endereco: 'Rua das Flores, 123',
            complemento: 'Apto 301',
            estado: 'BA',
            cep: '40000000',
            cidade: 'Salvador'
        });

        const consulta = await Consulta.create({
            pacienteId: paciente.id,
            data: new Date(),
            queixaPrincipal: 'Dor de cabeça constante',
            historiaDoenca: 'Há 3 dias com dor',
            historiaNascimento: 'Parto normal, sem intercorrências',
            historiaPatologica: 'Hipertensa',
            historiaGinecologica: 'Menstruação regular',
            historicoFamiliar: 'Mãe com diabetes',
            habitosVida: 'Sedentária, dorme mal',
            exameFisico: 'PA 14x9, FC 90bpm',
            examesComplementares: 'Exame de sangue solicitado',
            suspeitaDiagnostica: 'Enxaqueca',
            conduta: 'Analgésico e reavaliação em 7 dias'
        });

        await Atestado.create({
            consultaId: consulta.id,
            data: new Date(),
            cid: 'G43.0'
        });

        await SolicitacaoExame.create({
            consultaId: consulta.id,
            exames: 'Hemograma completo, TSH'
        });

        await Receita.create({
            consultaId: consulta.id,
            conteudo: 'Dipirona 500mg, 1cp de 6h/6h por 3 dias'
        });

        console.log('Seed finalizado com sucesso!');
    } catch (error) {
        console.error('Erro no seed:', error);
    } finally {
        await sequelize.close();
    }
}

export default seed;
