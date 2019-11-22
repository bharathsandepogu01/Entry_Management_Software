const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    hostName: {type:String, required:[true, 'HostName cannot be empty']},

    hostPhone: { type:Number, required: [true, 'Phone number cannot be empty'],

        validate: {
            validator: function(v) {
                var re = /^\d{10}$/;
                return re.test(v)
            },
            message: 'Phone number must be 10 digit number'
        }
    
    },

    hostEmail: {type:String, required: [true, 'email cannot be empty'],

        validate: {
            validator: function(v) {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(v)
            },
            message: 'Please fill a valid email address'
        }

    },

    hostAddress: {type:String, required: [true, 'Address cannot be empty']},

    visitors: [{

        visitorName: {type:String, required:[true, 'Name cannot be empty']},

        visitorPhone: { type:Number, required: [true, 'Phone number cannot be empty'],
    
            validate: {
                validator: function(v) {
                    var re = /^\d{10}$/;
                    return re.test(v)
                },
                message: 'Phone number must be 10 digit number'
            }
        
        },
    
        visitorEmail: {type:String, required: [true, 'email cannot be empty'],
    
            validate: {
                validator: function(v) {
                    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    return re.test(v)
                },
                message: 'Please fill a valid email address'
            }
    
        },

        checkinTime: {type:Date, default: Date.now},

        checkoutTime: {type:Date, default: null} 

    }]
    
});

schema.set('toJSON', {virtuals:true});

module.exports = mongoose.model('Host', schema);