const {Routes} = require('express')
const Question = require('../models/Question')
const router = Router()
const config = require('config')
const auth = require('../middleware/auth.middleware')

router.post('/generate', async (req, res) => {
    try {
        const baseUrl = config.get('baseUrl')

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.get('/my', async (req, res) => {
    try {
        //ждём пока модель Question найдёт все вопросы которые относятся к текущему пользователю
        const questions = await Question.find({owner: req.user.userId}) // ???
        res.json(questions)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.get('/my/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id) // ???
        res.json(question)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router