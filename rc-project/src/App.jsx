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












//--------------React js state challenge----------------------------
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

// import { Heading } from "./basicFormHandling/Heading.jsx"
// import React from "react";
// import { use } from "react";
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















//--practicing----

// export function App() {
//    const[name, setName] = useState("");
//    const[interest, setInterest] = useState("");
//    const[che, setChe] = useState(false);
//    const[submitData, setSubmitData] = useState([]);


//    function formHandle(e) {
//         e.preventDefault();
     
//   console.log(name, interest, che);
// setSubmitData([...submitData ,{name, interest, che}]);

//     }
//     return (
//         <>
//         <Heading />

//         <form onSubmit={formHandle}>
//             Name: <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
// <br /><br />
//             <select onChange={(e) => setInterest(e.target.value)}>
//                <option>DC</option>
//                <option>ML</option>
//                <option>DSA</option>
//             </select>


// <br /><br />
//             <input type="checkbox" onChange={(e) => setChe(e.target.checked)}/><span>Accepted...</span>
//         <br /><br />
//         <button type="submit">Submit</button>

//         </form>        

// {submitData.length > 0  && (
//    <table border="1">
//     <thead>
//     <tr>
//       <th>Name</th>
//       <th>Interest</th>
//       <th>Checked</th>
//     </tr>
//     </thead>

// <tbody>
//    {submitData.map((data, idx) => (
//      <tr key={idx}>
//         <td> {data.name}</td>
//         <td>{data.interest}</td>
//         <td>{data.che ? "yes" : "No"}</td>
//      </tr>
//    ))}
// </tbody>

//    </table>
// )}
// </>
// )
// }













// --------------form submition on table in Local Storage------------------
// import { Heading } from "./basicFormHandling/Heading";
// import React, { useState, useEffect } from "react";

// export function App() {
//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInterest] = useState("");
//   const [submittedData, setSubmittedData] = useState(() => {
//     const savedData = localStorage.getItem("formData");
//     return savedData ? JSON.parse(savedData) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("formData", JSON.stringify(submittedData));
//   }, [submittedData]);

//   function getFormData(e) {
//     e.preventDefault();
//     const newData = { name, interest, tnc };
//     setSubmittedData([...submittedData, newData]);
//     setName("");
//     setInterest("");
//     setTnc(false);
//   }

//   return (
//     <>
//       <Heading />
//       <form onSubmit={getFormData}>
//         <input
//           type="text"
//           placeholder="Enter name: "
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br /> <br />
//         <select value={interest} onChange={(e) => setInterest(e.target.value)}>
//           <option value="">Select Option</option>
//           <option>Marvel</option>
//           <option>DC</option>
//         </select>
//         <br /> <br />
//         <input type="checkbox" checked={tnc} onChange={(e) => setTnc(e.target.checked)} />
//         <span>Accept Terms and Conditions</span>
//         <br /> <br />
//         <button type="submit">Submit</button>
//       </form>

//       {submittedData.length > 0 && (
//         <table border="1" cellPadding="5" style={{ marginTop: "20px" }}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Interest</th>
//               <th>Accepted Terms</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedData.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.name}</td>
//                 <td>{data.interest}</td>
//                 <td>{data.tnc ? "Yes" : "No"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// }



//---------------practice------------------------
// import { Heading } from "./basicFormHandling/Heading";
// import React, { useState, useEffect } from "react";

// export function App() {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [submittedData, setSubmittedData] = useState(() => {
//     const savedData = localStorage.getItem("formData");
//     return savedData ? JSON.parse(savedData) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("formData", JSON.stringify(submittedData));
//   }, [submittedData]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const newData = { id, name };
//     setSubmittedData([...submittedData, newData]);
//     setId("");
//     setName("");
//   }

//   return (
//     <>
//       <Heading />
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter ID: "
//           required
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//         />
//         <br /> <br />
//         <input
//           type="text"
//           placeholder="Enter Name: "
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br /> <br />
//         <button type="submit">Submit</button>
//       </form>

//       {submittedData.length > 0 && (
//         <table border="1" cellPadding="5" style={{ marginTop: "20px" }}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedData.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.id}</td>
//                 <td>{data.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// }









// import React, { useState, useEffect } from "react";

// export function App() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         const uniqueCategories = [...new Set(data.map((item) => item.category))];
//         setCategories(uniqueCategories);
//       });
//   }, []);

//   const filteredProducts = selectedCategory
//     ? products.filter((product) => product.category === selectedCategory)
//     : products;

//   return (
//     <div>
//       <h2>Product Store</h2>
//       <select onChange={(e) => setSelectedCategory(e.target.value)}>
//         <option value="">All Categories</option>
//         {categories.map((category, index) => (
//           <option key={index} value={category}>{category}</option>
//         ))}
//       </select>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
//         {filteredProducts.map((product) => (
//           <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
//             <img src={product.image} alt={product.title} width="100" />
//             <h4>{product.title}</h4>
//             <p>Category: {product.category}</p>
//             <p>Price: ${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
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













//-------------------useRefHook------------------------------
// import { useRef, useState } from "react";
// import { Heading } from "./useRefHook/Heading";

