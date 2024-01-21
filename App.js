import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChapterOne from "./levels/Chapter1";
import ChapterTwo from "./levels/Chapter2"
import ChapterThree from './levels/Chapter3';
import ChapterFour from './levels/Chapter4'
import ChapterFive from './levels/Chapter5';
import ChapterSix from './levels/Chapter6';
import ChapterSeven from './levels/Chapter7';
import { useState } from 'react';



const Stack = createNativeStackNavigator();
//if i ned to pass props :<Stack.Screen name="Home">
 // {(props) => <HomeScreen {...props} extraData={someData} />}
 // </Stack.Screen>
 function HomeScreen({navigation}) {
const [progress, setProgress] = useState(4)




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome</Text>
      <Text>Follow the tale of brave Bruncvik </Text>
      <Button
        title="Chapter One"
        onPress={() => navigation.navigate('one')}
      />
       {progress >1 && <Button
        title="Chapter two"
        onPress={() => navigation.navigate('two')}
      />}
       {progress >2 && <Button
        title="Chapter Three"
        onPress={() => navigation.navigate('three')}
      />}
      {progress > 3 && <Button
        title="Chapter Four"
        onPress={() => navigation.navigate('four')}
      />}{progress > 3 && <Button
        title="Chapter Five"
        onPress={() => navigation.navigate('five')}
      />}
      {progress > 3 && <Button
        title="Chapter Six"
        onPress={() => navigation.navigate('six')}
      />}{progress > 3 && <Button
        title="Chapter Seven"
        onPress={() => navigation.navigate('seven')}
      />}
    </View>
  );
}




export default function App() {


  return (
    <NavigationContainer>
         <Stack.Navigator  screenOptions={{
    gestureEnabled: false,
  }} >
        <Stack.Screen name="Home" component={HomeScreen} />
      
      <Stack.Screen name="one" component={ChapterOne} />

      <Stack.Screen name="two" component={ChapterTwo} />
      <Stack.Screen name="three" component={ChapterThree} />
      <Stack.Screen name="four" component={ChapterFour} />
      <Stack.Screen name="five" component={ChapterFive} />
      <Stack.Screen name="six" component={ChapterSix} />
      <Stack.Screen name="seven" component={ChapterSeven} />

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
