import { Direction } from "../reducers/Direction";

export function update(){
    console.log('updating game...')
}

export function getNextHeadCoordinates(direction: Direction, currentCoordinates:[number, number]): [number, number]{
    let [x, y] = currentCoordinates
    if(direction === Direction.NORTH) y += 1
    else if(direction === Direction.SOUTH) y -= 1
    else if(direction === Direction.WEST) x -= 1
    else if(direction === Direction.EAST) x += 1
    return [x, y]
}