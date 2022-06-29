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
            Qty: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            Total_price: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            parentArray: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            childArray: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            //-------------ASSOCIATIONS---------------------------
            // Product_id: 1,             Foreign Key
            // Order_id: 1            Foreign Key
            //----------------------------------------------------------------
        },
        {
            sequelize,
            tableName: "order_product",
            modelName: "Order_product",
        }
    );
    return Order_product;
};
