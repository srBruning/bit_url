const Sequelize = require('sequelize');
const databaseConfig = require('../../config/database');

const User = require('../models/User');
const UrlSlug = require('../models/UrlSlug');

const models = [User, UrlSlug];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models) );

        /**
        * Exemplo de associação: 
        * User.hasMany(UserGrupo, { foreignKey: 'user_id', as:"grupos" });
        * User.hasMany(UserGrupo, { foreignKey: 'drawn_user_id' });
        * User.belongsTo(AppPicture, { foreignKey: 'picture_avatar_id', as: "picture_avatar" });
        */
    }

}

module.exports = new Database();