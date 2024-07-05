const { sendEmail,transporter  } = require("../services/mailer/mailService");

let mailOptions = {
    from: 'adamsoro0321@gmail.com', // Adresse de l'expéditeur
    to: 'braintech0321@gmail.com', // Liste des destinataires
    subject: 'Hello ✔', // Sujet
    text: 'Hello world?', // Texte en clair
    html: '<b>Hello world 123 66?</b>' // HTML du message
  };

transporter.sendMail(mailOptions,(error,info)=>{
    if (error) {
        console.error('Error occurred. ' + error.message);
      }else{
        console.log('Message sent: %s', JSON.stringify(info) );
   
      }
  
     
} )