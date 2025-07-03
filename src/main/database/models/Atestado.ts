// models/Atestado.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Consulta } from './Consulta';

export class Atestado extends Model {}

Atestado.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Atestado',
  tableName: 'atestados',
});

Atestado.belongsTo(Consulta, { foreignKey: 'consultaId', onDelete: 'CASCADE' });
Consulta.hasMany(Atestado, { foreignKey: 'consultaId' });
