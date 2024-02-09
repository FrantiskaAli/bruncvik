import { View,Text, TouchableOpacity } from "react-native"


export default function(props){



    return(
        <TouchableOpacity onPress={()=>props.handleClick()}>
        <View style={{width:80,height:80,backgroundColor: props.empty ?"blue" : "red", justifyContent:"center", alignItems:"center",borderWidth:2,borderColor:"black",position:"absolute"}} 
        top={props.position.top} left={props.position.left}>
            <Text>
              {  props.number}
            </Text>
            
            
            </View>
            </TouchableOpacity>
    )

}