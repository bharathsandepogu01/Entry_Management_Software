const express = require('express');
const router = express.Router();
const cors = require('cors');

const Host = require('../models/host.model');

const sendEmail = require('./sendEmail');

const sendSMS = require('./sendSMS');

router.use(cors());

router.post('/add', addHost)

function addHost(req, res){
    
    const newHost= {
        hostName: req.body.hostName,
        hostPhone: req.body.hostPhone,
        hostEmail: req.body.hostEmail,
        hostAddress: req.body.hostAddress
    };

    Host.findOne({
        hostName: req.body.hostName,
        hostEmail: req.body.hostEmail
    })
    .then(host => {
        if(!host){
            Host.create(newHost)
            .then(added => {
                res.send("Host registered");
            })
            .catch(err => {
                var arr= Object.keys(err['errors'])
                var errors= []
                for(i in arr){
                  errors.push(err['errors'][arr[i]].message);
                }
                res.json({error: errors});
            })
        }
        else{
            res.json({error:["Host already registered!!!"]});
        }
    })
    .catch(err => {
        var arr= Object.keys(err['errors'])
        var errors= []
        for(i in arr){
          errors.push(err['errors'][arr[i]].message);
        }
        res.json({error: errors});
    })
}

router.post('/checkinVisitor', checkinVisitor)

function checkinVisitor(req, res){
     
    const visitorData= {
        $addToSet:{
          visitors: {
            visitorName: req.body.visitorName,
            visitorPhone: req.body.visitorPhone,
            visitorEmail: req.body.visitorEmail
          }
        }
      }

    Host.findOneAndUpdate({
        hostName: req.body.hostName,
        hostEmail: req.body.hostEmail,
        "visitors.visitorEmail" : {$ne : req.body.visitorEmail}
    }, visitorData)
    .then(host => {
        if(!host){
            res.json({error: ["No host found or user already checked In"]});
        }
        else{
            const details = {
                subject: "New Visitor Arrived",
                body: "Name : "+ req.body.visitorName+"<br>Phone : "+req.body.visitorPhone+"<br>Email : "+req.body.visitorEmail+"."
            } 

            // sendEmail(details, host.hostEmail);
            
            const SMS= {
                body: 'New Visitor Arrived, \r\n'
                        +"Name : "+ req.body.visitorName
                        +"\r\nPhone : "+req.body.visitorPhone
                        +"\r\nEmail : "+req.body.visitorEmail+".\r\n",
                toNumber: host.hostPhone
            };

            // sendSMS(SMS);

            res.send("visitor checked In");
        }
    })
    .catch(err => {
        var arr= Object.keys(err['errors'])
        var errors= []
        for(i in arr){
          errors.push(err['errors'][arr[i]].message);
        }
        res.json({error: errors});
    })  
}


router.post('/checkoutVisitor', checkoutVisitor)

function checkoutVisitor(req, res){
    const checkoutDate = new Date();
    
    const newValues={
        $set:{
          "visitors.$.checkoutTime" : checkoutDate,
        }
      };
   
    Host.findOneAndUpdate({
        hostName: req.body.hostName,
        hostEmail: req.body.hostEmail,  
        "visitors.visitorEmail" : req.body.visitorEmail,
        "visitors.checkoutTime": {$eq : null} 
    }, newValues,  {new: true})
      .then(visitor=>{
            if(visitor){
                var arr= Object.keys(visitor.visitors);
                for(i in arr){
                    if(visitor.visitors[arr[i]].visitorEmail === req.body.visitorEmail){
                        console.log(visitor.visitors[arr[i]].checkoutTime);
                        const details = {
                            subject: "Thank You For Your visit",
                            body: "Here is your visit details,"
                            +"<br><br>Name : "+ visitor.visitors[arr[i]].visitorName
                            +"<br>Phone : "+visitor.visitors[arr[i]].visitorPhone
                            +"<br>checkinTime : "+visitor.visitors[arr[i]].checkinTime
                            +"<br>checkoutTime : "+visitor.visitors[arr[i]].checkoutTime
                            +"<br>HostName : "+visitor.hostName
                            +"<br>Address : "+visitor.hostAddress
                        } 
            
                        // sendEmail(details, req.body.visitorEmail);
                        
                        const SMS= {
                            body: "Here is your visit details"
                                    +"\r\nName : "+visitor.visitors[arr[i]].visitorName
                                    +"\r\nPhone : "+visitor.visitors[arr[i]].visitorPhone
                                    +"\r\ncheckinTime : "+visitor.visitors[arr[i]].checkinTime
                                    +"\r\ncheckoutTime : "+visitor.visitors[arr[i]].checkoutTime
                                    +"\r\nHostName : "+visitor.hostName
                                    +"\r\nAddress : "+visitor.hostAddress,
                            toNumber: visitor.visitors[arr[i]].visitorPhone
                        };
                        
                        // sendSMS(SMS);            
                   }

                }
                res.send("Visitor Checked Out");
            }
            else{
                res.json({error: ["invalid details or Visitor checked Out already"]});
            }
      })
      .catch(err => {
        var arr= Object.keys(err['errors'])
        var errors= []
        for(i in arr){
          errors.push(err['errors'][arr[i]].message);
        }
        res.json({error: errors});
    })
}

module.exports= router;