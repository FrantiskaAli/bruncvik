import ChapterOneGame from "./Chapter1";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function ChapterOne({route}) {
    const [gameOn, setGameOn] = useState(false)
    const finishChapter = route.params?.finishChapter;


    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            {!gameOn &&
                <View>
                  <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <TouchableOpacity onPress={() => setGameOn(true)}>
                        <View>
                            <Text>Help Bruncvik</Text>
                        </View>
                    </TouchableOpacity>
                </View>}
            {gameOn && <ChapterOneGame victory={finishChapter} />}

        </View>
    )
}