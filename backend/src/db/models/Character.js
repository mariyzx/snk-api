const { Model, DataTypes } = require('sequelize');

class Character extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      picture: DataTypes.STRING,
      age: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      info: DataTypes.STRING,
    }, {
      sequelize,
      timestamps: false
    })
  }
}

module.exports = Character;