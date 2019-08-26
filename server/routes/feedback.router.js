const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req,res)=>{
    let queryText = `SELECT feeling, understanding, support, comments FROM "feedback";`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error =>{
        console.log('error getting feedback', error);
        res.sendStatus(500);
    })
})

router.post('/', (req,res)=>{
    console.log('in post')
    let newFeedback = req.body;
    console.log('adding new feedback', newFeedback)
    let queryText =  `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, 
        newFeedback.support, newFeedback.comments])
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            console.log(error.message)
            res.sendStatus(500)
            
        })
})

module.exports = router;