import {MongoClient} from 'mongodb';
import nextConnect from 'next-connect'

const client = new MongoClient('mongodb+srv://mct:mct12345@expensetracker.reotc.mongodb.net/mct?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

async function database(req, res, next){
    if(!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('mct');
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;