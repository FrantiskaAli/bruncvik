import { Text, View, Dimensions,TouchableOpacity } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { useState } from "react";
import { Boats } from "../../systems"
import entities from "./entities"




export default function ChapterFourGame() {
    const maxWidth = Dimensions.get("screen").width;
    const maxHeight = Dimensions.get("screen").height;
    const [gameEngine, setGameEngine] = useState(null);
    const cellSize = 20
    const gridSize = 20
    const boardSize = gridSize * cellSize
    const [run,setRun] =useState(true)


    return (

<View style={{flex:1}}>
        {!run && <TouchableOpacity onPress={()=>setRun(true)}><View><Text>Start</Text></View></TouchableOpacity>}
        
        
        <GameEngine
            ref={(ref) => { setGameEngine(ref) }}
            systems={[Boats]}
            touchEnabled={true}
            style={{ width: boardSize, height: boardSize, backgroundColor: "red" }}
            entities={entities()}
            running={run}
            onEvent={(e) => {
                switch (e.type) {
                  case "game_over":
                   //this is the message that we will get inside the dispatch function
                    setRun(false);
                    alert("try again");
                    gameEngine.swap(entities())
                    break;
                  case "you_win":
            
                    setRun(false);
                    gameEngine.stop()
                    alert("you win!"); 
                    break;
                }
              }}
        />

</View>


    )
}