// import React from "react"; // -> No need to write NOW
// // ------------Simple Method------------------
// // export const App = ( ) => {
// //   return <h2>Hello, Rajendra Chaudhary</h2>
// // };


// //-----------Another Method using a JSX in the React-------------------
// // JSX => Written JavaScript Under HTML this is known as JSX.
// // export const App = () => {
// //   return React.createElement("h2", null, "Hello, Thapa Technical.");
// // };

// // console.log(React.createElement("h2", null, "Hello, Thapa Technical."));






// // ------------- Creating a Flim Website -------------------------
// // export const App = () => {
//   //return ( [<NetFlixSeries key="1"/>, <NetFlixSeries key="2"/>]
//   // <div>
//   //  <NetFlixSeries/>
//   //  <NetFlixSeries/>
//   //  <NetFlixSeries/>
//   //  <NetFlixSeries/>
//   //  <NetFlixSeries/>

//   // </div>
//  // );

 

// // ----While doing this we should -> import React from "react";---------
// // <React.Fragment> -> In place of this we can simply use => <> </>
// //   return (
// //     <React.Fragment> 
// //       <NetFlixSeries/>
// //       <NetFlixSeries/>
// //       <NetFlixSeries/>
// //       <NetFlixSeries/>
// //       <NetFlixSeries/>
// //     </React.Fragment>
// //   )
// // };


// //----------- COMPONENTS -> Components is a function which return JSX.----------------
// // -----------------LAC-7----------------------------
// // const NetFlixSeries = () => { // Components always start with a Capital Letter
// //   return (
// //     <div>
// //       <div>
// //         <img src="queen.avif" alt="" width="40%"
// //           height="20%" />
// //       </div>
// //       <h2>Name: Queen of Tears</h2>
// //       <h3>Rating: 8.2</h3>
// //       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
// //         Velit quia harum minima minus laborum laudantium odit. </p>
// //     </div>
// //   );
// // };


// // ----------Interview qn -> 
// // ------------1. What is React Fragments ? -------------------


// //---------------LAC-9--------------------
// // const NetFlixSeries = () => { // Components always start with a Capital Letter
// //   const name = "Queen of Tears";
// //   const rating = "8.2";
// //   const summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quia harum minima minus laborum laudantium odit. "


// //   const returnGenre = () => {
// //        const genre = "RomCom ";
// //        return genre;
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <img src="queen.avif" alt="" width="40%"
// //           height="20%" />
// //       </div>
// //       <h2>Name: {name}</h2>
// //       <h3>Rating:{rating}</h3>
// //      {/* // <h3>Rat: {8 + 5.2}</h3> expression */}
// //       <p>{summary}</p>
// //       <p>Genre: {returnGenre()}</p>
// //       <button>Watch Now</button> 
// //     </div>
// //   );
// // };




// //____________________ START _____________________________

// // ----------------Lac-10------------------------
// // -------------- Solution no. 1 --------------------


//   const NetFlixSeries = () => { // Components always start with a Capital Letter
//   const name = "Queen of Tears";
//   const rating = "8.2";
//   const summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quia harum minima minus laborum laudantium odit. "

// let age = 16;
//   const returnGenre = () => {
//        const genre = "RomCom ";
//        return genre;
//   };

//  const canWatch = () => {
//   if(age >=18) return "Watch Now";
//    else
//   return "Not Available";
//  }

// // -------------------Do not repeat ------------ Use ternary operation-----------------

//   // if(age < 18) {
//   //   return (
//   //     <div>
//   //       <div>
//   //         <img src="queen.avif" alt="" width="40%"
//   //           height="20%" />
//   //       </div>
//   //       <h2>Name: {name}</h2>
//   //       <h3>Rating:{rating}</h3>
//   //      {/* // <h3>Rat: {8 + 5.2}</h3> expression */}
//   //       <p>{summary}</p>
//   //       <p>Genre: {returnGenre()}</p>
//   //       <button>Not Available</button> 
//   //     </div>
//   //   );
//   // }

//   return (
//     <div>
//       <div>
//         <img src="queen.avif" alt="" width="40%"
//           height="20%" />
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating:{rating}</h3>
//      {/* // <h3>Rat: {8 + 5.2}</h3> expression */}
//       <p>{summary}</p>
//       <p>Genre: {returnGenre()}</p>
//       {/* <button>{age >=18 ? "Watch Now" : "Not Available"}</button>  */}
//       <button>{canWatch()}</button>
//     </div>
//   );
// };

//   export default NetFlixSeries;

// export const Footer = () => {
//     return <p>copyright@rc.com.np</p>
// }


// export const Header = () => {
//     return <h2>NEXFLIX.COM</h2>
// }




