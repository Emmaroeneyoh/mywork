const { homePage, contactus } = require('../controller/homepage')

const router = require('express').Router()  


router.get('/', homePage)
router.post('/contact', contactus)

module.exports = router