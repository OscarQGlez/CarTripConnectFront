import { api } from "./api";
export const adduser = async (id) => {
    try {
        const { data } = await api.post('/trip', {}, { headers: { token: localStorage.getItem('token') } } )

        return data
            

    } catch (error) {
        res.status(500).send(error.message)
    }
}