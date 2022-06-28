"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_product extends Model {
        // static associate({ Order_product }) {
        //     this.hasMany(Order_product, { foreignKey: "userId", as: "posts" });
        // }
        // toJSON() {
        //     return { ...this.get(), id: undefined };
        // }
    }
    Order_product.init(
        {
            // Type all the Columns names and their Datatypes here
            // (If you Dont know how to do it then take a reference from manager_master.js file)
        },
        {
            sequelize,
            tableName: "order_product",
            modelName: "Order_product",
        }
    );
    return Order_product;
};
