"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products_data extends Model {
    // static associate({ Products_data }) {
    //     this.hasMany(Products_data, { foreignKey: "userId", as: "posts" });
    // }
    // toJSON() {
    //     return { ...this.get(), id: undefined };
    // }
  }
  Products_data.init(
    {
      Product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Code: {
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
      CostoCompra: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      PrecioPorMayor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      PrecioPorMenor: {
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
