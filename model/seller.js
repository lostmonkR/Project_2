const { Model, DataTypes } = require('sequelize');

class Seller extends Model{}

Seller.init({
  sFname: {
    type: DataTypes.VARCHAR(30),
    allow_null: false,
  },
  sLname: {
    type: DataTypes.VARCHAR(30),
    allow_null: false,
  },
  sPhoneNumber: {
    type: DataTypes.INTEGER(7),
    allow_null: false,
    primaryKey: true,
  },
  sAddress: {
    type: DataTypes.VARCHAR(200),
    allow_null: false,
  },
  sCity: {
    type: DataTypes.VARCHAR(50),
    allow_null: false,
  },
  sState: {
    type: DataTypes.VARCHAR(15),
    allow_null: false,
  },
  sZip: {
    type: DataTypes.VARCHAR(5),
    allow_null: false,
  },
  sCanDeliver: {
    type: DataTypes.BOOLEAN,
    allow_null: false,
  }
},
    {
      sequelize,
      timestamp: true,
      underscored: true,
      modelName: 'seller'
    }
});