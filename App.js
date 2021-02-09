import React, { Component } from 'react';
import Text, { StatusBar, View, SafeAreaView } from 'react-native';

import { ThemeContext, getTheme, Icon } from 'react-native-material-ui';
import Button from './src/components/button';
import Toolbar from './src/components/toolbar';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: '#FF8686',
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

class App extends Component {
  render() {
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
            <SafeAreaView>
                <StatusBar barStyle="dark-content"></StatusBar>
                <Toolbar enableBack text="Alalaô" />
                <Button text="Primary" onPress={() => {console.log('button press!!!s')}} />
                <Button />
                <Icon name="person"/>
            </SafeAreaView>
        </ThemeContext.Provider>
    );
  }
}

export default App;