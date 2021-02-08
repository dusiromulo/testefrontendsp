import React, { Component } from 'react';
import Text, { StatusBar, View, SafeAreaView } from 'react-native';

import { ThemeContext, getTheme, Button, Icon } from 'react-native-material-ui';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    // primaryColor: COLOR.green500,
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
                <Button primary text="Primary" />
                <Button accent text="Accent" />
                <Button raised primary text="Primary" />
                <Button disabled text="Disabled" />
                <Icon name="person"/>
            </SafeAreaView>
        </ThemeContext.Provider>
    );
  }
}

export default App;