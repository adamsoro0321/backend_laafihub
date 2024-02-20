const {Sequelize,DataTypes} = require('sequelize');
const { DB } = require('../config');
const ArticleModel =require('../models/Article');
const vehiculeModel =require('../models/vehicule');
const UserModel =require('../models/user');
const PanierModel =require('../models/Panier');
const PanierArticleModel =require('../models/panierArticle');
const vehiculeArticleModel =require('../models/vehiculeArticle');

const sequelize = new Sequelize(DB.database, DB.username, DB.password, {
    host: DB.host,
    dialect:  DB.dialect,
    logging: false,
  });


  (async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()



const Article =ArticleModel(sequelize,DataTypes);
const User =UserModel(sequelize,DataTypes);
const Vehicule =vehiculeModel(sequelize,DataTypes,User) ;
const Panier = PanierModel(sequelize,DataTypes,User) ;
const PanierArticle=PanierArticleModel(sequelize ,DataTypes,Panier,Article);
const  VehiculeArticle =vehiculeArticleModel(sequelize, DataTypes,Vehicule,Article)


User.hasMany(Vehicule,{foreignKey:'idUser'});
Vehicule.belongsTo(User)
User.hasMany(Panier,{foreignKey:'idUser'});
Panier.belongsTo(User);
Vehicule.belongsToMany(Article,{through:VehiculeArticle});
Article.belongsToMany(Vehicule,{through:VehiculeArticle});
Panier.belongsToMany(Article,{through:PanierArticle});
Article.belongsToMany(Panier,{through:PanierArticle});


module.exports={
    sequelize,
    Article,
    User,
    Vehicule,
    Panier,
    PanierArticle,
    VehiculeArticle
}         