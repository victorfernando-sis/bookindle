import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={style.backgroundStyle}>
        <Feather name='search' style={style.iconStyle} />
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={style.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
};

const style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#D3D3D3',
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row'
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;