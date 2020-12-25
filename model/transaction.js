const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');

class Transaction extends Model{}

Transaction.init({
      tCost: {
        type: DataTypes.DECIMAL(10,30),
        allow_null: false,
      },
      tPortionSize: {
        type: DataTypes.DECIMAL(1,30),
        allow_null: false,
      },
      tOrderNumber: {
        type: DataTypes.INTEGER(5),
        allow_null: false,
      },
      tId: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allow_null: false,
        autoIncrement: false
      }
    },
    {
      sequelize,
      timestamp: true,
      underscored: true,
      modelName: 'buyer',
    },
});