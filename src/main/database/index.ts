import { Sequelize } from 'sequelize';
import path from 'path';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, 'database.sqlite'),
    logging: true,
});

export default sequelize;
