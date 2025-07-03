// models/Paciente.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '..';

export class Paciente extends Model { }

Paciente.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomeSocial: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone2: {
    type: DataTypes.STRING,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  complemento: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Paciente',
  tableName: 'pacientes',
});
