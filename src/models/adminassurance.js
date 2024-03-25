
module.exports.AdminAssuranceModel = (sequelize, DataTypes,Assurance) => {
    return sequelize.define('AdminAssurance', {
        idAdminAssurance: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        idAssurance:{
            type:DataTypes.INTEGER,
            references:{
                model:Assurance,
                key:'idAssurance'
            }
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        image:{
            type:DataTypes.STRING,
            
        },
        fullName:{
            type:DataTypes.VIRTUAL,
            get() {
                return `${this.nom} ${this.prenom}`;
              },
        },
        tel: {type:DataTypes.STRING,
               unique:{
                msg:'Le numero est deja utiliser'
                     }
           },
        email: {type:DataTypes.STRING,
                   allowNull:false ,
                 unique:{
                    msg:"Le email est déja utiliser"
                 }   
                },
        adresse: DataTypes.STRING,
        password:{
            type:DataTypes.STRING,
            allowNull:false ,
            
        },
    });
};


/**
 {
    idAdminAssurance:'',
    idAssurance:''
    nom:'',
    prenom:'',
    tel:'',
    email:'',
    adresse:'',
    password:''
 }
 */