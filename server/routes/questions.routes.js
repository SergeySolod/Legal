const {Router} = require('express')
const Question = require('../models/Question')
const router = Router()
const config = require('config')
const auth = require('../middleware/auth.middleware')

// router.post('/generate', async (req, res) => {
//     try {
//         const baseUrl = config.get('baseUrl')
//         //from - путь, откуда мы делаем запрос, получаем с frontend
//         const {from} = req.body
//
//
//
//     } catch (e) {
//         res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
//     }
// })

// router.get('/my', async (req, res) => {
//     try {
//         //ждём пока модель Question найдёт все вопросы которые относятся к текущему пользователю
//         const questions = await Question.find({owner: req.user.userId}) // ???
//         res.json(questions)
//     } catch (e) {
//         res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
//     }
// })
//
// router.get('/my/:id', async (req, res) => {
//     try {
//         const question = await Question.findById(req.params.id) // ???
//         res.json(question)
//     } catch (e) {
//         res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
//     }
// })

router.get('/', async (req, res) => {
    try {
        Question.find().then((err, questions) => {
            if (err) {
                res.send(err);
            }
            res.json(questions);
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.post('/generate', async (req, res) => {
    try {
        console.log(req.body)
        const data = req.body;
        const question = new Question({
            title: data.title,
            text: data.text,
        });
        question.save().then(() => {
            res.send({ status: 'The question was saved' })
        })

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router