const {db} = require('./dbs/model')
const {app} = require('./server')


const start = async() =>{

    try{

        await db.sync()

        app.listen(4588,()=>{
            console.log('server started on http://localhost:4588')
        })
    }
    catch(err){
        console.error(err)
    }
}
start()