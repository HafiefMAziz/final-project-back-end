'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.hasMany(models.invoice, {foreignKey: 'paymentId'})
    }
  }
  payment.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};