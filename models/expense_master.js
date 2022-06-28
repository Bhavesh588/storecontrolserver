"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Expense_master extends Model {
        // static associate({ Expense_master }) {
        //     this.hasMany(Expense_master, { foreignKey: "userId", as: "posts" });
        // }
        // toJSON() {
        //     return { ...this.get(), id: undefined };
        // }
    }
    Expense_master.init(
        {
            ExpenseId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            // Type all the Columns names and their Datatypes here
            // (If you Dont know how to do it then take a reference from manager_master.js file)
        },
        {
            sequelize,
            tableName: "expense_master",
            modelName: "Expense_master",
        }
    );
    return Expense_master;
};
