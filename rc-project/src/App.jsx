// import NetFlixSeries, { Footer, Header } from "./components/NetFlixSeries";

// import { useState } from "react";

// import { Heading } from "./state/Heading";

// export const App = () => {
//   return (
//     <div>
//       <Header />
//       <NetFlixSeries />
//       <NetFlixSeries />
//       <NetFlixSeries />
//       <NetFlixSeries />
//       <NetFlixSeries />
//       <Footer/>
//     </div>
//   );
// };







//---------------------CSS Modules-----------------------------

// import './App.css';
// import { FirstComponent } from './cssModules/FirstComponents';
// import { SecondComponent } from './cssModules/SecondComponent';

// export function App() {
//   return (
//     <>
//     <FirstComponent />
//     <SecondComponent />
//     </>
//   )
// }













//-----------------States in React JS------------------------
// import './App.css';
// import { Heading } from "./state/Heading";
// import { useState } from 'react';


// export function App() {

//   const [data, setData] = useState(0);
  
//    function handleOnClick() {
//       setData(data + 1);
//    }
//   return (
//     <>
//     <Heading />
//     <p>{data}</p>
//     <button onClick={handleOnClick}>Increment</button>
//     <p>Child Component : {data}</p>

//     </>
//   )
// }












//--------------React js stste challenge----------------------------
// const users = [
//   {name:"Alice", age: 25},
//   {name:"Bob", age: 30},
//   {name:"charlie", age: 35},
//   {name:"Angels", age: 45},
// ];


// export const App = () => {
//   return (
//     <div className="main-div">
//       <h1>User List</h1>
//       <ul>
//       {
//         users.map((currEle, index) => {
//           return (
//             <>
//             <li key = {index}>
//               {currEle.name} - {currEle.age} year old
//             </li>
//             </>
//           )
//         })
//       }
//       </ul>
//     </div>
//   )
// }


// --------------This with the help od useState hooks-----------------------------
// import './App.css';
// import { useState } from "react";


// export const App = () => {
//   const[users, setUsers] = useState([
//     {name:"Alice", age: 25},
//     {name:"Bob", age: 30},
//     {name:"charlie", age: 35},
//     {name:"Angels", age: 45},
//   ])

//   return (
//     <div className="main-div">
//    <h1>User List</h1>
//    <ul>
//    {users.map((currEle, index) => {
//       return (
//         <>
//         <li key={index}>
//           {currEle.name} - {currEle.age} years old
//         </li>
//         </>
//       )
//    })}
//    </ul>
//     </div>
//   )
// }








//--------------Derived state-----------------------
// import { useState } from "react";


// export const App = () => {
//   const[users, setUsers] = useState([
//     {name:"Alice", age: 25},
//     {name:"Bob", age: 30},
//     {name:"charlie", age: 35},
   
//   ])

//   const UserCount = users.length;
//   const averageAge = users.reduce((accum, currEle) => accum + currEle.age, 0) / UserCount; //initial value is 0
//   return (
//     <div className="main-div">
//    <h1>Derived state</h1>
//    <ul>
//    {users.map((currEle, index) => {
//       return (
//         <>
//         <li key={index}>
//           {currEle.name} - {currEle.age} years old
//         </li>
//         </>
//       )
//    })}
//    </ul>

//    <p>Total Users:{UserCount}</p>
//    <p>Average Age: {averageAge}</p>
//     </div>
//   )
// }














//----------------------LiftState in React Js-----------------------------

// import './App.css';
// import { LiftState } from './liftStateUp/LiftStateUp';

// export function App() {
//     return (
//         <div>
//             <h2>Lift State Up</h2>
//             <LiftState />
//         </div>
//     )
// }













//----------------------Toggle Switch----------------------------------
// import { ToggleSwitch } from "./toggleSwitch/ToggleSwitch"

// export function App() {
//     return (
//         <div> 
//            <ToggleSwitch />
//         </div>
//     )
// }











//----------------React Icons----------------------
// Install -> npm i react-icons














//-------------------To-DO-APP-----------------------------------------
// already done in prashant sir video






















//------------------------UseState Challenge----------------------------
// import React, { useState } from "react";
// import './App.css';
// import { Heading } from "./useStateChallenge/Heading";

// export function App() {
//     const [count, setCount]  = useState(0); // default value 0
//     const [step, setStep] = useState(1); // default value 1
//     const handleIncrement = () => {
//         setCount(count + step);
//     }

