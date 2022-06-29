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
            Title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Message: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "notification_master",
            modelName: "Notification_master",
        }
    );
    return Notification_master;
};
