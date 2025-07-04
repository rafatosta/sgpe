// models/Consulta.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '..';

interface ConsultaAttributes {
  id: number;
  data: Date;
  pacienteId: number;
  queixaPrincipal?: string;
  historiaDoenca?: string;
  historiaNascimento?: string;
  historiaPatologica?: string;
  historiaGinecologica?: string;
  historicoFamiliar?: string;
  habitosVida?: string;
  exameFisico?: string;
  examesComplementares?: string;
  suspeitaDiagnostica?: string;
  conduta?: string;
}

interface ConsultaCreationAttributes extends Optional<ConsultaAttributes, 'id'> { }

class Consulta extends Model<ConsultaAttributes, ConsultaCreationAttributes>
  implements ConsultaAttributes {
  public id!: number;
  public data!: Date;
  public pacienteId!: number;
  public queixaPrincipal?: string;
  public historiaDoenca?: string;
  public historiaNascimento?: string;
  public historiaPatologica?: string;
  public historiaGinecologica?: string;
  public historicoFamiliar?: string;
  public habitosVida?: string;
  public exameFisico?: string;
  public examesComplementares?: string;
  public suspeitaDiagnostica?: string;
  public conduta?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Consulta.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false
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
  conduta: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'Consulta',
  tableName: 'consultas'
});

export default Consulta;
