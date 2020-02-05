const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.user)
  const Perfil = ( req.user ) ? req.user : false
  res.render('index', {Perfil})
})

module.exports = router;
