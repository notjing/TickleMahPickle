const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string
// const uri =  "mongodb+srv://andrewchen7101:mongo@cluster0.vtbrvp2.mongodb.net/";


const uri = "mongodb+srv://jerrychen4096:mongo@cluster0.vtbrvp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
                      
 async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();

         // Get the database and collection on which to run the operation
         const db = client.db("testdatabase");
         const col = db.collection("testcollection");
        
        // Create new documents                                                                                                                                         
         const peopleDocuments = [
           {
             "name": { "firstName": "Alan", "lastName": "Turing" },
           },
           {
             "name": { "firstName": "Grace", "lastName": "Hopper" },
           }
         ]
         // Insert the documents into the specified collection        
         const p = await col.insertMany(peopleDocuments);

         // Find the document
         const filter = { "lastName": "Chen" };
         const document = await col.findOne(filter);

         // Print results
         console.log("Document found:\n" + JSON.stringify(document));

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
