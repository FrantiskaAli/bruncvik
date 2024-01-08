

const Boats = (entities, { touches }) => {

    

    const boat = entities.boat;

   
        touches.forEach((touch) => {
            if (touch.type === 'move' && touch.delta.pageY < -10) {
                console.log('Swipe Up Detected');
                boat.position.y -= 1;
                console.log('Boat Position:', boat.position);
            }
        })
   


        return entities;
    };

    export { Boats }