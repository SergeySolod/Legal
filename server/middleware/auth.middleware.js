const jwt = require('jsonwebtoken')
const config = require('config')

//перехватываем определённые данные и делем логику, описанную ниже
module.exports = (req, res, next) => {
    //'options' - специальный метод, который присутствует в REST API, он проверяет доступность сервера
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
           return res.status(401).json({ message: 'Нет авторизации' })
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        next()

    } catch (e) {
        //попали сюда если произошла ошибка при верификации токена
        return res.status(401).json({ message: 'Нет авторизации' })
    }
}