import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <TouchableOpacity style={style.backgroundStyle}>
        <Feather name='sliders' style={style.iconStyle} />
    </TouchableOpacity>
};

const style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#734bcc',
        padding: 7,
        marginTop: 15,
        marginRight: 15,
        borderRadius: 10,
        marginBottom: 15,

        shadowColor: 'black',
        shadowOpacity: 0.05,
        shadowOffset: { width: 1, height: 5},
        shadowRadius: 2,
        elevation: 3,
    },

    iconStyle: {
        fontSize: 20,
        color:"#FFFF",
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;