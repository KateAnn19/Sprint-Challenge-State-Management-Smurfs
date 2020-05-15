import React, { useState} from "react";
import { connect } from "react-redux";

import { addSmurfs } from "../store/actions";



function SmurfsForm({addSmurfs}) {
  // managing state for our form inputs ---controlling inputs
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    height: ""
  });

  
  

  const formSubmit = e => {
    e.preventDefault();
    addSmurfs(formState);
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

      
      <button>Submit</button>
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
  
  export default connect(mapStateToProps, { addSmurfs })(SmurfsForm);