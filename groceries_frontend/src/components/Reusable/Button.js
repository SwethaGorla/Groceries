import React from 'react';

  function Button(props) {  
  return(
            <button className="btn btn-success mt-3" type="submit">{props.buttonName}</button>
        )
    }
export default Button;
