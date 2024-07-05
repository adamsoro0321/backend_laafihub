const nodemailer = require('nodemailer');
 const host=  "smtp.gmail.com"; //'smtp-relay.brevo.com' //'smtp.ethereal.email' //process.env.SMTP_HOST;
 const port=   465;//587 //process.env.SMTP_PORT;
 const user =process.env.SMTP_USER //'adamsoro0321@gmail.com' ;
 const pass=process.env.SMTP_USER_PASS //'vzwk obox bcoo qija' //'yvzk5mr2v2cNDDBeth' //

// Configuration du transporteur avec Ethereal (pour les tests)
const transporter = nodemailer.createTransport({
 service : 'gmail',
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

const mailToNewAgent =async(to,email,password,url)=>{

 const mailOptions= {
    from: 'adamsoro0321@gmail.com',
    to,
    subject: 'Laafiseebre ! votre compte a été creér .',
    text: 'Votre compte a été creér avec succes.',
    html:`<h1><b>Votre compte est creér sur Laafiseebre </b></h1>
               <h3> vos identifiants: </h3> 
               <p>
                 Votre email :${email} <br/>
                  Votre mot de pass:${password}
               </p>
               <p>Connectez vous sur : ${url} </p>` 
  };
  await transporter.sendMail(mailOptions ,(error, info)=>{       
       if (error) {
          console.log(error);
         } else {
            console.log('Email sent: ' + info.response);
         }
       }
     )

}


module.exports ={ transporter ,sendEmail,mailToNewAgent};
