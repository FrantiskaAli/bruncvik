import { Text, View, StyleSheet, Dimensions } from "react-native"
import { useState, useEffect } from "react";
import Keyboard from "./keyboard"


export default function ChapterSixGame() {

    const windowHeight = Dimensions.get('window').height - 50;

    const word = "adventure".split("");



    const initialState = {
        guessed: "",
        display: null,
        win: false,
        keyBoardString: "qwertyuiopasdfghjklzxcvbnm",
        position: 0
    }


    const [state, setState] = useState(initialState)





    useEffect(() => {
        const guessed = state.guessed

        const displayWord = word.map((letter) =>
            guessed.includes(letter) ? letter : '_'
        ).join(' ');

        setState((prevState) => ({ ...prevState, display: displayWord }))
        const isWin = word.every((char) => guessed.includes(char));

        if (isWin && state.position > Dimensions.get('window').height - 150) {
            setState((prevState) => ({ ...prevState, win: true }))
        } else if (isWin) { 
            alert("Sorry, you didn't climb high enough");setState(initialState) };
    }, [state.guessed])



    const handleTouch = (letter) => {

        const removal = state.keyBoardString.split(letter).join("");

        setState((prevState) => ({ ...prevState, guessed: prevState.guessed + letter, keyBoardString: removal }));



        word.includes(letter) ? setState((prevState) => ({ ...prevState, position: prevState.position + windowHeight / 8 })) : setState((prevState) => ({ ...prevState, position: prevState.position - windowHeight / 16 }));
    }


    return (
        <View style={{ flex: 1, alignItems: "center", position: "relative", justifyContent: "center" }}>
            <View style={styles.guess} ><Text>{state.display}</Text></View>
            <Keyboard handleTouch={handleTouch} keyBoardString={state.keyBoardString} />

            <View style={[styles.bruncvik, { bottom: state.position }]}></View>

            {state.win && <Text>CONGRATS</Text>}

        </View>
    )


}


const styles = StyleSheet.create({
    bruncvik: {
        width: 40,
        height: 80,
        backgroundColor: "green",
        position: "absolute",
    },
    guess: {
        backgroundColor: "blue",
        height: 100,
        width: 250,

    }
})