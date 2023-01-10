const Character = require('../db/models/Character');

module.exports = {
  async getAll(req, res) {
    const chars = await Character.findAll();

    return res.json(chars);
  },

  async getById(req, res) {
    const { id } = req.params;

    const char = await Character.findByPk(id);

    if (!char) return res.status(404).json({message: 'Character not found!'});

    return res.json(char);

  }
}