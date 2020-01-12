import axios from 'axios'

const KEY = 'AIzaSyCqSZoBxSy8VN3SAeCjMC0KFPDj8gfxwo4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: '${KEY}' 
    }
}) 


