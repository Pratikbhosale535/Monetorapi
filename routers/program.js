const express = require('express')
const router = express.Router()
const server=require('../model/server')


//for fetching data
router.get('/',async(req,res)=>{ 
    try {
        const programs = await server.find()
        res.json(programs)
    } catch (error) {
        res.send('Get Request')
    }
    
})


//for insert data
router.post('/',async(req,res)=>{
    const program= new server({
        ram: req.body.ram,
        cpu: req.body.cpu,
        operatingSystem: req.body.operatingSystem,
        graphics: req.body.graphics,
        storage: req.body.storage
    })
    try {
        const a1= await program.save()
        res.json(a1)
    } catch (error) {
        res.send('Error')
    }
})

//for get records by id
router.get('/:id',async(req,res)=>{ 
    try {
        const program = await server.findById(req.params.id)
        res.json(program)
    } catch (error) {
        res.send('Get Request')
    }
    
})


//for Update record by id
router.put('/:id',async(req,res)=>{ 
    try {
        const program = await server.findByIdAndUpdate(req.params.id,req.body)
        // program.ram= req.body.ram,
        // program.cpu=req.body.cpu,
        // program.operatingSystem=req.body.operatingSystem,
        // program.graphics= req.body.graphics,
        // program.storage= req.body.storage

        const a1= await program.save()
        res.json(a1)
    } catch (error) {
        res.send('Error')
    }
    
})


//for delete record
router.delete('/:id',async(req,res)=>{ 
    try {
        const program = await server.findByIdAndRemove(req.params.id)
        res.json(program)
    } catch (error) {
        res.send('Error')
    }
    
})

module.exports = router