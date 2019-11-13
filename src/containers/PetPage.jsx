import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    pet: state.petCard
  };
};

const PetPage = props => {
  const { pet } = props
  return <div>This is the pet page</div>;
};

export default connect(mapStateToProps)(PetPage);
