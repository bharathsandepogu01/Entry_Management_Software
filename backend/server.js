const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const app= express();
const port= 8001;

app.use(cors());


mongoose.connect('mongodb://localhost:27017/entry_management_db', {useNewUrlParser: true});


const connection = mongoose.connection;

connection.once('open', function(){
    console.log("connected");
});

mongoose.set('useFindAndModify', false);

const hostRoutes = require('./routes/host');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use('/host', hostRoutes);

app.listen(port, () => console.info('REST API running on port '+ port));
