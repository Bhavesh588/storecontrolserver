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
            // Type all the Columns names and their Datatypes here
            // (If you Dont know how to do it then take a reference from manager_master.js file)
        },
        {
            sequelize,
            tableName: "categories",
            modelName: "Categories",
        }
    );
    return Categories;
};
