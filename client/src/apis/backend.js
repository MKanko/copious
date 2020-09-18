import axios from 'axios'

const URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:3001' : 'http://api.copious-app.com'


export default axios.create({baseURL: URL})