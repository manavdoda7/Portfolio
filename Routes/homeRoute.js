const express=require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    console.log('GET / request');
    res.render('index', {alert:''})
})



module.exports = router