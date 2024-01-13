
import Matter from "matter-js";
import { View } from "react-native";
import { Dimensions } from "react-native";


const BoatRenderer = props => {
  //  console.log("BoatRenderer props:", props.body.bounds) ;
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2


    return (
        <View 
            style={{
                position: "absolute",
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody,
                backgroundColor:"blue"

            }}
        />


    )

}



function Boat (world, pos, size) {

    const initialBoat = Matter.Bodies.rectangle(
        pos.x, 
        pos.y,
        size.width,
        size.height,
        { label: 'Boat' }

    )

    Matter.World.add(world, initialBoat) 

    return {
        body: initialBoat,
        pos,
        renderer: <BoatRenderer />
    }

}


const RockRenderer= props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2


    return (
        <View
            style={{
                position: "absolute",
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody,
                backgroundColor:"green",
                borderRadius: 5,

            }}
        />


    )

}


function Rock (world, pos, size, label){

    const initialRock = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { label: label ,
            isStatic: true
       }

    )

    Matter.World.add(world, initialRock)
    return {
        body: initialRock,
        pos,
        renderer: <RockRenderer />
    }

};
const MountainRenderer= props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2


    return (
        <View
            style={{
                position: "absolute",
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody,
                backgroundColor:"yellow",
                borderRadius: 5,

            }}
        />


    )

}


function Mountain (world, pos, size){

    const initialMountain = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { label: 'mountain' ,
            isStatic: true
       }

    )

    Matter.World.add(world, initialMountain)
    return {
        body: initialMountain,
        pos,
        renderer: <MountainRenderer />
    }

};

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
export default function restart (){
    let engine = Matter.Engine.create({ enableSleeping: false }) 

    let world = engine.world;

    world.gravity.y = .3;
    


    return {
        physics: { engine, world },
        boat: Boat(world, {x: 20, y:windowHeight -100}, {width:30,height:30}, "boat"),
        
        
        
        rock1: Rock(world, {x:20,y:windowHeight -40}, {width:40,height:40}, "rock2"),//first rock the boat is drown to
        
        rock2: Rock(world, {x:20,y:200}, {width:40,height:40}, "rock3"),//second rock boat goes to
        
        rock3: Rock(world, {x:350,y:260}, {width:40,height:40}, "rock4"),
       
        rock4: Rock(world, {x:300,y:600}, {width:40,height:40}, "rock1"),//fourth
    
        rock5: Rock(world, {x:100,y:560}, {width:40,height:40}, "rock5"),
        
        rock6: Rock(world, {x:130,y:10}, {width:40,height:40}, "rock6"),

        mountain: Mountain(world, {x:windowWidth - 25,y:25}, {width:50,height:50}),


    }
}