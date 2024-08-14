import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './layouts/Layout';
import { Text } from 'react-native';

export type RootStackParamList = {
    Home: undefined;
    Search: undefined;
    SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={() => <Layout><Text>Home Page</Text></Layout>} />
                <Stack.Screen name="Search" component={() => <Layout><Text>Search Page</Text></Layout>} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
