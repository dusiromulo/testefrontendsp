import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Button from './src/components/atoms/button';
import Card from './src/components/atoms/card';
import CreditCard from './src/components/molecules/credit-card';
import Carousel from './src/components/molecules/carousel';
import Toolbar from './src/components/organisms/toolbar';
import Text from './src/components/atoms/text';
import TextInput from './src/components/atoms/textinput';


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FF8686',
      text: '#707070',
    },
};

const dataList = [
    {
        title:"Item 1",
        text: "Text 1",
    },
    {
        title:"Item 2",
        text: "Text 2",
    },
    {
        title:"Item 3",
        text: "Text 3",
    },
    {
        title:"Item 4",
        text: "Text 4",
    },
    {
        title:"Item 5",
        text: "Text 5",
    },
];

const App = (props) => {
    const [text, setText] = useState('teste');

    // const _renderItem = ({item, index}) => {
    //     return (
    //         <Card>
    //             <Text text={item.title}></Text>
    //             <Text>{item.text}</Text>
    //         </Card>
    //     )
    // };

    return (
        <PaperProvider theme={theme}>
            <SafeAreaView>
                <StatusBar barStyle="dark-content"></StatusBar>
                <Toolbar enableBack text="Alalaô" />
                {/* <Button text="Primary" onPress={() => {console.log('button press!!!s')}} />
                <Button /> */}
                {/* <Text text="Teste" size={20} bold />
                <TextInput
                    value={text}
                    label="Email"
                    onChange={(value) => {
                        console.log('on change input text!!!', value); 
                        setText(value);
                    }}
                /> */}
                {/* <Text text="Teste" color="blue" size={30} /> */}
                {/* <Carousel 
                    data={dataList}
                    renderItem={_renderItem}
                /> */}
                <CreditCard />
            </SafeAreaView>
        </PaperProvider>
    );
}

export default App;