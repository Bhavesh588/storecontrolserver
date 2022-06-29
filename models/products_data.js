"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Products_data extends Model {
        static associate({ Categories, Order_product }) {
            this.belongsTo(Categories, {
                foreignKey: "Category_id",
                as: "categories",
            });
            this.hasMany(Order_product, {
                foreignKey: "Product_id",
                as: "order_product",
            });
        }
    }
    Products_data.init(
        {
            Product_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            Name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            codigo: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            Description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Color: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Size: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            precioVenta: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            costoCompra: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            costoMenor: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            Deposito: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            //-----------CATEGORY ID ASSOCIATIONS---------------------------
            // Category_id: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            // },

            //----------------------------------------------------------------
        },
        {
            sequelize,
            tableName: "products_data",
            modelName: "Products_data",
        }
    );
    return Products_data;
};
