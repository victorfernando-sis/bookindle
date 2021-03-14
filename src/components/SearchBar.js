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
            placeholder='Search book'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
};

const style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFFF',
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        flex: 1,

        shadowColor: 'black',
        shadowOpacity: 0.04,
        shadowOffset: { width: 1, height: 3},
        shadowRadius: 2,
        elevation: 3,

    },

    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 5,
        color: "#808080"
    },
    inputStyle: {
        flex: 1,
        fontSize: 14
    }
});

export default SearchBar;