// models/Consulta.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Paciente } from './Paciente';

export class Consulta extends Model {}

Consulta.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  queixaPrincipal: DataTypes.TEXT,
  historiaDoenca: DataTypes.TEXT,
  historiaNascimento: DataTypes.TEXT,
  historiaPatologica: DataTypes.TEXT,
  historiaGinecologica: DataTypes.TEXT,
  historicoFamiliar: DataTypes.TEXT,
  habitosVida: DataTypes.TEXT,
  exameFisico: DataTypes.TEXT,
  examesComplementares: DataTypes.TEXT,
  suspeitaDiagnostica: DataTypes.TEXT,
  conduta: DataTypes.TEXT,
}, {
  sequelize,
  modelName: 'Consulta',
  tableName: 'consultas',
});

Consulta.belongsTo(Paciente, { foreignKey: 'pacienteId', onDelete: 'CASCADE' });
Paciente.hasMany(Consulta, { foreignKey: 'pacienteId' });
