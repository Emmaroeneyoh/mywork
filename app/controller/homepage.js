const nodemailer = require("nodemailer");

const homePage = async (req, res) => {
    try {
      res.render("index");
    } catch (error) {
      console.log(error);
    }
};


const contactus = async (req, res) => {
    const { name, email, subject, message } = req.body
    console.log('name :', req.body)
    try {
      //start of nodemailer
   var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'emmaroeneyoh@gmail.com',

      pass: 'ewthhejrxgwpciwa',
    },
    tls: {
      rejectUnauthorized: false,
    },
   });
        
    var mailOptions = {
        from: 'emmaroeneyoh@gmail.com',
        to: `emmaroeneyoh@gmail.com`,
        subject: ` name :${name}  , subject  ${subject}`,
      text: message
        // html: data,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            return res.render('contact')
        }
      });
    //   end of nodemailer
    } catch (error) {
      console.log(error);
    }
};


  
module.exports = {
    homePage , contactus
}