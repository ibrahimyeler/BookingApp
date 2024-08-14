import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Hero: React.FC = () => {
    return (
        <View style={styles.heroContainer}>
            <Text style={styles.title}>Find your next stay</Text>
            <Text style={styles.subtitle}>Search low prices on hotels for your dream vacation...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    heroContainer: {
        backgroundColor: '#2c5282',
        paddingBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
    },
});

export default Hero;
