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
 
  app.get(`${clientRoute}/list`, async (req, res) => {
    const data = await db.getAllClients();
    res.send(data);
    data.forEach(element => {
      console.log(element);
    });
  });

  app.get(`${presentsRoute}`, async (req, res) => {
    await db.insertPresents([{  
            nome:'Abridor de vinho',
            idade_minima: 18,
            genero:'Unissex',
            tag:'Bebidas'},
        {
            nome: 'Acessórios',
            idade: 0,
            genero: 'Unissex',
            tag: 'Beleza'
        },
    ]);

    res.send("Inseridos com sucesso!");
  });


  /*
  app.get(`${clientRoute}/add`, async (req, res) => {
    await db.insertClient({nome: 'Nome 1', idade: 27});
    res.send("Inserido com sucesso!");
  });
*/
};
