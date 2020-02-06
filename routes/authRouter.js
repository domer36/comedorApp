const router = require('express').Router()
const passport = require('../config/passportConfig')
const User = require('../models/User')

router
  .get('/login', (req, res) => res.render('auth/login'))
  .get('/register', (req, res) => res.render('auth/register'))

  .get("/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    })
  )
  .get("/google/callback",
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/auth/login"
    })
  )
  .get('/logout', (req, res) => {
    req.logout();
    res.redirect("/auth/login");
  })

  .post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/auth/login",
      failureFlash: true
    })
  )

  .post('/register', async (req,res,next) => {
    const {name, email, password, confirm_password} = req.body

    if( !name || !email || !password ) return res.render('auth/register', {error: 'Todos los campos son obligatorios'})
    if( password !== confirm_password) return res.render('auth/register', {error: 'Las contraseñas no coinciden'})
    if( await User.findOne({email})) return res.render('auth/register', {error: 'El usuario ya está registrado.'})

    await User.register({ name, email }, password)
    res.redirect('/')
  })

module.exports = router