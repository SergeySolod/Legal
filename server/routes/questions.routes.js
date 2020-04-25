const {Routes} = require('express')
const Question = require('../models/Question')
const router = Router()

router.post('/generate', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.get('/', async (req, res) => {
    try {
        //ждём пока модель Question найдёт все вопросы которые относятся к текущему пользователю
        const questions = await Question.find({ owner: null }) // ???
        res.json(questions)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const questions = await Question.findById({ owner: null }) // ???
        res.json(questions)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router