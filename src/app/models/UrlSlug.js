const Sequelize = require('sequelize');

class UrlSlug extends Sequelize.Model {
    static init(sequelize){
        super.init({
          user_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',  
              key: 'id' 
            }
          },
          slug: DataTypes.STRING,
          addr:{
            type: DataTypes.STRING,
            validate: {isUrl: true}
          }, 
          access: DataTypes.INTEGER
        }, {
            sequelize,
            model: "UrlSlug"
        });

        return this;
    }
}


module.exports = UrlSlug;