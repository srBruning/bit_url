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
          slug: Sequelize.STRING,
          addr:{
            type: Sequelize.STRING,
            validate: {isUrl: true}
          }, 
          access: Sequelize.INTEGER
        }, {
            sequelize,
            model: "UrlSlug"
        });

        return this;
    }
}


module.exports = UrlSlug;