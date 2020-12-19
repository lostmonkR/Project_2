const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');


class Buyer extends Model{}

Buyer.init({
      bFname: {
        type: DataTypes.VARCHAR(30),
        allow_null: false,
      },
      bLname: {
        type: DataTypes.VARCHAR(30),
        allow_null: false,
      },
      bPhoneNumber: {
        type: DataTypes.INTEGER(7),
        allow_null: false,
        primaryKey: true,
      },
      bAddress: {
        type: DataTypes.VARCHAR(200),
        allow_null: false,
      },
      bCity: {
        type: DataTypes.VARCHAR(50),
        allow_null: false,
      },
      bState: {
        type: DataTypes.VARCHAR(15),
        allow_null: false,
      },
      bZip: {
        type: DataTypes.VARCHAR(5),
        allow_null: false,
      },
      bNeedsDelivered: {
        type: DataTypes.BOOLEAN,
        allow_null: false,
      }
    }),
    {
      sequelize,
      timestamp: true,
      underscored: true,
      modelName: 'buyer',
    }
};