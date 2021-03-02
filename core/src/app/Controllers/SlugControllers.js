require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const UrlSlug = require('../models/UrlSlug');

class SlugController {
    
    // create a new URL
    async store(req, res){
       
        try{
            const user_id =req.userId || false;
            if(!user_id){
                res.json({ error: true, message: 'I was expecting a user ID, but apparently is missing' });
                return;
            }
            // we expect a 'url' and a 'slug' data
            const addr = req.body.url || false;
            const slug = req.body.slug || false;
            if (!addr || !slug) {
                res.json({ error: true, message: 'I was expecting a URL and a SLUG, but apparently one (or both) is missing' });
                return;
            }

            const url = await UrlSlug.create({user_id, slug,addr, access: 0});
            return res.json(url); 
        }catch(err){
            if(err.name === 'SequelizeUniqueConstraintError')
                return res.status(400).send({message: "Slug is already in use"});
            
            if(err.name === 'SequelizeValidationError')
                return res.status(400).send({fields_errors: err.errors});
            
            res.status(500).send({ error: err });
        }
    }

    // show all URLs from user
    async index(req, res){
        try{ 
            const urls = await UrlSlug.findAll({
                where: {
                    user_id: req.userId
                }
              });
            return res.json(urls); 
        }catch(err){
            res.status(500).send({ error: err, message: err.message, stack: err.stack});
        }
    }

    async checkSlug(req, res) {
        const urls = await UrlSlug.findAll({
            where: {
                slug: req.params.slug
            }
          });
         
          if (urls.length == 0) {
            res.json({isRegistered:false});
          } else {
              const url = urls[0];
              res.json({isRegistered:true, access: url.access});
          }
    }

    async accessUrl(req, res) {
        const urls = await UrlSlug.findAll({
            where: {
                slug: req.params.slug
            }
          });
         
          if (urls.length == 0) {
              res.status(404).send("<h3>The address you're looking for doesn't exist.</h3>");
          } else {
              const url = urls[0];
              url.access = url.access+1;
              url.save();
              res.redirect(url.addr);
          }
    }

    
}


module.exports = new SlugController();