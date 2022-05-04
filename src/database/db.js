const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Uttoni:senha123@clusterspeedtest.xgw9c.mongodb.net/ClusterSpeedTest?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let db = null;

async function connect(){
    db = await MongoClient.connect(uri, { keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true, })
    const client = db.db("travel-agency").collection("travel");
    return client;
}

database = {
    getAllClients : async function() {
        let results = []

        try{
            let dbClient = await connect();
            results = await dbClient.find({}).toArray();
            db.close();
            console.log("Dados encontrados!");
        }catch(error){
            console.log("Erro:", error);
        }

        return results;
    },
    insertClient : async function(client) {
        try{
            let dbClient = await connect();
            const result = await dbClient.insertOne(client);
            db.close();
            console.log("Inserido com sucesso!");
        }catch(error){
            console.log("Erro:", error);
        }
    },

    insertPresents: async function(presents) {
        try{
            let dbClient = await connect();
            const result = await dbClient.insertMany(presents);
            db.close();
            console.log("Inserido com sucesso!");
        }catch(error){
            console.log("Erro:", error);
        }
    },
}

module.exports = database;