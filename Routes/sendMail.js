const express = require('express')
const router = express.Router()
const sendMail = require('../middlewares/mailingService')

router.post('/', async(req, res)=>{
    const {name, email, subject, message} = req.body
    try{
        const mail = await sendMail(name, email, subject, message);
        console.log(mail);
        res.render('index', {alert:'Mail sent successfully. You will get a reply soon :)'})
    } catch(err) {
        console.log(err);
        res.render('index', {alert:'Error in sending mail. Please try again after sometime :('})
        return
    }
})

module.exports = router