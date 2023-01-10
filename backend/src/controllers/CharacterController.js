const Character = require('../db/models/Character');

module.exports = {
  async getAll(req, res) {
    const chars = await Character.findAll();

    return res.json(chars);
  },
}