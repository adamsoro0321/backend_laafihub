
module.exports.RfidIdentifyModel = (sequelize, DataTypes) => {
    const rfidIdentify= sequelize.define('rfid_identify', {
        code:{
            type: DataTypes.STRING,
        },
        rfid:{
            type:DataTypes.STRING,
        },
        date:{
            type:DataTypes.DATE ,
            defaultValue: DataTypes.NOW,
        },
        isRead:{
            type:DataTypes.BOOLEAN,
            defaultValue: false, // false par défaut

        }
    });


    return rfidIdentify;
};

