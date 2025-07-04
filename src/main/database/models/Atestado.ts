// models/Atestado.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '..';

interface AtestadoAttributes {
  id: number;
  data: Date;
  cid: string;
  consultaId: number;
}

interface AtestadoCreationAttributes extends Optional<AtestadoAttributes, 'id'> {}

class Atestado extends Model<AtestadoAttributes, AtestadoCreationAttributes>
  implements AtestadoAttributes {
  public id!: number;
  public data!: Date;
  public cid!: string;
  public consultaId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Atestado.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  consultaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Atestado',
  tableName: 'atestados'
});

export default Atestado;
