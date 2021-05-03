// copy of index routes
//Router Index  - defines pages and user experience
const express = require ('express')
const passport = require('passport') //authenticator
const router = express.Router()


//login landing page (Auth with)
// router.get('/', (req, res) => {
// res.send('main')
// })
//route GET /

// New Landing, Authenticate with Google
//route: GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] } ))

// Google auth callback
// This gets the data, redirects to dashboard on pass and redirects to dashboard on failure
router.get ('google/callback', passport.authenticate('google', { failureRedirect:  '/' }),
 (req, res) => {
	//  if successful redirect to Dashboard
	res.redirect('/dashboard')
 }
)

// (req, res) => {
// // res.send ('Landing Page') //sends text to page
// res.render('login', {
// 	layout: 'login'
// })	//sends a page{


// Dashboard
//route GET /dashboard
// router.get('/dashboard', (req, res) => {
// 	// res.send ('Dashboard')
// 	res.render('dashboard')
// 	})
	
module.exports = router