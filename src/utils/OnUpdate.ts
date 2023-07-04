import { Direction } from "../reducers/Direction";
import store from '../reducers'
import { moveSnakeOnUpdate } from "../reducers/Snake";

export function update(){
    // Check if snake head hit wall

    // Check if snake ate food

    // Update snakes position based on next positions
    updateSnakePosition()
}

export function getNextHeadCoordinates(direction: Direction, currentCoordinates:[number, number]): [number, number]{
    let [x, y] = currentCoordinates
    if(direction === Direction.NORTH) y += 1
    else if(direction === Direction.SOUTH) y -= 1
    else if(direction === Direction.WEST) x -= 1
    else if(direction === Direction.EAST) x += 1
    return [x, y]
}

function updateSnakePosition(){
    const state = store.getState()
    const direction = state.Direction.direction

    store.dispatch(moveSnakeOnUpdate({direction: direction}))
}