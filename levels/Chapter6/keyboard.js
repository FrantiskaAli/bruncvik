import { View,Text,TouchableOpacity } from "react-native";





export default function({handleTouch, keyBoardString}){
    const keyBoard = keyBoardString.split("")
    return(
        <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent:"center" }}>
        {keyBoard.map((letter, index) => (
            <TouchableOpacity key={index} style={{ margin: 5, padding: 20, borderWidth: 1 }} onPress={()=> handleTouch(letter)}>
                <Text>{letter}</Text>
            </TouchableOpacity>
        ))}
    </View>
    )
}