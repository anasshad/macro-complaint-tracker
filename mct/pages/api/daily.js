
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect();

handler.use(middleware)

handler.get(async (req, res) => {
    const {data} = req.query;
    
    const dataModel = { "_id": new ObjectID(), "date": date, "calories": { "label": "Calories", "total": 0, "target": 0, "variant": 0 }, "carbs": { "label": "Carbs", "total": 0, "target": 0, "variant": 0 }, "fat": { "label" : "Fat", "total": 0, "target": 0, "variant": 0 }, "protein": { "label" : "Protein", "total": 0, "target": 0, "variant": 0 }}

    let doc = {};

    if(date){
        doc = await req.db.collection('daily').findOne({date: new Date(date)})
    } else {
        doc = await req.db.collection('daily').findOne()
    }


    if(doc == null){
        doc = dataModel
    }

    res.json(doc)
})

export default handler;