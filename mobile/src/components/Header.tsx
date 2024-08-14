import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HeaderNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Header: React.FC = () => {
    const navigation = useNavigation<HeaderNavigationProp>();
    
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.title}>UnexpectedJourney.com</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#2c5282',
        paddingVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    signInButton: {
        backgroundColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    signInText: {
        color: '#2c5282',
        fontWeight: 'bold',
    },
});

export default Header;
