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
            // Type all the Columns names and their Datatypes here
            // (If you Dont know how to do it then take a reference from manager_master.js file)
        },
        {
            sequelize,
            tableName: "employee_master",
            modelName: "Employee_master",
        }
    );
    return Employee_master;
};
