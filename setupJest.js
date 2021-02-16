global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-text-input-mask', () => {});
jest.mock('@react-navigation/native', () => {
    return {
        NavigationContainer: () => null,
    }
});
jest.mock('@react-navigation/stack', () => {
    return {
        createStackNavigator: jest.fn(),
    }
});