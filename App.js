import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChapterOne from "./levels/Chapter1";
import ChapterTwo from "./levels/Chapter2"
import ChapterThree from './levels/Chapter3';
import ChapterFour from './levels/Chapter4'
import ChapterFive from './levels/Chapter5';
import ChapterSix from './levels/Chapter6';
import ChapterSeven from './levels/Chapter7';
import ChapterEight from './levels/Chapter8';
import ChapterNine from './levels/Chapter9';
import ChapterTen from './levels/Chapter10';
import { useState, useEffect } from 'react';



const screenWidth = Dimensions.get("screen").width

const Stack = createNativeStackNavigator();
//if i ned to pass props :<Stack.Screen name="Home">
// {(props) => <HomeScreen {...props} extraData={someData} />}
// </Stack.Screen>
function HomeScreen({ navigation }) {
  const [progress, setProgress] = useState(10)




  return (
    <ImageBackground source={require("./assets/mainBG.jpg")} resizeMode={"cover"} style={styles.container}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 50, fontFamily: "serif", fontWeight: "900", color: "#fad233", textShadowColor: 'brown', textShadowRadius: 1, textShadowOffset: { width: 4, height: 4 }, }}>Bruncvik</Text>
        <Text style={{ fontFamily: "serif", fontSize: 24, paddingHorizontal: 100 }}>Brave hero of Czech Legends... </Text>
      </View>
      <ScrollView style={{ flex: 1, width: screenWidth }}>
        <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('one')}
        >
          <Text style={styles.buttonText}>Chapter One</Text>
        </TouchableOpacity>
        {progress > 1 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('two')}
        >
          <Text style={styles.buttonText}>Chapter Two</Text>
        </TouchableOpacity>}

        {progress >= 2 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('three')}
        >
          <Text style={styles.buttonText}>Chapter Three</Text>
        </TouchableOpacity>}
        {progress > 3 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('four')}
        >
          <Text style={styles.buttonText}>Chapter Four</Text>
        </TouchableOpacity>}
        {progress > 3 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('five')}
        >
          <Text style={styles.buttonText}>Chapter Five</Text>
        </TouchableOpacity>}
        {progress > 3 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('six')}
        >
          <Text style={styles.buttonText}>Chapter Six</Text>
        </TouchableOpacity>}
        {progress > 3 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('seven')}
        >
          <Text style={styles.buttonText}>Chapter Seven</Text>
        </TouchableOpacity>}
        {progress > 3 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('eight')}
        >
          <Text style={styles.buttonText}>Chapter Eight</Text>
        </TouchableOpacity>}
        {progress > 3 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('nine')}
        >
          <Text style={styles.buttonText}>Chapter Nine</Text>
        </TouchableOpacity>}
        {progress > 3 && <TouchableOpacity style={styles.buttons}
          onPress={() => navigation.navigate('ten')}
        >
          <Text style={styles.buttonText}>Chapter Ten</Text>
        </TouchableOpacity>}
      </ScrollView>
    </ImageBackground>
  );
}




export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        gestureEnabled: false,

      }} >
        <Stack.Screen options={{
          headerShown: false,
        }} name="Home" component={HomeScreen} />

        <Stack.Screen options={{
          headerShown: true,
          headerTransparent: true,
          title: "Chapter One",
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: "serif",

          },
        }}

          name="one" component={ChapterOne} />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "Chapter Two",
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: "serif",

            },
          }}
          name="two" component={ChapterTwo} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "Chapter Three",
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: "serif",

            },
          }}
          name="three" component={ChapterThree} />
        <Stack.Screen name="four" component={ChapterFour} />
        <Stack.Screen name="five" component={ChapterFive} />
        <Stack.Screen name="six" component={ChapterSix} />
        <Stack.Screen name="seven" component={ChapterSeven} />
        <Stack.Screen name="eight" component={ChapterEight} />
        <Stack.Screen name="nine" component={ChapterNine} />
        <Stack.Screen name="ten" component={ChapterTen} />


      </Stack.Navigator>



      <StatusBar hidden />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eadb8a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    alignSelf: 'center',
    backgroundColor: "#87592a",
    width: "80%",
    borderWidth: 3,
    borderColor: '#f1c232',
    borderBottomStartRadius: 10,
    borderTopEndRadius: 10,
    margin: 5,
    boarderStyle: "double",
    alignItems: "center",
  },
  buttonText: {
    padding: 8,
    fontFamily: "sans-serif-condensed",
    fontSize: 20,

  }
});
