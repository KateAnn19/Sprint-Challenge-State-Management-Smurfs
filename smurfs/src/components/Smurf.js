import React, { useState} from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../store/actions";
import { deleteSmurfs } from "../store/actions";
import EditSmurfsForm from "./EditSmurfsForm";

const Smurf = ({ smurfs, id, deleteSmurfs }) => {
    const[isEditing, setIsToggle] = useState(false);

    const toggle = () => {
        setIsToggle(!isEditing);
    }
  return (
    <div className="Container">
      <div>
        <h2>{smurfs.name}</h2>
        <h2>{smurfs.age}</h2>
        <h2>{smurfs.height}</h2>
      </div>
      <button onClick={() => deleteSmurfs(id)}>X</button>
      <button onClick={toggle}>Update Smurf With New Info</button>
      {isEditing ? (<EditSmurfsForm id={id} toggleEditForm={toggle} age={smurfs.age} name={smurfs.name} height={smurfs.height}/>): null}
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
