import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChapterOne from "./levels/Chapter1";
import ChapterTwo from "./levels/Chapter2"
import ChapterThree from './levels/Chapter3';
import { useState } from 'react';



const Stack = createNativeStackNavigator();
//if i ned to pass props :<Stack.Screen name="Home">
 // {(props) => <HomeScreen {...props} extraData={someData} />}
 // </Stack.Screen>
 function HomeScreen({navigation}) {
const [progress, setProgress] = useState(3)




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome</Text>
      <Text>Follow the tale of brave Bruncvik </Text>
      <Button
        title="Chapter One"
        onPress={() => navigation.navigate('one')}
      />
       {progress >1 && <Button
        title="Go to Details"
        onPress={() => navigation.navigate('two')}
      />}
       {progress >2 && <Button
        title="Go to Details"
        onPress={() => navigation.navigate('three')}
      />}
    </View>
  );
}




export default function App() {


  return (
    <NavigationContainer>
         <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      
      <Stack.Screen name="one" component={ChapterOne} />

      <Stack.Screen name="two" component={ChapterTwo} />
      <Stack.Screen name="three" component={ChapterThree} />
    </Stack.Navigator>



    <StatusBar hidden />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:50,
    fontFamily:['serif'],
    fontWeight:"bold",



  }
});
