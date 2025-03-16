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