// export function App() {
//     const username = useRef(null);
//     const password = useRef(null);
//     const [submittedData, setSubmittedData] = useState(null);

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         setSubmittedData({
//             username: username.current.value,
//             password: password.current.value,  
//         });

//         username.current.value = "";
//         password.current.value = "";
//     };


//     return (
//         <div>
//             <Heading />
//             <form onSubmit={handleFormSubmit}>
//                 <input type="text" placeholder="Enter Username: " ref={username} /><br /><br />
//                 <input type="text" placeholder="Enter Password: " ref={password} /><br /><br />
//                 <button>Submit</button>
//             </form>


//             {submittedData && (
//                 <div>
//                     <h3>Submitted Data:</h3>
//                     <p><strong>Username:</strong> {submittedData.username}</p>
//                     <p><strong>Password:</strong> {submittedData.password}</p>
//                 </div>
//             )};
//         </div>
//     );
// };
















//----------------------------useld Hook------------------------
// lac -> 63
// import { Heading } from "./useldHook/Heading"

// export function App() {
//     return (
//         <>
//        <Heading/>
//         </>
//     )
// }























//------------------------Dropdown-------------------------
// import { Heading } from "./LABDROPDOWN/Heading";
// import { useState } from "react";

// export function App() {
//     const [selectedValue, setSelectedValue] = useState("");

//     const products = {
        
//         juice: { id: 1, name: "Juice" , price:"rs. 200", image: "juice.jpeg"},
//         Banana: { id: 2, name: "Banana" , price:"rs. 100", image: "juice.jpeg"},
//         apple: { id: 3, name: "Apple" ,  price:"rs. 200", image:"juice.jpeg"},
//     };



//     const selectedProduct = products[selectedValue];


//     return (
//         <>
//             <Heading />
//             <select id="product" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
//                 <option value="">Select Option</option>
//                 <option value="juice">Juice</option>
//                 <option value="random">lskmfkd</option>
//                 <option value="apple">Apple</option>
//             </select>


//             {selectedProduct && (
//                 <div>
//                     <p>Product Name: {selectedProduct.name}</p>
//                     <p>Product ID: {selectedProduct.id}</p>
//                     <p>Product Price: {selectedProduct.price}</p>
//                     {/* <img src={selectedProduct.image} /> */}
//                 </div>
//             )}
//         </>
//     );
// }








//----------------------------DrpDown Categories--------------------------------
// import { Heading } from "./LABDROPDOWN/Heading";
// import { useState } from "react";

// export function App() {
//     const [selectedCategory, setSelectedCategory] = useState("");

//     const products = {
//         fruit: [
//             { id: 1, name: "Juice", price: "rs. 200", image: "juice.jpeg" },
//             { id: 2, name: "Banana", price: "rs. 100", image: "banana.jpeg" },
//             { id: 3, name: "Apple", price: "rs. 200", image: "apple.jpeg" }
//         ],

//         playing: [
//             { id: 4, name: "Football", price: "rs. 500", image: "football.jpeg" },
//             { id: 5, name: "Cricket Bat", price: "rs. 1500", image: "bat.jpeg" }
//         ],
//         nonVeg: [
//             { id: 6, name: "Chicken", price: "rs. 400", image: "chicken.jpeg" },
//             { id: 7, name: "Fish", price: "rs. 350", image: "fish.jpeg" }
//         ],
//         Veg: [
//             {id:8, name:"Panir", price:"rs. 200"},
//             {id:9, name:"Vegetable", price: "rs. 100"},
//         ]
//     };


//     return (
//         <>
//             <Heading />
//             <select onChange={(e) => setSelectedCategory(e.target.value)}>
//                 <option value="">Select Category</option>
//                 {Object.keys(products).map((category) => (
//                     <option key={category} value={category}>{category}</option>
//                 ))}
//             </select>

//             {selectedCategory && (
//                 <div>
//                     {products[selectedCategory].map((product) => (
//                         <div key={product.id}>
//                             <p>{product.name}</p>
//                             <p>{product.price}</p>
//                             <img src={product.image} alt={product.name} width="100" />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// };
















//-----------------Start----------------------------
//---------------Router---------------------------
import { About } from "./ROUTER WITH CODE STEP BY/About";
import { Home } from "./ROUTER WITH CODE STEP BY/Home";
import { Text } from "./ROUTER WITH CODE STEP BY/Text";
import { NavBar } from "./ROUTER WITH CODE STEP BY/NavBar";

import { Route, Routes, Link, Navigate } from "react-router";
import { PageNotFound } from "./ROUTER WITH CODE STEP BY/PageNotFound";
import { College } from "./ROUTER WITH CODE STEP BY/College";

export function App() {
    return (
        <>
        {/* <NavBar /> */}


            <Routes>
        <Route element={<NavBar/>}>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/text" element={<Text/>}/>
        </Route>
               
                <Route path="/college" element={<College/>}/>
                <Route path="/*" element={<PageNotFound/>} />
                <Route path="/*" element={<Navigate to="/login"/> }/>
            </Routes>
        </>
    );
}


// {/* <Route path="/*" element={<h1>Page Not Fount</h1>}></Route> */} -> This is always at the end and 404 error display if the page not found
  
//------------End-----------------------
