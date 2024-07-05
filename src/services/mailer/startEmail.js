const { transporter } = require("./mailService");

const sendAppStart =async (url)=>{
    /** envoie un email pour signaler que l'application a demarrer */
    try {
        const mailOptions={
                from: 'adamsoro0321@gmail.com', // sender address
                to: "braintech0321@gmail.com,manegarodrol@gmail.com", // list of receivers
                subject: "LaafiSeebre", // Subject line
                text: "LaafiSeebre", // plain text body
                html:`<h1><b>Votre application laafisebre vient de demarre </b></h1> <p >${url} </p>` , // html body
           }
       const info=   await transporter.sendMail(mailOptions ) ;
       console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports=sendAppStart ;