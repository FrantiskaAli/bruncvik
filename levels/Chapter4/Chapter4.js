import { Text, View, Dimensions,TouchableOpacity } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { useState } from "react";
import { Boats } from "../../systems"


function Boat(props) {
    const x = props.position.x;
    const y = props.position.y;

    const cellSize = 20; // Adjust as needed

    return (
        <View
            style={{
                width: 30,
                height: 30,
                backgroundColor: "blue",
                position: "absolute",
                top: y * cellSize, // Adjust position based on cell size
                left: x * cellSize, // Adjust position based on cell size
            }}
        />
    );
}
function Rock(props) {
    const x = props.position.x;
    const y = props.position.y;

    const cellSize = 20; // Adjust as needed

    return (
        <View
            style={{
                width: 60,
                height: 60,
                backgroundColor: "green",
                position: "absolute",
                top: y * cellSize, // Adjust position based on cell size
                left: x * cellSize, // Adjust position based on cell size
            }}
        />
    );
}
function Mountain(props) {
    const x = props.position.x;
    const y = props.position.y;

    const cellSize = 20; // Adjust as needed

    return (
        <View
            style={{
                width: 60,
                height: 60,
                backgroundColor: "yellow",
                position: "absolute",
                top: y * cellSize, // Adjust position based on cell size
                left: x * cellSize, // Adjust position based on cell size
            }}
        />
    );
}

export default function ChapterFourGame() {
    const maxWidth = Dimensions.get("screen").width;
    const maxHeight = Dimensions.get("screen").height;
    const [gameEngine, setGameEngine] = useState(null);
    const cellSize = 20
    const gridSize = 20
    const boardSize = gridSize * cellSize


    return (
<View style={{flex:1}}>
        <GameEngine
            ref={(ref) => { setGameEngine(ref) }}
            systems={[Boats]}
            touchEnabled={true}
            style={{ width: boardSize, height: boardSize, backgroundColor: "red" }}
            entities={{
                boat: { position: { x: 1, y: 30 },xSpeed:0, ySpeed:0 ,renderer: <Boat /> },
                rock1: { position: { x: 1, y: 1 }, size: cellSize, renderer: <Rock /> },
                rock2: { position: { x: 4, y: -1 }, size: cellSize, renderer: <Rock /> },
                rock3: { position: { x: 10, y: 5 }, size: cellSize, renderer: <Rock /> },
                rock4: { position: { x: 10, y: 1 }, size: cellSize, renderer: <Rock /> },
                rock5: { position: { x: 3, y: 15 }, size: cellSize, renderer: <Rock /> },
                rock6: { position: { x: 12, y: 35 }, size: cellSize, renderer: <Rock /> },
                mountain: { position: { x: 17, y: 0 }, size: cellSize, renderer: <Mountain /> },

            }}
            running={true}
        />

</View>


    )
}