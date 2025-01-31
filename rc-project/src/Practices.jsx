
// ------------- render this inthe main.jsx file---------------
export const Practices = () => {
    // return <h1>InterView</h1>

    const students = [1,2, 3];

    return (
        <>
        {/* <p>{students.length && "No students found"}</p> */}

        {/* 1st soln */}
        {/* <p>{students.length == 0 && "No students found"}</p> */}
        {/* <p>Number of students: {students.length}</p> */}

        {/* 2nd soln */}
        {/* <p>{!students.length && "No students found"}</p>
        <p>Number of students: {students.length}</p> */}



        {/* 3rd Method */}
         <p>{Boolean(!students.length) && "No students found"}</p>
        <p>Number of students: {students.length}</p>
        </>
    )
};

//React does not render 'false' , 'null', 'undefined', ot 'NaN' 
// in the DOM.

