// in application_router.js
const express = require("express") 
// const knex = require("knex")

const database_access = require("../data/config")

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await database_access("cars"))
    } catch(error) { 
        next(error) 
    } 
})

router.post("/", async (req,res, next) => {
    try {
        const [id] = await database_access("fruits").insert(req.body)
        const new_record = await database_access("fruits").where({ id }).first()

        res.status(201).json(new_record)

    } catch(error) {
        next(error) 
    }
})

module.exports = router;
