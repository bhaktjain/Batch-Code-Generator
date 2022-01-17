const {db} = require('./dbs/model')
const {app} = require('./server')

const PORT = process.env.PORT || 4588
const start = async() =>{

    try{

        await db.sync()

        app.listen(4588,()=>{
            console.log(`server started on http://localhost:${PORT}`)
        })
    }
    catch(err){
        console.error(err)
    }
}
start()