// models/Receita.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '..';

interface ReceitaAttributes {
  id: number;
  conteudo: string;
  consultaId: number;
}

interface ReceitaCreationAttributes extends Optional<ReceitaAttributes, 'id'> {}

class Receita extends Model<ReceitaAttributes, ReceitaCreationAttributes>
  implements ReceitaAttributes {
  public id!: number;
  public conteudo!: string;
  public consultaId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Receita.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  consultaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Receita',
  tableName: 'receitas'
});

export default Receita;
