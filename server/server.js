const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'forum';

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('forum');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    
    callback(docs);
  });
};

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('forum');
  // Insert some documents
  collection.insertMany(
    [
    { name: 'uttu',email:'uttu@gmail.com',password:'uttu123',isAdmin:false },
    { name: 'yash',email:'yash@gmail.com',password:'yash123',isAdmin:false }, 
    { name: 'vedant',email:'vedant@gmail.com',password:'vedant123',isAdmin:false }], function(err, result) {
    
    console.log('Inserted 3 documents into the collection');
    callback(result);
  });
};

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  /*insertDocuments(db, function() {
    client.close();
  });*/
  findDocuments(db, function() {
      client.close();
    });
});

app.listen(3001, ()=> {
  console.log(`app is running on port 3001`);
})

