const app = require("./index");
const { transporter } = require("./src/services/mailer/mailService");

const port =process.env.PORT || 5000 ;

/*
(
    async()=>{
        try {
            const mailOptions={
                   from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
                    to: "bar@example.com, baz@example.com", // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: "Hello world?", // plain text body
                    html: "<b>Hello world?</b>", // html body
            }
           const info=   await transporter.sendMail(mailOptions ) ;
           console.log("Message sent: %s", info.messageId);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
)()
*/
app.listen(port,()=>{console.log("app is running on port "+port)})  