module.exports.PrescriptionModel = (sequelize, DataTypes, Assure, AgentClinique, AgentAssurance,agentPharmacy,agentLabo) => {
    const Prescription = sequelize.define('Prescription', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idAssure: {
            type: DataTypes.INTEGER,
            references: {
                model: Assure,
                key: 'id'
            }
        },
        idAgentClinique: {
            /** celui qui fait la prescription */
            type: DataTypes.INTEGER,
            references: {
                model: AgentClinique,
                key: 'id'
            }
        },
        idMedecinAssurance: {
            /** le medecin conseiller verifier une prescription est medecalement conforme */
            type: DataTypes.INTEGER,
            references: {
                model: AgentAssurance,
                key: 'id'
            }
        },
        idAgentAssurance: {
            /** lui approuve la prescription ou non apres validation du medecin conseiller */
            type: DataTypes.INTEGER,
            references: {
                model: AgentAssurance,
                key: 'id'
            }
        },
        idAgentPharmacy:{
            /** la pharmacien charger de traiter la prescription au cas ou s'il sagit d'une prescription pour achat de produit */
            type: DataTypes.INTEGER,
            references: {
                model: agentPharmacy,
                key: 'id'
            }
            
        },
        idAgentLabo:{
            /** la laboratin charger de faire l'examen prescrit  */
            type: DataTypes.INTEGER,
            references: {
                model: agentLabo,
                key: 'id'
            }
            
        },
        titre: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        dateApprotionMedecinConseille: {
            type: DataTypes.DATE
        },
        datePrescriptionAgentAssurance: {
            type: DataTypes.DATE
        },
        datePrescription: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        statusMedecinConseille: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        statusAgentAssurance: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        image: {
            type: DataTypes.STRING
        } ,
        isSatisfy:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
       type:{
        type: DataTypes.STRING,
        defaultValue: 'pharma',
        validate: {
            isIn: [['pharma', 'labo']]
        }
       },
        satisfyDate:{
            type: DataTypes.DATE,
        
        },
        commentAgentPharma:{
            type: DataTypes.TEXT,
        },
        commentAgentLabo:{
            type: DataTypes.TEXT,
        },
        commentAgentMedecinConseille:{
            type: DataTypes.TEXT,
        },
        commentAgentAssurance:{
            type: DataTypes.TEXT,
        },
        commentAgentClinique:{
            type: DataTypes.TEXT,
        }
    });

    return Prescription;
};
