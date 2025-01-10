// import React from "react"

// // export const App = () => {
// //   return <h1>Hello, Rajendra Chaudhary</h1>
// // }

// export const App = () => {
//    return React.createElement('h1', null, "Hello, Rc");

// };



// -----------------Self close tag (/>)necessary for the not closing tags-------------------






import React from "react";
// or, Use -> import {Fragment} from "react";
// and also change below ----> <React.Fragment>  to <Fragment> 
// ----dont need to import and not used to write <React.Fragment> 

// Only Use -> return (<> ....Function Components....</>)

 
export const App = () => {
  return (
    // [<Netflix key="1"/><Netflix key="2"/>]
    //<div>
//---------------Using a react fragments to remove one extra div-----------------

    <React.Fragment> 
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      {/* </div> */}
    </React.Fragment>
  );
}




//------------------- Components -> Always Start with a Capital letter---------------------------------
const Netflix = () => {
  return (
    <div>

      <div>
        <img src="images.jpeg" alt="images.jpeg"
          width="100%" height="10%" />
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Rating: 8.2</h3>
      <p>This is called </p>
    </div>
  );
}


