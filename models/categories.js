"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {
        // static associate({ Categories }) {
        //     this.hasMany(Categories, { foreignKey: "userId", as: "posts" });
        // }
        // toJSON() {
        //     return { ...this.get(), id: undefined };
        // }
    }
    Categories.init(
        {
            Category_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            NameCat: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "categories",
            modelName: "Categories",
        }
    );
    return Categories;
};
