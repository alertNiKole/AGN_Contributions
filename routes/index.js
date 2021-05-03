//Router Index  - defines pages and user experience
const express = require ('express')
const router = express.Router()


//login landing page
router.get('/', (req, res) => {
res.send('main')
})
//route GET /


router.get('/login', (req, res) => {
// res.send ('Landing Page') //sends text to page
res.render('login', {
	layout: 'login'
})	//sends a page{

})

// Dashboard
//route GET /dashboard
router.get('/dashboard', (req, res) => {
	// res.send ('Dashboard')
	res.render('dashboard')
	})
	
module.exports = router