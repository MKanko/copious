import axios from 'axios'

const KEY = 'AIzaSyCqSZoBxSy8VN3SAeCjMC0KFPDj8gfxwo4'
// const KEY = 'AIzaSyC6pC_00rGGUplKufCs4QFQV7L8-EifWu4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY 
    }
}) 


