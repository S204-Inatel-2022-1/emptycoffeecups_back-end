const ClientDomain = require('../domain/client');

const clientRoute = '/client';

module.exports = (app) => {
  app.get(`${clientRoute}`, async (req, res) => {
    const response = 'Client page!';
    res.send(response);
  });

  app.post(`${clientRoute}`, async (req, res) => {
    const data = req.body;
    const response = await ClientDomain.analise(data);
    res.send(response);
  });
};
