import { MongoClient, Db } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
  // eslint-disable-next-line no-var
  var _mongoConnectionLogged: boolean | undefined;
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not set.");
}

if (!dbName) {
  throw new Error("MONGODB_DB environment variable is not set.");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (global._mongoClientPromise) {
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
  global._mongoClientPromise = clientPromise;
}

export async function getDb(): Promise<Db> {
  let mongoClient: MongoClient;
  try {
    mongoClient = await clientPromise;
  } catch (err) {
    console.error("MongoDB connection failed", err);
    throw err;
  }
  if (!global._mongoConnectionLogged) {
    console.log("MongoDB connection has been made");
    global._mongoConnectionLogged = true;
  }
  return mongoClient.db(dbName);
}

