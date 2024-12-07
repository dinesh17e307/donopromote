import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '../../../../config';

const client = new MongoClient(MONGODB_URI);

export default async function handler(req:any, res:any) {
  try {
    if (req.method === 'GET') {
      const clientInstance = await client.connect();
      const db = clientInstance.db('AffiliateLink');
      const users = await db.collection('Topbrand').find({}).toArray();
      res.status(200).json(users);
      clientInstance.close();
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect to MongoDB' });
  }
}
