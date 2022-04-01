const userRoute = '/client';

module.exports = (app) => {
  app.get(`${userRoute}`, async (req, res) => {
    const response = 'olá';
    res.send(response);
  });
};
