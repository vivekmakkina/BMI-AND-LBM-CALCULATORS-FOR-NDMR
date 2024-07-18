import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Signup from './Signup';
import Interfacepage from './Interfacepage';
import Dashboard from './Dashboard';
import Calculator from './Calculator';
import Calculator2 from './Calculator2';
import ResultScreen from './ResultScreen';
import ResultScreen2 from './ResultScreen2';
import DrugSelectionScreen from './DrugSelectionScreen';
import PancuroniumScreen from './PancuroniumScreen';
import VecuroniumScreen from './VecuroniumScreen';
import AtracuriumScreen from './AtracuriumScreen';
import MenuScreen from './MenuScreen'; 
import ProfileScreen from './ProfileScreen'; // Import your ProfileScreen component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Interfacepage"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: 'rgba(33, 48, 102, 1)' },
          headerTitle: " ",
          headerTitleAlign: 'center', // Center the title horizontally
          marginBottom: 0,
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name="Interfacepage" component={Interfacepage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "Calculator", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Calculator2" component={Calculator2} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "Calculator", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="ResultScreen2" component={ResultScreen2} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="DrugSelectionScreen" component={DrugSelectionScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="PancuroniumScreen" component={PancuroniumScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="VecuroniumScreen" component={VecuroniumScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="AtracuriumScreen" component={AtracuriumScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "", headerTitleAlign: 'center', marginBottom: 0, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#213066' }, headerTitle: "Profile", headerTitleAlign: 'center', headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
