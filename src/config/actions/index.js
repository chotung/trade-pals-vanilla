import store from '../store'

//ACTIONS
const REMOVE_PET_FROM_CATALOGUE = 'REMOVE_PET_FROM_CATALOGUE'
// const REMOVED_FROM_CART = 'REMOVED_FROM_CART'
// const UNDO_REMOVE = 'UNDO_REMOVE'



export const removePetFromCatalogue = (pet) => {
  // console.log('dispatching action of adding a pet to the cart state')
  // console.log(pet)
  store.dispatch({
    type: REMOVE_PET_FROM_CATALOGUE,
    payload: pet
  })
}


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