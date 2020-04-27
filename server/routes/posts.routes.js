const {Router} = require('express')
const Post = require('../models/Post')
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
//         //ждём пока модель Post найдёт все вопросы которые относятся к текущему пользователю
//         const questions = await Post.find({owner: req.user.userId}) // ???
//         res.json(questions)
//     } catch (e) {
//         res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
//     }
// })
//
// router.get('/my/:id', async (req, res) => {
//     try {
//         const question = await Post.findById(req.params.id) // ???
//         res.json(question)
//     } catch (e) {
//         res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
//     }
// })

router.get('/', auth, async (req, res) => {
    try {
        Post.find().then((err, posts) => {
            if (err) {
                res.send(err);
            }
            res.json(posts);
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        Post.findById(req.params.id).then((err, post) => {
            if (err) {
                res.send(err);
            }

            res.json(post);
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.post('/generate', auth, async (req, res) => {
    try {
        const data = req.body;
        const post = new Post({
            title: data.title,
            text: data.text,
            owner: req.user.userId
        });
        await post.save().then(() => {
            res.status(201).json({ message: 'The post was saved' })
        })

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.put('/change/:id', auth, async (req, res) => {
    try {
        Post.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
    if (err) {
      res.send(err)
    }
    res.json({ status: 'The post has been changed' })
  })

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router