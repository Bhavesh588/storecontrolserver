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
      Date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // SubCat: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      // },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PayMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "expense_master",
      modelName: "Expense_master",
    }
  );
  return Expense_master;
};
