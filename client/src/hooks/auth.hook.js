import {useState, useCallback} from 'react'

export const useAuth = () => {
    //хранить jwttoken будем в LocalStorage, перезагружаем систему, есть есть валидный токен, то сразу допускаем пользователя в систему
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
}