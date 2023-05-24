const router = require('express').Router()

router.use('*', (req, res) => {
    res.json("API use")
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
}) 

module.exports = router