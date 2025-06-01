import { MongoClient, ServerApiVersion } from "mongodb";

function dbConnect(collectionName) {
  const uri = process.env.MONGO_URL;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.MONG0_COLLECTION).collection(collectionName)
}

export default dbConnect;
