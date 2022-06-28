"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Products_data extends Model {
        // static associate({ Products_data }) {
        //     this.hasMany(Products_data, { foreignKey: "userId", as: "posts" });
        // }
        // toJSON() {
        //     return { ...this.get(), id: undefined };
        // }
    }
    Products_data.init(
        {
            Product_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            // Type all the Columns names and their Datatypes here
            // (If you Dont know how to do it then take a reference from manager_master.js file)
        },
        {
            sequelize,
            tableName: "products_data",
            modelName: "Products_data",
        }
    );
    return Products_data;
};
