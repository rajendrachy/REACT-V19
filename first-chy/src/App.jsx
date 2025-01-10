// import React from "react"

// // export const App = () => {
// //   return <h1>Hello, Rajendra Chaudhary</h1>
// // }

// export const App = () => {
//    return React.createElement('h1', null, "Hello, Rc");

// };



// Self close tag (/>)necessary for the not closing tags

export const App = () => {
  return (
  <div> 
<Netflix></Netflix> 
{/* components */}
<Netflix></Netflix> 
<Netflix></Netflix> 
<Netflix></Netflix> 
<Netflix></Netflix>  
    </div>
  );
}



// Components -> Always Start with a Capital letter
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


