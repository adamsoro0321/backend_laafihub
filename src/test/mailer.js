const { sendEmail,transporter  } = require("../services/mailer/mailService");

let mailOptions = {
    from: 'braintech0321@gmail.com', // Adresse de l'expéditeur
    to: 'adamsoro0321@gmail.com', // Liste des destinataires
    subject: 'Hello ✔', // Sujet
    text: 'Hello world?', // Texte en clair
    html: '<b>Hello world?</b>' // HTML du message
  };

transporter.sendMail(mailOptions,(error,info)=>{
    if (error) {
        return console.error('Error occurred. ' + error.message);
      }
  
      console.log('Message sent: %s', JSON.stringify(info) );
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
} )