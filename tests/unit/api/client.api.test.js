const supertest = require('supertest');
const app = require('../../../src/infrastructure/rest_server');

describe('[UNIT | API REST] - User', () => {
  describe('Post', () => {
    it('Valid', async () => {
      const response = await supertest(app)
        .post('/client')
        .send({
          idade: 18,
          genero: 'Masculino',
          generosMusicais: 'Rap',
          gostaAnime: true,
          gostaSeries: true,
          animes: ['One Piece', 'kimetsu no yaiba', 'kuroko no basket'],
          series: ['greys anatomy', 'arrow'],
        });

      expect(response.body).toEqual(
        expect.objectContaining({
          idade: 18,
          genero: 'Masculino',
          generosMusicais: 'Rap',
          gostaAnime: true,
          gostaSeries: true,
          animes: ['One Piece', 'kimetsu no yaiba', 'kuroko no basket'],
          series: ['greys anatomy', 'arrow'],
        }),
      );
    });
  });
});
