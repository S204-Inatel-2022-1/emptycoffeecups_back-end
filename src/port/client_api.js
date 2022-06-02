const ClientDomain = require('../domain/client');

const clientRoute = '/client';
const presentsRoute = '/presents';

const db = require('../database/db');

module.exports = (app) => {
  app.get(`${clientRoute}`, async (req, res) => {
    const response = 'Client page!';
    res.send(response);
  });

  app.post(`${clientRoute}`, async (req, res) => {
    const data = req.body;
    const response = await ClientDomain.analise(data);
    await db.insertClient(response);
    res.send(response);
  });

  app.post(`${presentsRoute}`, async (req, res) => {
    const interests = req.body;
    const presents = await db.findPresents(interests);
    res.send(presents);
  });
};
