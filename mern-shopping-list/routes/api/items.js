const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})

router.get('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id)
        .then(item => {
            if(item)
                res.json({success: true})
            res.json({success: false})
        })
})

module.exports = router;
