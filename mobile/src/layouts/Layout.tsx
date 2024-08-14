import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />
            <View style={styles.content}>
                {children}
            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
});

export default Layout;
