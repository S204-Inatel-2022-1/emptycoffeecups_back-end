const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://root:root@cluster0.omcop.mongodb.net/test';

let db = null;

async function connect() {
  db = await MongoClient.connect(uri,
    {
      keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true,
    });
  const client = db.db('GiftTips').collection('Gifts');
  return client;
}

function chooseThreePresents(allPresents) {
  const presents = [];

  const index1 = Math.floor(Math.random() * allPresents.length);
  let index2 = Math.floor(Math.random() * allPresents.length);

  while (index2 === index1) {
    index2 = Math.floor(Math.random() * allPresents.length);
  }

  let index3 = Math.floor(Math.random() * allPresents.length);
  while (index3 === index1 || index3 === index2) {
    index3 = Math.floor(Math.random() * allPresents.length);
  }

  presents.push(allPresents[index1], allPresents[index2], allPresents[index3]);

  return presents;
}

async function findAllPresents(interests, tags) {
  let results = [];

  try {
    const dbClient = await connect();

    results = await dbClient.find({
      $and: [
        {
          $or: [
            { genero: interests.genero },
            { genero: 'Unissex' },
          ],
        },
        { idade_minima: { $lte: interests.idade } },
        { tags: { $in: tags } },
      ],
    }).toArray();
    db.close();
  } catch (error) {
    return error;
  }

  return results;
}

const database = {

  async findPresents(interests) {
    let results = [];
    let presents = [];
    let tags = [];
    const animes = interests.anime;
    const series = interests.serie;

    if (animes !== '') {
      tags = tags.concat(animes);
    }

    if (series !== '') {
      tags = tags.concat(series);
    }

    // find presents first time
    results = await findAllPresents(interests, tags);

    // find general presents, second time
    if (results.length < 3) {
      tags = ['Geral'];
      results = results.concat(await findAllPresents(interests, tags));
    }

    if (results.length > 3) {
      presents = presents.concat(chooseThreePresents(results));
    } else {
      presents = presents.concat(results);
    }
    return presents;
  },
};

module.exports = database;
