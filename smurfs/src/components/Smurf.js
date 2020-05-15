import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../store/actions";
import { deleteSmurfs } from "../store/actions";

const Smurf = ({ smurfs, id, deleteSmurfs }) => {
  return (
    <div className="Container">
      <div>
        <h2>{smurfs.name}</h2>
        <h2>{smurfs.age}</h2>
        <h2>{smurfs.height}</h2>
      </div>
      <button onClick={() => deleteSmurfs(id)}>X</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("this is state in smurf", state);
  return {
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurfs })(Smurf);
