import { useState, useEffect } from 'react';
import googlebooks from '../api/googlebooks';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await googlebooks.get('/volumes?', {
                params: {
                    q: 'search+terms'
                }
            });
            setResults(response.data.items);
        } catch (err) {
            setErrorMessage("Something went wrong!");
        }
    };
    useEffect(() => {
        searchApi('pasta')
    }, []);

    const filterBooks = (payload) => {
        
        return results;

        return results.filter(book => {
                book.price == payload;
        });
    };

    const getBookById = () =>{

    };

    return [searchApi, filterBooks, results, errorMessage]
};