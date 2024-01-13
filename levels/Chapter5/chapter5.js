import { Text, View } from "react-native"
import { useState } from "react"



export default function ChapterFiveGame() {
    const [positions, setPositions] = useState({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m:13,
        n: 14,
        o:15,
        p:"empty"
    })

    return (
        <View style={{ flex: 1,alignContent:"center",justifyContent:"center" }}>
            <View style={{flexDirection:"row"}}>
                <View style={{width:50,height:50,backgroundColor:"red"}}><Text>1</Text></View>
                <View style={{width:50,height:50,backgroundColor:"green"}}><Text>2</Text></View>
                <View style={{width:50,height:50,backgroundColor:"blue"}}><Text>3</Text></View>
                <View style={{width:50,height:50,backgroundColor:"purple"}}><Text>4</Text></View>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{width:50,height:50,backgroundColor:"orange"}}><Text>5</Text></View>
                <View style={{width:50,height:50,backgroundColor:"navy"}}><Text>6</Text></View>
                <View style={{width:50,height:50,backgroundColor:"teal"}}><Text>7</Text></View>
                <View style={{width:50,height:50,backgroundColor:"pink"}}><Text>8</Text></View>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{width:50,height:50,backgroundColor:"white"}}><Text>9</Text></View>
                <View style={{width:50,height:50,backgroundColor:"black"}}><Text>10</Text></View>
                <View style={{width:50,height:50,backgroundColor:"pink"}}><Text>11</Text></View>
                <View style={{width:50,height:50,backgroundColor:"gray"}}><Text>12</Text></View>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{width:50,height:50,backgroundColor:"yellow"}}><Text>13</Text></View>
                <View style={{width:50,height:50,backgroundColor:"darkblue"}}><Text>14</Text></View>
                <View style={{width:50,height:50,backgroundColor:"light green"}}><Text>15</Text></View>
                <View style={{width:50,height:50,backgroundColor:"teal"}}><Text>16</Text></View>
            </View>
        </View>
    )


}