import React, { useState} from "react";
import { connect, useDispatch } from "react-redux";

import { updateSmurfs } from "../store/actions";


function EditSmurfsForm({age, name, height, id, toggleEditForm}) {
    const dispatch = useDispatch();
 const [formState, setFormState] = useState({
    name: name,
    age: age,
    height: height
  });


  const formSubmit = e => {
    e.preventDefault();
    dispatch(updateSmurfs({...formState, id}));
    toggleEditForm(false);
    setFormState({
        name: "",
        age: "",
        height: ""
      });
   
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value
    };
    
    setFormState(newFormData);
  };


  return (
    <form onSubmit={formSubmit}>
    <label htmlFor="name">
      Name
      <input
        id="name"
        type="text"
        name="name"
        value={formState.name}
        onChange={inputChange}
      />
     
    </label>
    <label htmlFor="age">
      Age
      <input
        id="age"
        type="number"
        name="age"
        value={formState.age}
        onChange={inputChange}
      />
      
    </label>
    <label htmlFor="height">
      Height
      <input
        id="height"
        type="text"
        name="height"
        value={formState.height}
        onChange={inputChange}
      />
     
    </label>    
    <button>Submit Updated Smurf</button>
  </form>
  );
}

const mapStateToProps = (state) => {
   
    return {
      isFetching: state.isFetching,
      smurfs: state.smurfs,
      error: state.error,
    };
  };
  
  export default connect(mapStateToProps, { updateSmurfs })(EditSmurfsForm);