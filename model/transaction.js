const { Model, DataTypes } = require('sequelize');

class Transaction extends Model { }

Transaction.init({
  tCost: {
    type: DataTypes.DECIMAL(10, 30),
    allow_null: false,
  },
  tPortionSize: {
    type: DataTypes.DECIMAL(1, 30),
    allow_null: false,
  },
  tOrderNumber: {
    type: DataTypes.INTEGER(5),
    allow_null: false,
    primaryKey: true,
  },
},
  {
    sequelize,
    timestamp: true,
    underscored: true,
    modelName: 'buyer',
  },
);