const sequelize = require('./config/db');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

sequelize
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
    // sync database table with app models
    // sequelize.sync();
  })
  .catch((err) => {
    logger.error('Unable to connect to the database:', err);
  });

const server = app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