//     const handleDecremant = () => {
//         setCount(count-step);
//     }

//     const handleReset = () => {
//         setCount(0);
//         setStep(1); // Reset Step to 1
//     }
//     return (
//         <center className="div">

//         <Heading />
//         <p style={{color:'blue'}}>Count: {count}</p>
//          <p>Steps: <input type="number" 
//          value={step} 
//          onChange={(e) => setStep(Number(e.target.value) || 1)}
//          /></p>
//          <button className="btn" onClick={handleIncrement}>Increment</button>
//          <button className="btn" onClick={handleDecremant}>Decrement</button>
//          <button className="btn" onClick={handleReset}>Reset</button>
//         </center>
//     )
// }












//-------------------Controlled and Uncontrolled-----------------------
// import { Heading } from "./controlledUncontrolled/Heading"

// export function App() {
//     return (
//         <div>
//             <Heading />
//         </div>
//     )
// }













//---------------------Registration Form---------------------------
//YT -> https://www.youtube.com/watch?v=0_mxKjl9Emc
// import { Heading } from "./basicFormHandling/Heading"
// import React from "react";
// import { useState } from "react";

// export function App() {
//   const[name, setName] = useState("");
//   const[tnc, setTnc] = useState(false);
//   const[interest, setInterest] = useState("");
//   const [submittedData, setSubmittedData] = useState(null);

//     function getFormData(e) {
//         e.preventDefault();
//         //console.warn(name, tnc, interest);
//         setSubmittedData({name, interest, tnc});
//     }

   

//     return (
//         <>
//        <Heading />
//        <form action="" onSubmit={getFormData}>
//         <input type="text" placeholder="Enter name: " required
//         value= {name} onChange={(e) => setName(e.target.value)}/> <br></br> <br></br>
//         <select onChange={(e) => setInterest(e.target.value)}>
//             <option >Select Option</option>
//             <option>Marval</option>
//             <option>Dc</option>
//         </select>
//         <br></br> <br></br>

//         <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/> <span>Accept Terms and conditions</span>
//         <br></br> <br></br>
//         <button type="submit">Submit</button>
//        </form>



// {submittedData && (
//  <div>
//  <p >Name:{submittedData.name}</p>
 
//  <p>Interest:{submittedData.interest}</p>
//  <p>Accept:{submittedData.tnc ? "Yes":"No"}</p>
// </div>
// )}
//  </>
//     )
// }












//--------------------Login Form----------------------------
// import { Heading } from "./logInForm/Heading"

// export function App() {
//     return (
//         <>
//         <Heading />
//         </>
//     )
// }





// import React, { useState } from "react";

// export function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [submittedData, setSubmittedData] = useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (username === "" || password === "") {
//       alert("Please fill in all fields!");
//       return;
//     }
//     setSubmittedData({ username, password });
//     setUsername("");
//     setPassword("");
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Login Form</h2>
//       <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
//         <label>Username:</label>
//         <input
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           style={{ display: "block", marginBottom: "10px", padding: "5px", width: "100%" }}
//         />

//         <label>Password:</label>
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{ display: "block", marginBottom: "10px", padding: "5px", width: "100%" }}
//         />

//         <label>
//           <input
//             type="checkbox"
//             onChange={() => setShowPassword(!showPassword)}
//           /> Show Password
//         </label>
//         <br />
//         <button type="submit" style={{ marginTop: "10px", padding: "8px", width: "100%" }}>
//           Login
//         </button>
//       </form>

//       {submittedData && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Login Details:</h3>
//           <p>Username: {submittedData.username}</p>
//           <p>Password: {submittedData.password}</p>
//         </div>
//       )}

//     </div>
//   );
// }










//-------------------uSErEFhOOK------------------------------
import { useRef, useState } from "react";
import { Heading } from "./useRefHook/Heading";

export function App() {
    const username = useRef(null);
    const password = useRef(null);
    const [submittedData, setSubmittedData] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({
            username: username.current.value,
            password: password.current.value,  
        });

        username.current.value = "";
        password.current.value = "";
    };


    return (
        <div>
            <Heading />

            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter Username: " ref={username} /><br /><br />
                <input type="text" placeholder="Enter Password: " ref={password} /><br /><br />
                <button>Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p><strong>Username:</strong> {submittedData.username}</p>
                    <p><strong>Password:</strong> {submittedData.password}</p>
                </div>
            )}

        </div>
    );
}


