import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bb5b8f6c1bbf61b33c1f0fca5405d5c3f646061850198990db3f0fcca05f15c1'
    }
});