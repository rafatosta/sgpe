// models/index.ts
import Paciente from './Paciente';
import Consulta from './Consulta';
import Atestado from './Atestado';
import SolicitacaoExame from './SolicitacaoExame';
import Receita from './Receita';

// Aqui você define as associações entre os modelos
Paciente.hasMany(Consulta, { foreignKey: 'pacienteId', onDelete: 'CASCADE' });
Consulta.belongsTo(Paciente, { foreignKey: 'pacienteId' });

Consulta.hasMany(Atestado, { foreignKey: 'consultaId', onDelete: 'CASCADE' });
Atestado.belongsTo(Consulta, { foreignKey: 'consultaId' });

Consulta.hasMany(SolicitacaoExame, { foreignKey: 'consultaId', onDelete: 'CASCADE' });
SolicitacaoExame.belongsTo(Consulta, { foreignKey: 'consultaId' });

Consulta.hasMany(Receita, { foreignKey: 'consultaId', onDelete: 'CASCADE' });
Receita.belongsTo(Consulta, { foreignKey: 'consultaId' });

// Exporta todos os modelos em um objeto para fácil acesso
export {
    Paciente,
    Consulta,
    Atestado,
    SolicitacaoExame,
    Receita,
};
