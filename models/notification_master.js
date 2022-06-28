"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Notification_master extends Model {
        // static associate({ Notification_master }) {
        //     this.hasMany(Notification_master, { foreignKey: "userId", as: "posts" });
        // }
        // toJSON() {
        //     return { ...this.get(), id: undefined };
        // }
    }
    Notification_master.init(
        {
            Notify_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            // Type all the Columns names and their Datatypes here
            // (If you Dont know how to do it then take a reference from manager_master.js file)
        },
        {
            sequelize,
            tableName: "notification_master",
            modelName: "Notification_master",
        }
    );
    return Notification_master;
};
