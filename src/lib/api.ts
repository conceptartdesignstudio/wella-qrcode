import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000
})

api.interceptors.request.use((config) => {
  console.log('🚀 Request:', config.url)
  return config
})
