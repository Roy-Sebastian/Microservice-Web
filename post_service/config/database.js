import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('post_service', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => console.log('✅ Connected to MySQL'))
  .catch((err) => console.error('❌ MySQL Connection Error:', err));

export default sequelize;