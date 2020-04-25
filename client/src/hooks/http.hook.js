import {useState, useCallback} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        setLoading(true);
        try {
            if (body) {
                //если body передаём, то его нужно привести к строке через stringify
                body = JSON.stringify(body)
                //если его нет то передаём null и он не будет учитываться
                //также надо указывать, что мы передаём json, делаем это с помощью headers
                headers['Content-Type'] = 'application/json'

            }
            const response = await fetch(url, {method, body, headers});
            //приводим после дожидания к форму json
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}