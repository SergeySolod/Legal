const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// регистрация пользователя
router.post(
    '/register',
    // массив middlewares, которые будут делать валидацию
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        // валидация через экспресс входящих полей
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }
        const {email, password} = req.body
        const candidate = await User.findOne({email: email})
        // проверяем есть ли уже такой пользователь
        if (candidate) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
        }
        // шифруем пароль
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        // ждём сохранения пользователя в базе
        await user.save()
        res.status(201).json({message: 'Пользователь создан'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.post(
    '/login',
    // массив валидаторов
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            // валидация через экспресс входящих полей
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему'
                })
            }
            //получаем данные и ищем пользователя
            const {email, password} = req.body
            const user = await User.findOne({ email })
            // ошибка, если пользователя нет
            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }
            // проверка совпадают ли пароли, сравнение зашифрованного пароля и пришедшего
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
            }
            // авторизация через JWT токен
            const token = jwt.sign(
                // объект с данными, которые будут зашифрованы в данном токене
                { userId: user.id },
                // секретное слово
                config.get('jwtSecret'),
                // через сколько токен закончит существование
                { expiresIn: '1h' }
            )
            // по умолчанию статус 200
            res.json({ token, userId: user.id })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
})

module.exports = router