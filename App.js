import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import { store } from './src/sagas/store';

import Routes from './src/routes';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FF8686',
      text: '#707070',
    },
};

const App = () => {
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <StatusBar barStyle='light-content' backgroundColor='#FF8686'></StatusBar>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </PaperProvider>
        </StoreProvider>
    );
}

export default App;