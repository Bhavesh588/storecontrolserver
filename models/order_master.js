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
            Total_price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            Fecha: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            Client_name: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            Order_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Tipo_de_Cliente: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Metodo_de_Pago: {
                type: DataTypes.STRING,
                allowNull: false,
            },



    //-----------Employee_id is association---------------------------
            // Employee_id: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            // },
    //----------------------------------------------------------------

        },
        {
            sequelize,
            tableName: "order_master",
            modelName: "Order_master",
        }
    );
    return Order_master;
};
