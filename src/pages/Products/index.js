import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Products = () => {
    return (
        <View style={styles.container}>
            <Text>
                Bem Vindo!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 32,
    }
})

export default Products;