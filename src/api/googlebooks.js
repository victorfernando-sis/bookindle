import axios from 'axios';


const key = 'AIzaSyAoRSl2SkJfK6C1jhbRgTY_ZY51Ale3YZs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1'
});