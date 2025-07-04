// models/Paciente.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '..';

interface PacienteAttributes {
  id: number;
  nome: string;
  nomeSocial?: string;
  email?: string;
  cpf: string;
  telefone1: string;
  telefone2?: string;
  endereco: string;
  complemento?: string;
  estado: string;
  cep: string;
  cidade: string;
}

interface PacienteCreationAttributes extends Optional<PacienteAttributes, 'id'> { }

class Paciente extends Model<PacienteAttributes, PacienteCreationAttributes> implements PacienteAttributes {
  public id!: number;
  public nome!: string;
  public nomeSocial?: string;
  public email?: string;
  public cpf!: string;
  public telefone1!: string;
  public telefone2?: string;
  public endereco!: string;
  public complemento?: string;
  public estado!: string;
  public cep!: string;
  public cidade!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

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

export default Paciente;
