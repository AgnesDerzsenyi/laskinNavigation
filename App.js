
import Laskin from './components/LaskinScreen';
import History from './components/HistoryScreen.js';
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Laskin" component={Laskin}/>
      <Stack.Screen name="History" component={History}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


