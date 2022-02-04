const nodemailer = require ('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chijindu4437@gmail.com',
      pass: 'youngvics'
    },
    tls: {
        rejectUnauthorized:false
    }
});
  
var mailOptions = {
    from: 'nikevictorchijindu@gmail.com',
    to: 'kyrianebube52@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Gig man. You need to have ur password offhand!'
};
  
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});