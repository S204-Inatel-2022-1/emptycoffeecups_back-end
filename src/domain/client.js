const User = {
  analise(data) {
    const perfil = {
      idade: data.idade,
      genero: data.genero,
      generosMusicais: data.generosMusicais,
      gostaAnime: data.gostaAnime,
      gostaSeries: data.gostaSeries,
      animes: data.animes,
      series: data.series,
    };
    return perfil;
  },

};

module.exports = User;
