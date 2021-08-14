const express = require('express')
const carouselRouter = express.Router()
const axios = require('axios')

carouselRouter.get('', async(req, res, next) => {
    try {
        const globalAPI = await axios.get(`https://globalnews.ca/gnca-ajax-redesign/sample-data/`)
        res.render('carousel', { datas : globalAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('news', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }

});

module.exports = carouselRouter;