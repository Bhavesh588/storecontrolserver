"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Deposito extends Model {
        static associate({ Products_data, Employee_master }) {
            this.hasMany(Employee_master, {
                foreignKey: "Deposito_id",
                onDelete: "CASCADE",
                as: "employee_master",
            });
            this.hasMany(Products_data, {
                foreignKey: "Deposito_id",
                onDelete: "CASCADE",
                as: "products_data",
            });
        }
    }
    Deposito.init(
        {
            Deposito_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "deposito",
            modelName: "Deposito",
        }
    );
    return Deposito;
};
