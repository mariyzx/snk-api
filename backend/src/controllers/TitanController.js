const Titan = require('../db/models/Titan');

module.exports = {
  async getAll(req, res) {
    const titans = await Titan.findAll();

    return res.json(titans);
  },
}