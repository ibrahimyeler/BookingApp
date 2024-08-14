import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer: React.FC = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.title}>
                mernHolidays.com
            </Text>
            <View style={styles.linksContainer}>
                <TouchableOpacity>
                    <Text style={styles.link}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.link}>Terms of Service</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#2c5282',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    linksContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    link: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Footer;
