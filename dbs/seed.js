//seeding initial values in the data base
const {db,center,batch,teacher,course,seasons} = require('./dbs/model')

const seed = async ()=>{
    try{

        db.sync({alert:true})

        await center.bulkCreate([
            {id:'PP',name:'Pitampura',city:'Delhi'},
            {id:'DW',name:'Dwarka',city:'Delhi'},
            {id:'NO',name:'Noida',city:'Delhi'},
            {id:'DD',name:'Dehradun',city:'Dehradun'},
            {id:'ON',name:'Online',city:'Delhi'}
        ],
        {
            ignoreDuplicates:true
        })
        await seasons.bulkCreate([
            {id:'S',name:'Summer'},
            {id:'F',name:'Fall'},
            {id:'W',name:'Winter'},
            {id:'P',name:'Spring'},
            //{id:'ON',name:'Online'}
        ],
        {
            ignoreDuplicates:true
        })
        await course.bulkCreate([
            {id:'LP',name:'Launchpad'},
            {id:'CX',name:'Crux'},
            {id:'IB',name:'Interview Bootcamp'},
            {id:'AD',name:'Android Development'},
            {id:'WD',name:'Web Development'}
        ],
        {
            ignoreDuplicates:true
        })
    }
    catch(e){
        console.error(e)
    }
}
seed();