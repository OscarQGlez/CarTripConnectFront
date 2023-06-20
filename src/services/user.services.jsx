import { api } from "./api";
export const addtrip = async ( date,departure,available_seats,vehicle_type,favorite_genre,
    lenguaje,driving_skill,pets_accepted,maximun_baggage) => {
    try {
        const { data } = await api.post('/trip', {date,departure,available_seats,vehicle_type,favorite_genre,
            lenguaje,driving_skill,pets_accepted,maximun_baggage}, { 
                headers: {
                token: localStorage.getItem('token')
              }
            })

    } catch (error) {
        res.status(500).send(error.message)
    }
}