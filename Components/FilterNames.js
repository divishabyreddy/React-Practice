import React from 'react';

const Filter = (props) =>{
  return(
     <p>
        Filter the names <input type="text" value={props.search} onChange={props.onChange}/>
     </p>
  )
}

export default Filter