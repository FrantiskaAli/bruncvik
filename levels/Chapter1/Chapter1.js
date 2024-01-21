import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function ChapterOneGame() {
//raising an Army
    const [game, setGame] = useState({
        "1a": false,
        "1b": false,
        "1c": false,
        "1d": false,
        "2a": false,
        "2b": false,
        "2c": false,
        "2d": false,
        "3a": false,
        "3b": false,
        "3c": false,
        "3d": false,
        "4a": false,
        "4b": false,
        "4c": false,
        "4d": false,
    })

    const logic = (string) => {
        switch (string) {
            case "1a":
                setGame(prevGame => ({ ...prevGame, ["1b"]: !prevGame["1b"], ["2a"]: !prevGame["2a"] }));
                break;
            case "1b":
                setGame(prevGame => ({ ...prevGame, ["1a"]: !prevGame["1a"], ["2b"]: !prevGame["2b"], ["1c"]: !prevGame["1c"] }));
                break;
            case "1c":
                setGame(prevGame => ({ ...prevGame, ["1b"]: !prevGame["1b"], ["2c"]: !prevGame["2c"], ["1d"]: !prevGame["1d"] }));
                break;
            case "1d":
                setGame(prevGame => ({ ...prevGame, ["1c"]: !prevGame["1c"], ["2d"]: !prevGame["2d"]}));
                break;
            case "2a":
                setGame(prevGame => ({ ...prevGame, ["1a"]: !prevGame["1a"], ["2b"]: !prevGame["2b"], ["3a"]: !prevGame["3a"] }));
                break;
            case "2b":
                setGame(prevGame => ({ ...prevGame, ["2a"]: !prevGame["2a"], ["1b"]: !prevGame["1b"], ["2c"]: !prevGame["2c"],["3b"]: !prevGame["3b"] }));
                break;
            case "2c":
                setGame(prevGame => ({ ...prevGame, ["2b"]: !prevGame["2b"], ["1c"]: !prevGame["1c"], ["2d"]: !prevGame["2d"],["3c"]: !prevGame["3c"] }));
                break;
            case "2d":
                setGame(prevGame => ({ ...prevGame, ["2c"]: !prevGame["2c"], ["1d"]: !prevGame["1d"], ["3d"]: !prevGame["3d"]}));
                break;
            case "3a":
                setGame(prevGame => ({ ...prevGame, ["2a"]: !prevGame["2a"], ["3b"]: !prevGame["3b"], ["4a"]: !prevGame["4a"]}));
            case "3b":
                setGame(prevGame => ({ ...prevGame, ["2b"]: !prevGame["2b"], ["3c"]: !prevGame["3c"], ["3a"]: !prevGame["3a"],["4b"]: !prevGame["4b"] }));
                break;
            case "3c":
                setGame(prevGame => ({ ...prevGame, ["3b"]: !prevGame["3b"], ["2c"]: !prevGame["2c"], ["3d"]: !prevGame["3d"],["4c"]: !prevGame["4c"] }));
                break;
            case "3d":
                setGame(prevGame => ({ ...prevGame, ["2d"]: !prevGame["2d"], ["3c"]: !prevGame["3c"], ["4d"]: !prevGame["4d"]}));
                break;
            case "4a":
                setGame(prevGame => ({ ...prevGame, ["3a"]: !prevGame["3a"], ["4b"]: !prevGame["4b"], }));
                break;
            case "4b":
                setGame(prevGame => ({ ...prevGame, ["3b"]: !prevGame["3b"], ["4a"]: !prevGame["4a"], ["4c"]: !prevGame["4c"]}));
                break;
            case "4c":
                setGame(prevGame => ({ ...prevGame, ["4b"]: !prevGame["4b"], ["4d"]: !prevGame["4d"], ["3c"]: !prevGame["43"]}));
                break;
            case "4d":
                setGame(prevGame => ({ ...prevGame, ["3d"]: !prevGame["3d"], ["4c"]: !prevGame["4c"], }));
                break;

        }
    }

const handleClick = (field)=>{
    setGame(prevGame => ({ ...prevGame, [field]: !prevGame[field]}))
    logic(field)
}







    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>chapter one</Text>
            <View style={styles.mainContainer}>
                <View style={styles.line}>
                    <TouchableOpacity onPress={()=>handleClick("1a")}><ImageBackground source={game["1a"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["1a"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("1b")}><ImageBackground source={game["1b"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["1b"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("1c")}><ImageBackground source={game["1c"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["1c"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("1d")}><ImageBackground source={game["1d"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["1d"] ? styles.opened : styles.closed}/></TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <TouchableOpacity onPress={()=>handleClick("2a")}><ImageBackground  source={game["2a"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["2a"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("2b")}><ImageBackground source={game["2b"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["2b"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("2c")}><ImageBackground source={game["2c"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["2c"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("2d")}><ImageBackground source={game["2d"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["2d"] ? styles.opened : styles.closed}/></TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <TouchableOpacity onPress={()=>handleClick("3a")}><ImageBackground source={game["3a"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["3a"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("3b")}><ImageBackground source={game["3b"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["3b"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("3c")}><ImageBackground source={game["3c"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["3c"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("3d")}><ImageBackground source={game["3d"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["3d"] ? styles.opened : styles.closed}/></TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <TouchableOpacity onPress={()=>handleClick("4a")}><ImageBackground source={game["4a"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["4a"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("4b")}><ImageBackground source={game["4b"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["4b"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("4c")}><ImageBackground source={game["4c"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["4c"] ? styles.opened : styles.closed}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleClick("4d")}><ImageBackground source={game["4d"] ? require("../../assets/images/soldier.png"):  require("../../assets/images/villager.png")} style={game["4d"] ? styles.opened : styles.closed}/></TouchableOpacity>
                </View>
             

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        height: "50vh",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        border: "2px solid black",
    },
    line: {
        flexDirection: "row",
    },
    container: {
        fontSize: 50,
        fontFamily: ['serif'],
        fontWeight: "bold",
        border: "2px solid black",
    },
    closed: {
        height: 70,
        width: 70,
        backgroundColor: "red",
        margin: 8,

    },
    opened: {
        height: 70,
        width: 70,
        backgroundColor: "blue",
        margin: 8,
    }
})