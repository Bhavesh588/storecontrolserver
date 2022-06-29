"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Employee_master extends Model {
        // static associate({ Employee_master }) {
        //     this.hasMany(Employee_master, { foreignKey: "userId", as: "posts" });
        // }
        // toJSON() {
        //     return { ...this.get(), id: undefined };
        // }
    }
    Employee_master.init(
        {
            Employee_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            UserName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            First_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Salary: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            JoinDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            Leaves: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "employee_master",
            modelName: "Employee_master",
        }
    );
    return Employee_master;
};
