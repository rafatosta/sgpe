// models/SolicitacaoExame.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Consulta } from './Consulta';

export class SolicitacaoExame extends Model {}

SolicitacaoExame.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  exames: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SolicitacaoExame',
  tableName: 'solicitacoes_exames',
});

SolicitacaoExame.belongsTo(Consulta, { foreignKey: 'consultaId', onDelete: 'CASCADE' });
Consulta.hasMany(SolicitacaoExame, { foreignKey: 'consultaId' });
