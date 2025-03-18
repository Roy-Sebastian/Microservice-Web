'use strict';

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('posts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('posts');
};