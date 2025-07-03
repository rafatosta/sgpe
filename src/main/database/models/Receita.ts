// models/Receita.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Consulta } from './Consulta';

export class Receita extends Model {}

Receita.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Receita',
  tableName: 'receitas',
});

Receita.belongsTo(Consulta, { foreignKey: 'consultaId', onDelete: 'CASCADE' });
Consulta.hasMany(Receita, { foreignKey: 'consultaId' });
