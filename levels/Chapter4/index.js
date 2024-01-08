import ChapterFourGame from "./Chapter4";
import { Text, View } from "react-native";
export default function ChapterFour() {
    return (
        <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
            <Text>chapter four</Text>
            <ChapterFourGame/>
        </View>

    )
}