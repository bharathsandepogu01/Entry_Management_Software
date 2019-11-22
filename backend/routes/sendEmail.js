var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cargerservice@gmail.com',
      pass: 'cargerservice01'
    }
  });

function send_mail(details, to_email){
    
    mailOptions={
        from: 'cargerservice@gmail.com',
        to : to_email,
        subject : details.subject,
        html : details.body 
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        } 
    });

}

module.exports= send_mail;
