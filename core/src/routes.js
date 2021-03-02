const jwt = require('jsonwebtoken');
const Router  = require('express');
const routes = new Router();

const UserControllers = require('./app/Controllers/UserControllers');
const SlugController = require('./app/Controllers/SlugControllers');
 
function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err ) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
   
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      req.decoded = decoded;
      next();
    });
}


routes.post('/api/user', UserControllers.store);
routes.post('/api/singin',  UserControllers.login);
routes.get('/api/users',verifyJWT,  UserControllers.index);
routes.get('/api/users/show', verifyJWT,  UserControllers.show);
routes.get('/api/users/:id', verifyJWT,  UserControllers.show);
routes.get('/api/auth/refresh', verifyJWT,  UserControllers.refresh);

routes.get('/api/', verifyJWT, (req, res) => {
  res.json({message: "hello word "+req.userId});
});

routes.post('/api/url', verifyJWT, SlugController.store);
routes.get('/api/url', verifyJWT, SlugController.index);
routes.get('/api/url/:slug',  SlugController.checkSlug);

routes.get('/:slug', SlugController.accessUrl);

module.exports = routes;