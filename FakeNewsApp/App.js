import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PredictionScreen from './components/PredictionScreen';
import ResultScreen from './components/ResultScreen';
import AboutScreen from './components/AboutScreen';
import ForecastScreen from './components/ForecastScreen';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Prediction">
        <Stack.Screen name="Prediction" component={PredictionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Results" component={ResultScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Chart" component={ForecastScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
