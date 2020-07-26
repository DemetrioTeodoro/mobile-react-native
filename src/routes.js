import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './pages/Products';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode='none'
                screenOptions={{
                    cardStyle: { backgroundColor: '#be8ade' }
                }}
            >
                <AppStack.Screen name='Products' component={Products} />
                <AppStack.Screen name='Detail' component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;