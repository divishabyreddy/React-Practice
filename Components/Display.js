import React from "react" 
import Name from "./Name"

const Display = ({filteredRecords}) =>{
 return(
   <div>
        {filteredRecords.map(person => (
          <Name key={person.number} person={person} />
        ))}
    </div>
 )
}

export default Display