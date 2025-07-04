// models/SolicitacaoExame.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '..';

interface SolicitacaoExameAttributes {
  id: number;
  exames: string;
  consultaId: number;
}

interface SolicitacaoExameCreationAttributes extends Optional<SolicitacaoExameAttributes, 'id'> {}

class SolicitacaoExame extends Model<SolicitacaoExameAttributes, SolicitacaoExameCreationAttributes>
  implements SolicitacaoExameAttributes {
  public id!: number;
  public exames!: string;
  public consultaId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SolicitacaoExame.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  exames: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  consultaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'SolicitacaoExame',
  tableName: 'solicitacoes_exames'
});

export default SolicitacaoExame;
