const ClientDomain = require('../domain/client');

const clientRoute = '/client';

const db = require('../database/db');

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
 
  app.get(`${clientRoute}/db`, async (req, res) => {
    const data = await db.getAllClients();
    res.send(data);
  });

  app.get(`${clientRoute}/dbc`, async (req, res) => {
    await db.insertClient({nome: 'Nome 1', idade: 27});
    res.send("Inserido com sucesso!");
  });

  app.get(`${clientRoute}/dbp`, async (req, res) => {
    await db.insertPresents([{nome: 'Nome 1', idade: 27}, {tipo:'brinquedo'}]);
    res.send("Inseridos com sucesso!");
  });

};
