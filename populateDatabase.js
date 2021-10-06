require("dotenv/config");

const xlsxFile = require("read-excel-file/node");

const MongoClient = require("mongodb").MongoClient;

async function getData() {
  const data = await xlsxFile("./codingChallenge.xlsx");

  const documents = [];

  data.slice(1).forEach(async (row) => {
    const deviceName = row[1];
    const requestType = row[2];
    const condition = row[3];
    const storageCapacity = row[4];
    const price = row[5];

    documents.push({
      deviceName,
      requestType,
      condition,
      storageCapacity,
      price,
    });
  });

  MongoClient.connect(process.env.DATABASE_URL, async function (err, client) {
    if (err) throw err;
    console.log("Connected to Database");

    let db = client.db(process.env.DATABASE_NAME);

    // insert record
    await db
      .collection("requests")
      .insertMany(documents, function (err, records) {
        if (err) throw err;
      });

    console.log("Added data to DB successfully");
    client.close();
  });
}

getData();
