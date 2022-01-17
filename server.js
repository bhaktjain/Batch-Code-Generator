const express = require('express')
const app = express()
const path = require('path');
const {center,course,seasons,batch}= require('./dbs/model')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
var batchcode =''

app.set('view engine', 'hbs')
//app.set('views',__dirname +'./views')
app.set('views',path.join(__dirname,'views'))



app.get('/batchcode',async(req, res, next) =>{
    
    try{
        const centers = await center.findAll()
        const Seasons = await seasons.findAll()
        const courses = await course.findAll()
        const years = [2017,2018,2019,2020,2021]
        res.render('batchcode',{ centers,Seasons, courses,years,batchcode})
    }
    catch(err){
        console.error(err)
    }

    
})

app.post('/batchcode',async(req,res)=>{
   
        
    batchcode = ''
    batchcode += req.body.courses
    batchcode += req.body.centers
    batchcode += req.body.years.substring(2)
    batchcode += req.body.seasons
    batchcode += req.body.batchNum
    

    
    try{

        const Batch = await batch.create({
            code:batchcode,
            year:req.body.years,
            seasonId: req.body.seasons,
            centerId: req.body.centers,
            courseId: req.body.courses,
            start:Date.parse(req.body.startDate),
            end:Date.parse(req.body.endDate)
        })
        console.log(Batch)
    }
    catch(err){
        console.error(err)
    }
    res.redirect('/batchcode')
})

app.get('/batches',async(req, res, next)=>{
    try{
        const BatchTable = await batch.findAll({
            include: [course,center,seasons]
        })
        res.render('batches',{BatchTable})
    }
    catch(err){
        console.error(err)
    }

   
})
module.exports= {app}

