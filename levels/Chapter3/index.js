import ChapterThreeGame from "./Chapter3";
import { View,ImageBackground,TouchableOpacity,Text,StyleSheet } from "react-native";
import { useState } from "react";

export default function ChapterThree({navigation}){


    const [gameOn, setGameOn] = useState(false)
  


    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            {!gameOn &&
                <ImageBackground source={require("../../assets/bgPage.png")} resizeMode="cover"  style={{height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                  <Text style={styles.chapterText} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <TouchableOpacity onPress={() => setGameOn(true)} >
                       
                            <Text style={{fontSize:80, fontWeight:"bold", paddingRight:10 ,color:"#f2b700",textShadowColor: 'brown',textShadowRadius: 1,textShadowOffset: { width: 4,height: 4}}}> &#x25B6;</Text>
                     
                    </TouchableOpacity>
                </ImageBackground>}
            {gameOn && <ChapterThreeGame navigation={navigation} />}

        </View>
    )
}

const styles =StyleSheet.create({
    chapterText:{
        paddingHorizontal: 80,
        paddingTop:40,
        fontSize:20,
        fontFamily:"serif"
    }
})