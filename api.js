const express = require('express');
const app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const port = 8900;
const mongoUrl = "mongodb://localhost:27017";
let db;
const cors = require('cors');
app.use(cors());
//connect the api to mongodb client
MongoClient.connect(mongoUrl, (err, client) => {
    if (err) console.log("Error");
    db = client.db("project");
    app.listen(port, (err) => {
        if (err) console.log("Error");
        console.log(`Server is running on port ${port}`);
    });
});
//serving restaurant data from database
app.get('/restaurant', (req, res) => {
    db.collection('restaurant').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
//serving city data from database
app.get('/city', (req, res) => {
    db.collection('city').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//serving restaurant data from database
app.get('/restaurant', (req, res) => {

    db.collection('restaurant').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//serving restaurant data from database
app.get('/categories', (req, res) => {

    db.collection('categories').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//search based on city
app.get('/restaurantdetails', (req, res) => {
    if(req.query.city){
    db.collection('city').find({query}).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
    }
})
//serving restaurant based on below queries for sort 
//and filter where city id is sent as params
app.get('/restaurantdetails/:id', (req, res) => {
    let query = {city: req.params.id};
    let psort = {};
    //sort value = (rating(1)/cost(2),ascending(1)/descending(-1))
    if(req.query.sort) {
        let sort = req.query.sort.split(",");
        if(Number(sort[0])==1) {
            psort = {rating: Number(sort[1])}
        }
        else{
            psort = {cost: Number(sort[1])}
        }
    }
    if(req.query.category) {
        query = { ...query, "Categories.category": req.query.category };
    }
    //cost = (lowcost,highcost)
    if(req.query.cost){
        let cost = req.query.sort.split(",");
        query = { ...query, cost: { $gt: parseInt(cost[0]), $lt: parseInt(cost[1]) } };
        
    }
    if(req.query.Tags) {
        query = {...query, Tags: req.query.Tags};
    }
    if(req.query.rating) {
        query = {...query, rating: parseInt(req.query.rating)}
    }
    
    db.collection('restaurant').find(query).sort(psort).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
})
