import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useBooks from '../api/googlebooks';

const BookShow = ({ navigation }) => {
    const [result, setResult] = useState();
    const id = navigation.getParam('id');

    const getResults = async () => {
        const response = await useBooks.get(`/volumes/${id}`);
        return setResult(response.data);
    };

    useEffect(() => {
        getResults(id);
    }, []);

    if (!result) {
        return null
    }

    console.log(result);
    return (
        <>
            <View style={styles.upSideStyle}>
                <Image style={styles.thumbnailStyle} source={{ uri: result.volumeInfo.imageLinks.thumbnail }} />
                <Text style={styles.authorsStyle}> {result.volumeInfo.authors}</Text>
                <Text style={styles.titleStyle}> {result.volumeInfo.title}</Text>
                <View style={styles.bookInfoStyle}>
                    <Text style={styles.textBookInfoStyle}>Rating  {'\n' + result.volumeInfo.averageRating}</Text>
                    <Text style={styles.textBookInfoStyle}>N˚ Pages {'\n' + result.volumeInfo.pageCount}</Text>
                    <Text style={styles.textBookInfoStyle}>Language {'\n' + result.volumeInfo.language}</Text>
                </View>
            </View>
            <View style={styles.downSideStyle}>
                <Text> Description </Text>
                <ScrollView style={{ height: 250 }}>
                    <Text> {result.volumeInfo.description}</Text>
                    <Text> {result.volumeInfo.description}</Text>
                </ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text>Purchase Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
};

const styles = StyleSheet.create({
    upSideStyle: {
        backgroundColor: "#FFFF",
        borderRadius: 10,
        alignItems: "center"

    }, downSideStyle: {},
    thumbnailStyle: {
        height: 250,
        width: 160,
        borderRadius: 10,
        margin: 10,
    },
    authorsStyle: {
        fontSize: 13,
        width: 110,
        color: "#808080",
        textAlign: "center",
        marginBottom: 5,
        fontWeight: "bold"
    },
    titleStyle: {
        fontSize: 15,
        textAlign: "center",
        width: 250,
        fontWeight: "bold",
    },
    bookInfoStyle: {
        width: 330,
        height: 60,
        borderRadius:10,
        backgroundColor: "#734bcc",
        flexDirection: "row",
        padding: 10,        marginVertical:10

    },
    textBookInfoStyle:{
        color: "#FFF",
        flex: 1,
        textAlign:"center"
    }
});
export default BookShow;
