import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");
  // const [age, setAge] = React.useState("");
  const [userInput, setUserInput] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  // const handleFirstNameChange = (e) => {
  //   console.log(e.target.value);
  //   setFirstName(e.target.value);
  // };

  const handleInputChange = (e, key) => {
    setUserInput({ ...userInput, [key]: e.target.value });
    console.log(userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    First Name : ${userInput.firstName}
    Last Name : ${userInput.lastName}
    Age : ${userInput.age}
    `);
  };

  return (
    <div className="App">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={userInput.firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={handleInputChange}
          value={userInput.lastName}
          onChange={(e) => handleInputChange(e, "lastName")}
          placeholder="Last Name"
        />
        <input
          type="number"
          onChange={handleInputChange}
          value={userInput.age}
          onChange={(e) => handleInputChange(e, "age")}
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
