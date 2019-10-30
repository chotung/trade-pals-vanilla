// // import store from '../config/store'
// // // import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../config/constants'
// // // import { tiles } from '../data/maps/1'
// // import {
// //   makeInteraction
// // } from '../features/player/movement'


// //ACTIONS

// const UPDATE_DIRECTION = "UPDATE_DIRECTION"
// // const MAKE_INTERACTION = "MAKE_INTERACTION"
// const UPDATE_EVENT = "UPDATE_EVENT"
// const RESET_EVENT = "RESET_EVENT"
// const UPDATE_MAP = "UPDATE_MAP"
// const MAIN_MAP = "MAIN_MAP"
// const MOD_TWO = "MOD_TWO"

// export const dispatchDirection = (direction, map) => {
//   store.dispatch({
//     type: UPDATE_DIRECTION,
//     payload: direction,
//     map: map
//   })
// }

// export const dispatchInteraction = (player, map) => {
//   let eventNumber = makeInteraction(player.position, player.direction, map)
//   store.dispatch({
//     type: UPDATE_EVENT,
//     payload: eventNumber
//   })
//   return eventNumber
// }

// // export const dispatchUpdateEvent = (tileType) => {
// //   store.dispatch({
// //     type: UPDATE_EVENT,
// //     payload:tileType
// //   })
// // }

// export const dispatchReset = () => {
//   store.dispatch({
//     type: RESET_EVENT,
//     payload: 0
//   })
// }


// export const dispatchEntrance = () => {
//   // console.log("dispatch new map");
//   store.dispatch({
//     type: UPDATE_MAP
//   })
// }
// export const dispatchMain = () => {
//   // console.log("dispatch new map");
//   store.dispatch({
//     type: MAIN_MAP
//   })
// }

// export const dispatchMod2 = () => {
//   store.dispatch({
//     type: MOD_TWO
//   })
// }

// export const dispatchEnd = () => [
//   store.dispatch({
//     type: "END"
//   })
// ]