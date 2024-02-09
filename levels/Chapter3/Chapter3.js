
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';




export default function ChapterThreeGame() {
    //I will assigne 3 possible positions,
    //1 - shore,2 - raft, 3- ship
    //i have 3 clickable items on each shore to begin

    const [pos, setPos] = useState({
        sailors: {
            first: 1,
            second: 1,
            third: 1,
        },
        soldiers: {
            first: 1,
            second: 1,
            third: 1,
        }
    });
    const [raft, setRaft] = useState({
        people: 0,
        position: true
    });
    //write a functional logic,
    //functional logic needs to check that the amount of sailors is not more then amount of soldiers,
    //i think its good idea to use the pos object keys, if that wont work i will change positions into array and add information about who it is as a second thing
    const checkPositions = (position) => {
        const soldiersBoat = [];
        const soldiersShore = [];
        const sailorsBoat = [];
        const sailorsShore = [];

        //this loop sorts out where sailors are standing and if theyre on the raft theyll be assigned based on raft position
        for (const key in position.sailors) {
            if (position.sailors[key] === 3) {
                sailorsBoat.push("sailor")
            } else if (position.sailors[key] === 1) {
                sailorsShore.push("sailor")
            } else if (position.sailors[key] === 2) {
                raft.position ? sailorsShore.push("sailor") : sailorsBoat.push("soldier")


            }
        };
        //this loop does the same for soldiers
        for (const key in position.soldiers) {
            if (position.soldiers[key] === 3) {
                soldiersBoat.push("soldier")
            } else if (position.soldiers[key] === 1) {
                soldiersShore.push("soldiers")
            } else if (position.soldiers[key] === 2) {
                raft.position ? soldiersShore.push("soldiers") : soldiersBoat.push("soldier")


            };
        }
        console.log("soldiersboat:", soldiersBoat, "sshore:", soldiersShore, "namorniciBoat:", sailorsBoat, "namorniciShore:", sailorsShore)

        //these are conditions to loose the game
        if (soldiersBoat.length < sailorsBoat.length && soldiersBoat.length >= 1) {
            console.log(soldiersBoat, sailorsBoat, "vice namorniku na lodi")
            alert("lost");
            setPos({
                sailors: {
                    first: 1,
                    second: 1,
                    third: 1,
                },
                soldiers: {
                    first: 1,
                    second: 1,
                    third: 1,
                }
            });
            setRaft({
                people: 0,
                position: true
            });
        }
        //another condition to loose the game (need to check tomorrow if ia can squish them together with ||)
        if (soldiersShore.length < sailorsShore.length && soldiersShore.length >= 1) {
            console.log(soldiersBoat, sailorsBoat, "vicer Namorniku na brehu")
            alert("lost")
            setPos({
                sailors: {
                    first: 1,
                    second: 1,
                    third: 1,
                },
                soldiers: {
                    first: 1,
                    second: 1,
                    third: 1,
                }
            });
            setRaft({
                people: 0,
                position: true
            });
        }
        //condition of winnig
        if (soldiersBoat.length === 3 && sailorsShore.length === 3) {
            alert("you won")
        }
    };
    useEffect(() => {//i need to use useEffect to accuretly get change of the position rather then trying to trigger the function when raft person is clicked, to get latest position readings
        checkPositions(pos)
    }, [pos, raft.position])


    const handleClickPerson = (person, pos, whereAbouts) => {//updates people on the raft and updates positions arrays
        if (raft.people < 2 && raft.position === whereAbouts) {
            setRaft(prevRaft => ({ ...prevRaft, people: prevRaft.people + 1 }));
            setPos(prevPos => ({ ...prevPos, [person]: { ...prevPos[person], [pos]: 2 } }));
        } else {
            alert("Only 2 people allowed on the raft");
        }
    };
    const handleClickPersonRaft = (person, number) => {//based on raft position it will drop the people of
        if (raft.position) {
            setPos(prevPos => ({ ...prevPos, [person]: { ...prevPos[person], [number]: 1 } }));
            setRaft(prevRaft => ({ ...prevRaft, people: prevRaft.people - 1 }));
            console.log(raft.people)
        } else {
            setPos(prevPos => ({ ...prevPos, [person]: { ...prevPos[person], [number]: 3 } }));
            setRaft(prevRaft => ({ ...prevRaft, people: prevRaft.people - 1 }));
            console.log(raft.people)
        };

    }
    const clickRaft = () => {//raft movement
        raft.people >= 1 ? setRaft(prevRaft => ({ ...prevRaft, position: !prevRaft.position })) : alert("boat cant move by itself");
    }


    return (
        <ImageBackground style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} source={require("../../assets/images/water.jpg")}>

            <View style={styles.ship}>
                {pos.sailors.first === 3 && <TouchableOpacity onPress={() => handleClickPerson("sailors", "first", false)} ><View style={styles.seaman} ></View></TouchableOpacity>}
                {pos.sailors.second === 3 && <TouchableOpacity onPress={() => handleClickPerson("sailors", "second", false)} ><View style={styles.seaman} ></View></TouchableOpacity>}
                {pos.sailors.third === 3 && <TouchableOpacity onPress={() => handleClickPerson("sailors", "third", false)} ><View style={styles.seaman} ></View></TouchableOpacity>}

                {pos.soldiers.first === 3 && <TouchableOpacity onPress={() => handleClickPerson("soldiers", "first", false)} ><View style={styles.soldier} ></View></TouchableOpacity>}
                {pos.soldiers.second === 3 && <TouchableOpacity onPress={() => handleClickPerson("soldiers", "second", false)} ><View style={styles.soldier} ></View></TouchableOpacity>}
                {pos.soldiers.third === 3 && <TouchableOpacity onPress={() => handleClickPerson("soldiers", "third", false)} ><View style={styles.soldier} ></View></TouchableOpacity>}
            </View>

            <View resizeMode="cover" style={styles.water}>

                <View style={raft.position ? styles.raft : styles.raftUp}>
                    {pos.sailors.first === 2 && <TouchableOpacity onPress={() => handleClickPersonRaft("sailors", "first")} ><View style={styles.seaman} ></View></TouchableOpacity>}
                    {pos.sailors.second === 2 && <TouchableOpacity onPress={() => handleClickPersonRaft("sailors", "second")} ><View style={styles.seaman} ></View></TouchableOpacity>}
                    {pos.sailors.third === 2 && <TouchableOpacity onPress={() => handleClickPersonRaft("sailors", "third")} ><View style={styles.seaman} ></View></TouchableOpacity>}

                    {pos.soldiers.first === 2 && <TouchableOpacity onPress={() => handleClickPersonRaft("soldiers", "first")} ><View style={styles.soldier} ></View></TouchableOpacity>}
                    {pos.soldiers.second === 2 && <TouchableOpacity onPress={() => handleClickPersonRaft("soldiers", "second")} ><View style={styles.soldier} ></View></TouchableOpacity>}
                    {pos.soldiers.third === 2 && <TouchableOpacity onPress={() => handleClickPersonRaft("soldiers", "third")} ><View style={styles.soldier} ></View></TouchableOpacity>}

                </View>

            </View>

            <ImageBackground style={styles.shore} source={require("../../assets/images/boat-land.png")} resizeMode='cover'>
                {pos.sailors.first === 1 && <TouchableOpacity onPress={() => handleClickPerson("sailors", "first", true)} style={{width:"auto",height:"50"}}><View style={styles.seaman} ></View></TouchableOpacity>}
                {pos.sailors.second === 1 && <TouchableOpacity onPress={() => handleClickPerson("sailors", "second", true)} style={{width:"auto",height:"50"}}><View style={styles.seaman} ></View></TouchableOpacity>}
                {pos.sailors.third === 1 && <TouchableOpacity onPress={() => handleClickPerson("sailors", "third", true)} style={{width:"auto",height:"f50"}}><View style={styles.seaman} ></View></TouchableOpacity>}

                {pos.soldiers.first === 1 && <TouchableOpacity onPress={() => handleClickPerson("soldiers", "first", true)} style={{width:"auto",height:"50"}}><View style={styles.soldier} ></View></TouchableOpacity>}
                {pos.soldiers.second === 1 && <TouchableOpacity onPress={() => handleClickPerson("soldiers", "second", true)} style={{width:"auto",height:"50"}}><View style={styles.soldier} ></View></TouchableOpacity>}
                {pos.soldiers.third === 1 && <TouchableOpacity onPress={() => handleClickPerson("soldiers", "third", true)} style={{width:"auto",height:"50"}}><View style={styles.soldier} ></View></TouchableOpacity>}

            </ImageBackground>
            <TouchableOpacity onPress={() => clickRaft()} style={{ position: 'absolute', bottom: 30, left:"45%", }}>

                <Text style={{ fontSize: 50, }}>&#8597;
                </Text>
            </TouchableOpacity>

        </ImageBackground>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ship: {
        width: 150,
        marginTop:40,
        backgroundColor: 'brown',
        flexDirection: "row",
        flex: 1,

    },
    water: {
        width: "100%",
        position: "relative",
        flexDirection: "row",
        flex: 1,

    },
    seaman: {
        width: 30,
        height: 30,
        backgroundColor: "red",
        margin: 10,
    },
    shore: {
        flex: 1,

        width: "100%",
        flexDirection: "row",
    },
    soldier: {
        width: 30,
        height: 30,
        backgroundColor: "yellow",
        margin: 10,
    },
    raftUp: {
        position: 'absolute',
        height: 50,
        width: 200,
        left: "30%",
        backgroundColor: "purple",
        flexDirection: "row",
        top: 0,
    },
    raft: {
        position: "absolute",
        left: "30%",
        height: 50,
        width: 200,
        backgroundColor: "purple",
        bottom: 0,
        flexDirection: "row",
    },
});