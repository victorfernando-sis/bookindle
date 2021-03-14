import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButton';
import useBooks from '../hooks/useBooks';
import BookList from '../components/BookList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, filterBooks, results, errorMessage] = useBooks();

    return <View style={{ backgroundColor: '#F0F0F0', flex: 1 }}>
        <View style={style.searchStyle}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi({ searchTerm: term })} />
            <FilterButton />
        </View>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <BookList  books={filterBooks({ payload: 'SAMPLE' })} title='Trending Books' />
            <BookList  books={filterBooks({ payload: 'SAMPLE' })} title='Recommended' />
            <BookList  books={filterBooks({ payload: 'SAMPLE' })} title='Short Books' />
        </ScrollView>
    </View>
};

const style = StyleSheet.create({
    searchStyle: {
        flexDirection: "row",
    }

});

export default SearchScreen;