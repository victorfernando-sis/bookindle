import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import googlebooks from '../api/googlebooks';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await googlebooks.get('/volumes?', {
                params: {
                    q: 'search+terms'
                }
            });
            setResults(response.data.items);
        } catch (err){
            setErrorMessage("Something went wrong!");
        }

    };

    return <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={searchApi} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
    </View>
};

const style = StyleSheet.create({
});

export default SearchScreen;