const { Model, DataTypes } = require('sequelize');

class Titans extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      height: DataTypes.INTEGER,
      picture: DataTypes.STRING,
    }, {
      sequelize,
      timestamps: false
    })
  }
}

module.exports = Titans;