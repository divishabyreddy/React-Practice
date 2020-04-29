import React, { useState } from "react";
import Name from "./Components/Name";
import Filter from "./Components/FilterNames"
import AddPerson from "./Components/AddName"
import Display from "./Components/Display"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "1234567890" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search,setSearch] = useState("")
  const filteredRecords = persons.filter((person)=>
  { return person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 }
  )

  const handleOnNameChange = event => {
    setNewName(event.target.value);
  };
  const handleOnNumberChange = event => {
    setNewNumber(event.target.value);
  };
  const handleOnFieldChanged = event => {
    setSearch(event.target.value)
  };

  const addName = event => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    };
    const names = persons.map(person => person.name);
    if (names.indexOf(newName) > -1) {
      alert(`${newName} is already added to phonebook`);
    } 
    else {
      setPersons(persons.concat(nameObject));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onChange={handleOnFieldChanged}/>
      <h2>Add a new person</h2>
      <AddPerson name={newName} number={newNumber} onChangeName={handleOnNameChange} onChangeNumber={handleOnNumberChange} onClick={addName}/>   
      <h2>Numbers</h2>
      <Display filteredRecords={filteredRecords}/>
    </div>
  );
};

export default App;
