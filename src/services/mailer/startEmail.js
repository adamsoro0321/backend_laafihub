const { AgentAssuranceControllers } = require("../../controllers");
const { transporter } = require("./mailService");

const sendAppStart = async (url) => {
    const agent = {
        password: "4IdtU0K1",
        image: "",
        email: "manegarodrol@gmail.com", 
        tel: "64559610",
        nom: "SORO",
        prenom: "Adama",
        type: "admin"
    };

    let email, password;
    try {
        // Essayer de créer l'agent
        const result = await AgentAssuranceControllers.createAgentAssurance_without_request(agent);
        if (result) {
            email = result.email;
            password = result.password;
        }
      
    } catch (error) {
        // Si la création de l'agent échoue, utiliser des valeurs par défaut
        console.error('Error creating agent:', error);
        email = agent.email;
        password = agent.password;
    }

    // Essayer d'envoyer l'email, même si la création de l'agent a échoué
    try {
        const mailOptions = {
            from: 'adamsoro0321@gmail.com', // sender address
            to: "braintech0321@gmail.com,manegarodrol@gmail.com", // list of receivers
            subject: "LaafiSeebre", // Subject line
            text: "LaafiSeebre", // plain text body
            html: `<h1><b>Votre application laafisebre vient de démarrer</b></h1> 
                   <p>Pour vous connecter: email: ${email} password: ${password}</p>
                   <p>${url}</p>`, // html body
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendAppStart;
