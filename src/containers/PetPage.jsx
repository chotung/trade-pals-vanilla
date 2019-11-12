import React from 'react';

const PetPage = () => {
  let selectedCardId = localStorage.getItem("selectedCard");
  console.log('hitting the pet page')
  console.log(selectedCardId)
  return (
    <div>
      This is the pet page
    </div>
  );
}

export default PetPage;



// import React, { Component } from 'react'

// export default class PetPage extends Component {
//   render() {
//     let selectedCardId = localStorage.getItem("selectedCard");
//     console.log(selectedCardId)
//     return (
//       <div>
//         Pet Details
//       </div>
//     )
//   }
// }
