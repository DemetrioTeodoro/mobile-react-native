import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const Products = () => {
    return (

        <ImageBackground
            source={require('../../../assets/ellipse8.png')}
            style={styles.container}
            imageStyle={{ width: 414, height: 725 }}
        >
            <ImageBackground
                source={require('../../../assets/ellipse10.png')}
                style={styles.ellipse8}
                imageStyle={{ width: 193, height: 337 }}
            >
            </ImageBackground>
            <View style={styles.container}>
                <Text>{
                    ` Bem Vindo!\n
    Esse app veio para melhorar sua experiência.`
                }</Text>
            </View>
            <View style={styles.entry}>
                <Text style={styles.container}>
                    Login
                </Text>

                <RectButton style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
    ellipse8: {
        flex: 1,
        marginLeft: 200,
    },
    entry: {
        width: 300,
        height: 400,
        marginTop: 100,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    button: {
        width: 200,
        height: 40,
        marginLeft: 50,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#69c983',
    },
    buttonText: {
        marginTop: 9
    }
})

export default Products;