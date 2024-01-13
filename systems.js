import Matter from "matter-js";
import { Dimensions } from "react-native";


const Boats = (entities, { touches, dispatch }) => {

  const window = Dimensions.get('window')
  const boat = entities.boat;
  const mountain = entities.mountain

  let engine = entities.physics.engine;
  let world = entities.physics.world;


//this will change the gravity on touch so the boat goes where its pulled
  touches.forEach((touch) => {
    if (touch.type === 'move' && touch.delta.pageY < -10) {
      world.gravity.y = -0.2;
      world.gravity.x = 0
    } else if (touch.type === 'move' && touch.delta.pageY > 10) {
      world.gravity.y = 0.2;
      world.gravity.x = 0
    } else if (touch.type === 'move' && touch.delta.pageX > 10) {
      world.gravity.x = 0.2;
      world.gravity.y = 0
    } else if (touch.type === 'move' && touch.delta.pageX < -10) {
      world.gravity.x = -0.2;
      world.gravity.y = 0
    }
   
  } )
//the gravity would not have been updated if I didnt update the engine
 Matter.Engine.update(engine);

//checking if the boat is on screen or ending the game
    const boatX = boat.body.position.x;
    const boatY = boat.body.position.y;

    if (
      boatX < -30 ||
      boatX > window.width ||
      boatY < -30 ||
      boatY > window.height
    ) {
      dispatch({type:"game_over"});
    }

    //winnign the game
    Matter.Events.on(engine, 'collisionStart', (event) => {
      const reachedMountain = event.pairs.some(pair => (
        pair.bodyA === mountain.body || pair.bodyB === mountain.body
      ));
  
      if (reachedMountain) {
      
        dispatch({type:"you_win"})
        
      }
    });
 
  return entities;
};

export { Boats }