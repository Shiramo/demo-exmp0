import {MongoClient} from "mongodb";


export default async function handler(req, res){
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://ozhytar:1Shiramo4688cl1@cluster0.hc3gyhn.mongodb.net/meetup?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsConnection = db.collection('meetups');

        const result = await meetupsConnection.insertOne(data);

        await client.close();

        res.status(201).json({message : "Meetup inserted!"})
    }
}