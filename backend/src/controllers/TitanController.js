const Titan = require('../db/models/Titan');

module.exports = {
  async getAll(req, res) {
    const titans = await Titan.findAll();

    return res.json(titans);
  },

  async getById(req, res) {
    const { id } = req.params;

    const titan = await Titan.findByPk(id);

    if (!titan) return res.status(404).json({message: 'Titan not found!'});

    return res.json(titan);
  }
}