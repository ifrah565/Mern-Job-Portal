const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

require('dotenv').config()

 
// middleware
app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@job-portal-be.hfwacad.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-be`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create db
const db = client.db("job-portal-be");
const jobcollections = db.collection("jobs")

// post a job
app.get("/post job", async(req, res) =>{
    const body = req.body;
    body.create = new Date ();
    // console.log(body)
    const result = await jobscollections.insertOne(body);
    if(result.insertedid)
    {
        return res.status(200).send(result);
    
    }
    else{
        return res.status(404).send({
            message: "can not insert! Try again later",
            status: false 

        })
    }

})

// get all jobs

app.get("/all-jobs", async(req, res) =>{
    const jobs = await jobcollections.find({}).toArray()
    res.send(jobs);


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})