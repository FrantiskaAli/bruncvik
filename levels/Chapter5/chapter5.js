import { Text, View } from "react-native"
import { useState } from "react"
import Tile from "./tile.js"


export default function ChapterFiveGame() {
    const [positions, setPosition] = useState({
        position1: {
            top: 0,
            left: 0,

        },
        position2: {
            top: 0,
            left: 80,
        },
        position3: {
            top: 0,
            left: 160
        },
        position4: {
            top: 0,
            left: 240
        },
        position5: {
            top: 80,
            left: 0,

        },
        position6: {
            top: 80,
            left: 80,
        },
        position7: {
            top: 80,
            left: 160
        },
        position8: {
            top: 80,
            left: 240
        },
        position9: {
            top: 160,
            left: 0,

        },
        position10: {
            top: 160,
            left: 80,
        },
        position11: {
            top: 160,
            left: 160
        },
        position12: {
            top: 160,
            left: 240
        },
        position13: {
            top: 240,
            left: 0,

        },
        position14: {
            top: 240,
            left: 80,
        },
        position15: {
            top: 240,
            left: 160
        },
        position16: {
            top: 240,
            left: 240
        },
    })


    const handleTilePress = (pressedNumber) => {
        // Find the position of the pressed tile
        const pressedPosition = Object.keys(positions).find(
          (key) => positions[key].number === pressedNumber
        );
    
        // Find the position of the empty tile
        const emptyPosition = Object.keys(positions).find(
          (key) => positions[key].empty
        );
    
        // Check if the pressed tile is a neighbor of the empty tile
        if (isNeighbor(pressedPosition, emptyPosition)) {
          // Swap positions
          const newPositions = { ...positions };
          newPositions[emptyPosition] = { ...positions[pressedPosition], empty: true };
          newPositions[pressedPosition] = { ...positions[emptyPosition], empty: false };
          setPositions(newPositions);
        }
      };
    
      const isNeighbor = (position1, position2) => {
        // Implement your logic to check if positions are neighbors
        // For example, you could compare the top and left values
        // of the positions to determine if they are adjacent.
        // Adjust this logic based on your layout and requirements.
        // ...
    
        return true; // Placeholder, update with actual logic
      };





    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <View style={{ width: 330, height: 330, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <Tile position={positions.position1}  number={1} empty={false} onClick={handleTilePress}/>
                <Tile position={positions.position2} number={2} empty={false}/>
                <Tile position={positions.position3} number={3} empty={false}/>
                <Tile position={positions.position4} number={4} empty={false}/>

                <Tile position={positions.position5} number={5} empty={false}/>
                <Tile position={positions.position6} number={6} empty={false}/>
                <Tile position={positions.position7}  number={7} empty={false}/>
                <Tile position={positions.position8} number={8} empty={false}/>

                <Tile position={positions.position9} number={9} empty={false}/>
                <Tile position={positions.position10}  number={10} empty={false}/>
                <Tile position={positions.position11}  number={11} empty={false}/>
                <Tile position={positions.position12} number={12} empty={false}/>

                <Tile position={positions.position13}  number={13} empty={false}/>
                <Tile position={positions.position14}  number={14} empty={false}/>
                <Tile position={positions.position15}  number={15} empty={false}/>
                <Tile position={positions.position16}  number={0} empty={true}/>

            </View>
        </View>
    )


}