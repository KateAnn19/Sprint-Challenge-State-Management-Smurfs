import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

import { fetchSmurfs } from "../store/actions";

const Smurfs = ({ fetchSmurfs, isFetching, smurfs }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <div className="Container">
     
      {isFetching && <h3>Fetching data...</h3>}
      {smurfs.length && !isFetching ? (
        <div>
          {smurfs.map((smurf) => (
            <Smurf id={smurf.id} key={smurf.id} smurfs={smurf} />
          ))}
        </div>
      ) : (
        <p>No Smurfs To Display</p>
      )}
    
    </div>
  );
};



const mapStateToProps = (state) => {
  console.log("this is state in smurfs", state);
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
