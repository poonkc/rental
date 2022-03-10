const express = require('express')
const cors = require('cors')
const app = require("./server")
const port = 3000

// app.use(cors())
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// const { MongoClient } = require("mongodb");
// const uri = "mongodb://myUserAdmin:myUserAdmin@localhost:27017";

// app.post('/book/create', async(req, res) => {
//   const book = req.body;
//   const client = new MongoClient(uri);
//   await client.connect();
//   await client.db('mydb').collection('book').insertOne({
//     id: parseInt(book.id),
//     name: book.name,
//     amount : book.amount
//   });
//   await client.close();
//   res.status(200).send({
//     "status": "ok",
//     "message": "User with ID = "+book.id+" is created",
//     "book": book
//   });
// })

// app.get('/books', async(req, res) => {
//   const id = parseInt(req.params.id);
//   const client = new MongoClient(uri);
//   await client.connect();
//   const users = await client.db('mydb').collection('book').find({}).toArray();
//   await client.close();
//   res.status(200).send(users);
// })