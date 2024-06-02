module.exports.PrescriptionModel = (sequelize, DataTypes, Assure, AgentClinique, AgentAssurance) => {
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
            type: DataTypes.INTEGER,
            references: {
                model: AgentClinique,
                key: 'id'
            }
        },
        idMedecinAssurance: {
            type: DataTypes.INTEGER,
            references: {
                model: AgentAssurance,
                key: 'id'
            }
        },
        idAgentAssurance: {
            type: DataTypes.INTEGER,
            references: {
                model: AgentAssurance,
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
        }
    });

    return Prescription;
};
