'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_id: DataTypes.INTEGER,
    product: DataTypes.STRING
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};