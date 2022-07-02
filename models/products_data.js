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
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            codigo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
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
                type: DataTypes.STRING,
                allowNull: false,
            },
            precioVenta: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            costoCompra: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            costoMenor: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Deposito: {
                type: DataTypes.STRING,
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
