const Seller = require('../../tdb-project-2/models/seller');
const Customer = require('./customer');

Seller.hasMany(Customer, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Customer.belongsTo(Seller, {
  foreignKey: 'user_id'
});

module.exports = { Seller, Customer };
