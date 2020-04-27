const {Router} = require('express')
const Post = require('../models/Post')
const router = Router()
const auth = require('../middleware/auth.middleware')

router.get('/my', auth, async (req, res) => {
    try {
        Post.find({owner: req.user.userId}).then((err, posts) => {
            if (err) {
                res.send(err);
            }
            res.json(posts);
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.get('/my/:id', auth, async (req, res) => {
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

router.get('/all', async (req, res) => {
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
      console.log(req.body)
      Post.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
      if (err) {
        res.send(err)
      }
      res.json({ status: 'The post has been changes' })
  })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.delete('/delete/:id', auth, async (req, res) => {
  try {
    Post.remove({
    _id: req.params.id
  }).then(customer => {
    if (customer) {
      res.json({ status: 'deleted' })
    } else {
      res.json({ status: 'error' })
    }
  })

  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }
})

module.exports = router