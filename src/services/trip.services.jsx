import { api } from "./api";

export const addtrip = async ( date,departure,available_seats,vehicle_type,favorite_genre,
    lenguaje,driving_skill,pets_accepted,maximun_baggage) => {
    try {
        const { data } = await api.post('/trip', {date,departure,available_seats,vehicle_type,favorite_genre, lenguaje,driving_skill,pets_accepted,maximun_baggage}, 
        { headers: { token: localStorage.getItem('token') } } )
        return data
    } catch (error) {
        console.error('error al crear un viaje', error)
    }
}


export const getAlltrips = async () => {
    try {
        const { data } = await api.get('/trip', {headers: {token: localStorage.getItem( 'token' ) } } )
        return data
    } catch (error) {
        console.error('error al ver todos los viajes', error)
    }
}

export const deletetrip = async (id) => {
    try {
      await api.delete(`/trip/${id}`, {
        headers: {
          token: localStorage.getItem('token'),
        },
      })
    } catch (error) {
      console.error('Error al eliminar un viaje', error)
    }
  }