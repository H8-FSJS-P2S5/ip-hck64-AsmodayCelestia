const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
// const authentication = require('../middlewares/authentication')
const {fetchData} = require('../middlewares/fetchData')

// router.get('/rajaongkir', rajaongkir, async (req, res, next) => {
//     console.log(req.menu);
//     res.send(req.menu);
// // res.status(200).json({message: 'Hello World'})
// })

router.use(fetchData)
router.get('/', async (req, res, next) => {
        console.log(req.menu);
        res.send(req.menu);
    // res.status(200).json({message: 'Hello World'})
})

//   router.get('/pub/articles', Controller.allArticles)
//   router.get('/pub/articles/:id', Controller.articles)
  
//   router.post('/login', Controller.login)
//   router.get('/categories', Controller.category)
// router.get('/user', Controller.user)
// router.use(authentication)
// router.post('/register', Controller.register)
// router.post('/articles', Controller.addArticles)
// router.get('/articles', Controller.allArticlesCMS)
// router.get('/articles/:id', Controller.articles)
// router.put('/articles/:id', Controller.updateArticles) //path Articles aja
// router.delete('/articles/:id', Controller.deleteArticles)

// router.post('/categories', Controller.addCategory)
// router.put('/categories/:id', Controller.updateCategory)
// router.delete('/categories/:id', Controller.deleteCategory)

module.exports = router