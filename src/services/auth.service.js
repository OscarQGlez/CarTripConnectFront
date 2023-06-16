import { api } from "./api";

export const login = async (email, password) => {
  try {
    console.log(email, password)
    const { data } = await api.post('/auth/login', { email, password })
    console.log(data)
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Cannot log in')
  }
}
