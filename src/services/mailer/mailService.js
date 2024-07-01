const nodemailer = require('nodemailer');
 const host=  "smtp.gmail.com"; //'smtp-relay.brevo.com' //'smtp.ethereal.email' //process.env.SMTP_HOST;
 const port=   465;//587 //process.env.SMTP_PORT;
 const user = '7735ec001@smtp-brevo.com' //'frances.dare@ethereal.email' //process.env.SMTP_USER;
 const pass='zURcJLEftrFbk967' //'yvzk5mr2v2cNDDBeth' //process.env.SMTP_USER_PASS

// Configuration du transporteur avec Ethereal (pour les tests)
const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true, // Utiliser `true` pour le port 465, `false` pour les autres ports
  auth: {
    user,
    pass
  }
});



const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: 'maddison53@ethereal.email', // L'adresse de l'expéditeur
    to, // Le destinataire
    subject, // Le sujet de l'email
    text, // Le contenu en texte brut
    html // Le contenu en HTML
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};




module.exports ={ transporter ,sendEmail};
