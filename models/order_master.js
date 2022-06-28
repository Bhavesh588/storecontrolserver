"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_master extends Model {
        // static associate({ Order_master }) {
        //     this.hasMany(Order_master, { foreignKey: "userId", as: "posts" });
        // }
        // toJSON() {
        //     return { ...this.get(), id: undefined };
        // }
    }
    Order_master.init(
        {
            Order_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            // Type all the Columns names and their Datatypes here
            // (If you Dont know how to do it then take a reference from manager_master.js file)
        },
        {
            sequelize,
            tableName: "order_master",
            modelName: "Order_master",
        }
    );
    return Order_master;
};
