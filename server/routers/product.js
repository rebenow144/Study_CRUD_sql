const express = require('express')
const router = express.Router()

router.get('/product',(req,res)=>{
    res.send('hello product')
})
router.get('/product/:productId',(req,res)=>{
    const { productId } = req.params
    console.log(productId)
    res.send('Hello GET Product Id')
})
router.post('/product',(req,res)=>{
    res.send('Hello POST product')
})

router.put('/product/:productId',(req,res)=>{
    const {productId} = req.params
    console.log(productId)
    res.send('Hello PUT product')
})

router.delete('/product/:productId',(req,res)=>{
    res.send('Hello DELETE product')
})

module.exports = router