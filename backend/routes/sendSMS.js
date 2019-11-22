const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '67c90351',
  apiSecret: 'xwtoMBtmD6Tb4E8v',
});

function sendSMS(details){

    const from = 'EntryManagement';
    const to = '91'+details.toNumber;
    const text = details.body;
    
    nexmo.message.sendSms(from, to, text, {type: "unicode"}, (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          if (responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
          } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
          }
        }
    });

}

module.exports= sendSMS;