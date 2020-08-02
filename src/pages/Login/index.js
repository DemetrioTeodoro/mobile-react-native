import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import { Text, View, ImageBackground, TextInput } from 'react-native';

const Login = () => {
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
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu usuario'
                >

                </TextInput>

                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                >

                </TextInput>

                <RectButton style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}

export default Login;